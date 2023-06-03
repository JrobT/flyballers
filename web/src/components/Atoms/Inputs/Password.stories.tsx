import type { ComponentMeta, Story } from '@storybook/react'

import PasswordInput from './Password'

export default {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
  component: PasswordInput,
  title: 'Atoms/Inputs/Password',
} as ComponentMeta<typeof PasswordInput>

const Template: Story<{ disabled: boolean }> = (args) => (
  <PasswordInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
  disabled: false,
}
