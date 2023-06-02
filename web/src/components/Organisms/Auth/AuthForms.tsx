import React, { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import SignInForm from 'src/components/Templates/Auth/SignInForm'
import SignUpForm from 'src/components/Templates/Auth/SignUpForm'

const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`

enum FormType {
  SignIn,
  SignUp,
}

interface FormData {
  email: string
  password_confirm?: string
  password: string
}

const AuthForms: React.FC = () => {
  const [error, setError] = useState<string>()
  const [formType, setFormType] = useState<FormType>(FormType.SignIn)
  const [loading, setLoading] = useState<boolean>(false)
  const [createUserMutation] = useMutation(CREATE_USER_MUTATION)

  const authHook = useAuth()

  const onSubmit = async (data: FormData) => {
    setLoading(true)

    try {
      const auth = await authenticate({ formType, data, auth: authHook })

      if (auth.error) {
        setLoading(false)
        setError(auth.error.message)
        return
      }

      if (formType === FormType.SignUp) {
        await createUserMutation({
          variables: { input: { email: data.email } },
        })
        setLoading(false)
        return
      }
    } catch (e) {
      setError(e.message || 'An error has occurred')
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4">
      {formType === FormType.SignIn ? (
        <>
          <SignInForm onSubmit={onSubmit} error={error} loading={loading} />
          <p className="mt-4 text-center text-white">
            Don&apos;t have an account?{' '}
            <button
              className="font-sans text-white/50 underline hover:text-white focus:outline-none"
              onClick={() => setFormType(FormType.SignUp)}
            >
              Sign up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onSubmit={onSubmit} error={error} loading={loading} />
          <p className="mt-4 text-center text-white">
            Already have an account?{' '}
            <button
              className="font-sans text-white/50 underline hover:text-white focus:outline-none"
              onClick={() => setFormType(FormType.SignIn)}
            >
              Sign in
            </button>
          </p>
        </>
      )}

      <div className="mx-auto flex flex-col">
        <div className="mx-auto mt-10 flex flex-row items-center gap-x-3 gap-y-2 text-center">
          <Link
            className="font-sans text-white/20 hover:text-white/50"
            rel="noopener noreferrer"
            target="_blank"
            to={routes.termsAndConditions()}
          >
            Terms and conditions
          </Link>
        </div>
      </div>
    </div>
  )
}

interface Authenticate {
  auth: ReturnType<typeof useAuth>
  data: FormData
  formType: FormType
}

const authenticate = async ({ auth, data, formType }: Authenticate) =>
  formType === FormType.SignUp
    ? await auth.signUp({
        email: data.email,
        password: data.password,
      })
    : await auth.logIn({
        authMethod: 'password',
        email: data.email,
        password: data.password,
      })

export default AuthForms
