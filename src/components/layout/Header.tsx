import Logo from '../common/Logo'

export const Header = () => {
  return (
    <header className="px-8 py-6 border-b border-border-editor">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <Logo />

        <ul className="flex gap-6">
          <li>
            <a
              href="#projects"
              className="hover:text-accent-green transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-accent-green transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-accent-green transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
