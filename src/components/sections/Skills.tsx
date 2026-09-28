'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useLanguage } from '@/hooks/use-language'

const skillCategories = [
    {
    id: 'backend',
    labelKey: 'backend' as const,
    skills: [
      { name: 'Python', level: 73 },
      { name: 'C# / .NET', level: 90 },
      { name: 'Pandas / NumPy', level: 79 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'REST APIs', level: 62 },
      { name: 'Java', level: 80 },
      { name: 'Data Pipelines', level: 85 },
      { name: 'Process Automation', level: 88 },
    ],
  },
    {
    id: 'devops',
    labelKey: 'devops' as const,
    skills: [
      { name: 'AWS (EC2, S3, RDS)', level: 60 },
      { name: 'Kubernetes', level: 54 },
      { name: 'Linux bash', level: 82 },
      { name: 'Docker', level: 75 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'Networks & Security', level: 80 },
    ],
  },
  {
    id: 'frontend',
    labelKey: 'frontend' as const,
    skills: [
      { name: 'HTML5 / CSS3', level: 70 },
      { name: 'R', level: 65 },
    ],
  },

]

const toolGroups = [
  {
    category: 'Development',
    items: ['VS Code', 'Visual Studio', 'Postman', 'Git'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    category: 'VR/AR & Design',
    items: ['Unreal Engine', 'Unity', 'VRED', 'Adobe PS/AI'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    category: 'Data & Analysis',
    items: ['Pandas', 'NumPy', 'Jupyter', 'R Studio'],
    color: 'from-cyan-500 to-sky-500',
  },
  {
    category: 'Infrastructure',
    items: ['AWS Console', 'Windows Server', 'Linux', 'Arduino'],
    color: 'from-amber-500 to-orange-500',
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

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
            {t.skills.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.skills.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* Tabs for skill categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="backend" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-10">
              {skillCategories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white">
                  {t.skills[cat.labelKey]}
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
                      <div className="relative overflow-hidden rounded-full">
                        <Progress value={isInView ? skill.level : 0} className="h-2.5 [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-teal-500 [&>div]:relative [&>div]:overflow-hidden" />
                        {/* Shimmer overlay on progress bar */}
                        {isInView && (
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2.5s_infinite] rounded-full" style={{ width: `${skill.level}%` }} />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Tools & Platforms - Grouped by category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8">
            {t.skills.toolsTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {toolGroups.map((group, gIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + gIdx * 0.1 }}
                className="group"
              >
                <div className="text-center mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-emerald-500 transition-colors">
                    {group.category}
                  </span>
                  <div className={`mx-auto mt-1 w-8 h-0.5 rounded-full bg-gradient-to-r ${group.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {group.items.map((tool, idx) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + gIdx * 0.1 + idx * 0.03 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-1.5 text-xs hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all cursor-default border border-border/50 hover:border-transparent hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5"
                      >
                        {tool}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
