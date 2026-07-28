import { SocialGroup } from '../common/SocialGroup'
import { FooterStats } from './FooterStats'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pt-4 pb-8 text-sm text-text-hint border-t border-border-editor mt-20">
      <FooterStats />

      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto px-6 md:px-8 gap-4">
        <p>&copy; {currentYear} Young Ryou. All rights reserved.</p>
        <SocialGroup />
      </div>
    </footer>
  )
}
