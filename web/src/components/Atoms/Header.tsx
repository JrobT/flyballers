interface HeaderProps {
  category?: string
  children: React.ReactNode
  color?: string
  styles?: string
}

const Header = ({
  category = 'primary',
  children,
  color = 'text-primary-900',
  styles = '',
}: HeaderProps) => {
  const className = `flex flex-row font-roboto leading-none tracking-tight ${color} ${
    category === 'primary'
      ? 'text-4xl md:text-5xl lg:text-6xl font-bold'
      : 'text-2xl md:text-3xl lg:text-4xl font-semibold'
  } ${styles}`

  return category === 'primary' ? (
    <h1 className={className}>{children}</h1>
  ) : (
    <h2 className={className}>{children}</h2>
  )
}

export default Header
