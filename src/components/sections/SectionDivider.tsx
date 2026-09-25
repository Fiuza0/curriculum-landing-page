'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <div className="relative py-0">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="section-divider mx-auto max-w-4xl"
      />
    </div>
  )
}
