'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ExternalLink,
  Github,
  Layers,
  Eye,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory management, payment processing, and an admin dashboard. Handles 10K+ daily transactions.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis'],
    image: '/project-1-placeholder.jpg', // 📸 PLACEHOLDER: Replace with project screenshot
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'AI Analytics Dashboard',
    description:
      'An intelligent analytics platform that leverages ML models to provide predictive insights and automated reporting for business metrics.',
    tech: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    image: '/project-2-placeholder.jpg', // 📸 PLACEHOLDER: Replace with project screenshot
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A scalable chat platform supporting WebSocket connections, file sharing, and end-to-end encryption. Built for enterprise communication.',
    tech: ['Next.js', 'Socket.io', 'MongoDB', 'Docker', 'AWS'],
    image: '/project-3-placeholder.jpg', // 📸 PLACEHOLDER: Replace with project screenshot
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'DevOps Automation Toolkit',
    description:
      'A CLI toolkit that automates deployment pipelines, infrastructure provisioning, and monitoring setup for cloud-native applications.',
    tech: ['Go', 'Terraform', 'Kubernetes', 'GitHub Actions'],
    image: '/project-4-placeholder.jpg', // 📸 PLACEHOLDER: Replace with project screenshot
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'Mobile Fitness Tracker',
    description:
      'A cross-platform mobile app with workout tracking, nutrition planning, and social features. 50K+ active users.',
    tech: ['React Native', 'Node.js', 'Firebase', 'Redux'],
    image: '/project-5-placeholder.jpg', // 📸 PLACEHOLDER: Replace with project screenshot
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'Open Source UI Component Library',
    description:
      'A comprehensive React component library with 50+ accessible components, theming support, and detailed documentation.',
    tech: ['React', 'Storybook', 'Radix UI', 'Tailwind CSS'],
    image: '/project-6-placeholder.jpg', // 📸 PLACEHOLDER: Replace with project screenshot
    github: '#',
    demo: '#',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.filter((p) => p.featured)
  const hasMore = projects.length > displayedProjects.length

  return (
    <section id="projects" className="py-20 sm:py-28 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I&apos;ve built that showcase my skills and
            passion for software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden h-full hover:shadow-xl transition-all duration-300 border-border/50">
                {/* Project image placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 via-primary/5 to-muted overflow-hidden">
                  {/* 📸 This is the project screenshot placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="w-16 h-16 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      className="p-3 rounded-full bg-white text-primary"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className="p-3 rounded-full bg-white text-primary"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                  {/* Featured badge */}
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground border-0">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {/* ✏️ PLACEHOLDER: Replace with your project name */}
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {/* ✏️ PLACEHOLDER: Replace with your project description */}
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1.5 text-xs"
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
          ))}
        </div>

        {/* Show more / Show less */}
        {!showAll && projects.length > 2 && (
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
              className="gap-2"
            >
              <Layers className="w-4 h-4" />
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
