'use client'

import { useRef, useState, useCallback } from 'react'

interface TiltStyle {
  transform: string
  transition?: string
}

export function useTilt(maxTilt: number = 8) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<TiltStyle>({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      const tiltX = (y - 0.5) * -maxTilt
      const tiltY = (x - 0.5) * maxTilt
      setStyle({
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: 'transform 0.1s ease-out',
      })
    },
    [maxTilt]
  )

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out',
    })
  }, [])

  return { ref, style, handleMouseMove, handleMouseLeave }
}
