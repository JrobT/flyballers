import type { ComponentMeta, Story } from '@storybook/react'

import { default as CrossIcon } from './Cross'
import { default as InfoIcon } from './Info'
import { default as PawPrintIcon } from './PawPrint'

export default {
  argTypes: {
    fill: {
      control: 'text',
    },
  },
  title: 'Atoms/Icons',
} as ComponentMeta<() => React.JSX.Element>

const CrossTemplate: Story = () => <CrossIcon />
const InfoTemplate: Story = () => <InfoIcon />
const PawPrintTemplate: Story<{ fill: string }> = (args) => (
  <PawPrintIcon {...args} />
)

export const Cross = CrossTemplate.bind({})
export const Info = InfoTemplate.bind({})
export const PawPrint = PawPrintTemplate.bind({})
PawPrint.args = {
  fill: '#000000',
}
