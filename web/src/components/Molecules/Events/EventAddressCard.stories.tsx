import type { ComponentMeta, Story } from '@storybook/react'
import { Address } from 'types/graphql'

import EventAddressCard from './EventAddressCard'

export default {
  component: EventAddressCard,
  title: 'Molecules/Events/EventAddressCard',
} as ComponentMeta<typeof EventAddressCard>

const Template: Story<{ address: Address }> = (args) => (
  <EventAddressCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  address: {
    city: 'Swindon',
    postalCode: 'SN1 1AA',
    street: 'Main Street',
  },
}
