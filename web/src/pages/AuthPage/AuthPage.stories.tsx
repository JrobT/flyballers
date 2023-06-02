import type { ComponentMeta } from '@storybook/react'

import AuthPage from './AuthPage'

export const generated = () => <AuthPage />

export default {
  title: 'Pages/Authentication',
  component: AuthPage,
} as ComponentMeta<typeof AuthPage>
