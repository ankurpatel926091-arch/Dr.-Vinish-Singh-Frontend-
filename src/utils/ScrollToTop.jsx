import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { key, hash } = useLocation();
  const navigationType = useNavigationType();
  const positionsRef = useRef(new Map());
  const currentKeyRef = useRef(key);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const savePosition = () => {
      positionsRef.current.set(currentKeyRef.current, window.scrollY);
    };

    window.addEventListener("scroll", savePosition, { passive: true });
    return () => window.removeEventListener("scroll", savePosition);
  }, []);

  useEffect(() => {
    if (currentKeyRef.current !== key && !positionsRef.current.has(currentKeyRef.current)) {
      positionsRef.current.set(currentKeyRef.current, window.scrollY);
    }

    currentKeyRef.current = key;
    if (hash) return;

    const savedPosition = positionsRef.current.get(key);
    const scrollTo = (top) => {
      if (window.lenis) {
        window.lenis.scrollTo(top, { immediate: true });
      } else {
        window.scrollTo(0, top);
      }
    };

    if (navigationType === "POP" && savedPosition !== undefined) {
      requestAnimationFrame(() => scrollTo(savedPosition));
      return;
    }

    positionsRef.current.set(key, 0);
    scrollTo(0);
  }, [key, hash, navigationType]);

  return null;
}
