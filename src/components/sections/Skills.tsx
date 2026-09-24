'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML / CSS', level: 98 },
      { name: 'Vue.js', level: 75 },
      { name: 'Redux / Zustand', level: 85 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / FastAPI', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'REST / GraphQL', level: 87 },
      { name: 'Prisma ORM', level: 82 },
      { name: 'Microservices', level: 80 },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    skills: [
      { name: 'Docker / K8s', level: 82 },
      { name: 'AWS / GCP', level: 78 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'Linux / Bash', level: 80 },
      { name: 'Git / GitHub', level: 95 },
      { name: 'Terraform', level: 70 },
    ],
  },
]

const tools = [
  'VS Code', 'Figma', 'Postman', 'Jira', 'Notion', 'Slack',
  'Chrome DevTools', 'Storybook', 'Jest', 'Cypress', 'Vercel', 'Netlify',
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 sm:py-28 bg-muted/30 relative" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-500/3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            Skills
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels across different domains.
          </p>
        </motion.div>

        {/* Tabs for skill categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-10">
              {skillCategories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {cat.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">
                          {skill.name}
                        </span>
                        <span className={`text-xs font-medium ${skill.level >= 90 ? 'text-emerald-500' : skill.level >= 80 ? 'text-teal-500' : 'text-muted-foreground'}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress value={isInView ? skill.level : 0} className="h-2.5 [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-teal-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-center mb-6">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, idx) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.04 }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all cursor-default border border-border/50 hover:border-transparent"
                >
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
