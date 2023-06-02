import type { ComponentMeta, Story } from '@storybook/react'

import NumberedList from './NumberedList'

export default {
  component: NumberedList,
  title: 'Atoms/NumberedList',
} as ComponentMeta<typeof NumberedList>

const Template: Story = () => (
  <NumberedList>
    <NumberedList.Item>Item 1</NumberedList.Item>
    <NumberedList.Item>
      Item 1.1
      <NumberedList>
        <NumberedList.Item>Item 1.1.1</NumberedList.Item>
      </NumberedList>
    </NumberedList.Item>
    <NumberedList.Item>
      Item 1.2
      <NumberedList>
        <NumberedList.Item>Item 1.2.1</NumberedList.Item>
        <NumberedList>
          <NumberedList.Item>Item 1.2.1.1</NumberedList.Item>
          <NumberedList.Item>Item 1.2.1.2</NumberedList.Item>
        </NumberedList>
      </NumberedList>
    </NumberedList.Item>
  </NumberedList>
)

export const Default = Template.bind({})
