'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/hooks/use-language'

const testimonials = [
  {
    avatar: '/testimonial-1.jpg', // 📸 PLACEHOLDER: Replace with testimonial photo
    initials: 'SJ',
    rating: 5,
    gradient: 'from-emerald-500/10 to-teal-500/5',
  },
  {
    avatar: '/testimonial-2.jpg', // 📸 PLACEHOLDER: Replace with testimonial photo
    initials: 'MC',
    rating: 5,
    gradient: 'from-teal-500/10 to-cyan-500/5',
  },
  {
    avatar: '/testimonial-3.jpg', // 📸 PLACEHOLDER: Replace with testimonial photo
    initials: 'ER',
    rating: 5,
    gradient: 'from-cyan-500/10 to-sky-500/5',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative" ref={ref}>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            {t.testimonials.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.testimonials.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const item = t.testimonials.items[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-emerald-500/15 relative overflow-hidden group backdrop-blur-sm bg-card/80">
                  {/* Gradient top border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient.replace('/10', '').replace('/5', '')} opacity-0 group-hover:opacity-100`} />
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-emerald-500/15 absolute top-4 right-4" />
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed relative z-10 group-hover:text-foreground/80 transition-colors duration-300">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 ring-2 ring-emerald-500/20">
                        <AvatarImage src={testimonial.avatar} alt={item.name} />
                        <AvatarFallback className="text-xs bg-emerald-500/10 text-emerald-600">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.role}
                        </p>
                      </div>
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
