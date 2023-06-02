import type { ComponentMeta } from '@storybook/react'

import EventsPage from './EventsPage'

export const generated = () => <EventsPage />

export default {
  title: 'Pages/EventsPage',
  component: EventsPage,
} as ComponentMeta<typeof EventsPage>