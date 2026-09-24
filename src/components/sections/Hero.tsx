'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

const techIcons = [
  { label: 'React', color: 'from-cyan-400 to-blue-500', x: '10%', y: '20%', delay: 0 },
  { label: 'TS', color: 'from-blue-400 to-blue-600', x: '85%', y: '15%', delay: 0.5 },
  { label: 'Node', color: 'from-green-400 to-emerald-600', x: '5%', y: '70%', delay: 1 },
  { label: 'AWS', color: 'from-orange-400 to-amber-500', x: '90%', y: '65%', delay: 1.5 },
  { label: 'Git', color: 'from-red-400 to-rose-500', x: '15%', y: '45%', delay: 0.7 },
  { label: 'Docker', color: 'from-sky-400 to-blue-500', x: '80%', y: '40%', delay: 1.2 },
]

const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'Cloud Architect',
  'UI/UX Enthusiast',
  'Open Source Contributor',
]

function Typewriter({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
          if (displayText.length === currentText.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setDisplayText(currentText.slice(0, displayText.length - 1))
          if (displayText.length === 0) {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, texts])

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/8" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] bg-teal-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Floating tech icons */}
      {techIcons.map((icon) => (
        <motion.div
          key={icon.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: icon.delay + 1, duration: 0.5 }}
          className="absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br shadow-lg z-10"
          style={{
            left: icon.x,
            top: icon.y,
            background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
          }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: icon.delay }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${icon.color} shadow-lg flex items-center justify-center`}
          >
            <span className="text-white text-xs font-bold">{icon.label}</span>
          </motion.div>
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-emerald-500/20 animate-spin [animation-duration:30s]" />
              <div className="absolute -inset-6 rounded-full border border-dashed border-teal-500/10 animate-spin [animation-duration:45s] [animation-direction:reverse]" />
              <Avatar className="w-40 h-40 sm:w-52 sm:h-52 relative border-4 border-background shadow-2xl">
                {/* 📸 PLACEHOLDER: Replace with your photo URL */}
                <AvatarImage
                  src="/photo-placeholder.jpg"
                  alt="Your Photo"
                />
                <AvatarFallback className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400">
                  YN
                </AvatarFallback>
              </Avatar>
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute -bottom-2 -right-2"
              >
                <Badge className="bg-emerald-500 text-white border-0 px-3 py-1 shadow-lg">
                  <span className="mr-1.5 inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
                  Available
                </Badge>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <MapPin className="w-4 h-4 text-emerald-500" />
              <span className="text-muted-foreground text-sm">
                {/* 📍 PLACEHOLDER: Replace with your location */}
                San Francisco, CA
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                {/* ✏️ PLACEHOLDER: Replace with your name */}
                Your Name
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-foreground mb-2 font-medium">
              <Typewriter texts={roles} />
            </p>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              {/* ✏️ PLACEHOLDER: Replace with your tagline */}
              Passionate about building elegant solutions to complex problems.
              Specializing in full-stack development, cloud architecture, and
              creating impactful user experiences.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0"
                onClick={() =>
                  document
                    .querySelector('#projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-emerald-500/30 text-emerald-600 hover:bg-emerald-500/10 hover:text-emerald-600 hover:border-emerald-500/50"
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="gap-2 text-muted-foreground hover:text-foreground"
                onClick={() => {
                  /* 📄 PLACEHOLDER: Add your CV download link */
                }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Mail, href: '#', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-muted/80 border border-border/50 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:border-transparent transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-emerald-500/70">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-emerald-500/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
