'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { GitCommitHorizontal } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

// Generate contribution data for the last 52 weeks
function generateContributions() {
  const data: number[][] = [] // [week][day] where day 0=Sun, 1=Mon, ...
  const now = new Date()

  for (let week = 0; week < 52; week++) {
    const weekData: number[] = []
    for (let day = 0; day < 7; day++) {
      // Create realistic patterns: weekends less active, some bursts
      const isWeekend = day === 0 || day === 6
      const rand = Math.random()
      let count = 0

      if (isWeekend) {
        if (rand > 0.7) count = Math.floor(Math.random() * 2) + 1
      } else {
        if (rand > 0.15) {
          // Regular workday
          if (rand > 0.85) count = Math.floor(Math.random() * 3) + 3 // burst
          else if (rand > 0.5) count = Math.floor(Math.random() * 3) + 1 // moderate
          else count = Math.floor(Math.random() * 2) // light
        }
      }

      // Add some seasonal variation (more active in recent months)
      if (week > 40 && Math.random() > 0.3) count += 1
      if (week > 46 && Math.random() > 0.4) count += 1

      weekData.push(count)
    }
    data.push(weekData)
  }

  return data
}

function getCellColor(count: number): string {
  if (count === 0) return 'bg-muted/40'
  if (count === 1) return 'bg-emerald-500/20'
  if (count === 2) return 'bg-emerald-500/40'
  if (count === 3) return 'bg-emerald-500/60'
  if (count === 4) return 'bg-emerald-500/80'
  return 'bg-emerald-500'
}

function getCellDarkColor(count: number): string {
  if (count === 0) return 'dark:bg-white/5'
  if (count === 1) return 'dark:bg-emerald-400/25'
  if (count === 2) return 'dark:bg-emerald-400/40'
  if (count === 3) return 'dark:bg-emerald-400/55'
  if (count === 4) return 'dark:bg-emerald-400/70'
  return 'dark:bg-emerald-400'
}

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', '']

export default function ContributionGraph() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contributions = useMemo(() => generateContributions(), [])
  const totalCount = useMemo(
    () => contributions.flat().reduce((sum, c) => sum + c, 0),
    [contributions]
  )

  // Calculate month positions (approximately every 4-5 weeks)
  const monthPositions = useMemo(() => {
    const positions: { label: string; weekIndex: number }[] = []
    const now = new Date()
    let lastMonth = -1

    for (let week = 0; week < 52; week++) {
      const date = new Date(now)
      date.setDate(date.getDate() - (52 - week) * 7)
      const month = date.getMonth()
      if (month !== lastMonth) {
        positions.push({ label: monthLabels[month], weekIndex: week })
        lastMonth = month
      }
    }
    return positions
  }, [])

  return (
    <section id="contributions" className="py-20 sm:py-28 relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/3 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal-500/3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            <GitCommitHorizontal className="w-3.5 h-3.5 mr-1.5" />
            {t.contributions.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.contributions.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.contributions.subtitle}
          </p>
        </motion.div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-border/50 bg-card/70 backdrop-blur-sm p-4 sm:p-6 hover:border-emerald-500/20 transition-all duration-300 shadow-sm hover:shadow-md neon-glow">
            {/* Overflow container for mobile */}
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full">
                {/* Month labels */}
                <div className="flex ml-[28px] mb-2">
                  {monthPositions.map((m, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-muted-foreground"
                      style={{
                        marginLeft: i === 0
                          ? `${m.weekIndex * 12}px`
                          : `${(m.weekIndex - monthPositions[i - 1].weekIndex) * 12 - 20}px`,
                      }}
                    >
                      {m.label}
                    </span>
                  ))}
                </div>

                {/* Grid with day labels */}
                <div className="flex gap-[2px]">
                  {/* Day labels column */}
                  <div className="flex flex-col gap-[2px] pr-1 shrink-0">
                    {dayLabels.map((label, i) => (
                      <div
                        key={i}
                        className="h-[10px] sm:h-[12px] flex items-center"
                      >
                        <span className="text-[9px] text-muted-foreground w-[24px] text-right pr-1">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Contribution cells */}
                  <div className="flex gap-[2px]">
                    {contributions.map((week, weekIdx) => (
                      <motion.div
                        key={weekIdx}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + weekIdx * 0.01,
                          ease: 'easeOut',
                        }}
                        className="flex flex-col gap-[2px]"
                      >
                        {week.map((count, dayIdx) => {
                          const date = new Date()
                          date.setDate(date.getDate() - (52 - weekIdx) * 7 - (6 - dayIdx))
                          const dateStr = date.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })

                          return (
                            <div
                              key={dayIdx}
                              className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-[2px] ${getCellColor(count)} ${getCellDarkColor(count)} transition-colors duration-200 hover:ring-1 hover:ring-emerald-500/50 cursor-default`}
                              title={`${count} contribution${count !== 1 ? 's' : ''} on ${dateStr}`}
                            />
                          )
                        })}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Legend and total */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-border/30">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GitCommitHorizontal className="w-4 h-4 text-emerald-500" />
                <span className="font-medium text-foreground">{totalCount.toLocaleString()}</span>
                {t.contributions.inLastYear}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span>{t.contributions.legendLess}</span>
                {[0, 1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`w-[10px] h-[10px] rounded-[2px] ${getCellColor(level)} ${getCellDarkColor(level)}`}
                  />
                ))}
                <span>{t.contributions.legendMore}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
