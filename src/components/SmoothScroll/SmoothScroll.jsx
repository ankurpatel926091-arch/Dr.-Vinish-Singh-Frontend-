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

      let animFrameId;
      let resizeObserver;
      let stopTimer;
      let attempts = 0;
      let lastTargetY = null;

      const getElementDocumentTop = (el) => {
        let top = 0;
        let curr = el;
        while (curr) {
          top += curr.offsetTop;
          curr = curr.offsetParent;
        }
        return top;
      };

      const getTargetScrollY = (targetEl) => {
        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 95;
        const offset = -(headerHeight - 25);
        const docTop = getElementDocumentTop(targetEl);
        return Math.max(0, docTop + offset);
      };

      const performScroll = () => {
        const targetEl =
          document.getElementById(targetId) ||
          document.getElementById(rawHash);

        if (!targetEl) {
          if (attempts < 40) {
            attempts++;
            animFrameId = requestAnimationFrame(performScroll);
          }
          return;
        }

        const currentTargetY = getTargetScrollY(targetEl);

        // Only trigger scroll if initial call or document Y position shifted significantly (> 15px)
        if (lastTargetY === null || Math.abs(currentTargetY - lastTargetY) > 15) {
          lastTargetY = currentTargetY;
          if (window.lenis) {
            window.lenis.scrollTo(currentTargetY, {
              duration: 0.6,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          } else {
            window.scrollTo({ top: currentTargetY, behavior: "smooth" });
          }
        }
      };

      // Initial scroll on next frame
      animFrameId = requestAnimationFrame(performScroll);

      // Observe document layout size changes when lazy images load above
      if (typeof ResizeObserver !== "undefined") {
        let lastBodyHeight = document.body.scrollHeight;
        resizeObserver = new ResizeObserver(() => {
          const currentBodyHeight = document.body.scrollHeight;
          if (Math.abs(currentBodyHeight - lastBodyHeight) > 15) {
            lastBodyHeight = currentBodyHeight;
            performScroll();
          }
        });
        resizeObserver.observe(document.body);
      }

      // Listen for image load events
      const handleImageLoad = () => performScroll();
      window.addEventListener("load", handleImageLoad, true);

      stopTimer = setTimeout(() => {
        if (resizeObserver) resizeObserver.disconnect();
        window.removeEventListener("load", handleImageLoad, true);
      }, 2500);

      return () => {
        if (animFrameId) cancelAnimationFrame(animFrameId);
        if (resizeObserver) resizeObserver.disconnect();
        if (stopTimer) clearTimeout(stopTimer);
        window.removeEventListener("load", handleImageLoad, true);
      };
    } else {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, location.hash]);

  return <>{children}</>;
}
