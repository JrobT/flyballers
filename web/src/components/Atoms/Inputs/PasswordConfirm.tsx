import React from 'react'

import { FieldError, Label, PasswordField } from '@redwoodjs/forms'

interface Props {
  disabled?: boolean
  password: React.MutableRefObject<undefined>
  styles?: string
}

const PasswordConfirmInput: React.FC<Props> = ({
  disabled = false,
  password,
  styles = '',
}) => {
  const className = `${
    disabled && 'cursor-not-allowed'
  } flex flex-row w-full font-sans px-4 py-2 text-primary-800 border rounded group border-primary-200 bg-white placeholder-black/20 backdrop-blur-lg backdrop-filter ${styles}`

  return (
    <>
      <Label
        className="mb-2 ml-1.5 block font-sans text-white"
        name="password_confirm"
      >
        Confirm Password
      </Label>
      <PasswordField
        autoComplete="new-password"
        className={className}
        name="password_confirm"
        placeholder="Confirm your password"
        validation={{
          validate: (value) =>
            value === password.current || 'Passwords must match',
          required: 'You must confirm your password',
        }}
      />
      <FieldError
        className="ml-1.5 mt-2 text-left font-sans text-white/50"
        name="password_confirm"
      />
    </>
  )
}

export default PasswordConfirmInput
