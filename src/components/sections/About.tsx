'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Server, Palette, Zap, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const highlights = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'React, Next.js, TypeScript, and modern UI frameworks',
    gradient: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-500/10',
    hover: 'group-hover:bg-emerald-500/20',
  },
  {
    icon: Server,
    title: 'Backend & Cloud',
    description: 'Node.js, Python, AWS, Docker, and microservices',
    gradient: 'from-teal-500 to-cyan-500',
    bg: 'bg-teal-500/10',
    hover: 'group-hover:bg-teal-500/20',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design, accessibility, and responsive layouts',
    gradient: 'from-cyan-500 to-sky-500',
    bg: 'bg-cyan-500/10',
    hover: 'group-hover:bg-cyan-500/20',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimization, caching strategies, and scalable architecture',
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-500/10',
    hover: 'group-hover:bg-amber-500/20',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {/* ✏️ PLACEHOLDER: Replace with your about description */}
            I&apos;m a software engineer with a passion for creating innovative
            digital solutions. With experience spanning frontend and backend
            development, I thrive on turning complex challenges into elegant,
            user-friendly applications. My journey in tech has been driven by
            curiosity and a commitment to continuous learning.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-emerald-500/20 relative overflow-hidden backdrop-blur-sm bg-card/80">
                {/* Gradient top border on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.bg} ${item.hover} mb-4 group-hover:scale-110 transition-all duration-300`}>
                    <item.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-emerald-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight className="w-3 h-3" />
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
