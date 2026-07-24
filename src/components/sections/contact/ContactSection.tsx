'use client'

import { ContactForm } from './ContactForm'

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="pt-18 pb-12 md:pt-28 md:pb-18 max-w-3xl mx-auto px-6 md:px-8"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent-green">
          Get In Touch
        </h2>
        <p className="text-base sm:text-lg text-text-sub">
          Have a question or want to work together? Leave a message below.
        </p>
      </div>

      <div className="bg-bg-editor border border-border-editor rounded-xl p-6 sm:p-8 flex flex-col h-full shadow-editor-card">
        <ContactForm />
      </div>
    </section>
  )
}
