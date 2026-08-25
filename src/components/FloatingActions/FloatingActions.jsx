import React, { useState, useEffect, useRef } from "react";
import { FaPhoneAlt, FaWhatsapp, FaCalendarAlt, FaChevronUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const animFrameIdRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 200);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 0.6 });
      return;
    }

    const startPosition = window.scrollY || window.pageYOffset;
    if (startPosition === 0) return;

    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
    }

    const duration = Math.min(3200, Math.max(2200, startPosition * 0.8));
    let startTime = null;

    const easeInOutCubic = (t) => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const stopAnimation = () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
      window.removeEventListener("wheel", stopAnimation);
      window.removeEventListener("touchstart", stopAnimation);
    };

    window.addEventListener("wheel", stopAnimation, { passive: true });
    window.addEventListener("touchstart", stopAnimation, { passive: true });

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      window.scrollTo({
        top: startPosition * (1 - easeProgress),
        behavior: "instant",
      });

      if (timeElapsed < duration) {
        animFrameIdRef.current = requestAnimationFrame(animateScroll);
      } else {
        stopAnimation();
      }
    };

    animFrameIdRef.current = requestAnimationFrame(animateScroll);
  };

  const whatsappUrl = `https://wa.me/917275981480?text=${encodeURIComponent(
    "Hello Dr. Vinish Kumar Singh, I would like to inquire about an OPD appointment."
  )}`;

  return (
    <div className="fixed bottom-3 right-2 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2 sm:gap-3 font-sans">
      
      {/* 1. Phone Call Button (Pink/Magenta Circle) */}
      <div className="relative group/phone">
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2.5 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover/phone:opacity-100 transition-opacity shadow-md">
          Call +91 72759 81480
        </span>
        <a
          href="tel:+917275981480"
          aria-label="Call Doctor"
          title="Call Doctor"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#FF2D75] hover:bg-[#e01b63] text-white flex items-center justify-center shadow-md shadow-pink-500/20 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <FaPhoneAlt className="text-xl sm:text-2xl" />
        </a>
      </div>

      {/* 2. WhatsApp Button (Vibrant Glowing Green Circle with Radar Pulse & Tooltip) */}
      <div className="relative group/wa">
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2.5 px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-300 text-[11px] font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover/wa:opacity-100 transition-opacity shadow-md border border-emerald-500/30">
          Chat on WhatsApp
        </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#20bd5a] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/35 animate-ping pointer-events-none" style={{ animationDuration: "2.5s" }} />
          <FaWhatsapp className="relative z-10 text-[28px] sm:text-3xl drop-shadow-xs" />
        </a>
      </div>

      {/* 3. Book Appointment Button (Cyan / Sky Blue Circle) */}
      <div className="relative group/book">
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2.5 px-2.5 py-1 rounded-lg bg-slate-900 text-white text-[11px] font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover/book:opacity-100 transition-opacity shadow-md">
          Book Appointment
        </span>
        <NavLink
          to="/#book-appointment"
          onClick={(e) => {
            e.preventDefault();
            const scrollToAppointment = (immediate = false) => {
              const el = document.getElementById("book-appointment");
              if (el) {
                const header = document.querySelector("header");
                const headerHeight = header ? header.offsetHeight : 120;
                const topPos = el.getBoundingClientRect().top + window.pageYOffset;
                const targetScrollY = Math.max(0, topPos - (headerHeight + 20));

                if (window.lenis) {
                  window.lenis.scrollTo(targetScrollY, {
                    immediate: immediate,
                    duration: immediate ? 0 : 0.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                  });
                } else {
                  window.scrollTo({ top: targetScrollY, behavior: immediate ? "instant" : "smooth" });
                }
              }
            };

            if (window.location.pathname === "/") {
              scrollToAppointment(false);
            } else {
              window.location.href = "/#book-appointment";
            }
          }}
          aria-label="Book Appointment"
          title="Book Appointment"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#00A8E8] hover:bg-[#0092c9] text-white flex items-center justify-center shadow-md shadow-sky-500/20 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          <FaCalendarAlt className="text-xl sm:text-2xl" />
        </NavLink>
      </div>

      {/* 4. Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to Top"
          className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white text-[#FF2D75] shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 group"
        >
          <span
            className="absolute -inset-0.5 rounded-full border border-dashed border-[#FF2D75] animate-spin pointer-events-none"
            style={{ animationDuration: "10s" }}
          />
          <FaChevronUp className="relative z-10 text-lg sm:text-xl transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

    </div>
  );
}

export default React.memo(FloatingActions);

