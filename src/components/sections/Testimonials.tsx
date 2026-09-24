'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechVentures',
    avatar: '/testimonial-1.jpg', // 📸 PLACEHOLDER: Replace with testimonial photo
    initials: 'SJ',
    text: 'An exceptional engineer who consistently delivers high-quality solutions. Their attention to detail and ability to translate complex requirements into elegant code is remarkable.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, InnovateCo',
    avatar: '/testimonial-2.jpg', // 📸 PLACEHOLDER: Replace with testimonial photo
    initials: 'MC',
    text: 'Working together was a game-changer for our product. They brought both technical excellence and creative problem-solving that elevated our entire platform.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Engineering Lead, DataFlow',
    avatar: '/testimonial-3.jpg', // 📸 PLACEHOLDER: Replace with testimonial photo
    initials: 'ER',
    text: 'One of the most talented engineers I\'ve had the pleasure of working with. Their code is clean, well-documented, and always ships on time.',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 sm:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What People Say
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues and clients I&apos;ve worked with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 relative">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed relative z-10">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
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
