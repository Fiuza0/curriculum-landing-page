'use client'

import { useCallback, useRef } from 'react'

interface Particle {
  x: number
  y: number
  color: string
  size: number
  speedX: number
  speedY: number
  gravity: number
  opacity: number
  decay: number
}

const colors = ['#10b981', '#14b816', '#06b6d4', '#0ea5e9', '#22c55e', '#f59e0b', '#4ade80']

export function useConfetti() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const animFrameRef = useRef<number>(0)

  const fire = useCallback(() => {
    // Create canvas if not exists
    if (!canvasRef.current) {
      const canvas = document.createElement('canvas')
      canvas.style.position = 'fixed'
      canvas.style.top = '0'
      canvas.style.left = '0'
      canvas.style.width = '100vw'
      canvas.style.height = '100vh'
      canvas.style.pointerEvents = 'none'
      canvas.style.zIndex = '9999'
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      document.body.appendChild(canvas)
      canvasRef.current = canvas
    }

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Create particles
    const x = window.innerWidth / 2
    const y = window.innerHeight / 3
    const count = 60

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count
      const speed = 2 + Math.random() * 4
      particlesRef.current.push({
        x,
        y,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 4,
        speedX: Math.cos(angle) * speed + (Math.random() - 0.5),
        speedY: Math.sin(angle) * speed - Math.random() * 2,
        gravity: 0.15,
        opacity: 1,
        decay: 0.01 + Math.random() * 0.02,
      })
    }

    // Cancel previous animation
    cancelAnimationFrame(animFrameRef.current)

    // Animate
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.speedX
        p.speedY += p.gravity
        p.y += p.speedY
        p.opacity -= p.decay

        if (p.opacity <= 0) return false

        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fillRect(p.x, p.y, p.size, p.size)
        ctx.globalAlpha = 1

        return true
      })

      if (particlesRef.current.length > 0) {
        animFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animate()
  }, [])

  return { fire }
}
