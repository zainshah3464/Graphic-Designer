'use client'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 200)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      id="contact"
      className={`snap-start min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0f0f0f] text-white space-y-6 transition-opacity duration-1000 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h3 className="text-4xl font-bold mb-2 animate-pulse">📩 Get in Touch</h3>

      <p className="text-gray-400 max-w-md">
        Let&rsquo;s collaborate or just say hello! I&apos;m based in{' '}
        <span className="text-white font-semibold">Korangi, Karachi, Pakistan</span>.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="mailto:zainshahzs110@gmail.com"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Email Me
        </a>
        <a
          href="https://www.instagram.com/zainshah3464"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-500 hover:opacity-90 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Instagram
        </a>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Prefer email? You can reach me anytime at{' '}
        <a className="underline text-blue-400" href="mailto:zainshahzs110@gmail.com">
          zainshahzs110@gmail.com
        </a>
      </p>
    </section>
  )
}

export default Contact
