import Link from 'next/link'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center font-mono text-2xl font-medium tracking-tight select-none cursor-pointer ${className}`}
    >
      <span className="text-accent-green mr-2 font-bold">&gt;</span>

      <span className="text-text-editor hover:text-accent-green font-semibold">
        Young Ryou
      </span>

      <span className="text-text-hint ml-1.5 font-light text-sm">
        Portfolio
      </span>

      <span className="text-accent-green ml-1 font-bold animate-blink">_</span>
    </Link>
  )
}
