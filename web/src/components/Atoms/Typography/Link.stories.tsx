import type { ComponentMeta, Story } from '@storybook/react'

import Link from './Link'

export default {
  component: Link,
  title: 'Atoms/Typography/Link',
} as ComponentMeta<typeof Link>

const Template: Story = () => <Link to={''}>This is a link</Link>

export const Default = Template.bind({})
