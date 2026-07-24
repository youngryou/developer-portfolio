import { forwardRef, TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="text-text-editor font-semibold">
          {label}
        </label>
        <textarea
          ref={ref}
          suppressHydrationWarning
          id={id}
          className={`bg-black/80 border ${
            error ? 'border-accent-red' : 'border-border-editor'
          } rounded-lg p-3 text-text-editor focus:outline-none focus:border-accent-green transition-colors resize-none`}
          {...props}
        />
        {error && <span className="text-accent-red text-sm mt-1">{error}</span>}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
