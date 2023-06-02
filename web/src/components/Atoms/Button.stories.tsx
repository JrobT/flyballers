import type { ComponentMeta, Story } from '@storybook/react'

import Button from './Button'

export default {
  argTypes: {
    category: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  component: Button,
  title: 'Atoms/Button',
} as ComponentMeta<typeof Button>

const Template: Story<{ content: string }> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  category: 'primary',
  content: 'Button',
  disabled: false,
}
