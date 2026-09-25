'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Server, Palette, Zap, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/hooks/use-language'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Code,
      title: t.about.frontend.title,
      description: t.about.frontend.description,
      gradient: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-500/10',
      hover: 'group-hover:bg-emerald-500/20',
    },
    {
      icon: Server,
      title: t.about.backend.title,
      description: t.about.backend.description,
      gradient: 'from-teal-500 to-cyan-500',
      bg: 'bg-teal-500/10',
      hover: 'group-hover:bg-teal-500/20',
    },
    {
      icon: Palette,
      title: t.about.design.title,
      description: t.about.design.description,
      gradient: 'from-cyan-500 to-sky-500',
      bg: 'bg-cyan-500/10',
      hover: 'group-hover:bg-cyan-500/20',
    },
    {
      icon: Zap,
      title: t.about.performance.title,
      description: t.about.performance.description,
      gradient: 'from-amber-500 to-orange-500',
      bg: 'bg-amber-500/10',
      hover: 'group-hover:bg-amber-500/20',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            {t.about.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.about.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {t.about.description}
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-emerald-500/20 relative overflow-hidden backdrop-blur-sm bg-card/80 card-lift">
                {/* Gradient top border on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/3 transition-all duration-300" />
                <CardContent className="relative p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.bg} ${item.hover} mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <item.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-emerald-500 text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {t.about.learnMore} <ArrowRight className="w-3 h-3" />
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
