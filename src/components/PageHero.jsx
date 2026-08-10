import { Sparkles } from 'lucide-react'
import React from 'react'
import ScrollReveal from './ScrollReveal/ScrollReveal'

const PageHero = ({ title, subTitle, description }) => {
  return (
    <div>
      <div className="relative bg-gradient-to-b from-[#103F7C] to-[#0d3364] text-white py-14 lg:py-18 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

        <ScrollReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>{title}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {subTitle}
          </h1>

          <p className="mt-3 text-blue-100 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </div>
  )
}

export default PageHero