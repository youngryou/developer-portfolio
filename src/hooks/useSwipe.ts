import { useState, useRef } from 'react'

interface UseSwipeProps {
  onSwipeLeft: () => void
  onSwipeRight: () => void
  swipeThreshold?: number
}

export const useSwipe = ({
  onSwipeLeft,
  onSwipeRight,
  swipeThreshold = 50,
}: UseSwipeProps) => {
  const [dragX, setDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setIsDragging(true)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    setDragX(e.touches[0].clientX - touchStartX.current)
  }

  const onTouchEnd = () => {
    setIsDragging(false)
    if (touchStartX.current === null) return

    if (dragX < -swipeThreshold) {
      onSwipeLeft()
    } else if (dragX > swipeThreshold) {
      onSwipeRight()
    }

    touchStartX.current = null
    setDragX(0)
  }

  return {
    dragX,
    isDragging,
    handlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    },
  }
}
