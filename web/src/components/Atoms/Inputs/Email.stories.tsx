import type { ComponentMeta, Story } from '@storybook/react'

import EmailInput from './Email'

export default {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
  component: EmailInput,
  title: 'Atoms/Inputs/Email',
} as ComponentMeta<typeof EmailInput>

const Template: Story<{ disabled: boolean }> = (args) => (
  <EmailInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
  disabled: false,
}
