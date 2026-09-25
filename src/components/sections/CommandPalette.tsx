'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User,
  Code2,
  Briefcase,
  FolderOpen,
  BookOpen,
  Mail,
  Moon,
  Download,
  Github,
  ArrowUp,
  Search,
} from 'lucide-react'

// ── Navigation items ──────────────────────────────────────────────
const navigationItems = [
  { id: 'about', label: 'About', icon: User, href: '#about' },
  { id: 'skills', label: 'Skills', icon: Code2, href: '#skills' },
  { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
  { id: 'projects', label: 'Projects', icon: FolderOpen, href: '#projects' },
  { id: 'learning', label: 'Learning', icon: BookOpen, href: '#learning' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
]

// ── Action items ───────────────────────────────────────────────────
const actionItems = [
  {
    id: 'toggle-dark',
    label: 'Toggle Dark Mode',
    icon: Moon,
    shortcut: '⌘D',
    action: () => {
      document.documentElement.classList.toggle('dark')
    },
  },
  {
    id: 'download-cv',
    label: 'Download CV',
    icon: Download,
    shortcut: undefined,
    action: () => {
      const a = document.createElement('a')
      a.href = '/resume.pdf'
      a.download = 'resume.pdf'
      a.click()
    },
  },
  {
    id: 'view-source',
    label: 'View Source Code',
    icon: Github,
    shortcut: undefined,
    action: () => {
      window.open('https://github.com', '_blank', 'noopener')
    },
  },
  {
    id: 'scroll-top',
    label: 'Scroll to Top',
    icon: ArrowUp,
    shortcut: undefined,
    action: () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
]

// ── All items for the command palette ─────────────────────────────
interface CommandItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  shortcut?: string
  href?: string
  action?: () => void
  group: 'navigation' | 'actions'
}

const allItems: CommandItem[] = [
  ...navigationItems.map((item) => ({ ...item, group: 'navigation' as const, shortcut: undefined })),
  ...actionItems.map((item) => ({ ...item, group: 'actions' as const, href: undefined })),
]

// ── Fuzzy search ──────────────────────────────────────────────────
function fuzzyMatch(query: string, text: string): boolean {
  const q = query.toLowerCase()
  const t = text.toLowerCase()
  if (t.includes(q)) return true
  let qi = 0
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) qi++
  }
  return qi === q.length
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const openRef = useRef(false)

  // Wrapper for setOpen that resets state when opening
  const openPalette = (value: boolean) => {
    setOpen(value)
    openRef.current = value
    if (value) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }

  // ── Cmd+K / Ctrl+K shortcut ───────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        openPalette(!openRef.current)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // ── Listen for custom event from Navbar ───────────────────────
  useEffect(() => {
    const handleOpen = () => openPalette(true)
    window.addEventListener('open-command-palette', handleOpen)
    return () => window.removeEventListener('open-command-palette', handleOpen)
  }, [])

  // ── Auto-focus input when opened ─────────────────────────────
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50)
      return () => clearTimeout(timer)
    }
  }, [open])

  // ── Filter items by query ─────────────────────────────────────
  const filteredItems = query
    ? allItems.filter((item) => fuzzyMatch(query, item.label))
    : allItems

  // ── Group filtered items ──────────────────────────────────────
  const navGroup = filteredItems.filter((i) => i.group === 'navigation')
  const actionGroup = filteredItems.filter((i) => i.group === 'actions')

  // ── Flat list for keyboard navigation ─────────────────────────
  const flatItems = filteredItems

  // ── Execute item action ───────────────────────────────────────
  const executeItem = (item: CommandItem) => {
    openPalette(false)
    if (item.href) {
      const el = document.querySelector(item.href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (item.action) {
      item.action()
    }
  }

  // ── Keyboard navigation ───────────────────────────────────────
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % flatItems.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + flatItems.length) % flatItems.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const item = flatItems[selectedIndex]
      if (item) executeItem(item)
    } else if (e.key === 'Escape') {
      e.preventDefault()
      openPalette(false)
    }
  }

  // ── Render a group ────────────────────────────────────────────
  const renderGroup = (heading: string, items: CommandItem[]) => {
    if (items.length === 0) return null
    return (
      <div className="px-2 pt-2 pb-1">
        <div className="text-xs font-medium text-muted-foreground px-2 py-1.5 uppercase tracking-wider">
          {heading}
        </div>
        {items.map((item) => {
          const globalIndex = flatItems.indexOf(item)
          const isSelected = globalIndex === selectedIndex
          const Icon = item.icon
          return (
            <motion.div
              key={item.id}
              onMouseEnter={() => setSelectedIndex(globalIndex)}
              onClick={() => executeItem(item)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm transition-colors duration-150 ${
                isSelected
                  ? 'bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-cyan-500/10 text-emerald-600 dark:text-emerald-400'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              <Icon
                className={`size-4 shrink-0 ${
                  isSelected
                    ? 'text-emerald-500'
                    : 'text-muted-foreground'
                }`}
              />
              <span className="flex-1 truncate">{item.label}</span>
              {item.shortcut && (
                <kbd className="ml-auto text-[10px] font-mono text-muted-foreground/70 bg-muted/50 px-1.5 py-0.5 rounded border border-border/50">
                  {item.shortcut}
                </kbd>
              )}
            </motion.div>
          )
        })}
      </div>
    )
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm"
            onClick={() => openPalette(false)}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[71] flex items-start justify-center pt-[20vh] sm:pt-[25vh] px-4"
            onKeyDown={handleKeyDown}
          >
            <div className="w-full max-w-lg rounded-2xl border border-border/50 bg-card/90 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 border-b border-border/50">
                <Search className="size-4 text-muted-foreground shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setSelectedIndex(0)
                  }}
                  placeholder="Type a command or search..."
                  className="flex-1 h-12 bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
                  autoFocus
                />
                <kbd className="text-[10px] font-mono text-muted-foreground/50 bg-muted/40 px-1.5 py-0.5 rounded border border-border/40">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto overscroll-contain custom-scrollbar">
                {flatItems.length === 0 ? (
                  <div className="py-12 text-center text-sm text-muted-foreground">
                    <div className="text-2xl mb-2">🔍</div>
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  <>
                    {renderGroup('Navigation', navGroup)}
                    {renderGroup('Actions', actionGroup)}
                  </>
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-border/50 text-[10px] text-muted-foreground/50">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="bg-muted/40 px-1 py-0.5 rounded border border-border/40 font-mono">↑↓</kbd>
                    navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="bg-muted/40 px-1 py-0.5 rounded border border-border/40 font-mono">↵</kbd>
                    select
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="bg-muted/40 px-1 py-0.5 rounded border border-border/40 font-mono">esc</kbd>
                    close
                  </span>
                </div>
                <span className="text-muted-foreground/30">cmd+k</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
