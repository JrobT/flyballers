import type { ComponentMeta, Story } from '@storybook/react'
import { Surface } from 'types/graphql'

import EventInfoCard from './EventInfoCard'

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
  component: EventInfoCard,
  title: 'Molecules/Events/EventInfoCard',
} as ComponentMeta<typeof EventInfoCard>

const Template: Story<{ entryFee: number; surface: Surface }> = (args) => (
  <EventInfoCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  entryFee: 80,
  surface: {
    name: 'Grass',
  },
}
