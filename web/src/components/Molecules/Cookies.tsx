import React, { useEffect, useState } from 'react'

import Body from '../Atoms/Body'
import Button from '../Atoms/Button'

import Banner from './Banner'

const Cookies: React.FC = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(false)
  const cookieName = 'flyballers-cookie-consent'

  useEffect(() => {
    if (localStorage.getItem(cookieName)) setAcceptedCookies(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem(cookieName, 'accepted')
    setAcceptedCookies(true)
  }

  return !acceptedCookies ? (
    <div className="fixed bottom-0 left-0 flex w-full justify-center">
      <Banner>
        <Body styles="px-6 py-4">
          This website uses cookies to ensure you get the best experience.
        </Body>
        <Button
          category="secondary"
          content="Accept & Continue"
          onClick={handleAccept}
        />
      </Banner>
    </div>
  ) : null
}

export default Cookies
