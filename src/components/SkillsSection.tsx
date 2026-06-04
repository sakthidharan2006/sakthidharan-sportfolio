import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Cpu } from "lucide-react";
import { skillCategories } from "@/data";

const iconAnimConfigs = [
  { animate: { scale: [1, 1.2, 1] }, transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const } },
  { animate: { scale: [1, 1.3, 1, 1.15, 1] }, transition: { duration: 1.4, repeat: Infinity, repeatDelay: 2 } },
  { animate: { y: [0, -5, 0], x: [0, 2, 0] }, transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" as const } },
  { animate: { y: [0, -4, 0] }, transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" as const } },
  { animate: { scaleX: [1, 1.2, 1], scaleY: [1, 0.85, 1] }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const } },
  { animate: { scale: [1, 1.15, 1] }, transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const } },
  { animate: { y: [0, -8, 2, -4, 0] }, transition: { duration: 2, repeat: Infinity, ease: "easeOut" as const } },
  { animate: { opacity: [1, 0.3, 1], scale: [1, 0.9, 1] }, transition: { duration: 0.5, repeat: Infinity, repeatDelay: 3 } },
  { animate: { scale: [1, 1.1, 0.95, 1] }, transition: { duration: 0.6, repeat: Infinity, repeatDelay: 2.5 } },
  { animate: { x: [0, -3, 3, -1, 0] }, transition: { duration: 0.4, repeat: Infinity, repeatDelay: 4 } },
  { animate: { scale: [1, 1.2, 1] }, transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" as const } },
  { animate: { y: [0, -6, 0] }, transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const } },
];

const getAnimation = (index: number) => iconAnimConfigs[index % iconAnimConfigs.length];


export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">// skills.matrix</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight heading-glow">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            A comprehensive toolkit built through hands-on projects and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.title}
              direction={categoryIndex % 2 === 0 ? "left" : "right"}
              delay={categoryIndex * 0.1}
            >
              <TiltCard className="h-full">
                <div className="relative h-full rounded-2xl bg-card/40 backdrop-blur-xl border border-border/40 overflow-hidden group hover:border-primary/40 transition-colors duration-500"
                  style={{ boxShadow: "0 8px 40px -12px hsl(var(--primary)/0.15), inset 0 1px 0 hsl(var(--primary)/0.08)" }}
                >
                  {/* Scanline */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{ backgroundImage: "repeating-linear-gradient(0deg, hsl(var(--primary)) 0 1px, transparent 1px 3px)" }}
                  />
                  {/* Sweep highlight */}
                  <motion.div
                    className="absolute -inset-px pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(120deg, transparent 30%, hsl(var(--primary)/0.08) 50%, transparent 70%)" }}
                  />
                  {/* Corner brackets */}
                  <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-primary/50" />
                  <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-primary/50" />
                  <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-primary/50" />
                  <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary/50" />

                  <div className="relative p-6 md:p-7">
                    {/* HUD header */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/40">
                      <div className="flex items-center gap-2.5">
                        <motion.div
                          className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center"
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Cpu className="w-3.5 h-3.5 text-primary" />
                        </motion.div>
                        <h3 className="font-display text-lg font-semibold text-gradient">
                          {category.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] text-muted-foreground/70 uppercase tracking-widest">{category.code}</span>
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full bg-accent"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </div>
                    </div>

                    <div className="space-y-5">
                      {category.skills.map((skill, skillIndex) => {
                        const IconComp = skill.icon;
                        const globalIndex = categoryIndex * 4 + skillIndex;
                        const anim = getAnimation(globalIndex);
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                            className="group/skill"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2.5">
                                <div className="relative">
                                  <motion.div
                                    className="absolute -inset-1 rounded-lg"
                                    style={{ borderColor: `${skill.color}25`, borderWidth: 1 }}
                                    animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: skillIndex * 0.5 }}
                                  />
                                  <motion.div
                                    className="relative p-1.5 rounded-lg border"
                                    style={{ backgroundColor: `${skill.color}12`, borderColor: `${skill.color}30` }}
                                    animate={isInView ? anim.animate : {}}
                                    transition={anim.transition}
                                    whileHover={{ scale: 1.3, transition: { type: "spring", stiffness: 300 } }}
                                  >
                                    <IconComp className="w-4 h-4" style={{ color: skill.color }} />
                                  </motion.div>
                                </div>
                                <span className="text-sm font-medium font-mono group-hover/skill:text-primary transition-colors">
                                  {skill.name}
                                </span>
                              </div>
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                                className="text-primary text-xs font-mono font-semibold tabular-nums"
                              >
                                {skill.level.toString().padStart(3, "0")}%
                              </motion.span>
                            </div>
                            {/* Segmented HUD bar */}
                            <div className="relative h-2 rounded-sm bg-secondary/40 border border-border/40 overflow-hidden">
                              <div className="absolute inset-0 pointer-events-none opacity-30"
                                style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent 0 6px, hsl(var(--background)) 6px 7px)" }}
                              />
                              <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                transition={{
                                  duration: 1.2,
                                  delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.1,
                                  ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className="h-full relative overflow-hidden"
                                style={{ backgroundImage: "var(--gradient-primary)" }}
                              >
                                <motion.div
                                  animate={{ x: ["-100%", "100%"] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 + skillIndex * 0.2 }}
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                />
                                <motion.div
                                  className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-3 rounded-sm"
                                  style={{ backgroundColor: skill.color, boxShadow: `0 0 6px ${skill.color}` }}
                                  animate={{ opacity: [0.6, 1, 0.6] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                />
                              </motion.div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
