import React, { useEffect, useRef } from "react";

function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    let animationFrameId = null;

    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) {
        if (totalHeight > 0) {
          const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
          barRef.current.style.transform = `scaleX(${progress})`;
        } else {
          barRef.current.style.transform = "scaleX(0)";
        }
      }
    };

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3.5px] w-full bg-slate-200/20 pointer-events-none backdrop-blur-xs"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)] rounded-r-full origin-left will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

export default React.memo(ScrollProgressBar);

