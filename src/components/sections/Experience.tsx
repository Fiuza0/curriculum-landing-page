'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/hooks/use-language'

const experiences = [
  {
    tech: ['Python', 'Pandas', 'NumPy', 'Kanban', 'Data Analysis', 'Automation'],
    current: true,
  },
  {
    tech: ['VR/AR', 'VRED', 'Unreal', 'Unity', 'International Teams', 'English'],
    current: false,
  },
  {
    tech: ['.NET', 'ASP.NET', 'PostgreSQL', 'Agile', 'Kanban', 'Sprints'],
    current: false,
  },
  {
    tech: ['.NET', 'ASP.NET', 'Windows Server', 'Networks', 'InfoSec', 'IT Infra'],
    current: false,
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-20 sm:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            {t.experience.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.experience.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line with gradient glow */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-teal-500/25 to-transparent" />
          {/* Glow effect on line */}
          <div className="absolute left-3 sm:left-7 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent blur-sm" />

          {experiences.map((exp, index) => {
            const job = t.experience.jobs[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 sm:pl-20 pb-12 last:pb-0"
              >
                {/* Dot on timeline - enhanced */}
                <div
                  className={`absolute left-2.5 sm:left-6.5 top-2 w-3.5 h-3.5 rounded-full border-2 z-10 ${
                    exp.current
                      ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-500/40'
                      : 'bg-background border-emerald-500/40'
                  }`}
                />
                {exp.current && (
                  <>
                    <div className="absolute left-1.5 sm:left-5.5 top-1 w-5 h-5 rounded-full border-2 border-emerald-500/20 animate-ping" />
                    <div className="absolute left-0.5 sm:left-4.5 top-0 w-7 h-7 rounded-full bg-emerald-500/10 blur-sm" />
                  </>
                )}

                {/* Year marker */}
                <div className="absolute left-[-2.5rem] sm:left-[-1.5rem] top-2 text-[10px] font-mono text-emerald-500/60 hidden md:block">
                  {job.period.split(' ')[0]}
                </div>

                {/* Content card */}
                <Card className="border border-border/50 rounded-xl hover:shadow-xl hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300 group backdrop-blur-sm bg-card/80 card-lift">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">{job.title}</h3>
                    {exp.current && (
                      <Badge className="w-fit bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/15 badge-pulse">
                        {t.experience.current}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5 font-medium text-foreground">
                      <Briefcase className="w-3.5 h-3.5 text-emerald-500" />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
