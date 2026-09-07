import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      }
      requestAnimationFrame(() => {
        if (!window.location.hash) {
          window.scrollTo(0, 0);
          if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
          }
        }
      });
    }
  }, [pathname, hash]);

  return null;
}
