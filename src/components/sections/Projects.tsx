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
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

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
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management, payment processing, and an admin dashboard. Handles 10K+ daily transactions.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis'],
    image: '/project-1-placeholder.jpg',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'AI Analytics Dashboard',
    description:
      'An intelligent analytics platform that leverages ML models to provide predictive insights and automated reporting for business metrics.',
    tech: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    image: '/project-2-placeholder.jpg',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A scalable chat platform supporting WebSocket connections, file sharing, and end-to-end encryption. Built for enterprise communication.',
    tech: ['Next.js', 'Socket.io', 'MongoDB', 'Docker', 'AWS'],
    image: '/project-3-placeholder.jpg',
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'DevOps Automation Toolkit',
    description:
      'A CLI toolkit that automates deployment pipelines, infrastructure provisioning, and monitoring setup for cloud-native applications.',
    tech: ['Go', 'Terraform', 'Kubernetes', 'GitHub Actions'],
    image: '/project-4-placeholder.jpg',
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'Mobile Fitness Tracker',
    description:
      'A cross-platform mobile app with workout tracking, nutrition planning, and social features. 50K+ active users.',
    tech: ['React Native', 'Node.js', 'Firebase', 'Redux'],
    image: '/project-5-placeholder.jpg',
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'Open Source UI Component Library',
    description:
      'A comprehensive React component library with 50+ accessible components, theming support, and detailed documentation.',
    tech: ['React', 'Storybook', 'Radix UI', 'Tailwind CSS'],
    image: '/project-6-placeholder.jpg',
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

  const filteredProjects = projects.filter((p) => {
    if (activeFilter && !p.tech.includes(activeFilter)) return false
    if (!showAll && !p.featured) return false
    return true
  })

  const featuredCount = projects.filter((p) => p.featured).length

  return (
    <section id="projects" className="py-20 sm:py-28 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I&apos;ve built that showcase my skills and
            passion for software development.
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
            const ProjectIcon = projectIcons[projects.indexOf(project) % projectIcons.length]
            const gradient = projectGradients[projects.indexOf(project) % projectGradients.length]

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className="group overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-emerald-500/20">
                  {/* Project image placeholder with gradient */}
                  <div className={`relative aspect-video bg-gradient-to-br ${gradient} overflow-hidden`}>
                    {/* Decorative grid */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle, currentColor 0.5px, transparent 0.5px)`,
                        backgroundSize: '16px 16px',
                      }}
                    />
                    {/* 📸 This is the project screenshot placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <ProjectIcon className="w-16 h-16 text-foreground/15 group-hover:text-foreground/25 transition-colors duration-500" />
                      </motion.div>
                    </div>
                    {/* Animated gradient border on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                        Featured
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {/* ✏️ PLACEHOLDER: Replace with your project name */}
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {/* ✏️ PLACEHOLDER: Replace with your project description */}
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="secondary"
                          className={`text-xs ${
                            activeFilter === t
                              ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                              : ''
                          }`}
                        >
                          {t}
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
                          Live Demo
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
                          Source Code
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
              View All Projects ({projects.length})
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
              Show Less
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
