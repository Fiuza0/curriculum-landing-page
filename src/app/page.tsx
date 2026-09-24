'use client'

import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import TechMarquee from '@/components/sections/TechMarquee'
import Stats from '@/components/sections/Stats'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import Education from '@/components/sections/Education'
import Blog from '@/components/sections/Blog'
import CTASection from '@/components/sections/CTASection'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/sections/BackToTop'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechMarquee />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Education />
        <Blog />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
