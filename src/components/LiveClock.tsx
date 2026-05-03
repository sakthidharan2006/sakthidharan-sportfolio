import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";

export const LiveClock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const date = now.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm font-mono text-xs"
    >
      <span className="inline-flex items-center gap-1.5 text-primary">
        <Clock className="w-3.5 h-3.5" />
        <motion.span
          key={time}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          className="tabular-nums tracking-wider"
        >
          {time}
        </motion.span>
      </span>
      <span className="w-px h-3 bg-primary/20" />
      <span className="inline-flex items-center gap-1.5 text-accent">
        <Calendar className="w-3.5 h-3.5" />
        <span className="tabular-nums tracking-wider">{date}</span>
      </span>
    </motion.div>
  );
};
