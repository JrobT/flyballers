import React from 'react'

import { EmailField, FieldError, Label } from '@redwoodjs/forms'

interface Props {
  disabled?: boolean
  styles?: string
}

const EmailInput: React.FC<Props> = ({ disabled = false, styles = '' }) => {
  const className = `${
    disabled && 'cursor-not-allowed'
  } flex flex-row w-full font-sans px-4 py-2 text-primary-800 border rounded group border-primary-200 bg-white placeholder-black/20 backdrop-blur-lg backdrop-filter ${styles}`

  return (
    <>
      <Label className="mb-2 ml-1.5 block font-sans text-white" name="email">
        Email
      </Label>
      <EmailField
        autoComplete="email"
        className={className}
        name="email"
        placeholder="Enter your email"
        validation={{
          pattern: {
            message: 'Please enter a valid email address',
            value: /[^@]+@[^.]+\..{2,}/,
          },
          required: 'Email required',
        }}
      />
      <FieldError
        className="ml-1.5 mt-2 text-left font-sans text-white/50"
        name="email"
      />
    </>
  )
}

export default EmailInput
