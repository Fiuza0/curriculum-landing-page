'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    // Use requestAnimationFrame to avoid synchronous setState in effect
    const raf = requestAnimationFrame(checkTouch)
    return () => cancelAnimationFrame(raf)
  }, [])

  return isTouch
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const isTouchDevice = useIsTouchDevice()

  useEffect(() => {
    if (isTouchDevice) return

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const onMouseDown = () => setIsClicking(true)
    const onMouseUp = () => setIsClicking(false)

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true)
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(false)
      }
    }

    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [isTouchDevice, isVisible])

  if (isTouchDevice) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isClicking ? 0.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-3 h-3 rounded-full bg-white" />
      </motion.div>

      {/* Cursor ring / follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99] hidden md:block"
        animate={{
          x: position.x - (isHovering ? 24 : 16),
          y: position.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          opacity: isVisible ? (isHovering ? 0.8 : 0.4) : 0,
          borderColor: isHovering ? 'rgba(16, 185, 129, 0.6)' : 'rgba(16, 185, 129, 0.3)',
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 transition-all duration-200 ${
            isHovering ? 'bg-emerald-500/10' : ''
          }`}
        />
      </motion.div>
    </>
  )
}
