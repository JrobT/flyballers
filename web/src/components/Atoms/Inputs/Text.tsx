import React from 'react'

interface Props {
  disabled?: boolean
  label?: string
  name?: string
  onChange: (value: string) => void
  placeholder?: string
  styles?: string
  value: string
}

const TextInput: React.FC<Props> = ({
  disabled = false,
  label,
  name,
  onChange,
  placeholder,
  styles = '',
  value,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.value)

  const className = `${
    disabled && 'cursor-not-allowed'
  } flex flex-row w-full gap-4 px-4 py-2 text-white border rounded group border-primary-200 bg-primary-200 placeholder-primary-100 backdrop-blur-lg backdrop-filter focus:border-primary-100 ${styles}`

  return (
    <div>
      {label && (
        <label className="mb-2 ml-1.5 block text-primary-200" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={className}
        disabled={disabled}
        onChange={handleChange}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </div>
  )
}

export default TextInput
