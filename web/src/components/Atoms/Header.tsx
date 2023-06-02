interface HeaderProps {
  category?: string
  children: React.ReactNode
  color?: string
  styles?: string
}

export const Header = ({
  category = 'primary',
  children,
  color = 'text-primary-900',
  styles = 'text-2xl',
}: HeaderProps) => {
  const className = `flex flex-row font-roboto leading-none tracking-tight ${color} ${
    category === 'primary'
      ? 'text-4xl md:text-5xl lg:text-6xl font-bold'
      : 'text-3xl md:text-4xl lg:text-5xl font-semibold'
  } ${styles}`

  return <h1 className={className}>{children}</h1>
}
