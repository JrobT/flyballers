import type { ComponentMeta } from '@storybook/react'

import NotFoundPage from './NotFoundPage'

export const generated = () => <NotFoundPage />

export default {
  title: 'Pages/Error/NotFoundPage',
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>
