'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  BookOpen,
  Podcast,
  Video,
  Globe,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type LearningType = 'Book' | 'Podcast' | 'Video' | 'Course'

interface LearningItem {
  title: string
  type: LearningType
  author: string
  progress?: number
  count?: string
  color: string
  bgColor: string
  borderColor: string
  iconBg: string
  iconColor: string
  gradientFrom: string
  gradientTo: string
}

const learningItems: LearningItem[] = [
  {
    title: 'System Design Interview',
    type: 'Book',
    author: 'Alex Xu',
    progress: 85,
    color: 'emerald',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    iconBg: 'bg-emerald-500/15',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-emerald-600',
  },
  {
    title: 'Building Microservices',
    type: 'Book',
    author: 'Sam Newman',
    progress: 60,
    color: 'teal',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/20',
    iconBg: 'bg-teal-500/15',
    iconColor: 'text-teal-600 dark:text-teal-400',
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-teal-600',
  },
  {
    title: 'Syntax FM Podcast',
    type: 'Podcast',
    author: 'Weekly episodes',
    count: '40 episodes listened',
    color: 'cyan',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    iconBg: 'bg-cyan-500/15',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-cyan-600',
  },
  {
    title: 'Fireship',
    type: 'Video',
    author: '100 Seconds of Code',
    count: 'Daily watcher',
    color: 'amber',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-600 dark:text-amber-400',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-amber-600',
  },
  {
    title: 'Rust Programming',
    type: 'Course',
    author: 'Noam Goren',
    progress: 30,
    color: 'orange',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    iconBg: 'bg-orange-500/15',
    iconColor: 'text-orange-600 dark:text-orange-400',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-orange-600',
  },
  {
    title: 'Advanced TypeScript',
    type: 'Course',
    author: 'Matt Pocock',
    progress: 75,
    color: 'sky',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/20',
    iconBg: 'bg-sky-500/15',
    iconColor: 'text-sky-600 dark:text-sky-400',
    gradientFrom: 'from-sky-500',
    gradientTo: 'to-sky-600',
  },
]

const typeIconMap: Record<LearningType, React.ElementType> = {
  Book: BookOpen,
  Podcast: Podcast,
  Video: Video,
  Course: GraduationCap,
}

const typeBadgeColorMap: Record<LearningType, string> = {
  Book: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  Podcast: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  Video: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  Course: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
}

export default function Learning() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="learning" className="py-20 sm:py-28 relative overflow-hidden" ref={ref}>
      {/* Decorative background blur circles */}
      <div className="absolute top-20 -left-32 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-cyan-500/3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            Growth
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Always Learning</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning is at the heart of great engineering. Here&apos;s what
            I&apos;m currently reading, watching, and exploring to stay sharp and grow
            every day.
          </p>
        </motion.div>

        {/* Learning cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {learningItems.map((item, index) => {
            const Icon = typeIconMap[item.type]

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-emerald-500/20 relative overflow-hidden">
                  {/* Decorative gradient top border on hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon with colored background circle */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-5 h-5 ${item.iconColor}`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Type badge */}
                        <Badge
                          variant="secondary"
                          className={`mb-2 text-xs ${typeBadgeColorMap[item.type]}`}
                        >
                          {item.type}
                        </Badge>

                        {/* Title */}
                        <h3 className="text-base font-semibold mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                          {item.title}
                        </h3>

                        {/* Author / Source */}
                        <p className="text-sm text-muted-foreground mb-3">
                          {item.author}
                        </p>

                        {/* Progress bar (for books/courses) or count (for podcasts/videos) */}
                        {item.progress !== undefined ? (
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-muted-foreground">
                                Progress
                              </span>
                              <span
                                className={`text-xs font-medium ${item.iconColor}`}
                              >
                                {item.progress}%
                              </span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo}`}
                                initial={{ width: 0 }}
                                animate={
                                  isInView
                                    ? { width: `${item.progress}%` }
                                    : { width: 0 }
                                }
                                transition={{
                                  duration: 1,
                                  delay: 0.3 + index * 0.1,
                                  ease: 'easeOut',
                                }}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-1.5 h-1.5 rounded-full ${item.gradientFrom} flex-shrink-0`}
                            />
                            <span className="text-xs text-muted-foreground">
                              {item.count}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* View Full List button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-emerald-500/20 text-emerald-600 hover:bg-emerald-500/10 hover:text-emerald-600 hover:border-emerald-500/30 dark:text-emerald-400 dark:hover:text-emerald-400"
          >
            View Full List
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
