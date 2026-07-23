import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TiltCard } from "@/components/TiltCard";
import { experiences } from "@/data";
const volunteerCard = { url: "/wtl-volunteer-card.png" };



export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">// experience.log</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight heading-glow">
            Experience & Learning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            A timeline of my growth through hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Volunteer Membership Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16 max-w-3xl mx-auto"
        >
          <div className="text-center mb-5">
            <span className="text-accent font-mono text-xs uppercase tracking-widest mb-2 block">// volunteer.credential</span>
            <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight">We The Leaders — Volunteer Membership</h3>
          </div>
          <TiltCard>
            <div
              className="relative rounded-2xl overflow-hidden border border-primary/30 bg-card/40 backdrop-blur-xl group"
              style={{ boxShadow: "0 20px 60px -20px hsl(var(--primary)/0.35), inset 0 1px 0 hsl(var(--primary)/0.1)" }}
            >
              <img
                src={volunteerCard.url}
                alt="Sakthidharan E — We The Leaders Volunteer Membership Card (WTL-26-164930)"
                loading="lazy"
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-accent/60" />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-accent/60" />
            </div>
          </TiltCard>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block origin-top"
          />

          <div className="space-y-8 md:space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.05, type: "spring", stiffness: 80 }}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.2 + index * 0.05, type: "spring", stiffness: 200 }}
                  className="absolute left-8 md:left-1/2 w-3 h-3 -translate-x-1/2 hidden md:flex items-center justify-center"
                >
                  <span className="absolute w-3 h-3 rounded-sm bg-primary rotate-45" />
                  <motion.span
                    className="absolute w-5 h-5 rounded-sm border border-primary/40 rotate-45"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <TiltCard>
                    <div
                      className="relative bg-card/50 backdrop-blur-xl rounded-xl p-5 border border-border/40 hover:border-primary/40 transition-colors group overflow-hidden"
                      style={{ boxShadow: "0 8px 30px -12px hsl(var(--primary)/0.15), inset 0 1px 0 hsl(var(--primary)/0.06)" }}
                    >
                      {/* Scanline */}
                      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                        style={{ backgroundImage: "repeating-linear-gradient(0deg, hsl(var(--primary)) 0 1px, transparent 1px 3px)" }}
                      />
                      {/* Corner brackets */}
                      <span className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-primary/40" />
                      <span className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-primary/40" />

                      <div className="relative flex items-start gap-4 mb-3">
                        <motion.div
                          className="p-2.5 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 shrink-0"
                          animate={{
                            y: index % 3 === 0 ? [0, -4, 0] : index % 3 === 1 ? [0, -3, 0] : [0, 0],
                            scale: index % 3 === 2 ? [1, 1.15, 1] : [1, 1, 1],
                          }}
                          transition={{
                            duration: index % 3 === 0 ? 2 : index % 3 === 1 ? 1.8 : 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3,
                          }}
                          whileHover={{ scale: 1.3 }}
                        >
                          <exp.icon className="w-5 h-5 text-primary" />
                        </motion.div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h3 className="font-display text-base font-bold tracking-tight group-hover:text-primary transition-colors">{exp.title}</h3>
                            <span className="font-mono text-[9px] text-primary px-1.5 py-0.5 rounded bg-primary/10 border border-primary/30 whitespace-nowrap">{exp.period}</span>
                          </div>
                          <p className="text-primary/80 text-xs font-medium font-mono">{exp.organization}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 relative">{exp.description}</p>
                      <div className="flex flex-wrap gap-1.5 relative">
                        {exp.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-0.5 bg-secondary/60 text-secondary-foreground border border-border/50 rounded text-[10px] font-mono hover:border-primary/40 transition-colors"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
