'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, Moon, Sun, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/hooks/use-language'

const navLinkKeys = [
  { key: 'about' as const, href: '#about' },
  { key: 'skills' as const, href: '#skills' },
  { key: 'experience' as const, href: '#experience' },
  { key: 'projects' as const, href: '#projects' },
  { key: 'learning' as const, href: '#learning' },
  { key: 'contact' as const, href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const { locale, t, toggleLanguage } = useLanguage()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollPercent(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  // Scroll spy - detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    navLinkKeys.forEach((link) => {
      const el = document.querySelector(link.href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const isPT = locale === 'pt'

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
          style={{ width: `${scrollPercent}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                &lt;Dev /&gt;
              </span>
            </motion.div>

            {/* Desktop links + language toggle + dark mode */}
            <div className="hidden md:flex items-center gap-1">
              {navLinkKeys.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <Button
                    key={link.href}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleClick(link.href)}
                    className={`relative transition-all duration-200 ${
                      isActive
                        ? 'text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {t.nav[link.key]}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Button>
                )
              })}
              <div className="w-px h-6 bg-border mx-2" />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.dispatchEvent(new CustomEvent('open-command-palette'))}
                className="text-muted-foreground hover:text-foreground gap-1.5"
                aria-label="Open command palette"
              >
                <Badge variant="outline" className="text-[10px] font-mono px-1.5 py-0 h-5 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5">
                  ⌘K
                </Badge>
              </Button>
              {/* Language toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className={`gap-1.5 transition-all duration-200 ${isPT ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground hover:text-foreground'}`}
                aria-label="Toggle language"
              >
                <Badge
                  variant="outline"
                  className={`text-[10px] font-mono px-1.5 py-0 h-5 transition-all duration-200 ${
                    isPT
                      ? 'border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10'
                      : 'border-border/50 text-muted-foreground bg-transparent'
                  }`}
                >
                  <Globe className="w-2.5 h-2.5 mr-0.5" />
                  {isPT ? 'PT' : 'EN'}
                </Badge>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDark(!dark)}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center gap-1 md:hidden">
              {/* Mobile language toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className={`transition-all duration-200 ${isPT ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground'}`}
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDark(!dark)}
                className="text-muted-foreground"
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-2">
                {navLinkKeys.map((link) => {
                  const sectionId = link.href.replace('#', '')
                  const isActive = activeSection === sectionId
                  return (
                    <Button
                      key={link.href}
                      variant="ghost"
                      className={`justify-start transition-all duration-200 ${
                        isActive
                          ? 'text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={() => handleClick(link.href)}
                    >
                      {t.nav[link.key]}
                    </Button>
                  )
                })}
                {/* Mobile language toggle as full-width button */}
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className={`justify-start gap-2 mt-2 ${isPT ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground'}`}
                >
                  <Globe className="w-4 h-4" />
                  {isPT ? 'PT — Português' : 'EN — English'}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
