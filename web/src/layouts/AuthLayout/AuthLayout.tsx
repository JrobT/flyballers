import Cookies from 'src/components/Molecules/Cookies'

type LayoutProps = {
  children: React.ReactNode
  title: string
  titleTo: string
}

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-gradient-to-t from-primary-500 to-primary-700">
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <div className="w-fit p-6">{children}</div>
      </main>
      <footer>
        <Cookies />
      </footer>
    </div>
  )
}

export default AuthLayout
