import { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpeg";
import banner4 from "../../assets/banner-4.jpg"; // Assuming you have a fourth banner image

import Marquee from "./Marquee";

const NAVY = "#0B3B7A";
const ORANGE = "#F5821F";

// Just drop your full banner image path here for each slide.
// title/subtitle are optional — leave them out if you don't want any
// text overlay at all, the image will still show full-bleed.
const slides = [
  { image: banner2, title: "", subtitle: "" },
  { image: banner3, title: "", subtitle: "" },
  { image: banner1, title: "", subtitle: "" },
  { image: banner4, title: "", subtitle: "" },
];

const AUTOPLAY_MS = 3000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
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
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative w-full aspect-[1920/750] sm:aspect-[1920/700] lg:aspect-[1920/660] max-h-[calc(100vh-104px)] bg-[#0b3367] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? "auto" : "none" }}
            aria-hidden={i !== active}
          >
            {/* Full-bleed banner image — fits 100% inside window width and height without side cropping */}
            <img
              src={slide.image}
              alt={slide.title || `Slide ${i + 1}`}
              className="w-full h-full object-fill object-center"
            />

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
        ))}

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
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
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
      <Marquee />
    </section>
  );
}