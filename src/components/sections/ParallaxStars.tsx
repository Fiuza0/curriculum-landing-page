'use client'

import { useEffect, useMemo, useRef } from 'react'
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  layer: number // 0 = far (slow), 1 = mid, 2 = near (fast)
  color: string
}

const STAR_COUNT = 60
const LAYER_SPEEDS = [0.05, 0.12, 0.22] // parallax speed multipliers per layer
const EMERALD_COLORS = [
  'rgba(16, 185, 129,',  // emerald-500
  'rgba(20, 184, 166,',  // teal-500
  'rgba(6, 182, 212,',   // cyan-500
  'rgba(52, 211, 153,',  // emerald-400
]

export default function ParallaxStars() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Generate random stars once
  const stars = useMemo<Star[]>(() => {
    const result: Star[] = []
    for (let i = 0; i < STAR_COUNT; i++) {
      const layer = i < 20 ? 0 : i < 40 ? 1 : 2
      const baseOpacity = layer === 0 ? 0.1 : layer === 1 ? 0.18 : 0.28
      result.push({
        x: Math.random() * 100, // percentage
        y: Math.random() * 100, // percentage
        size: layer === 0 ? 1 : layer === 1 ? 1.2 : 1.8,
        opacity: baseOpacity + Math.random() * 0.06,
        layer,
        color: EMERALD_COLORS[Math.floor(Math.random() * EMERALD_COLORS.length)],
      })
    }
    return result
  }, [])

  // Create parallax transforms for each layer
  const farY = useTransform(scrollY, (v) => v * LAYER_SPEEDS[0])
  const midY = useTransform(scrollY, (v) => v * LAYER_SPEEDS[1])
  const nearY = useTransform(scrollY, (v) => v * LAYER_SPEEDS[2])

  const layerTransforms = [farY, midY, nearY]

  // We need to manually apply the transforms via DOM manipulation since
  // we can't use motion.div for each star without excessive re-renders
  const layerRefs = useRef<(HTMLDivElement | null)[]>([null, null, null])

  useMotionValueEvent(farY, 'change', (v) => {
    if (layerRefs.current[0]) layerRefs.current[0].style.transform = `translateY(${-v}px)`
  })
  useMotionValueEvent(midY, 'change', (v) => {
    if (layerRefs.current[1]) layerRefs.current[1].style.transform = `translateY(${-v}px)`
  })
  useMotionValueEvent(nearY, 'change', (v) => {
    if (layerRefs.current[2]) layerRefs.current[2].style.transform = `translateY(${-v}px)`
  })

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Layer 0 - far (slow) */}
      <div
        ref={(el) => { layerRefs.current[0] = el }}
        className="absolute inset-0 will-change-transform"
        style={{ contain: 'layout style' }}
      >
        {stars
          .filter((s) => s.layer === 0)
          .map((star, i) => (
            <div
              key={`far-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: `${star.color} ${star.opacity})`,
              }}
            />
          ))}
      </div>

      {/* Layer 1 - mid */}
      <div
        ref={(el) => { layerRefs.current[1] = el }}
        className="absolute inset-0 will-change-transform"
        style={{ contain: 'layout style' }}
      >
        {stars
          .filter((s) => s.layer === 1)
          .map((star, i) => (
            <div
              key={`mid-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: `${star.color} ${star.opacity})`,
              }}
            />
          ))}
      </div>

      {/* Layer 2 - near (fast) */}
      <div
        ref={(el) => { layerRefs.current[2] = el }}
        className="absolute inset-0 will-change-transform"
        style={{ contain: 'layout style' }}
      >
        {stars
          .filter((s) => s.layer === 2)
          .map((star, i) => (
            <div
              key={`near-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: `${star.color} ${star.opacity})`,
              }}
            />
          ))}
      </div>
    </div>
  )
}
