import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'

export default function MainLayout() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <motion.main key={pathname} className="flex-1" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <Outlet />
      </motion.main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
