import type { ComponentMeta } from '@storybook/react'

import EventsPage from './EventsPage'

export const generated = () => <EventsPage />

export default {
  title: 'Pages/Events/EventsPage',
  component: EventsPage,
} as ComponentMeta<typeof EventsPage>
