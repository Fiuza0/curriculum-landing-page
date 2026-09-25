'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState, useCallback } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Monitor,
  Server,
  Settings2,
  Palette,
  TestTube2,
  Box,
} from 'lucide-react'

/* ───────────────────── data ───────────────────── */

interface SkillAxis {
  label: string
  value: number
  icon: React.ElementType
  color: string
}

const SKILLS: SkillAxis[] = [
  { label: 'Frontend',     value: 92, icon: Monitor,   color: '#10b981' },
  { label: 'Backend',      value: 87, icon: Server,    color: '#14b8a6' },
  { label: 'DevOps',       value: 82, icon: Settings2, color: '#06b6d4' },
  { label: 'Design',       value: 78, icon: Palette,   color: '#22d3ee' },
  { label: 'Testing',      value: 85, icon: TestTube2, color: '#2dd4bf' },
  { label: 'Architecture', value: 80, icon: Box,       color: '#34d399' },
]

const NUM_AXES = SKILLS.length
const GRID_LEVELS = [0.25, 0.5, 0.75, 1.0]

/* ───────────────────── helpers ───────────────────── */

function axisAngle(index: number): number {
  return (Math.PI * 2 * index) / NUM_AXES - Math.PI / 2
}

function axisEndpoint(
  cx: number,
  cy: number,
  radius: number,
  index: number,
): { x: number; y: number } {
  const a = axisAngle(index)
  return { x: cx + radius * Math.cos(a), y: cy + radius * Math.sin(a) }
}

/* ───────────────────── component ───────────────────── */

export default function SkillsRadarChart() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const [hoveredAxis, setHoveredAxis] = useState<number | null>(null)
  const [tooltip, setTooltip] = useState<{
    x: number
    y: number
    label: string
    value: number
  } | null>(null)
  const [animProgress, setAnimProgress] = useState(0)

  /* ── responsive canvas size ── */
  const [canvasSize, setCanvasSize] = useState(420)
  useEffect(() => {
    function updateSize() {
      const w = window.innerWidth
      if (w < 480) setCanvasSize(280)
      else if (w < 768) setCanvasSize(340)
      else setCanvasSize(420)
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  /* ── animation tick ── */
  useEffect(() => {
    if (!isInView) return
    let frame: number
    const start = performance.now()
    const duration = 1400 // ms

    function tick(now: number) {
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)
      // ease-out cubic
      setAnimProgress(1 - Math.pow(1 - t, 3))
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView])

  /* ── draw ── */
  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const size = canvasSize
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const cx = size / 2
    const cy = size / 2
    const maxRadius = size * 0.36
    const progress = isInView ? animProgress : 0

    ctx.clearRect(0, 0, size, size)

    const isDarkMode = document.documentElement.classList.contains('dark')
    const gridColor = isDarkMode ? 'rgba(16,185,129,0.12)' : 'rgba(16,185,129,0.15)'
    const axisColor = isDarkMode ? 'rgba(16,185,129,0.15)' : 'rgba(16,185,129,0.2)'
    const axisHoverColor = 'rgba(20,184,166,0.6)'

    /* ── grid levels ── */
    for (const level of GRID_LEVELS) {
      const r = maxRadius * level
      ctx.beginPath()
      for (let i = 0; i <= NUM_AXES; i++) {
        const idx = i % NUM_AXES
        const { x, y } = axisEndpoint(cx, cy, r, idx)
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 1
      ctx.stroke()
    }

    /* ── axes ── */
    for (let i = 0; i < NUM_AXES; i++) {
      const { x, y } = axisEndpoint(cx, cy, maxRadius, i)
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.lineTo(x, y)
      ctx.strokeStyle =
        hoveredAxis === i ? axisHoverColor : axisColor
      ctx.lineWidth = hoveredAxis === i ? 2 : 1
      ctx.stroke()
    }

    /* ── data polygon (filled) ── */
    if (progress > 0) {
      ctx.beginPath()
      for (let i = 0; i <= NUM_AXES; i++) {
        const idx = i % NUM_AXES
        const r = maxRadius * (SKILLS[idx].value / 100) * progress
        const { x, y } = axisEndpoint(cx, cy, r, idx)
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()

      // gradient fill
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxRadius)
      grad.addColorStop(0, 'rgba(16,185,129,0.25)')
      grad.addColorStop(0.5, 'rgba(20,184,166,0.18)')
      grad.addColorStop(1, 'rgba(6,182,212,0.10)')
      ctx.fillStyle = grad
      ctx.fill()

      // stroke
      ctx.strokeStyle = '#14b8a6'
      ctx.lineWidth = 2.5
      ctx.stroke()
    }

    /* ── data points ── */
    if (progress > 0) {
      for (let i = 0; i < NUM_AXES; i++) {
        const r = maxRadius * (SKILLS[i].value / 100) * progress
        const { x, y } = axisEndpoint(cx, cy, r, i)
        const isHovered = hoveredAxis === i

        // outer glow
        if (isHovered) {
          ctx.beginPath()
          ctx.arc(x, y, 10, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(20,184,166,0.25)'
          ctx.fill()
        }

        // dot
        ctx.beginPath()
        ctx.arc(x, y, isHovered ? 6 : 4, 0, Math.PI * 2)
        ctx.fillStyle = isHovered ? '#14b8a6' : '#10b981'
        ctx.fill()
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 2
        ctx.stroke()
      }
    }

    /* ── axis labels ── */
    const labelOffset = maxRadius + (size < 340 ? 22 : 30)
    for (let i = 0; i < NUM_AXES; i++) {
      const { x, y } = axisEndpoint(cx, cy, labelOffset, i)
      const isHovered = hoveredAxis === i

      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      // name
      ctx.font = isHovered
        ? `bold ${size < 340 ? 11 : 13}px Inter, system-ui, sans-serif`
        : `${size < 340 ? 10 : 12}px Inter, system-ui, sans-serif`
      const isDark = document.documentElement.classList.contains('dark')
      ctx.fillStyle = isHovered ? '#14b8a6' : (isDark ? 'rgba(255,255,255,0.7)' : 'rgba(15,23,42,0.8)')
      ctx.fillText(SKILLS[i].label, x, y - 7)

      // percentage
      ctx.font = `bold ${size < 340 ? 10 : 12}px Inter, system-ui, sans-serif`
      const isDarkPct = document.documentElement.classList.contains('dark')
      ctx.fillStyle = isHovered ? '#10b981' : (isDarkPct ? 'rgba(16,185,129,0.7)' : 'rgba(16,185,129,0.9)')
      const displayVal = Math.round(SKILLS[i].value * progress)
      ctx.fillText(`${displayVal}%`, x, y + 8)
    }

    /* ── center dot ── */
    ctx.beginPath()
    ctx.arc(cx, cy, 3, 0, Math.PI * 2)
    ctx.fillStyle = isDarkMode ? 'rgba(16,185,129,0.4)' : 'rgba(16,185,129,0.5)'
    ctx.fill()
  }, [canvasSize, isInView, animProgress, hoveredAxis])

  useEffect(() => {
    draw()
  }, [draw])

  /* ── hover logic ── */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      const cx = canvasSize / 2
      const cy = canvasSize / 2
      const maxRadius = canvasSize * 0.36

      let closest = -1
      let closestDist = Infinity

      for (let i = 0; i < NUM_AXES; i++) {
        const { x, y } = axisEndpoint(cx, cy, maxRadius, i)
        const dist = Math.hypot(mx - x, my - y)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      }

      if (closestDist < 60 && closest >= 0) {
        setHoveredAxis(closest)
        const { x, y } = axisEndpoint(
          cx,
          cy,
          maxRadius * (SKILLS[closest].value / 100),
          closest,
        )
        setTooltip({
          x,
          y,
          label: SKILLS[closest].label,
          value: SKILLS[closest].value,
        })
      } else {
        setHoveredAxis(null)
        setTooltip(null)
      }
    },
    [canvasSize],
  )

  const handleMouseLeave = useCallback(() => {
    setHoveredAxis(null)
    setTooltip(null)
  }, [])

  /* ───────────────────── render ───────────────────── */

  return (
    <section
      id="radar"
      className="py-20 sm:py-28 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* decorative background blur circles */}
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-emerald-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[32rem] h-[32rem] bg-teal-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] bg-cyan-500/4 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
          >
            Visualization
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skill Radar</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A multi-dimensional view of my core competencies, visualized as an
            interactive radar chart that reveals proficiency across every key
            discipline.
          </p>
        </motion.div>

        {/* ── chart + legend ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Canvas chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex-shrink-0"
          >
            <canvas
              ref={canvasRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="cursor-crosshair"
              style={{ width: canvasSize, height: canvasSize }}
            />

            {/* tooltip overlay */}
            {tooltip && hoveredAxis !== null && (
              <div
                className="absolute pointer-events-none z-20 px-3 py-2 rounded-lg bg-card/90 backdrop-blur-sm border border-emerald-500/30 shadow-lg shadow-emerald-500/10 text-sm transition-all duration-150"
                style={{
                  left: tooltip.x,
                  top: tooltip.y - 48,
                  transform: 'translateX(-50%)',
                }}
              >
                <span className="font-semibold text-emerald-500">
                  {tooltip.label}
                </span>
                <span className="ml-2 text-teal-400 font-bold">
                  {tooltip.value}%
                </span>
              </div>
            )}
          </motion.div>

          {/* Legend / skill breakdown cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 w-full max-w-md"
          >
            <h3 className="text-lg font-semibold mb-6 text-foreground/90">
              Skill Breakdown
            </h3>
            <div className="space-y-4">
              {SKILLS.map((skill, idx) => {
                const Icon = skill.icon
                const isHovered = hoveredAxis === idx
                const displayVal = Math.round(
                  skill.value * (isInView ? animProgress : 0),
                )

                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.35 + idx * 0.07 }}
                    className={`group relative rounded-xl border p-4 transition-all duration-200 ${
                      isHovered
                        ? 'border-emerald-500/50 bg-emerald-500/5 shadow-md shadow-emerald-500/10'
                        : 'border-border/50 bg-card/50 hover:border-emerald-500/30 hover:bg-emerald-500/[0.03]'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div
                        className={`inline-flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200 ${
                          isHovered
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-emerald-500/10 text-emerald-500'
                        }`}
                      >
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-sm">
                          {skill.label}
                        </span>
                      </div>
                      <span
                        className={`text-sm font-bold tabular-nums transition-colors duration-200 ${
                          isHovered ? 'text-emerald-400' : 'text-emerald-500/80'
                        }`}
                      >
                        {displayVal}%
                      </span>
                    </div>

                    {/* mini progress bar */}
                    <div className="relative h-2 rounded-full bg-emerald-500/10 overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
                        style={{
                          width: `${displayVal}%`,
                          background: `linear-gradient(to right, #10b981, #14b8a6)`,
                        }}
                      />
                    </div>

                    {/* hover glow line */}
                    {isHovered && (
                      <motion.div
                        layoutId="hoverGlow"
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(16,185,129,0.06), rgba(20,184,166,0.04))',
                        }}
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
