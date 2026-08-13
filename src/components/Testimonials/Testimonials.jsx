import React, { useState, useEffect } from "react";
import { Star, Sparkles } from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  // Load Elfsight Platform Script
  useEffect(() => {
    const scriptId = "elfsight-platform-script";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Auto-move Elfsight Google Reviews Widget every 2 seconds (2000ms)
  useEffect(() => {
    if (isPaused) return;

    const autoElfsight = setInterval(() => {
      const elfsightContainer = document.querySelector(".elfsight-app-05ca5de9-0458-4330-937a-98a07e1a1bc1");
      if (!elfsightContainer) return;

      const containerRect = elfsightContainer.getBoundingClientRect();
      const allButtons = Array.from(
        elfsightContainer.querySelectorAll("button, [role='button'], div[class*='arrow'], div[class*='Arrow'], [class*='Control']")
      );

      // Find the right-arrow button located on the right side of the Elfsight widget
      const rightArrow = allButtons.find((btn) => {
        const rect = btn.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && rect.left > containerRect.left + containerRect.width / 2;
      });

      if (rightArrow) {
        rightArrow.click();
      } else {
        const nextBtn = elfsightContainer.querySelector(
          "[class*='arrow-next'], [class*='ArrowNext'], [class*='right'], [class*='Right'], [aria-label*='Next'], [aria-label*='next']"
        );
        if (nextBtn) {
          nextBtn.click();
        }
      }
    }, 2000); // 2 Seconds

    return () => clearInterval(autoElfsight);
  }, [isPaused]);

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header (Centered Layout) */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-100/80 text-[#103F7C] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-orange-500" />
            <span>PATIENT FEEDBACK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted Google Reviews &amp; Stories
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Real experiences shared by our patients after successful laser surgeries &amp; urology treatments
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
          className="w-full mb-2 min-h-[100px]"
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


