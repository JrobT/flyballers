import React, { useState, useRef } from 'react'

import { useForm } from 'react-hook-form'

import { Form } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'

import Body from 'src/components/Atoms/Body'
import Header from 'src/components/Atoms/Header'
import PawPrint from 'src/components/Atoms/Icons/PawPrint'
import CheckboxInput from 'src/components/Atoms/Inputs/Checkbox'
import EmailInput from 'src/components/Atoms/Inputs/Email'
import PasswordInput from 'src/components/Atoms/Inputs/Password'
import PasswordConfirmInput from 'src/components/Atoms/Inputs/PasswordConfirm'

import Button from '../../Atoms/Button'

interface Props {
  error?: string
  loading: boolean
  onSubmit: (data: {
    email: string
    password_confirm: string
    password: string
  }) => void
}

const SignUpForm: React.FC<Props> = ({ error, loading, onSubmit }) => {
  const [agreedTerms, setAgreedTerms] = useState<boolean>(false)
  const formMethods = useForm()
  const password = useRef()

  password.current = formMethods.watch('password', '')

  const handleAgreedTerms = () => setAgreedTerms(!agreedTerms)

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="flex flex-row justify-center gap-4">
        <PawPrint />
        <Header
          category="secondary"
          color="text-white"
          styles="mb-4 text-center"
        >
          Hello there
        </Header>
        <PawPrint />
      </div>

      <Form formMethods={formMethods} noValidate onSubmit={onSubmit}>
        <div className="mb-4 flex flex-col">
          <EmailInput />
        </div>

        <div className="mb-4 flex flex-col">
          <PasswordInput />
        </div>

        {password.current && (
          <div className="mb-4 flex flex-col">
            <PasswordConfirmInput password={password} />
          </div>
        )}

        <div className="mt-8">
          <Button
            content="Submit"
            disabled={loading || !agreedTerms}
            type="submit"
          />

          <CheckboxInput
            aria="terms"
            checked={agreedTerms}
            onChange={handleAgreedTerms}
          >
            By signing up you are agreeing to the{' '}
            <Link
              className="text-primary-100 underline hover:text-white focus:outline-none"
              to={routes.termsAndConditions()}
            >
              terms and conditions
            </Link>
          </CheckboxInput>

          {error && <Body styles="text-white text-center mt-4">{error}</Body>}
        </div>
      </Form>
    </div>
  )
}

export default SignUpForm
