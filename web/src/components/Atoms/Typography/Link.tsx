import { Link as RedwoodLink } from '@redwoodjs/router'

interface LinkProps {
  category?: string
  children: React.ReactNode
  external?: boolean
  styles?: string
  to: string
}

const Link = ({
  category = 'primary',
  children,
  external = false,
  styles,
  to,
}: LinkProps) => {
  const primaryClasses = 'text-primary-500'
  const secondaryClasses = 'text-primary-900'

  const linkClasses = category === 'primary' ? primaryClasses : secondaryClasses

  return external ? (
    <a
      className={`${linkClasses} font-sans underline hover:text-primary-700 focus:outline-none ${styles}`}
      href={to}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  ) : (
    <RedwoodLink
      to={to}
      className={`${linkClasses} font-sans underline hover:text-primary-700 focus:outline-none ${styles}`}
    >
      {children}
    </RedwoodLink>
  )
}

export default Link
