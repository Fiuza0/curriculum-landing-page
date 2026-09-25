'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Code2, Users, Coffee, GitBranch } from 'lucide-react'

const stats = [
  {
    icon: Code2,
    value: 50,
    suffix: '+',
    label: 'Projects Completed',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Users,
    value: 2,
    suffix: 'M+',
    label: 'Users Impacted',
    gradient: 'from-teal-400 to-cyan-500',
  },
  {
    icon: GitBranch,
    value: 1200,
    suffix: '+',
    label: 'GitHub Commits',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Coffee,
    value: 365,
    suffix: '∞',
    label: 'Cups of Coffee',
    gradient: 'from-amber-400 to-orange-500',
  },
]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const stepTime = duration / value
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= value) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stats" ref={ref} className="relative py-16 sm:py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)]" />
      {/* Decorative shapes */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-300 shadow-inner`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 text-white drop-shadow-sm tracking-tight">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <p className="text-sm sm:text-base text-white/80 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
