import React from 'react'

interface Props {
  aria: string
  checked: boolean
  children: React.ReactNode
  onChange: () => void
}

const CheckboxInput: React.FC<Props> = ({
  aria,
  checked,
  children,
  onChange,
}) => {
  return (
    <div
      className="mx-auto mt-4 flex flex-col items-center"
      onClick={onChange}
      onKeyDown={onChange}
      role="button"
      tabIndex={0}
    >
      <label className="select-none text-center text-white/50">
        <input
          aria-describedby={aria}
          checked={checked}
          className="mr-2 h-4 w-4 rounded"
          id="terms"
          name="terms"
          onChange={onChange}
          type="checkbox"
        />
        {children}
      </label>
    </div>
  )
}

export default CheckboxInput
