import Footer from './Footer'
import NavBar from './NavBar'

export default function WrapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className='sticky top-0 left-0'>
        <NavBar />
      </div>
      {children}
      <Footer />
    </div>
  )
}