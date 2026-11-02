import React, { useState, useEffect, useRef } from "react";
import { Star, Sparkles } from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Lazy-load Elfsight Platform Script only when section is near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          const scriptId = "elfsight-platform-script";
          let script = document.getElementById(scriptId);

          if (!script) {
            script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://static.elfsight.com/platform/platform.js";
            script.async = true;
            document.body.appendChild(script);
          }
        }
      },
      { rootMargin: "350px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth slide advance without forced reflow thrashing
  useEffect(() => {
    if (!isVisible || isPaused) return;

    const autoElfsight = setInterval(() => {
      const elfsightContainer = document.querySelector(
        ".elfsight-app-05ca5de9-0458-4330-937a-98a07e1a1bc1"
      );
      if (!elfsightContainer) return;

      const nextBtn = elfsightContainer.querySelector(
        "[class*='arrow-next'], [class*='ArrowNext'], [class*='Right'], [aria-label*='Next'], [aria-label*='next']"
      );
      if (nextBtn && typeof nextBtn.click === "function") {
        nextBtn.click();
      }
    }, 3500);

    return () => clearInterval(autoElfsight);
  }, [isVisible, isPaused]);

  return (
    <section
      ref={sectionRef}
      className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header (Centered Layout) */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#103F7C] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-orange-500" />
            <span>PATIENT EXPERIENCES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Stories of Trust, Care & Recovery
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Discover genuine experiences shared by patients about their consultations, treatments, surgical care, and recovery journey with Dr. Vinish Kumar Singh.
          </p>

          {/* Centered Overall Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-2xs mt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-left">
              <span className="text-xs font-extrabold text-slate-900 block leading-tight">5.0 / 5.0 Rating</span>
              <span className="text-[10px] text-slate-500 font-medium">Verified Google Reviews</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Elfsight Live Google Reviews Embed */}
        <ScrollReveal
          variant="fade-in"
          delay={150}
          className="w-full mb-2 min-h-[260px] sm:min-h-[300px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="elfsight-app-05ca5de9-0458-4330-937a-98a07e1a1bc1 w-full"
            data-elfsight-app-lazy
          />
        </ScrollReveal>

      </div>
    </section>
  );
}
