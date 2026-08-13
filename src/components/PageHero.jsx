import { Sparkles } from 'lucide-react'
import React from 'react'
import ScrollReveal from './ScrollReveal/ScrollReveal'
import defaultBanner from '../assets/dr_vinish_banner.png'

const PageHero = ({ title, subTitle, description, bgImage = defaultBanner }) => {
  return (
    <div>
      <div className="relative text-white py-14 lg:py-20 overflow-hidden bg-[#103F7C]">
        {bgImage && (
          <div
            className="absolute inset-0 bg-[size:100%_100%] bg-center bg-no-repeat transition-all duration-700 opacity-45"
            style={{ backgroundImage: `url("${bgImage}")` }}
          />
        )}

        {/* Gradient Overlay - Smoothly blended for balanced background image visibility */}
        <div
          className={`absolute inset-0 ${
            bgImage
              ? "bg-gradient-to-r from-[#071a33]/85 via-[#0c2e5a]/60 to-[#071a33]/80"
              : "bg-gradient-to-b from-[#103F7C] to-[#0d3364]"
          }`}
        />

        <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none z-10" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none z-10" />

        <ScrollReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950/60 border border-white/20 text-orange-300 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md shadow-md">
            <Sparkles size={13} className="text-orange-400" />
            <span>{title}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]">
            {subTitle}
          </h1>

          <p className="mt-3 text-slate-100 text-sm sm:text-base max-w-3xl font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </div>
  )
}

export default PageHero