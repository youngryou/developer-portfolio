'use client'

import { useState, useEffect } from 'react'
import { TbFileCvFilled, TbMailFilled } from 'react-icons/tb'
import { Button } from '../common/Button'
import { SocialGroup } from '../common/SocialGroup'

const SEQUENCES = [
  'A Full-Stack Developer engineering the entire application.',
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
    <section className="pt-24 md:pt-36 pb-24 text-center">
      <SocialGroup className="mb-8" />

      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Kia Ora, My name is{' '}
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-accent-green">Young</span>.
        </h2>

        <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-sub leading-relaxed min-h-16 md:min-h-10 px-12">
          {currentText}
          <span className="animate-blink border-r-2 ml-1" />
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-8 md:mt-12">
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
          // onClick={}
          // hoverColorClass="group-hover:text-accent-yellow"
        />
      </div>
    </section>
  )
}
