import type { ComponentMeta, Story } from '@storybook/react'
import { Contact } from 'types/graphql'

import EventClubCard from './EventClubCard'

export default {
  argTypes: {
    entryFee: {
      control: 'number',
      max: 100,
      min: 0,
    },
    'surface.name': {
      control: 'text',
    },
  },
  component: EventClubCard,
  title: 'Molecules/Events/EventClubCard',
} as ComponentMeta<typeof EventClubCard>

const Template: Story<{ contact: Contact; name: string }> = (args) => (
  <EventClubCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  club: {
    contact: {
      email: 'test@test.com',
      name: 'Jeff',
    },
    name: 'Bassetts',
  },
}
