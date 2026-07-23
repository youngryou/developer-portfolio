'use client'

import Image from 'next/image'
import { useState, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { TbChevronLeft, TbChevronRight, TbX } from 'react-icons/tb'

interface ProjectImageSliderProps {
  images: string[]
}

export default function ProjectImageSlider({
  images,
}: ProjectImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const goTo = useCallback(
    (index: number) => {
      if (index < 0) setCurrentIndex(images.length - 1)
      else if (index >= images.length) setCurrentIndex(0)
      else setCurrentIndex(index)
    },
    [images.length],
  )

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      goTo(currentIndex + 1)
    } else if (distance < -minSwipeDistance) {
      goTo(currentIndex - 1)
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  if (images.length === 0) {
    return (
      <div className="w-full h-32 md:h-48 rounded-lg border border-border-editor bg-bg-editor/60 flex items-center justify-center text-text-hint text-base">
        No images available
      </div>
    )
  }

  const current = images[currentIndex]

  return (
    <>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative group w-full aspect-video rounded-lg overflow-hidden border border-border-editor bg-bg-editor/60 select-none touch-pan-y"
      >
        <Image
          src={current}
          alt={`Project screenshot ${currentIndex + 1}`}
          fill
          unoptimized
          className="object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => setIsFullscreen(true)}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goTo(currentIndex - 1)
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-bg-editor/80 border border-border-editor rounded-full p-1.5 text-text-sub opacity-0 group-hover:opacity-100 transition-opacity hover:bg-bg-editor hover:text-text-editor cursor-pointer"
              aria-label="Previous image"
            >
              <TbChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goTo(currentIndex + 1)
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-bg-editor/80 border border-border-editor rounded-full p-1.5 text-text-sub opacity-0 group-hover:opacity-100 transition-opacity hover:bg-bg-editor hover:text-text-editor cursor-pointer"
              aria-label="Next image"
            >
              <TbChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentIndex(index)
                }}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === currentIndex
                    ? 'bg-accent-green w-4'
                    : 'bg-text-hint/50 hover:bg-text-hint'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {images.length > 1 && (
          <span className="absolute top-2 right-2 bg-bg-editor/80 border border-border-editor rounded px-2 py-0.5 text-xs text-text-sub">
            {currentIndex + 1} / {images.length}
          </span>
        )}
      </div>

      {isFullscreen &&
        typeof window !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-120 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 text-text-sub hover:text-text-editor hover:rotate-90 transition-all cursor-pointer"
              aria-label="Close fullscreen"
            >
              <TbX className="w-8 h-8" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goTo(currentIndex - 1)
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-bg-editor/80 border border-border-editor rounded-full p-2 text-text-sub hover:text-text-editor transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <TbChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goTo(currentIndex + 1)
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-bg-editor/80 border border-border-editor rounded-full p-2 text-text-sub hover:text-text-editor transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <TbChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current}
              alt={`Project screenshot ${currentIndex + 1}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="max-w-full max-h-full object-contain rounded-lg select-none touch-pan-y"
              onClick={(e) => e.stopPropagation()}
            />

            {images.length > 1 && (
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-bg-editor border border-border-editor rounded-full px-3 py-1 text-sm text-text-editor">
                {currentIndex + 1} / {images.length}
              </span>
            )}
          </div>,
          document.body,
        )}
    </>
  )
}
