import React from 'react'
import AppRoutes from './Routes/AppRoutes'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import FloatingActions from './components/FloatingActions/FloatingActions'
import ScrollToTop from './utils/ScrollToTop'
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/90 via-blue-50/50 to-sky-50/40 text-slate-800 selection:bg-blue-600 selection:text-white font-sans antialiased">
      <ScrollProgressBar />
      <ScrollToTop />
      <Navbar />
      <main className="relative">
        <AppRoutes />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  )
}

export default App