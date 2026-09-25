'use client'

import { useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Copy, Check, Code2, FileCode, GitBranch, Globe } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// --- Code snippets ---
const CODE_SNIPPETS = [
  {
    id: 'api',
    label: 'API Handler',
    filename: 'api/handler.ts',
    code: `import { NextRequest, NextResponse } from 'next/server'
import { validateToken } from '@/lib/auth'
import { db } from '@/lib/db'

export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get('authorization')
    const user = await validateToken(token)

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const data = await db.query.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
      take: 50,
    })

    return NextResponse.json({ data, count: data.length })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}`,
  },
  {
    id: 'hook',
    label: 'React Hook',
    filename: 'hooks/useDebounce.ts',
    code: `import { useState, useEffect, useRef } from 'react'

interface UseDebounceOptions {
  delay?: number
  leading?: boolean
}

export function useDebounce<T>(
  value: T,
  options: UseDebounceOptions = {}
): T {
  const { delay = 300, leading = false } = options
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current && leading) {
      isFirstRender.current = false
      return
    }

    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay, leading])

  return debouncedValue
}

// Usage: const search = useDebounce(input, { delay: 500 })`,
  },
  {
    id: 'css',
    label: 'CSS Animation',
    filename: 'styles/keyframes.css',
    code: `/* Tailwind keyframes config */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

/* Applied to shimmer overlay */
.shimmer-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: shimmer 2s infinite;
}

/* Float for decorative elements */
.float-animation {
  animation: float 3s ease-in-out infinite;
}`,
  },
]

// --- Syntax highlighting ---
const KEYWORDS = /\b(const|let|var|function|return|export|import|from|if|else|async|await|try|catch|throw|new|typeof|interface|type|class|extends|implements|default|where|orderBy|take|status)\b/g
const STRINGS = /(["'`])(?:(?=(\\?))\2.)*?\1/g
const COMMENTS = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm
const TYPES = /\b(string|number|boolean|Promise|React|NextRequest|NextResponse|T|UseDebounceOptions|Error)\b/g

interface HighlightSegment {
  text: string
  className: string
}

function highlightLine(line: string): HighlightSegment[] {
  // If it's a comment line, return the whole line as comment
  const commentMatch = line.match(/^(\s*(\/\/.*$|\/\*[\s\S]*?\*\/))/)
  if (commentMatch) {
    return [
      { text: line.slice(0, line.indexOf(commentMatch[1].trimStart())), className: '' },
      { text: commentMatch[1].trimStart(), className: 'text-muted-foreground italic' },
    ]
  }

  const segments: HighlightSegment[] = []
  // We'll build a simple token stream
  let remaining = line
  let currentPos = 0

  // Process by scanning character by character for strings, then applying keyword/type coloring to the rest
  while (remaining.length > 0) {
    // Check for string
    const stringMatch = remaining.match(/^(["'`])/)
    if (stringMatch) {
      const quote = stringMatch[1]
      let endIndex = 1
      while (endIndex < remaining.length) {
        if (remaining[endIndex] === '\\') {
          endIndex += 2
          continue
        }
        if (remaining[endIndex] === quote) {
          endIndex += 1
          break
        }
        endIndex++
      }
      const str = remaining.slice(0, endIndex)
      segments.push({ text: str, className: 'text-teal-400' })
      remaining = remaining.slice(endIndex)
      currentPos += endIndex
      continue
    }

    // Check for word
    const wordMatch = remaining.match(/^(\w+)/)
    if (wordMatch) {
      const word = wordMatch[1]
      let className = ''
      if (KEYWORDS.test(word)) {
        className = 'text-emerald-500 font-medium'
      } else if (TYPES.test(word)) {
        className = 'text-cyan-400'
      }
      // Reset regex lastIndex
      KEYWORDS.lastIndex = 0
      TYPES.lastIndex = 0
      segments.push({ text: word, className })
      remaining = remaining.slice(word.length)
      currentPos += word.length
      continue
    }

    // Single character
    segments.push({ text: remaining[0], className: '' })
    remaining = remaining.slice(1)
    currentPos += 1
  }

  return segments
}

// --- Stats ---
const stats = [
  { icon: Code2, label: '50+ Snippets', color: 'text-emerald-500' },
  { icon: Globe, label: '10 Languages', color: 'text-teal-500' },
  { icon: GitBranch, label: 'Open Source', color: 'text-cyan-500' },
]

export default function CodePlayground() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const currentSnippet = CODE_SNIPPETS[activeTab]

  const codeLines = useMemo(() => currentSnippet.code.split('\n'), [currentSnippet.code])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(currentSnippet.code)
    } catch {
      const textArea = document.createElement('textarea')
      textArea.value = currentSnippet.code
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [currentSnippet.code])

  return (
    <section id="playground" ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 -right-40 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-40 w-80 h-80 bg-teal-500/6 rounded-full blur-3xl" />

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
            <Zap className="w-3.5 h-3.5 mr-1.5" />
            Live Code
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Code Snippets
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real code from real projects
          </p>
        </motion.div>

        {/* Main code viewer card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto w-full max-w-3xl"
        >
          <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl shadow-xl shadow-emerald-500/5">
            {/* Tab bar */}
            <div className="flex items-center justify-between border-b border-border/50 bg-muted/30 px-2 pt-2">
              <div className="flex gap-1">
                {CODE_SNIPPETS.map((snippet, index) => (
                  <button
                    key={snippet.id}
                    onClick={() => setActiveTab(index)}
                    className={`relative px-4 py-2.5 text-sm font-medium rounded-t-lg transition-all duration-200 ${
                      activeTab === index
                        ? 'text-emerald-600 dark:text-emerald-400 bg-card/80'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                    {snippet.label}
                    {activeTab === index && (
                      <motion.div
                        layoutId="codeTabIndicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-emerald-500 rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Filename badge + Copy button */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border/30 bg-muted/10">
              <Badge
                variant="outline"
                className="text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
              >
                {currentSnippet.filename}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-7 text-xs gap-1.5 text-muted-foreground hover:text-emerald-500 hover:bg-emerald-500/10 transition-colors"
                aria-label="Copy code to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </Button>
            </div>

            {/* Code block */}
            <CardContent className="p-0">
              <div className="overflow-x-auto bg-zinc-950 dark:bg-zinc-900 rounded-b-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSnippet.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed"
                  >
                    <pre className="flex">
                      {/* Line numbers */}
                      <code className="select-none pr-4 sm:pr-6 text-right border-r border-zinc-700/50 mr-4 sm:mr-6 text-zinc-600">
                        {codeLines.map((_, i) => (
                          <div key={i} className="min-h-[1.5rem]">
                            {i + 1}
                          </div>
                        ))}
                      </code>
                      {/* Code content */}
                      <code className="flex-1 text-zinc-300">
                        {codeLines.map((line, i) => (
                          <div key={i} className="min-h-[1.5rem] whitespace-pre">
                            {highlightLine(line).map((seg, j) => (
                              <span key={j} className={seg.className}>
                                {seg.text}
                              </span>
                            ))}
                          </div>
                        ))}
                      </code>
                    </pre>
                  </motion.div>
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <Card className="group border border-border/50 bg-card/80 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {stat.label}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
