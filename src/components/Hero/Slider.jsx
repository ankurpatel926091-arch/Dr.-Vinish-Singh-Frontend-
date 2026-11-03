import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import banner1 from "../../assets/banner-1-650.webp";
import banner1Mobile from "../../assets/banner-1-mobile.webp";
import banner2 from "../../assets/banner-2-650.webp";
import banner2Mobile from "../../assets/banner-2-mobile.webp";
import banner3 from "../../assets/banner-3-650.webp";
import banner3Mobile from "../../assets/banner-3-mobile.webp";
import banner4 from "../../assets/banner-4-650.webp";
import banner4Mobile from "../../assets/banner-4-mobile.webp";

import Marquee from "./Marquee";

const NAVY = "#0B3B7A";
const ORANGE = "#F5821F";

// Responsive banner image path for each slide (mobilekek-optimized vs desktop).
const slides = [
  { image: banner4, mobileImage: banner4Mobile, title: "", subtitle: "" },
  { image: "/hero-banner.webp", mobileImage: "/hero-banner-mobile.webp", title: "", subtitle: "" },
  { image: banner3, mobileImage: banner3Mobile, title: "", subtitle: "" },
  { image: banner1, mobileImage: banner1Mobile, title: "", subtitle: "" },

];

const AUTOPLAY_MS = 6000;

function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loadOthers, setLoadOthers] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => {
        const t = setTimeout(() => setLoadOthers(true), 5000);
        return () => clearTimeout(t);
      }, { timeout: 8000 });
      return () => window.cancelIdleCallback(id);
    } else {
      const t = setTimeout(() => setLoadOthers(true), 6000);
      return () => clearTimeout(t);
    }
  }, []);

  const goTo = useCallback((i) => {
    setLoadOthers(true);
    setActive((i + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [next, paused]);

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col lg:h-[calc(100vh-118px)]"
      style={{ contain: "layout" }}
      onMouseEnter={() => { setPaused(true); setLoadOthers(true); }}
      onTouchStart={() => setLoadOthers(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative w-full flex-1 min-h-0 aspect-[1920/650] lg:aspect-auto bg-[#0b3367] overflow-hidden"
        style={{ contain: "paint" }}
      >
        {slides.map((slide, i) => {
          if (i > 0 && !loadOthers && active === 0) return null;
          return (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? "auto" : "none" }}
              aria-hidden={i !== active}
            >
              {/* Responsive full-bleed banner image */}
              <picture className="w-full h-full block">
                <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                <img
                  src={slide.image}
                  alt={slide.title || `Slide ${i + 1}`}
                  width={1920}
                  height={650}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchpriority={i === 0 ? "high" : "low"}
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </picture>

              {/* Optional caption — only renders if you set title/subtitle */}
              {(slide.title || slide.subtitle) && (
                <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 sm:px-12 py-5 sm:py-8">
                  {slide.title && (
                    <h2
                      className="font-extrabold uppercase leading-tight text-2xl sm:text-4xl lg:text-5xl"
                      style={{ color: ORANGE }}
                    >
                      {slide.title}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <p className="mt-1 text-white/90 text-sm sm:text-base max-w-lg">{slide.subtitle}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-colors z-10"
        >
          <FaChevronLeft size={14} style={{ color: NAVY }} />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white shadow-md flex items-center justify-center transition-colors z-10"
        >
          <FaChevronRight size={14} style={{ color: NAVY }} />
        </button>

        {/* Dot pagination */}
        <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? 22 : 8,
                height: 8,
                backgroundColor: i === active ? ORANGE : "rgba(255,255,255,0.9)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Marquee ticker right below the slider */}
      <div className="shrink-0">
        <Marquee />
      </div>
    </section>
  );
}

export default React.memo(HeroSlider);
