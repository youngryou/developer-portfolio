'use client'

import { useState, useEffect } from 'react'
import { Button } from '../common/Button'
import { SocialGroup } from '../common/SocialGroup'
import { TbFileCvFilled, TbMailFilled } from 'react-icons/tb'
import { RiArrowDownWideLine } from 'react-icons/ri'

const SEQUENCES = [
  'Full-Stack Developer engineering the entire application.',
  'Building user-friendly digital products from end to end.',
]

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState('')
  const [sequenceIndex, setSequenceIndex] = useState(0)

  useEffect(() => {
    const fullText = SEQUENCES[sequenceIndex]

    const handleTyping = () => {
      if (currentText !== fullText) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
      } else {
        setCurrentText('')
        setSequenceIndex((prev) => (prev + 1) % SEQUENCES.length)
      }
    }

    const currentSpeed =
      currentText === fullText ? 1500 : currentText === '' ? 400 : 60
    const timer = setTimeout(handleTyping, currentSpeed)

    return () => clearTimeout(timer)
  }, [currentText, sequenceIndex])

  return (
    <section className="pt-24 md:pt-28 pb-12 text-center flex flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center">
        <SocialGroup className="mb-6 md:mb-8" />

        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Kia Ora, My name is{' '}
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            <span className="text-accent-green">Young</span>.
          </h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-sub leading-relaxed min-h-16 md:min-h-10 px-12">
            {currentText}
            <span className="animate-blink border-r-2 ml-1" />
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 md:mt-10">
          <Button
            variant="primary"
            label="View My CV"
            icon={TbFileCvFilled}
            href="https://youngryou.github.io/developer-resume/"
          />
          <Button
            variant="outline"
            label="Contact Me"
            icon={TbMailFilled}
            href="#contact"
          />
        </div>
      </div>

      <a
        href="#stats"
        className="animate-bounce-slow mt-4 md:mt-8 p-2 text-text-sub hover:text-accent-green transition-colors duration-300 cursor-pointer"
        aria-label="Scroll down to Stats"
      >
        <RiArrowDownWideLine className="w-8 h-8 md:w-10 md:h-10" />
      </a>
    </section>
  )
}
