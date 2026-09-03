import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { TiltCard } from "@/components/TiltCard";
import { aboutBio, education, identity } from "@/data";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">// about</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight heading-glow">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group flex items-center justify-center">
              {/* Rotating conic gradient ring */}
              <motion.div
                className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(212 80% 55%), hsl(var(--primary)))",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              {/* Soft outer glow */}
              <motion.div
                className="absolute w-60 h-60 md:w-72 md:h-72 rounded-full blur-2xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(var(--primary) / 0.6), hsl(var(--accent) / 0.6), hsl(212 80% 55% / 0.6), hsl(var(--primary) / 0.6))",
                  opacity: 0.55,
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner mask to keep ring thin */}
              <div className="absolute w-[13.5rem] h-[13.5rem] md:w-[15.5rem] md:h-[15.5rem] rounded-full bg-background z-[1]" />

              <motion.div
                className="relative w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden z-10 ring-1 ring-border/40"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <motion.img
                  src={profilePhoto}
                  alt={identity.name}
                  className="w-full h-full object-cover object-center rounded-full"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                />
              </motion.div>

              {/* Glow effects */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-28 h-28 bg-accent/15 rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-36 h-36 bg-primary/15 rounded-full blur-2xl"
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {aboutBio.map((para, i) => (
              <p
                key={i}
                className={`text-muted-foreground leading-relaxed ${i === aboutBio.length - 1 ? "mb-8" : "mb-6"}`}
              >
                {para}
              </p>
            ))}

            {/* Education — Modern Timeline */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-lg font-bold flex items-center gap-3">
                  <motion.div
                    className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span className="absolute inset-0 rounded-lg ring-1 ring-primary/30 animate-pulse" />
                  </motion.div>
                  <span>Education</span>
                </h3>
                <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest">
                  // journey
                </span>
              </div>

              {/* Vertical timeline */}
              <div className="relative pl-8">
                {/* Vertical line */}
                <div
                  className="absolute left-3 top-2 bottom-2 w-px"
                  style={{
                    background:
                      "linear-gradient(to bottom, hsl(var(--primary)/0.6), hsl(var(--accent)/0.4), transparent)",
                  }}
                />

                <div className="space-y-5">
                  {education.map((item, index) => {
                    const accentColor =
                      index === 0 ? "primary" : index === 1 ? "accent" : "primary";
                    return (
                      <motion.div
                        key={item.degree}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                        className="relative group"
                      >
                        {/* Timeline node */}
                        <motion.div
                          className={`absolute -left-[1.4rem] top-5 w-3 h-3 rounded-full bg-${accentColor} ring-4 ring-background z-10`}
                          animate={{
                            boxShadow: [
                              `0 0 0 0 hsl(var(--${accentColor}) / 0.5)`,
                              `0 0 0 8px hsl(var(--${accentColor}) / 0)`,
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                        />

                        <TiltCard>
                          <div
                            className="relative p-4 rounded-[1.75rem] bg-card/60 backdrop-blur-md border border-border/40 overflow-hidden transition-all duration-300 group-hover:border-primary/40 group-hover:bg-card/80"
                            style={{
                              boxShadow:
                                "0 4px 20px -8px hsl(var(--primary) / 0.1)",
                            }}
                          >
                            {/* Hover sweep */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                              style={{
                                background:
                                  "linear-gradient(120deg, transparent 30%, hsl(var(--primary)/0.06) 50%, transparent 70%)",
                              }}
                            />

                            {/* Corner brackets */}
                            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-primary/30" />
                            <span className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-primary/30" />

                            <div className="relative z-10 flex items-start gap-3">
                              <motion.div
                                className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-${accentColor}/10 border border-${accentColor}/20`}
                                whileHover={{ scale: 1.1, y: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <item.icon className={`w-4 h-4 text-${accentColor}`} />
                              </motion.div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                  <h4 className="font-display font-semibold text-sm leading-tight group-hover:text-primary transition-colors duration-300">
                                    {item.degree}
                                  </h4>
                                  <motion.span
                                    className={`text-[9px] font-mono px-2 py-0.5 rounded-md uppercase tracking-wider font-medium whitespace-nowrap ${
                                      item.status === "Pursuing"
                                        ? "bg-primary/10 text-primary border border-primary/30"
                                        : item.status === "84%"
                                          ? "bg-accent/10 text-accent border border-accent/30"
                                          : "bg-muted/50 text-muted-foreground border border-border/50"
                                    }`}
                                    animate={
                                      item.status === "Pursuing"
                                        ? { opacity: [1, 0.6, 1] }
                                        : {}
                                    }
                                    transition={{ duration: 2, repeat: Infinity }}
                                  >
                                    {item.status === "Pursuing" && (
                                      <span className="inline-block w-1 h-1 rounded-full bg-primary mr-1 align-middle animate-pulse" />
                                    )}
                                    {item.status}
                                  </motion.span>
                                </div>
                                <p className="text-xs text-muted-foreground mb-2 truncate">
                                  {item.institution}
                                </p>
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[10px] font-mono text-muted-foreground/70 px-1.5 py-0.5 rounded bg-muted/30 border border-border/30">
                                    {item.year}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TiltCard>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
