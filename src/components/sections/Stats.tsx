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
  },
  {
    icon: Users,
    value: 2,
    suffix: 'M+',
    label: 'Users Impacted',
  },
  {
    icon: GitBranch,
    value: 1200,
    suffix: '+',
    label: 'GitHub Commits',
  },
  {
    icon: Coffee,
    value: 365,
    suffix: '∞',
    label: 'Cups of Coffee',
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
    <section ref={ref} className="py-16 sm:py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-foreground/10 mb-3">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold mb-1">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <p className="text-sm text-primary-foreground/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
