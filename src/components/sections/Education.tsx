'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'Stanford University',
    location: 'Stanford, CA',
    period: '2016 - 2018',
    gpa: '3.9 / 4.0',
    highlights: [
      'Specialization in Distributed Systems',
      'Research in Machine Learning Optimization',
      'Teaching Assistant for CS 229',
    ],
  },
  {
    degree: 'B.S. Computer Science',
    school: 'UC Berkeley',
    location: 'Berkeley, CA',
    period: '2012 - 2016',
    gpa: '3.8 / 4.0',
    highlights: [
      'Dean\'s List - All Semesters',
      'ACM Programming Team Captain',
      'Senior Capstone: AI-Powered Code Review Tool',
    ],
  },
]

const certifications = [
  'AWS Solutions Architect - Professional',
  'Google Cloud Professional Developer',
  'Certified Kubernetes Administrator (CKA)',
  'Meta Front-End Developer Certificate',
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-20 sm:py-28 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            Education
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-emerald-500/15 relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">
                        {/* ✏️ PLACEHOLDER: Replace with your degree */}
                        {edu.degree}
                      </h3>
                      <p className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">
                        {/* ✏️ PLACEHOLDER: Replace with your school */}
                        {edu.school}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </span>
                        <Badge variant="secondary" className="text-xs bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                          GPA: {edu.gpa}
                        </Badge>
                      </div>
                      <ul className="space-y-1.5">
                        {edu.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500/50 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-center mb-6 flex items-center justify-center gap-2">
            <Award className="w-5 h-5 text-emerald-500" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                className="flex items-center gap-3 p-3.5 rounded-lg bg-card border border-border/50 hover:border-emerald-500/20 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-sm font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
