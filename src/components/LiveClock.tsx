import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

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

  const weekday = now.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  const day = pad(now.getDate());
  const month = now.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const year = now.getFullYear();

  // Seconds progress for HUD ring
  const secProgress = (ss / 60) * 100;

  const Digit = ({ value }: { value: string }) => (
    <motion.span
      key={value}
      initial={{ y: -4, opacity: 0, filter: "blur(4px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="inline-block tabular-nums"
    >
      {value}
    </motion.span>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative inline-flex items-stretch gap-0 rounded-lg border border-primary/25 bg-[hsl(var(--background))]/60 backdrop-blur-xl shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.4)] overflow-hidden font-mono"
    >
      {/* Scanline overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, hsl(var(--primary)) 0 1px, transparent 1px 3px)",
        }}
      />
      {/* Sweeping highlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-primary/15 to-transparent"
        animate={{ x: ["-100%", "1200%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* LEFT: Status */}
      <div className="relative flex items-center gap-1.5 px-2.5 py-1.5 border-r border-primary/20 bg-primary/[0.04]">
        <span className="relative flex w-1.5 h-1.5">
          <motion.span
            className="absolute inset-0 rounded-full bg-accent"
            animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="relative w-1.5 h-1.5 rounded-full bg-accent" />
        </span>
        <span className="text-[8px] font-bold tracking-[0.2em] text-accent">LIVE</span>
      </div>

      {/* CENTER: Time */}
      <div className="relative flex items-baseline gap-0.5 px-3 py-1.5">
        <span className="text-base sm:text-lg font-bold text-primary [text-shadow:0_0_10px_hsl(var(--primary)/0.6)]">
          <Digit value={pad(hh)} />
        </span>
        <motion.span
          className="text-base sm:text-lg font-bold text-primary/70"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          :
        </motion.span>
        <span className="text-base sm:text-lg font-bold text-primary [text-shadow:0_0_10px_hsl(var(--primary)/0.6)]">
          <Digit value={pad(mm)} />
        </span>
        <motion.span
          className="text-base sm:text-lg font-bold text-primary/70"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
        >
          :
        </motion.span>
        <span className="text-xs sm:text-sm font-bold text-accent tabular-nums w-[2ch] text-left [text-shadow:0_0_8px_hsl(var(--accent)/0.6)]">
          <Digit value={pad(ss)} />
        </span>
        <span className="ml-1 text-[8px] font-bold tracking-widest text-muted-foreground/70 self-center">
          {ampm}
        </span>
      </div>

      {/* RIGHT: Date + HUD ring */}
      <div className="relative flex items-center gap-2 px-2.5 py-1.5 border-l border-primary/20 bg-primary/[0.04]">
        <div className="relative w-5 h-5 shrink-0">
          <svg viewBox="0 0 20 20" className="w-5 h-5 -rotate-90">
            <circle cx="10" cy="10" r="8" fill="none" stroke="hsl(var(--primary)/0.15)" strokeWidth="1.5" />
            <circle
              cx="10"
              cy="10"
              r="8"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="1.5"
              strokeDasharray={`${(secProgress / 100) * 50.26} 50.26`}
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 3px hsl(var(--accent)/0.7))" }}
            />
          </svg>
          <Activity className="absolute inset-0 m-auto w-2.5 h-2.5 text-accent" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[9px] font-bold tracking-[0.18em] text-foreground/90">
            {day} {month} {year}
          </span>
          <span className="text-[7px] tracking-[0.25em] text-muted-foreground/60">
            {weekday} · IST
          </span>
        </div>
      </div>

      {/* Corner brackets */}
      <span aria-hidden className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/60" />
      <span aria-hidden className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/60" />
      <span aria-hidden className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/60" />
      <span aria-hidden className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/60" />
    </motion.div>
  );
};
