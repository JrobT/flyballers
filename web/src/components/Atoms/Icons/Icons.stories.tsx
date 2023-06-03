import type { ComponentMeta, Story } from '@storybook/react'

import { default as CrossIcon } from './Cross'
import { default as InfoIcon } from './Info'
import { default as MenuCloseIcon } from './Menu/MenuClose'
import { default as MenuOpenIcon } from './Menu/MenuOpen'
import { default as PawPrintIcon } from './PawPrint'

export default {
  title: 'Atoms/Icons',
} as ComponentMeta<() => React.JSX.Element>

const MenuCloseTemplate: Story = () => <MenuCloseIcon />
const MenuOpenTemplate: Story = () => <MenuOpenIcon />
const CrossTemplate: Story = () => <CrossIcon />
const InfoTemplate: Story = () => <InfoIcon />
const PawPrintTemplate: Story<{ fill: string }> = (args) => (
  <PawPrintIcon {...args} />
)

export const MenuClose = MenuCloseTemplate.bind({})
export const MenuOpen = MenuOpenTemplate.bind({})
export const Cross = CrossTemplate.bind({})
export const Info = InfoTemplate.bind({})
export const PawPrint = PawPrintTemplate.bind({})
PawPrint.args = {
  fill: '#000000',
}
