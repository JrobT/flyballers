import type { ComponentMeta } from '@storybook/react'

import EventPage from './EventPage'

export const generated = () => <EventPage />

export default {
  title: 'Pages/Events/EventPage',
  component: EventPage,
} as ComponentMeta<typeof EventPage>
