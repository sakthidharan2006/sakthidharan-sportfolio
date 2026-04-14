import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { TiltCard } from "@/components/TiltCard";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      icon: GraduationCap,
      degree: "B.Tech - Information Technology",
      institution: "Bannari Amman Institute of Technology",
      status: "Pursuing",
      year: "2023 - 2027",
    },
    {
      icon: Award,
      degree: "Diploma in Computer Technology",
      institution: "Kongu Polytechnic College",
      status: "84%",
      year: "2020 - 2023",
    },
    {
      icon: BookOpen,
      degree: "SSLC",
      institution: "Nest School",
      status: "Completed",
      year: "2020",
    },
  ];

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
              {/* Rotating gradient ring */}
              <motion.div
                className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(212 80% 48%), hsl(var(--primary)))",
                  padding: "3px",
                }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Secondary slower counter-rotating ring */}
              <motion.div
                className="absolute w-[19.5rem] h-[19.5rem] md:w-[22rem] md:h-[22rem] rounded-full border-2 border-dashed"
                style={{ borderColor: "hsl(var(--primary) / 0.15)" }}
              />

              {/* Orbiting dot */}
              <motion.div
                className="absolute w-[20rem] h-[20rem] md:w-[22.5rem] md:h-[22.5rem] rounded-full"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  className="absolute -top-1 left-1/2 w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: "hsl(var(--primary))", boxShadow: "0 0 10px hsl(var(--primary) / 0.6)" }}
                />
              </motion.div>

              <motion.div
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <motion.img
                  src={profilePhoto}
                  alt="Sakthidharan E"
                  className="w-full h-full object-cover object-top rounded-full scale-110"
                  whileHover={{ scale: 1.1 }}
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
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate IT professional and aspiring software developer pursuing{" "}
              <span className="text-foreground font-medium">B.Tech in Information Technology</span>{" "}
              at Bannari Amman Institute of Technology.
              My journey in tech has equipped me with a comprehensive understanding of software
              development, hardware systems, and networking fundamentals.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I thrive on solving complex problems and continuously expanding my skill set.
              Whether it's building full-stack web applications or optimizing system performance,
              I approach every challenge with curiosity and determination to deliver impactful solutions.
            </p>

            {/* Education */}
            <div className="mb-8">
              <h3 className="font-display text-lg font-bold mb-8 flex items-center gap-3">
                <motion.div
                  className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <GraduationCap className="w-4 h-4 text-primary" />
                </motion.div>
                <span>Education</span>
              </h3>

              {/* Floating cards */}
              <div className="relative space-y-5">
                {education.map((item, index) => (
                  <TiltCard key={item.degree}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.15, type: "spring", stiffness: 100 }}
                      className="group cursor-default"
                    >
                      <div
                        className="relative p-5 rounded-2xl bg-card/90 backdrop-blur-md border border-border/40 overflow-hidden"
                        style={{
                          boxShadow: "0 8px 30px -12px hsl(var(--primary) / 0.1), 0 4px 12px -4px hsl(0 0% 0% / 0.05)",
                        }}
                      >
                        {/* Floating accent orb */}
                        <motion.div
                          className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: index === 0
                              ? "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)"
                              : index === 1
                              ? "radial-gradient(circle, hsl(var(--accent) / 0.15), transparent 70%)"
                              : "radial-gradient(circle, hsl(212 80% 48% / 0.15), transparent 70%)",
                          }}
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* Top row: icon + status */}
                        <div className="flex items-center justify-between mb-3 relative z-10">
                          <motion.div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              index === 0 ? "bg-primary/10" : index === 1 ? "bg-accent/10" : "bg-secondary"
                            }`}
                            animate={{ y: [0, -4, 0] }}
                            transition={{
                              duration: 2.5 + index * 0.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.3,
                            }}
                          >
                            <item.icon className={`w-4 h-4 ${
                              index === 0 ? "text-primary" : index === 1 ? "text-accent" : "text-muted-foreground"
                            }`} />
                          </motion.div>

                          <motion.span
                            className={`text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-medium backdrop-blur-sm ${
                              item.status === "Pursuing"
                                ? "bg-primary/10 text-primary border border-primary/20"
                                : item.status === "84%"
                                ? "bg-accent/10 text-accent border border-accent/20"
                                : "bg-muted text-muted-foreground border border-border/50"
                            }`}
                            animate={item.status === "Pursuing" ? {
                              boxShadow: [
                                "0 0 0 0 hsl(var(--primary) / 0)",
                                "0 0 0 4px hsl(var(--primary) / 0.1)",
                                "0 0 0 0 hsl(var(--primary) / 0)",
                              ],
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {item.status}
                          </motion.span>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <h4 className="font-display font-semibold text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                            {item.degree}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>
                          <div className="flex items-center gap-2">
                            <motion.div
                              className={`w-1.5 h-1.5 rounded-full ${
                                index === 0 ? "bg-primary" : index === 1 ? "bg-accent" : "bg-muted-foreground/40"
                              }`}
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                            />
                            <p className="text-xs text-muted-foreground/60 font-mono">{item.year}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
