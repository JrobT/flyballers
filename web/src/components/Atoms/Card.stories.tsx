import type { ComponentMeta, Story } from '@storybook/react'

import Card from './Card'

export default {
  argTypes: {
    contrast: {
      control: 'boolean',
    },
  },
  component: Card,
  title: 'Atoms/Card',
} as ComponentMeta<typeof Card>

const Template: Story<{ contrast: boolean }> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  contrast: false,
}
