'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import Particles from '@/components/sections/Particles'
import { useLanguage } from '@/hooks/use-language'

const techIcons = [
  { label: 'C#', color: 'from-purple-400 to-purple-600', x: '10%', y: '20%', delay: 0 },
  { label: 'Py', color: 'from-blue-400 to-yellow-500', x: '85%', y: '15%', delay: 0.5 },
  { label: '.NET', color: 'from-purple-500 to-indigo-600', x: '5%', y: '70%', delay: 1 },
  { label: 'AWS', color: 'from-orange-400 to-amber-500', x: '90%', y: '65%', delay: 1.5 },
  { label: 'Git', color: 'from-red-400 to-rose-500', x: '15%', y: '45%', delay: 0.7 },
  { label: 'K8s', color: 'from-sky-400 to-blue-500', x: '80%', y: '40%', delay: 1.2 },
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
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-500/[0.02] via-transparent to-transparent noise-overlay"
    >
      {/* Particles background */}
      <Particles />

      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/8" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[28rem] h-[28rem] bg-teal-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        {/* Grid pattern overlay - animated mesh lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial fade to soften grid edges */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, var(--background) 70%)' }} />
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
              <Avatar className="w-40 h-40 sm:w-52 sm:h-52 relative border-4 border-background shadow-2xl ring-4 ring-emerald-500/20">
                <AvatarImage
                  src="/photo-placeholder.jpg"
                  alt={t.hero.name}
                />
                <AvatarFallback className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400">
                  RL
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
                  {t.hero.available}
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
                {t.hero.location}
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
              {t.hero.greeting}{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent inline-block gradient-text-animated">
                {t.hero.name}
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-foreground mb-3 font-semibold">
              <Typewriter texts={t.hero.roles} />
            </p>

            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              {t.hero.tagline}
            </p>

            {/* CTA buttons - clear visual hierarchy */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
              {/* Primary CTA - most prominent */}
              <Button
                size="lg"
                className="gap-2 shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 relative overflow-hidden px-8 py-6 text-base font-semibold"
                onClick={() =>
                  document
                    .querySelector('#projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                {t.hero.viewWork}
                <ArrowDown className="w-5 h-5" />
              </Button>
              {/* Secondary CTA - medium emphasis */}
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 px-6 py-5"
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <Mail className="w-4 h-4" />
                {t.hero.getInTouch}
              </Button>
              {/* Tertiary CTA - subtle */}
              <Button
                variant="ghost"
                size="default"
                className="gap-2 text-muted-foreground hover:text-foreground border border-dashed border-border/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 py-4"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/resume.pdf'
                  link.download = t.hero.downloadFilename
                  link.click()
                }}
              >
                <Download className="w-4 h-4" />
                {t.hero.downloadCV}
              </Button>
            </div>

            {/* Social links - more refined */}
            <div className="flex items-center gap-2.5 justify-center lg:justify-start">
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
                  className="p-2.5 rounded-xl bg-muted/60 border border-border/40 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:border-transparent hover:shadow-md hover:shadow-emerald-500/20 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4.5 h-4.5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - minimal & elegant */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="w-5 h-8 rounded-full border border-emerald-500/25 flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1 rounded-full bg-emerald-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
