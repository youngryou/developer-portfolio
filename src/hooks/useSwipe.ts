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
  const touchStartY = useRef<number | null>(null)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    setIsDragging(true)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return

    const currentX = e.touches[0].clientX
    const currentY = e.touches[0].clientY
    const diffX = currentX - touchStartX.current
    const diffY = currentY - touchStartY.current

    if (Math.abs(diffY) > Math.abs(diffX)) return

    setDragX(diffX)
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
    touchStartY.current = null
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
