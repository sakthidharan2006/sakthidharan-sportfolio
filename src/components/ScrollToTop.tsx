import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => setVisible(v > 0.1));
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.15, boxShadow: "0 0 25px hsl(var(--primary) / 0.4)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg border border-primary/20 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
            <motion.circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="hsl(var(--primary-foreground))"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
              opacity={0.4}
            />
          </svg>
          <ArrowUp className="w-4 h-4 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
