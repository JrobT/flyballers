type HeaderCategory = 'primary' | 'secondary' | 'tertiary'

interface HeaderProps {
  category?: HeaderCategory
  children: React.ReactNode
  color?: string
  icon?: string
  styles?: string
}

const Header = ({
  category = 'primary',
  children,
  color = 'text-primary-900',
  icon,
  styles = '',
}: HeaderProps) => {
  const className = `flex flex-row font-roboto leading-none tracking-tight ${color} ${styles}`

  return category === 'primary' ? (
    <h1
      className={`${className} flex items-center text-3xl font-bold md:text-4xl lg:text-5xl`}
    >
      {children}
      {icon && <span className="ml-3 inline-block align-middle">{icon}</span>}
    </h1>
  ) : category === 'secondary' ? (
    <h2
      className={`${className} flex items-center text-xl font-semibold md:text-2xl lg:text-3xl`}
    >
      {children}
      {icon && <span className="ml-3 inline-block align-middle">{icon}</span>}
    </h2>
  ) : (
    <h3
      className={`${className} flex items-center font-semibold md:text-lg lg:text-xl`}
    >
      {children}
      {icon && <span className="ml-3 inline-block align-middle">{icon}</span>}
    </h3>
  )
}

export default Header
