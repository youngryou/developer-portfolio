export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 text-center text-sm text-text-hint border-t border-border-editor mt-20">
      <p>&copy; {currentYear} Young Ryou. All rights reserved.</p>
    </footer>
  )
}
