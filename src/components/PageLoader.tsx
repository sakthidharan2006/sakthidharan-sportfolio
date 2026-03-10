import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Expanding rings */}
          {[0, 0.3, 0.6].map((delay) => (
            <motion.div
              key={delay}
              className="absolute w-24 h-24 rounded-full border border-primary/20"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 2.5], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay, ease: "easeOut" }}
            />
          ))}

          <motion.div
            className="flex flex-col items-center gap-4 relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center"
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Terminal className="w-6 h-6 text-primary" />
            </motion.div>

            <motion.div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ y: [0, -8, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </motion.div>

            <motion.span
              className="text-xs font-mono text-muted-foreground tracking-widest uppercase"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
