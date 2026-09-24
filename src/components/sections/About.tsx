'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Server, Palette, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const highlights = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'React, Next.js, TypeScript, and modern UI frameworks',
  },
  {
    icon: Server,
    title: 'Backend & Cloud',
    description: 'Node.js, Python, AWS, Docker, and microservices',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design, accessibility, and responsive layouts',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimization, caching strategies, and scalable architecture',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 sm:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
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
              <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
