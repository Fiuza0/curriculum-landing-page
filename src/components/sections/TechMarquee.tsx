'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const techItems = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Next.js', color: '#000000' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Prisma', color: '#2D3748' },
  { name: 'Terraform', color: '#7B42BC' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Go', color: '#00ADD8' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Git', color: '#F05032' },
]

function MarqueeRow({ items, reverse = false }: { items: typeof techItems; reverse?: boolean }) {
  const doubled = [...items, ...items]

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
      <motion.div
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
        className="flex gap-4 shrink-0"
      >
        {doubled.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-emerald-500/10 hover:border-emerald-500/20 hover:shadow-md hover:shadow-emerald-500/5 transition-all duration-300 cursor-default group shrink-0"
          >
            <div
              className="w-3 h-3 rounded-full ring-2 ring-offset-1 ring-offset-background group-hover:scale-125 transition-transform duration-300"
              style={{ backgroundColor: item.color, ringColor: `${item.color}40` }}
            />
            <span className="text-sm font-medium whitespace-nowrap group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function TechMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const firstHalf = techItems.slice(0, Math.ceil(techItems.length / 2))
  const secondHalf = techItems.slice(Math.ceil(techItems.length / 2))

  return (
    <section id="technologies" ref={ref} className="py-12 sm:py-16 overflow-hidden border-y border-border/30 bg-muted/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Technologies I Work With
        </p>
      </motion.div>

      <div className="space-y-4">
        <MarqueeRow items={firstHalf} />
        <MarqueeRow items={secondHalf} reverse />
      </div>
    </section>
  )
}
