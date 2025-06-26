'use client'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

const DemoPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden scroll-smooth">
      
      {/* Custom Navbar for Demo Page */}
      <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <Link href="/" className="text-2xl font-bold">
          ZS
        </Link>
        <div className="space-x-6 text-sm">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/demo" className="hover:text-blue-400">Demos</Link>
          <Link href="/#about" className="hover:text-blue-400">About</Link>
          <Link href="/#contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </nav>

      {/* Main Demo Content */}
      <main className="flex-grow px-6 py-16 flex flex-col items-center text-center space-y-24">
        <h1 className="text-4xl font-bold">📂 Full Demo Gallery</h1>

        {/* Logos Section */}
        <section className="w-full max-w-6xl">
          <h2 className="text-2xl font-semibold mb-6">🔰 Logo Designs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {Array.from({ length: 3 }, (_, i) => (
              <Image
                key={i}
                src={`/demo/logo${i + 1}.png`}
                alt={`Logo ${i + 1}`}
                width={500}
                height={300}
                loading="lazy"
                className="rounded-lg w-full"
              />
            ))}
          </div>
        </section>


                {/* Videos Section */}
        <section className="w-full max-w-6xl">
          <h2 className="text-2xl font-semibold mb-6">🎥 Video Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }, (_, i) => (
            <video
  key={i}
  controls
  preload="metadata"
  poster={`/demo/t1${i + 1}.png`}
  className="rounded-lg w-full bg-black"
  src={`/demo/ad${i + 1}.mp4`}
/>

            ))}
          </div>
        </section>

        {/* Posters Section */}
        <section className="w-full max-w-6xl">
          <h2 className="text-2xl font-semibold mb-6">🖼️ Poster Designs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {Array.from({ length: 3 }, (_, i) => (
              <Image
                key={i}
                src={`/demo/poster${i + 1}.png`}
                alt={`Poster ${i + 1}`}
                width={500}
                height={300}
                loading="lazy"
                className="rounded-lg w-full"
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer (can stay from component) */}
      <Footer />
    </div>
  )
}

export default DemoPage
