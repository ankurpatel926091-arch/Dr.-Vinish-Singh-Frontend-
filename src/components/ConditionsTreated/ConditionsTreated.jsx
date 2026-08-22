import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// 1. Kidney / Renal Transplant Icon
const KidneyTransplantIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M24 14C16 14 10 21 10 31C10 44 18 52 27 52C32 52 36 47 36 41C36 36 32 33 27 33C23 33 21 29 21 24C21 19 25 14 30 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38 52C46 52 52 44 52 33C52 22 45 12 36 12C31 12 28 16 28 21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 28L32 48M48 20L28 40" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" strokeLinecap="round" />
    <circle cx="32" cy="32" r="4" fill="currentColor" />
  </svg>
);

// 2. Kidney Stones Icon
const KidneyStonesIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M26 12C17 12 11 20 11 31C11 44 19 54 29 54C35 54 39 48 39 42C39 36 34 33 29 33C24 33 22 28 22 23C22 17 26 12 32 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M38 54C47 54 53 45 53 34C53 22 45 10 35 10C29 10 25 15 25 21" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <polygon points="21,22 25,20 27,24 23,26" fill="currentColor" />
    <polygon points="18,36 22,34 23,38 19,40" fill="currentColor" />
    <polygon points="41,26 45,24 46,28 42,30" fill="currentColor" />
  </svg>
);

// 3. Prostate Enlargement Icon
const ProstateIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18 20C18 14 24 10 32 10C40 10 46 14 46 20C46 28 38 34 32 34C26 34 18 28 18 20Z" stroke="currentColor" strokeWidth="3" />
    <path d="M20 34C14 36 10 42 10 48C10 54 18 56 32 56C46 56 54 54 54 48C54 42 50 36 44 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="32" cy="45" r="5" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

// 4. Prostatitis Icon
const ProstatitisIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 34C14 36 10 42 10 48C10 54 18 56 32 56C46 56 54 54 54 48C54 42 50 36 44 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M24 22C24 16 28 12 32 12C36 12 40 16 40 22C40 28 36 32 32 32C28 32 24 28 24 22Z" stroke="currentColor" strokeWidth="3" />
    <path d="M16 16L20 20M48 16L44 20M32 6V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 5. UTI Infection Icon
const UtiIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M16 16C16 16 20 40 32 40C44 40 48 16 48 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 40V54M26 54H38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 18C32 18 28 24 28 27C28 29.2 29.8 31 32 31C34.2 31 36 29.2 36 27C36 24 32 18 32 18Z" fill="currentColor" />
  </svg>
);

// 6. Stricture Urethra Icon
const StrictureIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M22 10V24C22 28 28 30 28 32C28 34 22 36 22 40V54" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
    <path d="M42 10V24C42 28 36 30 36 32C36 34 42 36 42 40V54" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
    <path d="M16 32H24M48 32H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 7. Bladder Stones Icon
const BladderStonesIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M14 18C14 18 18 44 32 44C46 44 50 18 50 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M32 44V56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="28" cy="34" r="3.5" fill="currentColor" />
    <circle cx="36" cy="35" r="4" fill="currentColor" />
    <circle cx="32" cy="28" r="3" fill="currentColor" />
  </svg>
);

// 8. Male Infertility Icon
const InfertilityIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="28" cy="36" r="14" stroke="currentColor" strokeWidth="3" />
    <path d="M38 26L52 12M52 12H42M52 12V22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 36C22 32 34 40 34 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 9. Erectile Dysfunction Icon
const EdIcon = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M32 10L14 20V34C14 46 22 54 32 58C42 54 50 46 50 34V20L32 10Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M32 22V36M32 42H32.02" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

export default function ConditionsTreated() {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
        }
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 15) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainerRef.current.scrollBy({ left: 260, behavior: "smooth" });
      }
    }
  };

  const conditionsList = [
    {
      id: 1,
      title: "Kidney/Renal Transplantation",
      href: "/conditions/kidney-stone",
      icon: KidneyTransplantIcon,
    },
    {
      id: 2,
      title: "Kidney Stones",
      href: "/conditions/kidney-stone",
      icon: KidneyStonesIcon,
    },
    {
      id: 3,
      title: "Prostate Enlargement",
      href: "/conditions/prostate",
      icon: ProstateIcon,
    },
    {
      id: 4,
      title: "Prostatitis",
      href: "/conditions/prostate",
      icon: ProstatitisIcon,
    },
    {
      id: 5,
      title: "UTI Infection",
      href: "/female/uti",
      icon: UtiIcon,
    },
    {
      id: 6,
      title: "Stricture Urethra",
      href: "/male/urology",
      icon: StrictureIcon,
    },
    {
      id: 7,
      title: "Bladder Stones",
      href: "/conditions/bladder-stone",
      icon: BladderStonesIcon,
    },
    {
      id: 8,
      title: "Male Infertility",
      href: "/andrology/male-infertility",
      icon: InfertilityIcon,
    },
    {
      id: 9,
      title: "Erectile Dysfunction",
      href: "/andrology/erectile-dysfunction",
      icon: EdIcon,
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-slate-50/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Minimal Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-[#103F7C] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={12} className="text-orange-500" />
            <span>Specialties & Treatments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#103F7C] tracking-tight">
            Treatements
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-normal">
            Advanced medical & laser surgical solutions tailored for optimal patient health.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative group px-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scroll Left Button */}
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Scroll left"
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#103F7C] hover:bg-[#103F7C] hover:text-white shadow-md border border-slate-200 flex items-center justify-center transition-all duration-300 z-20"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scroll Right Button */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Scroll right"
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#103F7C] hover:bg-[#103F7C] hover:text-white shadow-md border border-slate-200 flex items-center justify-center transition-all duration-300 z-20"
          >
            <ChevronRight size={20} />
          </button>

          {/* Horizontally Scrollable Cards Row */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto scroll-smooth py-3 px-1 no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {conditionsList.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ scale: 1.05, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0"
                >
                  <NavLink
                    to={item.href || "#"}
                    className="group/card flex flex-col items-center justify-between text-center w-44 sm:w-52 h-full bg-white rounded-2xl p-5 shadow-xs hover:shadow-xl border border-slate-100 hover:border-blue-200 transition-colors duration-300"
                  >
                    {/* Clean Minimal Icon Container */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-blue-50/70 group-hover/card:bg-blue-100/80 flex items-center justify-center mb-4 transition-all duration-300 group-hover/card:scale-105">
                      <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-[#103F7C] group-hover/card:text-orange-500 transition-colors duration-300" />
                    </div>

                    {/* Condition Title */}
                    <h3 className="font-semibold text-slate-800 group-hover/card:text-[#103F7C] text-xs sm:text-sm leading-snug transition-colors duration-200">
                      {item.title}
                    </h3>
                  </NavLink>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
