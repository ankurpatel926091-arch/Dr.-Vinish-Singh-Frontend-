import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";


export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Keep native hardware-accelerated touch scrolling on mobile devices to prevent main-thread blocking
    const isMobile =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024);

    if (isMobile) {
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
      return;
    }

    // Initialize Lenis with smooth wheel for desktop (deferred to idle to eliminate main-thread blocking)
    let lenis = null;
    let animationFrameId = null;
    let isInitialized = false;

    const startLenis = () => {
      if (isInitialized) return;
      isInitialized = true;

      lenis = new Lenis({
        duration: 0.7,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.2,
        touchMultiplier: 1.8,
        infinite: false,
      });

      lenisRef.current = lenis;
      window.lenis = lenis;

      function raf(time) {
        if (lenis) {
          lenis.raf(time);
          animationFrameId = requestAnimationFrame(raf);
        }
      }
      animationFrameId = requestAnimationFrame(raf);
    };

    window.addEventListener("wheel", startLenis, { passive: true, once: true });
    window.addEventListener("keydown", startLenis, { passive: true, once: true });

    let idleTimer = null;
    if ("requestIdleCallback" in window) {
      idleTimer = window.requestIdleCallback(startLenis, { timeout: 1500 });
    } else {
      idleTimer = setTimeout(startLenis, 1000);
    }

    return () => {
      window.removeEventListener("wheel", startLenis);
      window.removeEventListener("keydown", startLenis);
      if (idleTimer) {
        if ("cancelIdleCallback" in window) {
          window.cancelIdleCallback(idleTimer);
        } else {
          clearTimeout(idleTimer);
        }
      }
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenis) lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // Handle route change scroll reset & hash target smooth scrolling
  useEffect(() => {
    if (!lenisRef.current) return;

    if (location.state?.scrollToTop) {
      lenisRef.current.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
      return;
    }

    if (location.hash) {
      const rawHash = decodeURIComponent(location.hash.replace("#", "")).trim();
      const targetId = rawHash.replace(/[\s_]+/g, "-");

      let animFrameId;
      let attempts = 0;

      const getTargetScrollY = (targetEl) => {
        const header = document.querySelector("header");
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const scrollMargin = parseFloat(
          window.getComputedStyle(targetEl).scrollMarginTop
        ) || 0;
        const offset = Math.max(scrollMargin, headerHeight + 16);
        return Math.max(
          0,
          targetEl.getBoundingClientRect().top + window.scrollY - offset
        );
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
        if (window.lenis) {
          window.lenis.scrollTo(currentTargetY, {
            duration: 0.6,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else {
          window.scrollTo({ top: currentTargetY, behavior: "smooth" });
        }
      };

      animFrameId = requestAnimationFrame(performScroll);

      return () => {
        if (animFrameId) cancelAnimationFrame(animFrameId);
      };
    }
  }, [location.key, location.pathname, location.hash, location.state]);

  return <>{children}</>;
}
