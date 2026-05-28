import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
