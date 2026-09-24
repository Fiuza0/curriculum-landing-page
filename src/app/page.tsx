'use client'

import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import BackToTop from '@/components/sections/BackToTop'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
