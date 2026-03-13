import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
}

export const AnimatedSection = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const getInitial = () => {
    switch (direction) {
      case "left": return { opacity: 0, x: -60 };
      case "right": return { opacity: 0, x: 60 };
      case "scale": return { opacity: 0, scale: 0.9 };
      default: return { opacity: 0, y: 50 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case "left":
      case "right": return { opacity: 1, x: 0 };
      case "scale": return { opacity: 1, scale: 1 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{
        duration: 0.7,
        delay,
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
