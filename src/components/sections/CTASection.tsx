'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/use-language'

export default function CTASection() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="cta" ref={ref} className="py-20 sm:py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05)_0%,transparent_50%)]" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 border border-white/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-60 h-60 border border-white/10 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-white/5 rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-8"
        >
          <Rocket className="w-8 h-8 text-white" />
        </motion.div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {t.cta.title1}{' '}
          <span className="bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent">
            {t.cta.title2}
          </span>
        </h2>

        <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="gap-2 bg-white text-emerald-600 hover:bg-white/90 shadow-xl shadow-black/20 border-0 px-8"
            onClick={() =>
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t.cta.button1}
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 px-8"
            onClick={() =>
              document
                .querySelector('#projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t.cta.button2}
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
