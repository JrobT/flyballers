import React from 'react'

import Cross from '../Atoms/Icons/Cross'
import Info from '../Atoms/Icons/Info'

interface Props {
  children: React.ReactNode
  onClose?: () => void
  styles?: string
}

const Banner: React.FC<Props> = ({ children, onClose, styles = '' }) => (
  <div
    className={`flex flex-col rounded-lg border border-primary-800 bg-primary-100 p-4 text-center font-sans ${styles}`}
  >
    <div className="flex flex-row">
      <Info />
      {onClose && (
        <button className="ml-auto" onClick={onClose}>
          <Cross />
        </button>
      )}
    </div>
    <div className="flex flex-row justify-center">
      <div className="flex flex-col">{children}</div>
    </div>
  </div>
)

export default Banner
