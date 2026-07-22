'use client'

import { useRouter, usePathname } from 'next/navigation'

export const useScrollToTop = () => {
  const router = useRouter()
  const pathname = usePathname()

  const scrollToTop = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  return scrollToTop
}
