import React from 'react'

interface NumberedListProps {
  children: React.ReactNode
  styles?: string
}

interface NumberedListItemProps {
  children: React.ReactNode
}

const NumberedList = ({ children, styles = '' }: NumberedListProps) => (
  <ol className={`flex flex-col p-2 font-sans ${styles}`}>
    {renderListItems(children)}
  </ol>
)

const renderListItems = (items: React.ReactNode) => {
  return React.Children.map(items, (item, index) => {
    if (React.isValidElement(item)) {
      if (item.type === NumberedList.Item) {
        return React.cloneElement(item)
      }
      return (
        <li className="flex flex-col" key={index}>
          {item}
        </li>
      )
    }
    return null
  })
}

const NumberedListItem = ({ children }: NumberedListItemProps) => (
  <li className="flex flex-col">{children}</li>
)

NumberedList.Item = NumberedListItem

export default NumberedList
