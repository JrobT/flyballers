import type { ComponentMeta, Story } from '@storybook/react'

import EventMap from './EventMap'

export default {
  component: EventMap,
  title: 'Molecules/Events/EventMap',
} as ComponentMeta<typeof EventMap>

const Template: Story<{
  coordinates: { latitude: number; longitude: number }
  markerText: string
}> = (args) => <EventMap {...args} />

export const Default = Template.bind({})
Default.args = {
  coordinates: {
    latitude: 51.542846,
    longitude: -2.145374,
  },
  markerText: 'Court Farm, Hullavington',
}
