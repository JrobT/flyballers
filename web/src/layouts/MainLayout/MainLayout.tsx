import Cookies from 'src/components/Molecules/Cookies'
import Navbar from 'src/components/Organisms/Navbar/Navbar'

type LayoutProps = {
  children: React.ReactNode
  title: string
  titleTo: string
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-primary-50">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Cookies />
      </footer>
    </div>
  )
}

export default MainLayout
