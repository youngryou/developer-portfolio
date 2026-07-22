'use client'

import Image from 'next/image'
import { useState } from 'react'
import { VscSettingsGear, VscCode, VscRocket, VscSmiley } from 'react-icons/vsc'
import { Card } from '../common/Card'
import { SocialGroup } from '../common/SocialGroup'

const philosophyData = [
  {
    title: 'Maintainability & Scalability',
    description:
      "I constantly think deeply about the project's architecture to ensure it is easy to maintain or add features and designs, and I am genuinely committed to creating common components and hooks.",
    icon: <VscSettingsGear />,
  },
  {
    title: 'Cleanliness',
    description:
      'Messy or duplicated code is my biggest pet peeve. I highly value writing clean, readable code and structuring files and folders in a logical way that anyone jumping into the codebase can easily follow.',
    icon: <VscCode />,
  },
  {
    title: 'Embracing New Tech',
    description:
      "Every project is an opportunity to grow. No matter how small, I make it a point to try something new, whether it's exploring a new tech trend, language, framework, or library, constantly searching for more efficient ways to build.",
    icon: <VscRocket />,
  },
  {
    title: 'User-Centric Approach',
    description:
      "At the end of the day, the user's experience is what matters most. I am deeply committed to creating user-friendly products so that users can intuitively understand and use the product.",
    icon: <VscSmiley />,
  },
]

export const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section
      id="about"
      className="pt-18 pb-12 md:pt-28 md:pb-18 bg-accent-blue/2"
    >
      <div className="mb-18 max-w-5xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">About</h2>

        <h3 className="text-accent-blue font-semibold text-2xl md:text-3xl text-center md:text-left mb-8">
          Full-Stack Developer & Dad of Twin Girls
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-8 bg-bg-editor border border-border-editor rounded-xl p-6 shadow-editor-card transition-all transform hover:border-accent-blue hover:-translate-y-1">
          <div className="flex flex-col shrink-0 items-center group">
            <div className="relative w-40 h-40 md:h-50 rounded-full overflow-hidden border-2 border-accent-blue shadow-lg">
              <Image
                src="/photo-young.webp"
                alt="Young Ryou Profile"
                fill
                sizes="160px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-accent-blue opacity-20 mix-blend-multiply pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />
            </div>

            <SocialGroup className="mt-5" />
          </div>

          <div className="flex flex-col max-w-2xl">
            <div
              className={`space-y-2 text-text-editor text-sm transition-all duration-300 overflow-hidden
                 ${isExpanded ? 'max-h-250' : 'max-h-20 md:max-h-none'}
               `}
            >
              <p>
                I’m an Auckland-based dad who loves two things: my twin
                daughters and building clean software.
              </p>
              <p>
                Through a diverse background that includes a Bachelor of
                Property and hands-on experience across business operations,
                sales, hospitality, and construction, I programme with a broad
                perspective to create user-friendly products.
              </p>
              <p>
                Based on my experience leading team projects, I focus on
                building stable and clean systems where team members can easily
                collaborate. I prioritise writing code that not only solves the
                problem at hand but is also easily maintainable and scalable in
                the future.
              </p>
              <p>
                I’m a developer who genuinely enjoys continuous learning and
                refactoring. Outside of coding, I like playing golf and singing.
              </p>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 text-accent-blue text-sm text-center font-semibold hover:underline md:hidden cursor-pointer"
            >
              {isExpanded ? 'Show Less' : 'Read More...'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <h3 className="text-accent-blue font-semibold text-2xl md:text-3xl text-center md:text-left mb-8">
          My Engineering Philosophy
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophyData.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              iconColor="text-accent-blue"
              hoverColor="hover:border-accent-blue"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
