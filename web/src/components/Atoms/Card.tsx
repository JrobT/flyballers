interface CardProps {
  children?: React.ReactNode
  contrast?: boolean
  styles?: string
}

const Card = ({ children, contrast = false, styles = '' }: CardProps) => (
  <div
    className={`flex w-full flex-col items-center rounded-md text-center  ${
      contrast ? 'bg-primary-500 text-white' : 'bg-white'
    } m-3 p-4 shadow-md ${styles}`}
  >
    {children}
  </div>
)

export default Card
