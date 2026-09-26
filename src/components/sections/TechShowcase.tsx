'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code2, Database, Cloud, TestTube2, Shield, Badge as BadgeIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

// ─── Data ────────────────────────────────────────────────────────────────────

interface TechItem {
  name: string
  emoji: string
  proficiency: number // 1-5
}

interface TechCategory {
  title: string
  icon: LucideIcon
  theme: {
    gradient: string
    iconBg: string
    dotFill: string
    borderGlow: string
    textAccent: string
  }
  items: TechItem[]
}

const categories: TechCategory[] = [
  {
    title: 'Languages', // i18n: t.techShowcase.languages
    icon: Code2,
    theme: {
      gradient: 'from-emerald-500 to-emerald-600',
      iconBg: 'from-emerald-400 to-emerald-600',
      dotFill: 'bg-emerald-500',
      borderGlow: 'hover:border-emerald-400/60',
      textAccent: 'text-emerald-600 dark:text-emerald-400',
    },
    items: [
      { name: 'C#', emoji: '🔷', proficiency: 5 },
      { name: 'Python', emoji: '🐍', proficiency: 4 },
      { name: 'Java', emoji: '☕', proficiency: 4 },
      { name: 'R', emoji: '📊', proficiency: 3 },
      { name: 'HTML5/CSS3', emoji: '🌐', proficiency: 4 },
      { name: 'SQL', emoji: '🗃️', proficiency: 4 },
    ],
  },
  {
    title: 'Frameworks', // i18n: t.techShowcase.frameworks
    icon: BadgeIcon,
    theme: {
      gradient: 'from-teal-500 to-teal-600',
      iconBg: 'from-teal-400 to-teal-600',
      dotFill: 'bg-teal-500',
      borderGlow: 'hover:border-teal-400/60',
      textAccent: 'text-teal-600 dark:text-teal-400',
    },
    items: [
      { name: '.NET/ASP.NET', emoji: '🟣', proficiency: 5 },
      { name: 'Pandas', emoji: '🐼', proficiency: 4 },
      { name: 'NumPy', emoji: '🔢', proficiency: 4 },
    ],
  },
  {
    title: 'Cloud & Infra', // i18n: t.techShowcase.cloud
    icon: Cloud,
    theme: {
      gradient: 'from-cyan-500 to-cyan-600',
      iconBg: 'from-cyan-400 to-cyan-600',
      dotFill: 'bg-cyan-500',
      borderGlow: 'hover:border-cyan-400/60',
      textAccent: 'text-cyan-600 dark:text-cyan-400',
    },
    items: [
      { name: 'AWS', emoji: '☁️', proficiency: 3 },
      { name: 'Kubernetes', emoji: '☸️', proficiency: 3 },
      { name: 'Linux bash', emoji: '🐧', proficiency: 4 },
      { name: 'Docker', emoji: '🐳', proficiency: 4 },
      { name: 'Windows Server', emoji: '🪟', proficiency: 4 },
      { name: 'Networks', emoji: '🔗', proficiency: 4 },
    ],
  },
  {
    title: 'Data & Testing', // i18n: t.techShowcase.data
    icon: Database,
    theme: {
      gradient: 'from-amber-500 to-amber-600',
      iconBg: 'from-amber-400 to-amber-600',
      dotFill: 'bg-amber-500',
      borderGlow: 'hover:border-amber-400/60',
      textAccent: 'text-amber-600 dark:text-amber-400',
    },
    items: [
      { name: 'PostgreSQL', emoji: '🐘', proficiency: 4 },
      { name: 'R Studio', emoji: '📊', proficiency: 3 },
      { name: 'Jupyter', emoji: '📓', proficiency: 3 },
      { name: 'Arduino', emoji: '🔌', proficiency: 3 },
      { name: 'Git', emoji: '📦', proficiency: 5 },
    ],
  },
]

// ─── Decorative 3D Rotating Cube ────────────────────────────────────────────

const cubeIcons = [
  'C#', '🐍', '☁️', '☸️', '🐘', '▲',
  '🐼', '🔢', '🐧', '🎨', '🎮', '🔌',
]

function RotatingCube() {
  return (
    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 hidden xl:block pointer-events-none select-none">
      <motion.div
        className="relative w-64 h-64"
        style={{ perspective: 800 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {/* Rotating ring of tech icons */}
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          {cubeIcons.map((icon, i) => {
            const angle = (i / cubeIcons.length) * 360
            const radius = 100
            return (
              <motion.div
                key={i}
                className="absolute w-10 h-10 rounded-lg bg-card/60 backdrop-blur-sm border border-border/30 flex items-center justify-center text-sm font-medium text-muted-foreground shadow-sm"
                style={{
                  transformStyle: 'preserve-3d',
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * radius - 20,
                  y: Math.sin((angle * Math.PI) / 180) * radius - 20,
                  rotateY: -360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {icon}
              </motion.div>
            )
          })}
        </div>

        {/* Center pulsing core */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/20 flex items-center justify-center"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Shield className="w-6 h-6 text-emerald-500/60" />
        </motion.div>
      </motion.div>
    </div>
  )
}

// ─── Skill Dot Indicator ────────────────────────────────────────────────────

function SkillDots({ level, fillClass }: { level: number; fillClass: string }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`block w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
            i < level ? fillClass : 'bg-muted-foreground/20'
          }`}
        />
      ))}
    </div>
  )
}

// ─── Category Card ──────────────────────────────────────────────────────────

function CategoryCard({
  category,
  index,
  isInView,
}: {
  category: TechCategory
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -8 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateX: 0 }
          : { opacity: 0, y: 40, rotateX: -8 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl border border-border/50 backdrop-blur-sm bg-card/70 p-6 transition-all duration-300 ${category.theme.borderGlow} hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Hover glow overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, var(--glow-color, rgba(16,185,129,0.06)) 0%, transparent 70%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${category.theme.iconBg} shadow-md`}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold tracking-tight">
          {category.title}
        </h3>
      </div>

      {/* Tech Items */}
      <ul className="space-y-3">
        {category.items.map((item, itemIdx) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, x: -12 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
            transition={{
              duration: 0.35,
              delay: index * 0.15 + itemIdx * 0.06 + 0.2,
              ease: 'easeOut',
            }}
            className="flex items-center justify-between gap-2"
          >
            <span className="flex items-center gap-2 text-sm">
              <span className="text-base leading-none" aria-hidden="true">
                {item.emoji}
              </span>
              <span className="font-medium text-foreground/90">
                {item.name}
              </span>
            </span>
            <SkillDots level={item.proficiency} fillClass={category.theme.dotFill} />
          </motion.li>
        ))}
      </ul>

      {/* Proficiency legend */}
      <div className="mt-4 pt-3 border-t border-border/40 flex items-center gap-3 text-[11px] text-muted-foreground/70">
        <span className="flex items-center gap-1">
          <span className={`w-1.5 h-1.5 rounded-full ${categories[index].theme.dotFill}`} />
          Filled
        </span>
        <span>= skill level</span>
        <span className="ml-auto font-medium" aria-label="5 dots means expert">5 = Expert</span>
      </div>
    </motion.div>
  )
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function TechShowcase() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="techshowcase"
      className="relative py-20 sm:py-28 overflow-hidden"
      ref={ref}
    >
      {/* Background decorative gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-emerald-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-teal-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-cyan-500/[0.02] rounded-full blur-3xl" />
      </div>

      {/* Decorative 3D rotating element */}
      <RotatingCube />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
          >
            <Code2 className="w-3.5 h-3.5 mr-1" />
            {t.techShowcase.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {t.techShowcase.title}{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              {t.techShowcase.titleAccent}
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {t.techShowcase.subtitle}
          </p>
        </motion.div>

        {/* ── Category Grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          style={{ perspective: 1200 }}
        >
          {categories.map((category, idx) => (
            <CategoryCard
              key={category.title}
              category={category}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>

        {/* ── Bottom decorative stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-center"
        >
          {[
            { label: 'Technologies', value: '24+', icon: Code2 },
            { label: 'Categories', value: '4', icon: Shield },
            { label: 'Expert Level', value: '10', icon: BadgeIcon },
            { label: 'Always Learning', value: '∞', icon: Cloud },
          ].map(({ label, value, icon: StatIcon }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1.5">
                <StatIcon className="w-4 h-4 text-emerald-500/70" />
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  {value}
                </span>
              </div>
              <span className="text-xs text-muted-foreground/70 uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
