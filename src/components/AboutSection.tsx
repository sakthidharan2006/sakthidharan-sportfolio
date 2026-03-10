import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
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
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Secondary slower counter-rotating ring */}
              <motion.div
                className="absolute w-[19.5rem] h-[19.5rem] md:w-[22rem] md:h-[22rem] rounded-full border-2 border-dashed"
                style={{ borderColor: "hsl(var(--primary) / 0.15)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              {/* Orbiting dot */}
              <motion.div
                className="absolute w-[20rem] h-[20rem] md:w-[22.5rem] md:h-[22.5rem] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
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
                  className="w-full h-full object-cover rounded-full scale-250"
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
              <h3 className="font-display text-lg font-bold mb-6 flex items-center gap-3">
                <motion.div
                  className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <motion.div
                    className="absolute inset-0 rounded-lg border border-primary/20"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <span>Education</span>
              </h3>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical timeline line */}
                <motion.div
                  className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-accent/30 to-primary/10"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  style={{ transformOrigin: "top" }}
                />

                <div className="space-y-4">
                  {education.map((item, index) => (
                    <motion.div
                      key={item.degree}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                      className="relative group"
                    >
                      <div className="flex items-start gap-5">
                        {/* Timeline node */}
                        <div className="relative z-10 flex-shrink-0">
                          <motion.div
                            className="w-10 h-10 rounded-xl bg-card border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)] transition-all duration-300"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            animate={
                              index === 0 ? { borderColor: ["hsl(var(--primary) / 0.3)", "hsl(var(--accent) / 0.5)", "hsl(var(--primary) / 0.3)"] } : {}
                            }
                            transition={index === 0 ? { duration: 3, repeat: Infinity } : { type: "spring" }}
                          >
                            <item.icon className="w-4 h-4 text-primary" />
                          </motion.div>
                        </div>

                        {/* Content card */}
                        <motion.div
                          className="flex-1 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 group-hover:border-primary/25 group-hover:bg-card transition-all duration-300 relative overflow-hidden"
                          whileHover={{ x: 4 }}
                        >
                          {/* Subtle gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          <div className="relative z-10">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1.5">
                              <h4 className="font-display font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                                {item.degree}
                              </h4>
                              <motion.span
                                className={`text-[10px] font-mono px-2.5 py-1 rounded-full w-fit uppercase tracking-wider font-medium ${
                                  item.status === "Pursuing"
                                    ? "bg-primary/15 text-primary border border-primary/20"
                                    : "bg-accent/10 text-accent border border-accent/20"
                                }`}
                                animate={item.status === "Pursuing" ? { opacity: [1, 0.7, 1] } : {}}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                {item.status}
                              </motion.span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{item.institution}</p>
                            <p className="text-xs text-muted-foreground/50 font-mono flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-primary/40" />
                              {item.year}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
