'use client'

import { useState, useEffect } from 'react'

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
    <section className="py-36 text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-6">
        Kia Ora, My name is{' '}
      </h3>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-accent-green">Young</span>.
      </h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-sub leading-relaxed min-h-9 md:min-h-10">
        {currentText}
        <span className="animate-blink border-r-2 ml-1" />
      </p>
    </section>
  )
}
