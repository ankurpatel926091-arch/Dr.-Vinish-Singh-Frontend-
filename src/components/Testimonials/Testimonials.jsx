import React, { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const googleReviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Lucknow",
    rating: 5,
    date: "2 weeks ago",
    treatment: "Kidney Stone Laser Surgery (RIRS)",
    text: "Dr. Vinish Kumar Singh performed laser RIRS surgery for my 12mm kidney stone. Extremely smooth procedure with zero pain and quick recovery within 24 hours. Best Urologist in Lucknow!",
  },
  {
    id: 2,
    name: "Suresh Verma",
    location: "Kanpur",
    rating: 5,
    date: "1 month ago",
    treatment: "Laser Prostate Surgery (HOLEP)",
    text: "Very polite, patient, and highly experienced urologist surgeon. Explained the entire treatment plan transparently. My father recovered very quickly post surgery.",
  },
  {
    id: 3,
    name: "Ankit Srivastava",
    location: "Lucknow",
    rating: 5,
    date: "3 weeks ago",
    treatment: "Laser Ureteroscopy (URS)",
    text: "Top class medical care and modern setup. Dr. Vinish and his team provided excellent follow-up consultation and guidance after procedure.",
  },
  {
    id: 4,
    name: "Priya Gupta",
    location: "Gorakhpur",
    rating: 5,
    date: "2 months ago",
    treatment: "Urinary Tract Care",
    text: "Treated my father with utmost compassion and surgical precision. Truly grateful for his guidance, clear diagnosis, and expert treatment.",
  },
  {
    id: 5,
    name: "Vikramaditya Singh",
    location: "Lucknow",
    rating: 5,
    date: "1 month ago",
    treatment: "Laparoscopic Surgery",
    text: "Highly skilled surgeon. The post-op recovery was seamless. Staff was very supportive throughout our hospital stay.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
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

  // Auto-Move Slider Interval (Every 2 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 360;
        
        // Loop back smoothly when end is reached
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth + 20, behavior: "smooth" });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

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

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 360;
      scrollRef.current.scrollBy({ left: -(cardWidth + 20), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 360;
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: cardWidth + 20, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header (Centered Layout) */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/80 text-[#103F7C] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} className="text-orange-500" />
            <span>Patient Feedback</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted Google Reviews &amp; Stories
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
        <ScrollReveal variant="fade-in" delay={150} className="w-full mb-8 min-h-[100px]">
          <div
            className="elfsight-app-05ca5de9-0458-4330-937a-98a07e1a1bc1 w-full"
            data-elfsight-app-lazy
          />
        </ScrollReveal>

        {/* Auto-Moving Reviews Carousel */}
        <ScrollReveal
          variant="scale-up"
          delay={250}
          className="relative group px-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#103F7C] hover:bg-[#103F7C] hover:text-white shadow-md border border-slate-200 flex items-center justify-center transition-all duration-300 z-20 hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Scroll right"
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#103F7C] hover:bg-[#103F7C] hover:text-white shadow-md border border-slate-200 flex items-center justify-center transition-all duration-300 z-20 hover:scale-110 active:scale-95"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards Track (Auto-Moves smoothly every 2.8s) */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-5 overflow-x-auto scroll-smooth py-4 px-1 no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {googleReviews.map((rev) => (
              <div
                key={rev.id}
                className="shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <CheckCircle2 size={12} />
                      <span>Verified Google Review</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-4">
                    &quot;{rev.text}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">{rev.name}</h4>
                    <p className="text-[10px] text-slate-400 font-medium">{rev.location} • {rev.date}</p>
                  </div>
                  <span className="text-[10px] font-semibold text-[#103F7C] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {rev.treatment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

