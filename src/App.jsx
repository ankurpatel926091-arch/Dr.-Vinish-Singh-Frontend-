import React from 'react'
import AppRoutes from './Routes/AppRoutes'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import FloatingActions from './components/FloatingActions/FloatingActions'
import ScrollToTop from './utils/ScrollToTop'
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'

const App = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-gradient-to-br from-slate-50/90 via-blue-50/50 to-sky-50/40 text-slate-800 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden w-full max-w-full">
        <ScrollProgressBar />
        <ScrollToTop />
        <Navbar />
        <main className="relative pt-[90px] sm:pt-[98px] lg:pt-[102px] overflow-x-hidden w-full max-w-full">
          <AppRoutes />
        </main> 
        <FloatingActions />
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App