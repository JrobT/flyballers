import type { ComponentMeta, Story } from '@storybook/react'
import dayjs from 'dayjs'
import { Event } from 'types/graphql'

import EventTable from './EventTable'

export default {
  component: EventTable,
  title: 'Molecules/Events/EventTable',
} as ComponentMeta<typeof EventTable>

const Template: Story<{ events: Event[] }> = (args) => <EventTable {...args} />

export const Default = Template.bind({})
Default.args = {
  events: [
    {
      club: { name: 'Bassetts' },
      eventDays: [{ eventId: 1, date: dayjs().toDate() }],
      name: 'A super fun event',
    },
    {
      club: { name: 'Bassetts' },
      eventDays: [{ eventId: 1, date: dayjs().toDate() }],
      name: 'Event',
    },
    {
      club: { name: 'Bassetts' },
      eventDays: [{ eventId: 1, date: dayjs().toDate() }],
      name: 'An event with a really really long name',
    },
    { club: { name: 'TVR' }, eventDays: [], name: "A different club's event" },
  ],
}
