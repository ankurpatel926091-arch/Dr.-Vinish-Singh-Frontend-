import React from "react";
import { motion } from "framer-motion";

/**
 * Framer Motion Powered ScrollReveal Component
 * Provides fluid, spring-assisted viewport entrance animations (fade-up, fade-down, fade-in, scale-up, slide-left, slide-right).
 */
const variantsMap = {
  "fade-up": {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -35 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
};

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
  const selectedVariant = variantsMap[variant] || variantsMap["fade-up"];
  const MotionComponent = motion[Component] || motion.div;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold, margin: "0px 0px -40px 0px" }}
      variants={selectedVariant}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1], // Fluid spring curve
      }}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * ScrollRevealContainer Helper Component
 * Renders list of children with incremental Framer Motion stagger delay
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
