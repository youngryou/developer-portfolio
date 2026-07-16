export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 text-center text-sm text-gray-500 border-t border-slate-700 mt-20">
      <p>&copy; {currentYear} Young Ryou. All rights reserved.</p>
    </footer>
  )
}
