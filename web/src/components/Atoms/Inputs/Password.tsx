import React from 'react'

import { FieldError, Label, PasswordField } from '@redwoodjs/forms'

interface Props {
  disabled?: boolean
  styles?: string
}

const PasswordInput: React.FC<Props> = ({ disabled = false, styles = '' }) => {
  const className = `${
    disabled && 'cursor-not-allowed'
  } flex flex-row w-full font-sans px-4 py-2 text-primary-800 border rounded group border-primary-200 bg-white placeholder-black/20 backdrop-blur-lg backdrop-filter ${styles}`

  return (
    <>
      <Label className="mb-2 ml-1.5 block font-sans text-white" name="password">
        Password
      </Label>
      <PasswordField
        autoComplete="new-password"
        className={className}
        name="password"
        placeholder="Enter your password"
        validation={{
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
          },
          required: 'Password is required',
        }}
      />
      <FieldError
        className="ml-1.5 mt-2 text-left font-sans text-white/50"
        name="password"
      />
    </>
  )
}

export default PasswordInput
