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
      <main>
        <div className="m-1 flex flex-col p-1 md:m-3 md:p-3">{children}</div>
      </main>
      <footer>
        <Cookies />
      </footer>
    </div>
  )
}

export default MainLayout
