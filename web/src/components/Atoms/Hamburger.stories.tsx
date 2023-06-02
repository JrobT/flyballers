import { useState } from 'react'

import type { ComponentMeta, Story } from '@storybook/react'

import Hamburger from './Hamburger'

export default {
  argTypes: {
    showNavbar: {
      control: 'boolean',
    },
  },
  component: Hamburger,
  title: 'Atoms/Hamburger',
} as ComponentMeta<typeof Hamburger>

const Template: Story<{ onClick: () => void; showNavbar: boolean }> = (
  args
) => {
  const [showNavbar, setShowNavbar] = useState(args.showNavbar)
  const handleClick = () => setShowNavbar(!showNavbar)
  return <Hamburger {...args} showNavbar={showNavbar} onClick={handleClick} />
}

export const Default = Template.bind({})
Default.args = {
  showNavbar: false,
}
