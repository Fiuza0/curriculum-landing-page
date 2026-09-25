'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ExternalLink,
  Github,
  Eye,
  Monitor,
  BarChart3,
  MessageSquare,
  Terminal,
  Smartphone,
  Blocks,
  Sparkles,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/use-language'

const projectIcons = [Monitor, BarChart3, MessageSquare, Terminal, Smartphone, Blocks]
const projectGradients = [
  'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
  'from-violet-500/20 via-purple-500/10 to-fuchsia-500/20',
  'from-sky-500/20 via-blue-500/10 to-indigo-500/20',
  'from-orange-500/20 via-amber-500/10 to-yellow-500/20',
  'from-rose-500/20 via-pink-500/10 to-red-500/20',
  'from-lime-500/20 via-green-500/10 to-emerald-500/20',
]

const projects = [
  {
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis'],
    image: '/project-1.jpg',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    tech: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    image: '/project-2.jpg',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    tech: ['Next.js', 'Socket.io', 'MongoDB', 'Docker', 'AWS'],
    image: '/project-3.jpg',
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    tech: ['Go', 'Terraform', 'Kubernetes', 'GitHub Actions'],
    image: '/project-4.jpg',
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    tech: ['React Native', 'Node.js', 'Firebase', 'Redux'],
    image: '/project-5.jpg',
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    tech: ['React', 'Storybook', 'Radix UI', 'Tailwind CSS'],
    image: '/project-6.jpg',
    github: '#',
    demo: '#',
    featured: false,
  },
]

// Collect all unique techs
const allTechs = Array.from(new Set(projects.flatMap((p) => p.tech))).sort()

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showAll, setShowAll] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const { t } = useLanguage()

  const filteredProjects = projects.filter((p) => {
    if (activeFilter && !p.tech.includes(activeFilter)) return false
    if (!showAll && !p.featured) return false
    return true
  })

  const featuredCount = projects.filter((p) => p.featured).length

  return (
    <section id="projects" className="py-20 sm:py-28 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            {t.projects.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.projects.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Tech filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <Badge
            variant={activeFilter === null ? 'default' : 'secondary'}
            className={`cursor-pointer px-3 py-1.5 text-sm transition-all ${
              activeFilter === null
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0'
                : 'hover:bg-emerald-500/10'
            }`}
            onClick={() => setActiveFilter(null)}
          >
            All
          </Badge>
          {allTechs.map((tech) => (
            <Badge
              key={tech}
              variant={activeFilter === tech ? 'default' : 'secondary'}
              className={`cursor-pointer px-3 py-1.5 text-sm transition-all ${
                activeFilter === tech
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0'
                  : 'hover:bg-emerald-500/10'
              }`}
              onClick={() => setActiveFilter(activeFilter === tech ? null : tech)}
            >
              {tech}
            </Badge>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const projectIndex = projects.indexOf(project)
            const ProjectIcon = projectIcons[projectIndex % projectIcons.length]
            const item = t.projects.items[projectIndex]
            const gradient = projectGradients[projectIndex % projectGradients.length]

            return (
              <motion.div
                key={projectIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className={`group overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-emerald-500/20 backdrop-blur-sm bg-card/80 ${project.featured ? 'gradient-border-animated' : ''}`}
                  onMouseMove={(e) => {
                    const card = e.currentTarget
                    const rect = card.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const y = e.clientY - rect.top
                    const halfW = rect.width / 2
                    const halfH = rect.height / 2
                    const tiltX = ((y - halfH) / halfH) * -4
                    const tiltY = ((x - halfW) / halfW) * 4
                    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02,1.02,1.02)`
                    card.style.transition = 'transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)'
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
                    card.style.transition = 'transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)'
                  }}
                >
                  {/* Project image */}
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                    {/* Actual project screenshot */}
                    <img
                      src={project.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Subtle gradient overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 to-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        className="p-3 rounded-full bg-white text-emerald-600 shadow-lg"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        className="p-3 rounded-full bg-white text-emerald-600 shadow-lg"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                    {/* Featured badge */}
                    {project.featured && (
                      <Badge className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-md">
                        {t.projects.featured}
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`text-xs ${
                            activeFilter === tech
                              ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                              : ''
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5 text-xs border-emerald-500/20 text-emerald-600 hover:bg-emerald-500/10 hover:text-emerald-600 hover:border-emerald-500/30"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5" />
                          {t.projects.liveDemo}
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5 text-xs"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5" />
                          {t.projects.sourceCode}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Show more / Show less */}
        {!showAll && projects.length > featuredCount && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="gap-2 border-emerald-500/20 text-emerald-600 hover:bg-emerald-500/10 hover:text-emerald-600 hover:border-emerald-500/30"
            >
              <Blocks className="w-4 h-4" />
              {t.projects.viewAll} ({projects.length})
            </Button>
          </motion.div>
        )}
        {showAll && (
          <div className="text-center mt-12">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setShowAll(false)}
            >
              {t.projects.showLess}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
