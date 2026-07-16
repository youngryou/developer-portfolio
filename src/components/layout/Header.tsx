export const Header = () => {
  return (
    <header className="px-8 py-6 border-b border-slate-700">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-xl font-bold">
          <a href="#" className="text-sky-700 hover:underline">
            Young Ryou
          </a>
        </h1>
        <ul className="flex gap-6">
          <li>
            <a
              href="#projects"
              className="hover:text-sky-700 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-sky-700 transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sky-700 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
