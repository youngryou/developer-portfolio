'use client'

import { useState, useEffect } from 'react'
import { TbMenu2, TbX } from 'react-icons/tb'
import Logo from '../common/Logo'
import { SocialGroup } from '../common/SocialGroup'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const menuItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-border-editor bg-bg-editor/80 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div
          className="absolute top-0 left-0 h-0.5 bg-accent-green transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <nav className="flex justify-between items-center max-w-5xl mx-auto px-6 md:px-8">
          <Logo />

          <ul className="hidden md:flex gap-6 font-mono text-sm">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-block hover:text-accent-green transition-all transform hover:-translate-y-0.5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden text-text-sub hover:text-accent-green transition-colors z-50"
          >
            {isOpen ? (
              <TbX className="w-6 h-6" />
            ) : (
              <TbMenu2 className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 h-screen bg-bg-editor/90 backdrop-blur-xl border-b border-border-editor transition-all duration-300 md:hidden flex flex-col justify-start pt-24 items-center z-40 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-4 text-center font-mono text-xl w-full">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-text-sub hover:text-accent-green active:text-accent-green transition-colors block py-3 px-6 w-full hover:bg-bg-editor/50"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <SocialGroup className="mt-8" />
      </div>
    </>
  )
}
