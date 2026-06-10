import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const SectionDivider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="section-container py-8">
      <motion.div
        className="relative flex items-center gap-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left tick */}
        <span className="font-mono text-[10px] tracking-[0.3em] text-accent/60 uppercase">
          ◆
        </span>

        {/* Hairline rule */}
        <motion.div
          className="flex-1 h-px bg-gradient-to-r from-border via-border/60 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />

        {/* Center mark */}
        <motion.span
          className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground/50 uppercase whitespace-nowrap"
          initial={{ opacity: 0, y: 4 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          —— § ——
        </motion.span>

        {/* Hairline rule */}
        <motion.div
          className="flex-1 h-px bg-gradient-to-l from-border via-border/60 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "right" }}
        />

        {/* Right tick */}
        <span className="font-mono text-[10px] tracking-[0.3em] text-accent/60 uppercase">
          ◆
        </span>
      </motion.div>
    </div>
  );
};
