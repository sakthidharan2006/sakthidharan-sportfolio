import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2, FileCode, Braces, Atom,
  Server, Route, Database, GitBranch,
  KeyRound, MonitorSmartphone, Send, Wrench,
} from "lucide-react";

const iconAnimConfigs = [
  { animate: { rotate: [0, 360] }, transition: { duration: 6, repeat: Infinity, ease: "linear" as const } },
  { animate: { scale: [1, 1.25, 1] }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const } },
  { animate: { y: [0, -6, 0] }, transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" as const } },
  { animate: { rotate: [-12, 12, -12] }, transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" as const } },
  { animate: { rotate: [0, 360] }, transition: { duration: 4, repeat: Infinity, ease: "linear" as const } },
  { animate: { x: [0, -3, 4, -2, 0] }, transition: { duration: 0.25, repeat: Infinity, repeatDelay: 3 } },
];

const getAnimation = (index: number) => iconAnimConfigs[index % iconAnimConfigs.length];

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 90, icon: FileCode, color: "hsl(12 77% 52%)" },
      { name: "CSS3", level: 85, icon: Code2, color: "hsl(205 87% 50%)" },
      { name: "JavaScript", level: 85, icon: Braces, color: "hsl(50 90% 50%)" },
      { name: "React", level: 80, icon: Atom, color: "hsl(193 95% 55%)" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75, icon: Server, color: "hsl(120 40% 44%)" },
      { name: "Express", level: 75, icon: Route, color: "hsl(0 0% 50%)" },
      { name: "REST APIs", level: 80, icon: Send, color: "hsl(190 90% 45%)" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 75, icon: Database, color: "hsl(120 40% 40%)" },
      { name: "SQL Basics", level: 65, icon: Database, color: "hsl(210 50% 50%)" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 85, icon: GitBranch, color: "hsl(15 75% 55%)" },
      { name: "JWT Auth", level: 70, icon: KeyRound, color: "hsl(280 60% 55%)" },
      { name: "VS Code", level: 90, icon: MonitorSmartphone, color: "hsl(210 80% 55%)" },
      { name: "Postman", level: 80, icon: Wrench, color: "hsl(25 90% 55%)" },
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">// skills</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            A comprehensive toolkit built through hands-on projects and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-xl p-6 md:p-8 card-hover border border-border/50"
            >
              <h3 className="font-display text-lg font-semibold mb-6 text-gradient">
                {category.title}
              </h3>
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
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="relative">
                            {/* Animated ring behind icon */}
                            <motion.div
                              className="absolute -inset-1 rounded-lg"
                              style={{ borderColor: `${skill.color}25`, borderWidth: 1 }}
                              animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: skillIndex * 0.5 }}
                            />
                            <motion.div
                              className="relative p-1.5 rounded-lg"
                              style={{ backgroundColor: `${skill.color}12` }}
                              animate={isInView ? anim.animate : {}}
                              transition={anim.transition}
                              whileHover={{ scale: 1.3, rotate: 15, transition: { type: "spring", stiffness: 300 } }}
                            >
                              <IconComp className="w-4 h-4" style={{ color: skill.color }} />
                            </motion.div>
                          </div>
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className="text-muted-foreground text-xs font-mono"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={isInView ? { width: `${skill.level}%`, opacity: 1 } : { width: 0, opacity: 0 }}
                          transition={{
                            duration: 1.2,
                            delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                          className="h-full rounded-full relative overflow-hidden"
                          style={{ backgroundImage: "var(--gradient-primary)" }}
                        >
                          {/* Shimmer */}
                          <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 + skillIndex * 0.2 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                          />
                          {/* Glow dot at end */}
                          <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
                            animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: skillIndex * 0.3 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
