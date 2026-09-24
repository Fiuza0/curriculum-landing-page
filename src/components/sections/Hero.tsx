'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

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
              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full animate-spin [animation-duration:20s]" />
              <Avatar className="w-40 h-40 sm:w-52 sm:h-52 relative border-4 border-background shadow-2xl">
                {/* 📸 PLACEHOLDER: Replace with your photo URL */}
                <AvatarImage
                  src="/photo-placeholder.jpg"
                  alt="Your Photo"
                />
                <AvatarFallback className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-primary/20 to-primary/10 text-primary">
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
                <Badge className="bg-green-500 text-white border-0 px-3 py-1 shadow-lg">
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
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground text-sm">
                {/* 📍 PLACEHOLDER: Replace with your location */}
                San Francisco, CA
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {/* ✏️ PLACEHOLDER: Replace with your name */}
                Your Name
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-2 font-medium">
              Software Engineer
            </p>

            <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mb-8 leading-relaxed">
              {/* ✏️ PLACEHOLDER: Replace with your tagline */}
              Passionate about building elegant solutions to complex problems.
              Specializing in full-stack development, cloud architecture, and
              creating impactful user experiences.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="gap-2 shadow-lg hover:shadow-xl transition-shadow"
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
                className="gap-2"
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                href="#"
                className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
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
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
