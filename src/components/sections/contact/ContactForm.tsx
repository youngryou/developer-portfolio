'use client'

import { useState } from 'react'
import { Button } from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import { Textarea } from '@/components/common/Textarea'
import { LuCircleCheckBig, LuMailWarning, LuSend } from 'react-icons/lu'

export const ContactForm = () => {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = { name: '', email: '', message: '' }
    let hasError = false

    if (!formData.name.trim()) {
      newErrors.name = 'This field is required.'
      hasError = true
    }
    if (!formData.email.trim()) {
      newErrors.email = 'This field is required.'
      hasError = true
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
      hasError = true
    }
    if (!formData.message.trim()) {
      newErrors.message = 'This field is required.'
      hasError = true
    }

    if (hasError) {
      setErrors(newErrors)
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <LuCircleCheckBig className="text-4xl sm:text-5xl text-accent-green mx-auto mb-4" />
        <h3 className="text-xl sm:text-2xl font-semibold text-accent-yellow mb-4">
          Message Sent!
        </h3>
        <p className="text-text-sub mb-8">
          Thank you for reaching out. I will get back to you as soon as
          possible.
        </p>

        <Button
          key="send-another-message"
          variant="outline"
          label="Send another message"
          icon={LuSend}
          onClick={() => setStatus('idle')}
        />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <Input
        id="name"
        name="name"
        label="Name"
        placeholder="John Doe"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <Input
        id="email"
        name="email"
        type="email"
        label="Email"
        placeholder="john@example.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <Textarea
        id="message"
        name="message"
        label="Message"
        placeholder="Hello Young, I would like to..."
        rows={5}
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />

      {status === 'error' && (
        <div className="flex items-center gap-2 text-accent-red bg-accent-red/10 p-3 rounded">
          <LuMailWarning className="text-xl shrink-0" />
          <p className="text-sm">
            Something went wrong. Please try again later.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-2 px-6 py-3 flex items-center justify-center gap-2 bg-accent-green/90 text-bg-editor font-semibold rounded-lg border border-accent-green 
        transition-all duration-300 transform select-none cursor-pointer 
        hover:bg-transparent hover:text-accent-green hover:-translate-y-0.5 shadow-[0_0_20px_rgba(89,218,130,0.15)] hover:shadow-[0_0_25px_rgba(89,218,130,0.3)] 
        disabled:bg-accent-green/60 disabled:cursor-not-allowed disabled:pointer-events-none"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
        <LuSend />
      </button>
    </form>
  )
}
