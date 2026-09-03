import React, { useEffect } from 'react'
import AppRoutes from './Routes/AppRoutes'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import FloatingActions from './components/FloatingActions/FloatingActions'
import ScrollToTop from './utils/ScrollToTop'
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'

const App = () => {
  useEffect(() => {
    try {
      const saved = localStorage.getItem('dr_vinish_clinics');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const updated = parsed.map(c => {
            if ((c.name && c.name.toLowerCase().includes('rudraksh')) || c.clinicId === 'morning' || c.id === 'morning') {
              return { ...c, mapUrl: 'https://www.google.com/maps?q=Rudraksh+IVF+And+Urology+Centre+Lucknow' };
            }
            return c;
          });
          localStorage.setItem('dr_vinish_clinics', JSON.stringify(updated));
        }
      }
    } catch (e) {}
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-gradient-to-br from-slate-50/90 via-blue-50/50 to-sky-50/40 text-slate-800 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden w-full max-w-full">
        <ScrollProgressBar />
        <ScrollToTop />
        <Navbar />
        <main className="relative pt-[102px] sm:pt-[110px] lg:pt-[118px] overflow-x-hidden w-full max-w-full">
          <AppRoutes />
        </main> 
        <FloatingActions />
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App