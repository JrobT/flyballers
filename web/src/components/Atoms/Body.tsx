interface BodyProps {
  children: React.ReactNode
  styles?: string
}

const Body = ({ children, styles = '' }: BodyProps) => (
  <p className={`p-2 font-sans ${styles}`}>{children}</p>
)

export default Body
