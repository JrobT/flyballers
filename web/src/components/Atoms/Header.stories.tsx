import type { ComponentMeta, Story } from '@storybook/react'

import Header from './Header'

export default {
  argTypes: {
    category: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    color: {
      control: 'text',
    },
  },
  component: Header,
  title: 'Atoms/Header',
} as ComponentMeta<typeof Header>

const Template: Story<{ content: string }> = (args) => (
  <Header {...args}>This is a header!</Header>
)

export const Default = Template.bind({})
Default.args = {
  category: 'primary',
  color: 'text-primary-900',
}
