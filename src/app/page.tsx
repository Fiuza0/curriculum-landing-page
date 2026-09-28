'use client'

import { LanguageProvider } from '@/hooks/use-language'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import TechMarquee from '@/components/sections/TechMarquee'
//import Stats from '@/components/sections/Stats'  <-- future feature 
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import SkillsRadarChart from '@/components/sections/SkillsRadarChart'
import TechShowcase from '@/components/sections/TechShowcase'
//import ContributionGraph from '@/components/sections/ContributionGraph'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
//import Testimonials from '@/components/sections/Testimonials'
import Education from '@/components/sections/Education'
//import Blog from '@/components/sections/Blog'
import CTASection from '@/components/sections/CTASection'
import Contact from '@/components/sections/Contact'
//import Learning from '@/components/sections/Learning'
//import InteractiveTerminal from '@/components/sections/InteractiveTerminal'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/sections/BackToTop'
import PageLoader from '@/components/sections/PageLoader'
import NowPlaying from '@/components/sections/NowPlaying'
import CustomCursor from '@/components/sections/CustomCursor'
import CommandPalette from '@/components/sections/CommandPalette'
import SectionReveal from '@/components/sections/SectionReveal'
import SectionDivider from '@/components/sections/SectionDivider'
import ParallaxStars from '@/components/sections/ParallaxStars'
import CodePlayground from '@/components/sections/CodePlayground'

export default function Home() {
  return (
    <LanguageProvider>
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <PageLoader />
      <CustomCursor />
      <CommandPalette />
      <Navbar />
      <main className="flex-1">
        <ParallaxStars />
        <Hero />
        <TechMarquee />
        <SectionDivider />
        <SectionReveal>
          <About />
        </SectionReveal>
        <SectionDivider />
        <SectionReveal>
          <Skills />
        </SectionReveal>
        <SectionDivider />
        <SectionReveal>
          <Experience />
        </SectionReveal>
        <SectionDivider />
        <SectionReveal>
          <Education />
        </SectionReveal>
        <SectionDivider />
        <SectionReveal>
          <SkillsRadarChart />
        </SectionReveal>
        <SectionDivider />
        <SectionReveal>
          <TechShowcase />
        </SectionReveal>
        <SectionDivider />
        <SectionReveal>
          <Projects />
        </SectionReveal>
        <SectionDivider />
        <SectionReveal>
          <CodePlayground />
        </SectionReveal>
        <SectionDivider />
        <SectionReveal>
          <CTASection />
        </SectionReveal>
        <SectionReveal>
          <Contact />
        </SectionReveal>
      </main>
      <Footer />
      <BackToTop />
      <NowPlaying />
    </div>
    </LanguageProvider>
  )
}
