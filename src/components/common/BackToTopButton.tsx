'use client'

import { useEffect, useState } from 'react'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { BiArrowToTop } from 'react-icons/bi'

export default function BackToTopButton() {
  const scrollToTop = useScrollToTop()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleShowButton = () => {
      setShow(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleShowButton)
    return () => window.removeEventListener('scroll', handleShowButton)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 text-xl p-2 md:p-3 bg-bg-editor border border-border-editor rounded-full text-accent-green shadow-editor-card hover:-translate-y-1 transition-all cursor-pointer"
    >
      <BiArrowToTop />
    </button>
  )
}
