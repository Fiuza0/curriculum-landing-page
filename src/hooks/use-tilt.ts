'use client'

import { useRef, useCallback, RefObject } from 'react'

interface TiltOptions {
  max?: number       // max tilt rotation in degrees
  scale?: number     // scale on hover (1 = no scale)
  speed?: number     // speed of the enter/exit transition
  glare?: boolean    // enable glare effect
  maxGlare?: number  // max glare opacity (0-1)
}

export function useTilt<T extends HTMLElement>(options: TiltOptions = {}) {
  const {
    max = 8,
    scale = 1.03,
    speed = 400,
    glare = true,
    maxGlare = 0.15,
  } = options

  const ref = useRef<T>(null)

  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const halfWidth = rect.width / 2
      const halfHeight = rect.height / 2

      const tiltX = ((y - halfHeight) / halfHeight) * -max
      const tiltY = ((x - halfWidth) / halfWidth) * max

      el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale}, ${scale}, ${scale})`
      el.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`

      if (glare) {
        const glareAngle = (Math.atan2(y - halfHeight, x - halfWidth) * 180) / Math.PI + 180
        const glareOpacity = (Math.sqrt((x - halfWidth) ** 2 + (y - halfHeight) ** 2) / Math.sqrt(halfWidth ** 2 + halfHeight ** 2)) * maxGlare

        const glareEl = el.querySelector('.tilt-glare') as HTMLElement | null
        if (glareEl) {
          glareEl.style.background = `linear-gradient(${glareAngle}deg, rgba(255,255,255,${glareOpacity}) 0%, transparent 80%)`
        }
      }
    },
    [max, scale, speed, glare, maxGlare]
  )

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return

    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    el.style.transition = `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`

    if (glare) {
      const glareEl = el.querySelector('.tilt-glare') as HTMLElement | null
      if (glareEl) {
        glareEl.style.background = 'linear-gradient(0deg, transparent 0%, transparent 80%)'
      }
    }
  }, [speed, glare])

  return { ref, onMouseMove, onMouseLeave }
}
