import React from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import AuthForms from 'src/components/Organisms/Auth/AuthForms'

const AuthPage: React.FC = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) navigate(routes.events())

  return (
    <>
      <MetaTags title="Authentication" description="Authentication page" />
      <AuthForms />
    </>
  )
}

export default AuthPage
