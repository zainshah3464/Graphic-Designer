'use client'
import { motion } from 'framer-motion'

const Hero = () => (
  <section
    id="hero"
    className="snap-start h-screen flex flex-col items-center justify-center text-center px-4 pt-20"
  >
    <motion.h2
      className="text-4xl md:text-5xl font-bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      🎬 Video Editor & Graphic Designer
    </motion.h2>

    <motion.p
      className="text-gray-400 mt-4 max-w-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      Creative and cinematic visuals for brands, music, and stories. Turning imagination into high-quality visuals.
    </motion.p>

    <motion.div
      className="mt-8 flex gap-4 flex-wrap justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <a
        href="https://instagram.com/zainshah3464"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full"
      >
        Get in Touch
      </a>
      <a
        href="/Resume.pdf"
        target="_blank"
        className="border border-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-full"
      >
        Check Resume
      </a>
    </motion.div>
  </section>
)

export default Hero
