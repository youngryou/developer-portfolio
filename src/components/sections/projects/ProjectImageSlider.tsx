'use client'

import Image from 'next/image'
import { useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useSwipe } from '@/hooks/useSwipe'
import { TbChevronLeft, TbChevronRight, TbX } from 'react-icons/tb'

interface ProjectImageSliderProps {
  images: string[]
}

export default function ProjectImageSlider({
  images,
}: ProjectImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (index < 0) setCurrentIndex(images.length - 1)
      else if (index >= images.length) setCurrentIndex(0)
      else setCurrentIndex(index)
    },
    [images.length],
  )

  const { dragX, isDragging, handlers } = useSwipe({
    onSwipeLeft: () => goTo(currentIndex + 1),
    onSwipeRight: () => goTo(currentIndex - 1),
  })

  if (images.length === 0) {
    return (
      <div className="w-full h-32 md:h-48 rounded-lg border border-border-editor bg-bg-editor/60 flex items-center justify-center text-text-hint text-base">
        No images available
      </div>
    )
  }

  return (
    <>
      <div className="relative group w-full aspect-video rounded-lg overflow-hidden border border-border-editor bg-bg-editor/60 select-none touch-pan-y">
        <div
          {...handlers}
          className={`flex w-full h-full ${
            isDragging ? '' : 'transition-transform duration-300 ease-out'
          }`}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragX}px))`,
          }}
        >
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-full shrink-0">
              <Image
                src={img}
                alt={`Project screenshot ${index + 1}`}
                fill
                unoptimized
                className="object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setIsFullscreen(true)}
              />
            </div>
          ))}
        </div>

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
              className="absolute top-4 right-4 z-50 text-text-sub hover:text-text-editor hover:rotate-90 transition-all cursor-pointer"
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-bg-editor/80 border border-border-editor rounded-full p-2 text-text-sub hover:text-text-editor transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <TbChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    goTo(currentIndex + 1)
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-bg-editor/80 border border-border-editor rounded-full p-2 text-text-sub hover:text-text-editor transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <TbChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <div
              {...handlers}
              className="w-full h-full flex items-center overflow-hidden touch-pan-y"
            >
              <div
                className={`flex w-full h-full items-center ${
                  isDragging ? '' : 'transition-transform duration-300 ease-out'
                }`}
                style={{
                  transform: `translateX(calc(-${currentIndex * 100}% + ${dragX}px))`,
                }}
              >
                {images.map((img, index) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={index}
                    src={img}
                    alt={`Project screenshot ${index + 1}`}
                    className="w-full h-full object-contain shrink-0 select-none"
                    onClick={(e) => e.stopPropagation()}
                  />
                ))}
              </div>
            </div>

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
