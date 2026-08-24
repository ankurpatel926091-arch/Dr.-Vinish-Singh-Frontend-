import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis with smooth wheel and touch configuration
    const lenis = new Lenis({
      duration: 0.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth cubic easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.8,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // Handle route change scroll reset & hash target smooth scrolling
  useEffect(() => {
    if (!lenisRef.current) return;

    if (location.hash) {
      const rawHash = decodeURIComponent(location.hash.replace("#", "")).trim();
      const targetId = rawHash.replace(/[\s_]+/g, "-");

      const scrollToTarget = (immediate = false) => {
        const targetEl = document.getElementById(targetId) || document.getElementById(rawHash);
        if (targetEl) {
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 120;
          const topPos = targetEl.getBoundingClientRect().top + window.pageYOffset;
          const targetScrollY = Math.max(0, topPos - (headerHeight + 20));

          if (window.lenis) {
            window.lenis.scrollTo(targetScrollY, {
              immediate: immediate,
              duration: immediate ? 0 : 0.4,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          } else {
            window.scrollTo({ top: targetScrollY, behavior: immediate ? "instant" : "smooth" });
          }
          return true;
        }
        return false;
      };

      // Multi-stage scroll adjustments as page images & fonts load
      scrollToTarget(true);
      const t1 = setTimeout(() => scrollToTarget(true), 100);
      const t2 = setTimeout(() => scrollToTarget(false), 400);
      const t3 = setTimeout(() => scrollToTarget(false), 800);
      const t4 = setTimeout(() => scrollToTarget(false), 1400);

      // ResizeObserver to track layout height expansion as images load
      let resizeObserver;
      if (typeof ResizeObserver !== "undefined") {
        let lastHeight = document.body.scrollHeight;
        resizeObserver = new ResizeObserver(() => {
          const newHeight = document.body.scrollHeight;
          if (Math.abs(newHeight - lastHeight) > 15) {
            lastHeight = newHeight;
            scrollToTarget(false);
          }
        });
        resizeObserver.observe(document.body);
      }

      // Cleanup observer after 3 seconds
      const stopTimer = setTimeout(() => {
        if (resizeObserver) resizeObserver.disconnect();
      }, 3000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(stopTimer);
        if (resizeObserver) resizeObserver.disconnect();
      };
    } else {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, location.hash]);

  return <>{children}</>;
}
