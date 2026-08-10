import React, { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal Component
 * Provides smooth, subtle scroll animations (fade-in, slide-up, scale-up, slide-left, slide-right).
 * Optimized for performance using GPU-accelerated CSS properties (opacity & transform).
 */
export default function ScrollReveal({
  children,
  variant = "fade-up", // 'fade-up' | 'fade-down' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right'
  delay = 0, // Delay in milliseconds
  duration = 700, // Duration in milliseconds
  threshold = 0.1, // Viewport intersection threshold
  once = true, // Whether animation triggers once or every scroll
  className = "",
  as: Component = "div",
  style = {},
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fallback for environments where IntersectionObserver is absent
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // Trigger slightly before scrolling into view
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, once]);

  // Hidden state variant classes
  const getHiddenStyles = () => {
    switch (variant) {
      case "fade-up":
        return "translate-y-8 opacity-0";
      case "fade-down":
        return "-translate-y-8 opacity-0";
      case "fade-in":
        return "opacity-0";
      case "scale-up":
      case "zoom-in":
        return "scale-[0.94] opacity-0";
      case "slide-left":
        return "translate-x-8 opacity-0";
      case "slide-right":
        return "-translate-x-8 opacity-0";
      default:
        return "translate-y-8 opacity-0";
    }
  };

  const animationStyles = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Smooth spring ease
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <Component
      ref={ref}
      className={`transition-all ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : getHiddenStyles()
      } ${className}`}
      style={animationStyles}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * ScrollRevealStagger Helper Component
 * Renders list of children with incremental delay
 */
export function ScrollRevealContainer({
  children,
  stagger = 100, // delay step per child in ms
  variant = "fade-up",
  duration = 700,
  className = "",
  as: Component = "div",
  ...props
}) {
  return (
    <Component className={className} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <ScrollReveal
            variant={variant}
            delay={index * stagger}
            duration={duration}
          >
            {child}
          </ScrollReveal>
        );
      })}
    </Component>
  );
}
