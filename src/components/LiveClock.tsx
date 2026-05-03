import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LiveClock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hh = now.getHours() % 12 || 12;
  const mm = now.getMinutes();
  const ss = now.getSeconds();
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  const pad = (n: number) => n.toString().padStart(2, "0");

  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
  const day = now.getDate();
  const month = now.toLocaleDateString("en-US", { month: "short" });
  const year = now.getFullYear();

  const TimeBlock = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ y: -6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="relative px-2.5 py-1.5 rounded-md bg-gradient-to-b from-primary/15 to-primary/5 border border-primary/25 font-mono text-base sm:text-lg font-bold tabular-nums text-primary min-w-[2.4rem] text-center shadow-[0_0_12px_-4px_hsl(var(--primary)/0.5)]"
      >
        {value}
      </motion.div>
      <span className="mt-1 text-[8px] font-mono uppercase tracking-[0.15em] text-muted-foreground/60">
        {label}
      </span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative inline-flex flex-col items-center gap-2 px-4 py-3 rounded-xl border border-primary/20 bg-card/40 backdrop-blur-md shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.3)] overflow-hidden"
    >
      {/* Animated top bar */}
      <motion.div
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ width: "50%" }}
      />

      <div className="flex items-center gap-1.5">
        <TimeBlock value={pad(hh)} label="HRS" />
        <motion.span
          className="text-primary font-mono text-lg font-bold pb-3"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          :
        </motion.span>
        <TimeBlock value={pad(mm)} label="MIN" />
        <motion.span
          className="text-primary font-mono text-lg font-bold pb-3"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
        >
          :
        </motion.span>
        <TimeBlock value={pad(ss)} label="SEC" />
        <div className="flex flex-col items-center ml-1">
          <span className="px-1.5 py-0.5 rounded bg-accent/15 border border-accent/30 text-accent font-mono text-[10px] font-bold">
            {ampm}
          </span>
          <span className="mt-1 text-[8px] font-mono uppercase tracking-[0.15em] text-muted-foreground/60">
            IST
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/80">
        <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
        <span>{weekday}</span>
        <span className="text-primary/60">•</span>
        <span className="text-foreground/80">{day} {month} {year}</span>
      </div>
    </motion.div>
  );
};
