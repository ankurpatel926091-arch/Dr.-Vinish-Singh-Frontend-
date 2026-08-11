import React, { useState, useEffect, useRef } from "react";
import { FaPhoneAlt, FaWhatsapp, FaCalendarAlt, FaChevronUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const animFrameIdRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Custom slow, smooth, subtle and professional scroll-to-top transition
  const scrollToTop = () => {
    const startPosition = window.scrollY || window.pageYOffset;
    if (startPosition === 0) return;

    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
    }

    // Dynamic slow duration scaled for an ultra-slow, smooth & subtle scroll experience (2200ms - 3200ms)
    const duration = Math.min(3200, Math.max(2200, startPosition * 0.8));
    let startTime = null;

    // Smooth cubic ease-in-out curve for soft acceleration & soft landing at top
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
    "Hello Dr. Vinish Kumar Singh, I would like to inquire about an appointment."
  )}`;

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-2.5 sm:gap-3">
      
      {/* 1. Phone Call Button (Pink/Magenta Circle) */}
      <a
        href="tel:+917275981480"
        aria-label="Call Doctor"
        title="Call Doctor"
        className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-[#FF2D75] hover:bg-[#e01b63] text-white flex items-center justify-center shadow-lg shadow-pink-500/30 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <FaPhoneAlt className="text-base sm:text-lg" />
      </a>

      {/* 2. WhatsApp Button (Vibrant Green Circle) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#1ebd59] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <FaWhatsapp className="text-xl sm:text-2xl" />
      </a>

      {/* 3. Book Appointment Button (Cyan / Sky Blue Circle) */}
      <NavLink
        to="/contact"
        aria-label="Book Appointment"
        title="Book Appointment"
        className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-[#00A8E8] hover:bg-[#0092c9] text-white flex items-center justify-center shadow-lg shadow-sky-500/30 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <FaCalendarAlt className="text-base sm:text-lg" />
      </NavLink>

      {/* 4. Scroll-to-Top Button (White Circle with Rotating Pink Dashed Outer Ring) */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to Top"
          className="relative w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-white text-[#FF2D75] shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 group"
        >
          {/* Very Slow Rotating Outer Dashed/Dotted Ring (10s duration for ultra slow spin) */}
          <span
            className="absolute -inset-0.5 rounded-full border-2 border-dashed border-[#FF2D75] animate-spin pointer-events-none"
            style={{ animationDuration: "10s" }}
          />

          {/* Static Upward Chevron Icon */}
          <FaChevronUp className="relative z-10 text-sm sm:text-base transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

    </div>
  );
}
