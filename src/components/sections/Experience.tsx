'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp Inc.',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description:
      'Leading the frontend architecture for the core platform. Built micro-frontend infrastructure serving 2M+ users. Mentoring a team of 4 junior engineers.',
    tech: ['React', 'TypeScript', 'AWS', 'GraphQL', 'Micro-frontends'],
    current: true,
  },
  {
    title: 'Software Engineer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2020 - 2022',
    description:
      'Full-stack development of a SaaS analytics platform. Reduced page load times by 60% and implemented real-time data pipelines.',
    tech: ['Next.js', 'Python', 'PostgreSQL', 'Docker', 'Redis'],
    current: false,
  },
  {
    title: 'Junior Software Engineer',
    company: 'Digital Agency Co.',
    location: 'New York, NY',
    period: '2018 - 2020',
    description:
      'Developed responsive web applications for enterprise clients. Collaborated with design teams to deliver pixel-perfect implementations.',
    tech: ['React', 'Node.js', 'MongoDB', 'SASS', 'Jest'],
    current: false,
  },
  {
    title: 'Software Engineering Intern',
    company: 'BigTech Ltd.',
    location: 'Seattle, WA',
    period: 'Summer 2017',
    description:
      'Contributed to the internal tooling team, building developer productivity tools and automated testing frameworks.',
    tech: ['Python', 'Flask', 'Selenium', 'Jenkins'],
    current: false,
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
            Career
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey building software that makes a difference.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/30 via-teal-500/20 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-12 sm:pl-20 pb-12 last:pb-0"
            >
              {/* Dot on timeline */}
              <div
                className={`absolute left-2.5 sm:left-6.5 top-2 w-3.5 h-3.5 rounded-full border-2 ${
                  exp.current
                    ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-500/30'
                    : 'bg-background border-emerald-500/30'
                }`}
              />
              {exp.current && (
                <div className="absolute left-1.5 sm:left-5.5 top-1 w-4 h-4 rounded-full border-2 border-emerald-500/20 animate-ping" />
              )}

              {/* Content card */}
              <Card className="border border-border/50 rounded-xl hover:shadow-lg hover:border-emerald-500/15 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  {exp.current && (
                    <Badge className="w-fit bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/15">
                      Current
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5 font-medium text-foreground">
                    <Briefcase className="w-3.5 h-3.5" />
                    {/* ✏️ PLACEHOLDER: Replace company name */}
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {/* ✏️ PLACEHOLDER: Replace with your experience description */}
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs hover:bg-emerald-500/10 transition-colors">
                      {t}
                    </Badge>
                  ))}
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
