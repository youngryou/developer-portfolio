export const Header = () => {
  return (
    <header className="px-8 py-6 border-b border-border-editor">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-xl font-bold">
          <a href="#" className="text-accent-blue hover:underline">
            Young Ryou1
          </a>
        </h1>
        <ul className="flex gap-6">
          <li>
            <a
              href="#projects"
              className="hover:text-accent-blue transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-accent-blue transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-accent-blue transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
