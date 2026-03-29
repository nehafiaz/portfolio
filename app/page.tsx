"use client"

import dynamic from 'next/dynamic'
import { Suspense, useEffect, useRef } from 'react'
import { useScrollStore } from '@/lib/store'

// Components
import Preloader from '@/components/layout/Preloader'
import Navbar from '@/components/layout/Navbar'
import ScrollProgress from '@/components/shared/ScrollProgress'
import CustomCursor from '@/components/shared/CustomCursor'
import Footer from '@/components/layout/Footer'

// Sections
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TechStrip from '@/components/sections/TechStrip'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Skills from '@/components/sections/Skills'
import Timeline from '@/components/sections/Timeline'
import Contact from '@/components/sections/Contact'
import CurrentlyBuilding from '@/components/sections/CurrentlyBuilding'
import Testimonials from '@/components/sections/Testimonials'

export default function Home() {
  const currentSection = useScrollStore((state) => state.currentSection)
  const setCurrentSection = useScrollStore((state) => state.setCurrentSection)
  const setProgress = useScrollStore((state) => state.setProgress)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const totalHeight = document.documentElement.scrollHeight - windowHeight
      const progress = scrollY / totalHeight
      
      setProgress(progress)
      
      // Detailed section detection for morphing
      const sections = ['hero', 'about', 'work', 'skills', 'experience', 'contact']
      const sectionElements = sections.map(id => document.getElementById(id))
      
      let activeIndex = 0
      sectionElements.forEach((el, index) => {
        if (el && scrollY >= el.offsetTop - windowHeight / 2) {
          activeIndex = index
        }
      })
      
      setCurrentSection(activeIndex)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setCurrentSection, setProgress])

  return (
    <main id="main" className="relative bg-[#000000]">
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full">
        <div id="hero">
          <Hero />
        </div>
        <CurrentlyBuilding />
        <TechStrip />
        <div id="about">
          <About />
        </div>
        <div id="work">
          <FeaturedProjects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <Testimonials />
        <div id="experience">
          <Timeline />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  )
}


