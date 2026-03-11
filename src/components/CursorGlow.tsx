import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CursorGlow = () => {
  const [visible, setVisible] = useState(false);

  const springConfig = { damping: 30, stiffness: 250, mass: 0.4 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [visible, x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 mix-blend-soft-light"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x,
          y,
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.04) 0%, hsl(var(--primary) / 0.015) 40%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x,
          y,
          width: 20,
          height: 20,
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
};
