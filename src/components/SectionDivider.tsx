import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const SectionDivider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex items-center justify-center py-4">
      <motion.div
        className="flex items-center gap-3 w-full max-w-xs"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/50"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div
          className="w-2 h-2 rounded-full bg-primary/40 border border-primary/20"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-primary/60"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <motion.div
          className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/50"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "right" }}
        />
      </motion.div>
    </div>
  );
};
