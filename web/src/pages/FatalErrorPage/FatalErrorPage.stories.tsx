import type { ComponentMeta } from '@storybook/react'

import FatalErrorPage from './FatalErrorPage'

export const generated = () => <FatalErrorPage />

export default {
  title: 'Pages/Error/FatalErrorPage',
  component: FatalErrorPage,
} as ComponentMeta<typeof FatalErrorPage>
