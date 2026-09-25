'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const articles = [
  {
    title: 'Building Scalable Micro-Frontends with Next.js',
    excerpt: 'A deep dive into architecting micro-frontend applications using Module Federation, Next.js, and TypeScript for enterprise-scale deployments.',
    date: '2024-12-15',
    readTime: '8 min read',
    tags: ['Next.js', 'Architecture', 'Micro-frontends'],
    category: 'Architecture',
  },
  {
    title: 'Optimizing React Performance: Beyond React.memo',
    excerpt: 'Advanced performance optimization techniques including virtualization, state colocation, and custom hooks that go beyond basic memoization strategies.',
    date: '2024-11-20',
    readTime: '6 min read',
    tags: ['React', 'Performance', 'TypeScript'],
    category: 'Performance',
  },
  {
    title: 'Designing Effective API Rate Limiting Strategies',
    excerpt: 'How to implement token bucket, sliding window, and fixed window rate limiting algorithms with Redis and distributed systems.',
    date: '2024-10-08',
    readTime: '10 min read',
    tags: ['Backend', 'Redis', 'API Design'],
    category: 'Backend',
  },
]

const categoryColors: Record<string, string> = {
  Architecture: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  Performance: 'bg-teal-500/10 text-teal-600 border-teal-500/20',
  Backend: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
}

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blog" className="py-20 sm:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            <BookOpen className="w-3.5 h-3.5 mr-1.5" />
            Blog
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Latest Articles
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and lessons learned from building
            production-grade software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Card className="group h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-emerald-500/15 cursor-pointer relative overflow-hidden backdrop-blur-sm bg-card/80">
                {/* Gradient top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardContent className="p-6">
                  {/* Category + Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`text-xs ${categoryColors[article.category] || ''}`}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Read more */}
                  <div className="flex items-center gap-1 text-emerald-500 text-sm font-medium group-hover:gap-2 transition-all duration-300">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-emerald-500/20 text-emerald-600 hover:bg-emerald-500/10 hover:text-emerald-600 hover:border-emerald-500/30"
          >
            <BookOpen className="w-4 h-4" />
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
