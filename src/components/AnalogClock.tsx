import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const pad = (n: number) => n.toString().padStart(2, "0");

export const AnalogClock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // Smooth angles (degrees), 12-hour dial
  const hourAngle = (h % 12) * 30 + m * 0.5;
  const minAngle = m * 6 + s * 0.1;
  const secAngle = s * 6;

  const weekday = now.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  const day = pad(now.getDate());
  const month = now.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const year = now.getFullYear();
  const ampm = h >= 12 ? "PM" : "AM";

  // Hour ticks (12)
  const ticks = Array.from({ length: 12 }, (_, i) => i);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative inline-flex items-center gap-2.5 rounded-xl border border-primary/25 bg-[hsl(var(--background))]/70 backdrop-blur-xl px-2.5 py-1.5 shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.45)]"
    >
      {/* Analog dial */}
      <div className="relative w-9 h-9 shrink-0">
        <svg viewBox="0 0 40 40" className="w-9 h-9">
          {/* Face */}
          <circle cx="20" cy="20" r="18.5" fill="hsl(var(--card))" stroke="hsl(var(--primary)/0.4)" strokeWidth="1" />
          <circle cx="20" cy="20" r="18.5" fill="none" stroke="hsl(var(--primary)/0.15)" strokeWidth="2.5" />

          {/* Hour ticks */}
          {ticks.map((i) => {
            const a = (i * 30 - 90) * (Math.PI / 180);
            const x1 = 20 + Math.cos(a) * 15;
            const y1 = 20 + Math.sin(a) * 15;
            const x2 = 20 + Math.cos(a) * 17;
            const y2 = 20 + Math.sin(a) * 17;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={i % 3 === 0 ? "hsl(var(--primary))" : "hsl(var(--muted-foreground)/0.5)"}
                strokeWidth={i % 3 === 0 ? "1.4" : "0.7"}
                strokeLinecap="round"
              />
            );
          })}

          {/* Hour hand */}
          <line
            x1="20"
            y1="20"
            x2="20"
            y2="11"
            stroke="hsl(var(--foreground))"
            strokeWidth="1.8"
            strokeLinecap="round"
            transform={`rotate(${hourAngle} 20 20)`}
          />
          {/* Minute hand */}
          <line
            x1="20"
            y1="20"
            x2="20"
            y2="7.5"
            stroke="hsl(var(--foreground))"
            strokeWidth="1.2"
            strokeLinecap="round"
            transform={`rotate(${minAngle} 20 20)`}
          />
          {/* Second hand */}
          <line
            x1="20"
            y1="22.5"
            x2="20"
            y2="6.5"
            stroke="hsl(var(--accent))"
            strokeWidth="0.7"
            strokeLinecap="round"
            transform={`rotate(${secAngle} 20 20)`}
          />
          {/* Center pin */}
          <circle cx="20" cy="20" r="1.6" fill="hsl(var(--accent))" />
          <circle cx="20" cy="20" r="0.7" fill="hsl(var(--card))" />
        </svg>
      </div>

      {/* Date block */}
      <div className="flex flex-col leading-tight border-l border-primary/20 pl-2.5">
        <span className="text-[10px] font-bold tracking-[0.16em] text-foreground/90 font-mono">
          {day} {month} {year}
        </span>
        <span className="text-[8px] tracking-[0.22em] text-muted-foreground/70 font-mono">
          {weekday} · {ampm}
        </span>
      </div>
    </motion.div>
  );
};
