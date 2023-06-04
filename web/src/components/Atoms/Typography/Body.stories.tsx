import type { ComponentMeta, Story } from '@storybook/react'

import Body from './Body'

export default {
  component: Body,
  title: 'Atoms/Typography/Body',
} as ComponentMeta<typeof Body>

const Template: Story<{ content: string }> = (_args) => (
  <Body>This is some body text.</Body>
)

export const Default = Template.bind({})
