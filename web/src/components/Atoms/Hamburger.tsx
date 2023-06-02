import MenuClose from './Icons/Menu/MenuClose'
import MenuOpen from './Icons/Menu/MenuOpen'

interface HamburgerProps {
  onClick: () => void
  showNavbar: boolean
}

const Hamburger: React.FC<HamburgerProps> = ({ onClick, showNavbar }) => {
  const className =
    'mx-auto max-w-xs font-sans rounded border border-white px-4 py-2 text-white hover:border-transparent hover:bg-primary-100 hover:text-primary-900'

  if (showNavbar)
    return (
      <button className={className} onClick={onClick}>
        <MenuClose />
      </button>
    )

  return (
    <button className={className} onClick={onClick}>
      <MenuOpen />
    </button>
  )
}

export default Hamburger
