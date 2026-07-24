import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={id} className="text-text-editor font-semibold">
          {label}
        </label>
        <input
          ref={ref}
          suppressHydrationWarning
          id={id}
          className={`bg-black/80 border ${
            error ? 'border-accent-red' : 'border-border-editor'
          } rounded-lg p-3 text-text-editor focus:outline-none focus:border-accent-green transition-colors`}
          {...props}
        />
        {error && <span className="text-accent-red text-sm mt-1">{error}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'
