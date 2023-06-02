import React from 'react'

import { MetaTags } from '@redwoodjs/web'

import TermsAndConditions from 'src/components/Templates/TermsAndConditions/TermsAndConditions'

const TermsAndConditionsPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Terms & Conditions"
        description="Terms & conditions page"
      />
      <TermsAndConditions />
    </>
  )
}

export default TermsAndConditionsPage
