'use client'
import Image from 'next/image'

const About = () => (
  <section
    id="about"
    className="snap-start h-screen flex items-center justify-center bg-[#121212] px-6"
  >
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
      {/* Profile Image */}
      <div className="w-40 h-40 md:w-60 md:h-60 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <Image
          src="/zain-blur.png"
          alt="Zain Ali Shah"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left">
        <h3 className="text-blue-400 text-sm uppercase tracking-wider mb-2">About Me</h3>
        <h2 className="text-3xl font-semibold mb-4">👋 I&apos;m Zain Ali Shah</h2>
        <p className="text-gray-400 max-w-xl text-sm md:text-base leading-relaxed">
          I&apos;m a passionate <strong>Video Editor</strong> and <strong>Graphic Designer</strong> with a deep love for storytelling.
          I&apos;ve worked on cinematic music videos, brand reels, motion graphics, and polished visual content. <br /><br />
          I specialize in <strong>Adobe Premiere Pro</strong>, <strong>After Effects</strong>, <strong>Photoshop</strong>, and <strong>Illustrator</strong>,
          and also love using tools like <strong>CapCut</strong>, <strong>Blender</strong>, <strong>Canva</strong>, and <strong>VidClippper</strong> to create with speed and style. <br /><br />
          I believe great visuals speak louder than words &mdash; and I&rsquo;m here to make your story unforgettable.
        </p>
      </div>
    </div>
  </section>
)

export default About
