import React from 'react'

import { useAuth } from 'src/auth'

const SignOutButton: React.FC = () => {
  const { logOut } = useAuth()

  return (
    <button
      className="mx-auto max-w-xs rounded border border-white px-4 py-2 text-white hover:border-transparent hover:bg-primary-100 hover:text-primary-900"
      type="button"
      onClick={logOut}
    >
      Sign Out
    </button>
  )
}

export default SignOutButton
