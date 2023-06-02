import { useState } from 'react'

import { Link } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import Hamburger from 'src/components/Atoms/Hamburger'
import Brand from 'src/components/Molecules/Brand'
import SignOutButton from 'src/components/Molecules/SignOutButton'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const { isAuthenticated } = useAuth()

  return (
    <nav className="flex w-full flex-col items-center justify-between gap-6 bg-primary-500 p-6 text-white lg:flex-row">
      <Brand />

      <div className="block lg:hidden">
        <Hamburger
          onClick={() => setShowNavbar(!showNavbar)}
          showNavbar={showNavbar}
        />
      </div>

      <div
        className={`${
          showNavbar ? '' : 'hidden'
        } flex w-full flex-col justify-between space-y-4 font-sans lg:block lg:flex-row lg:items-center lg:gap-6 lg:space-x-4 lg:space-y-0`}
      >
        <Link
          to="/"
          className="mx-auto max-w-xs text-white hover:text-primary-100"
        >
          Events
        </Link>
        {isAuthenticated ? (
          <SignOutButton />
        ) : (
          <>
            <Link
              to="/auth"
              className="mx-auto max-w-xs text-white hover:text-primary-100"
            >
              Sign up
            </Link>
            <Link
              to="/auth"
              className="mx-auto max-w-xs rounded border border-white px-4 py-2 text-white hover:border-transparent hover:bg-primary-100 hover:text-primary-900"
            >
              Sign in
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
