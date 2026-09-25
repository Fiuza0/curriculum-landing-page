'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import { Terminal, Copy, Check, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/use-language'

type TerminalLine = { text: string; type: 'prompt' | 'output' | 'json-key' | 'json-value' | 'json-bracket' | 'blank' | 'cursor' }

function getTerminalLines(t: { terminal: { content: { whoami: string; uptime: string; quote: string } } }): TerminalLine[] {
  return [
    { text: '$ whoami', type: 'prompt' },
    { text: t.terminal.content.whoami, type: 'output' },
    { text: '', type: 'blank' },
    { text: '$ cat skills.json', type: 'prompt' },
    { text: '{', type: 'json-bracket' },
    { text: '  "languages": ["C#", "Python", "Java", "R"],', type: 'json-key' },
    { text: '  "frameworks": [".NET", "ASP.NET", "Pandas", "NumPy"],', type: 'json-key' },
    { text: '  "cloud": ["AWS", "K8s", "Linux", "VRED"]', type: 'json-key' },
    { text: '}', type: 'json-bracket' },
    { text: '', type: 'blank' },
    { text: '$ gh stats', type: 'prompt' },
    { text: '⭐ 1,200+ stars  |  🔄 500+ PRs  |  📦 30+ repos', type: 'output' },
    { text: '', type: 'blank' },
    { text: '$ uptime', type: 'prompt' },
    { text: t.terminal.content.uptime, type: 'output' },
    { text: '', type: 'blank' },
    { text: '$ cat .favorite-quote', type: 'prompt' },
    { text: t.terminal.content.quote, type: 'output' },
    { text: '', type: 'blank' },
    { text: '$ _', type: 'cursor' },
  ]
}

const quickStatsData = [
  { icon: '⌨', value: '500K+', labelKey: 'lines' as const },
  { icon: '🏗️', value: '50+', labelKey: 'projects' as const },
  { icon: '🌍', value: '12', labelKey: 'countries' as const },
  { icon: '⚡', value: '99.9%', labelKey: 'uptime' as const },
]

function getLineColor(type: string): string {
  switch (type) {
    case 'prompt':
      return 'text-emerald-400'
    case 'output':
      return 'text-gray-200'
    case 'json-key':
      return 'text-cyan-300'
    case 'json-value':
      return 'text-amber-300'
    case 'json-bracket':
      return 'text-gray-300'
    case 'cursor':
      return 'text-emerald-400'
    case 'blank':
      return ''
    default:
      return 'text-gray-200'
  }
}



export default function InteractiveTerminal() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const terminalLines = useMemo(() => getTerminalLines(t), [t])
  const fullTerminalText = useMemo(() =>
    terminalLines
      .filter((l) => l.type !== 'cursor')
      .map((l) => l.text)
      .join('\n'),
    [terminalLines]
  )

  const [visibleLines, setVisibleLines] = useState(0)
  const [copied, setCopied] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  // Staggered line reveal animation
  useEffect(() => {
    if (!isInView) return

    const timers: ReturnType<typeof setTimeout>[] = []
    const baseDelay = 300
    const lineDelay = 180

    terminalLines.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1)
      }, baseDelay + index * lineDelay)
      timers.push(timer)
    })

    return () => {
      timers.forEach(clearTimeout)
    }
  }, [isInView])

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(fullTerminalText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for environments without clipboard API
      const textArea = document.createElement('textarea')
      textArea.value = fullTerminalText
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [fullTerminalText])

  return (
    <section id="terminal" ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Decorative background blur circles */}
      <div className="absolute top-10 -left-32 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-cyan-500/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
          >
            <Terminal className="w-3.5 h-3.5 mr-1.5" />
            {t.terminal.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.terminal.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.terminal.subtitle}
          </p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto w-full max-w-2xl"
        >
          <Card className="overflow-hidden border border-gray-700/50 bg-gray-950/80 backdrop-blur-xl shadow-2xl shadow-emerald-500/5 conic-border">
            {/* macOS title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-900/90 border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/90 hover:bg-red-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/90 hover:bg-yellow-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-green-500/90 hover:bg-green-500 transition-colors" />
              </div>
              <span className="text-gray-400 text-xs font-mono tracking-wider">{t.terminal.content.windowTitle}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCopy}
                className="h-7 w-7 text-gray-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                aria-label="Copy terminal output to clipboard"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </Button>
            </div>

            {/* Terminal body */}
            <CardContent className="p-3 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
              {terminalLines.slice(0, visibleLines).map((line, index) => {
                const isCursorLine = line.type === 'cursor'
                const isBlank = line.type === 'blank'
                const lineColor = getLineColor(line.type)

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className={`flex items-start min-h-[1.5rem] ${isBlank ? 'h-3' : ''}`}
                  >
                    {!isBlank && !isCursorLine && (
                      <ChevronRight className="w-4 h-4 mt-0.5 mr-1 shrink-0 text-emerald-500/50" />
                    )}
                    {isCursorLine && (
                      <ChevronRight className="w-4 h-4 mt-0.5 mr-1 shrink-0 text-emerald-500/50" />
                    )}
                    <span className={`${lineColor} whitespace-pre`}>
                      {isCursorLine ? '$ ' : line.text}
                    </span>
                    {isCursorLine && (
                      <span
                        className={`inline-block w-2.5 h-5 ml-0.5 mt-0.5 bg-emerald-400 transition-opacity duration-100 ${
                          cursorVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    )}
                  </motion.div>
                )
              })}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
          {quickStatsData.map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <Card className="group relative overflow-hidden border border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 cursor-default">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-all duration-300" />
                <CardContent className="relative p-4 sm:p-5 text-center">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {t.terminal.stats[stat.labelKey]}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
