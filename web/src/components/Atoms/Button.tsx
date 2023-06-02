import React from 'react'

interface Props {
  category?: 'primary' | 'secondary'
  content: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  styles?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<Props> = ({
  category = 'primary',
  content,
  disabled = false,
  onClick,
  styles = '',
  type = 'button',
}) => {
  const className =
    category === 'primary'
      ? `${
          disabled
            ? 'cursor-not-allowed text-primary-700 bg-primary-200'
            : 'text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500'
        }`
      : `${
          disabled
            ? 'cursor-not-allowed text-primary-700 bg-primary-200'
            : 'text-primary-900 bg-primary-200 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500'
        }`

  return (
    <button
      className={`m-auto flex rounded px-4 py-2 font-sans font-semibold ${className} ${styles}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  )
}

export default Button
