'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const HOVERABLE_SELECTOR = 'a, button, [role="button"], input, textarea, select';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Outer ring: smooth spring with slight lag
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  // Inner dot: snappier spring to follow mouse more precisely
  const dotX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // Only show on non-touch devices with a fine pointer
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    // Only show on viewports wider than 1024px
    const checkViewport = () => {
      setIsVisible(window.innerWidth > 1024);
    };

    checkViewport();

    const handleResize = () => checkViewport();
    window.addEventListener('resize', handleResize);

    // Hide the default cursor
    document.body.style.cursor = 'none';

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Detect when hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(HOVERABLE_SELECTOR)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(HOVERABLE_SELECTOR)) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      // Restore default cursor on unmount
      document.body.style.cursor = '';
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mouseX, mouseY]);

  // Don't render anything on touch devices or small viewports
  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring - follows with spring lag */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border-2 border-emerald-500/50"
        style={{
          x: ringX,
          y: ringY,
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          translateX: isHovering ? -24 : -16,
          translateY: isHovering ? -24 : -16,
          backgroundColor: isHovering ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgb(16, 185, 129)' : 'rgba(16, 185, 129, 0.5)',
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      />

      {/* Inner dot - follows precisely */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          width: isHovering ? 4 : 8,
          height: isHovering ? 4 : 8,
          translateX: isHovering ? -2 : -4,
          translateY: isHovering ? -2 : -4,
          backgroundColor: isHovering ? 'rgb(20, 184, 166)' : 'rgb(16, 185, 129)',
          mixBlendMode: 'difference',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </>
  );
}
