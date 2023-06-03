import { MutableRefObject } from 'react'

import type { ComponentMeta, Story } from '@storybook/react'

import PasswordConfirmInput from './PasswordConfirm'

export default {
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
  component: PasswordConfirmInput,
  title: 'Atoms/Inputs/PasswordConfirm',
} as ComponentMeta<typeof PasswordConfirmInput>

const Template: Story<{
  disabled: boolean
  password: MutableRefObject<undefined>
}> = (args) => <PasswordConfirmInput {...args} />

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  password: 'password',
}
