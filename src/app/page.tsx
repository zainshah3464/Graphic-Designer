'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#0f0f0f] text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
