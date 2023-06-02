import React from 'react'

import { useForm } from 'react-hook-form'

import { Form } from '@redwoodjs/forms'

import Body from 'src/components/Atoms/Body'
import { Header } from 'src/components/Atoms/Header'
import PawPrint from 'src/components/Atoms/Icons/PawPrint'
import EmailInput from 'src/components/Atoms/Inputs/Email'
import PasswordInput from 'src/components/Atoms/Inputs/Password'

import Button from '../../Atoms/Button'

interface Props {
  error?: string
  loading: boolean
  onSubmit: (data: { email: string; password: string }) => void
}

const SignInForm: React.FC<Props> = ({ error, loading, onSubmit }) => {
  const formMethods = useForm()

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="flex flex-row gap-4">
        <PawPrint />
        <Header
          category="secondary"
          color="text-white"
          styles="mb-4 text-center"
        >
          Welcome back
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

        <div className="mt-8">
          <Button content="Submit" disabled={loading} type="submit" />

          {error && <Body styles="text-white text-center mt-4">{error}</Body>}
        </div>
      </Form>
    </div>
  )
}

export default SignInForm
