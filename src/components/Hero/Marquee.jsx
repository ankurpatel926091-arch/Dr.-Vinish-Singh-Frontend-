import React from "react";

const marqueeItems = [
  "ADVANCED UROLOGY SURGERY",
  "KGMU LUCKNOW ALUMNI",
  "UROLOGY & LASER SPECIALIST",
  "KIDNEY STONE LASER SURGERY",
  "PROSTATE & ENDOUROLOGY",
  "MALE INFERTILITY & SEXUAL HEALTH",
  "MINIMALLY INVASIVE SURGERY",
  "RECONSTRUCTIVE UROLOGY",
  "PAINLESS LASER PROCEDURES",
  "15+ YEARS EXCELLENCE",
];

export default function Marquee() {
  // Duplicate array for seamless infinite looping
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full bg-[#EBF4FF] border-y border-blue-200/70 overflow-hidden py-3 sm:py-3.5 shadow-inner">
      {/* Subtle fade effect on left and right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#EBF4FF] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#EBF4FF] to-transparent z-10 pointer-events-none" />

      {/* Marquee scrolling container */}
      <div className="flex animate-marquee items-center whitespace-nowrap">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            {/* Bullet Dot */}
            <span className="w-2 h-2 rounded-full bg-blue-500 mx-3 sm:mx-5 shrink-0 inline-block shadow-sm" />
            
            {/* Ticker Text */}
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#0B3B7A] uppercase transition-colors hover:text-orange-600 cursor-default">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
