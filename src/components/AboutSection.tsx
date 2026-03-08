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
              <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-primary" />
                Education
              </h3>
              <div className="grid gap-3">
                {education.map((item, index) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <motion.div
                      className="p-2 rounded-lg bg-primary/10"
                      animate={
                        index === 0 ? { rotate: [0, 360] } :
                        index === 1 ? { y: [0, -4, 0] } :
                        { scale: [1, 1.2, 1] }
                      }
                      transition={{
                        duration: index === 0 ? 6 : index === 1 ? 1.5 : 2,
                        repeat: Infinity,
                        ease: index === 0 ? "linear" : "easeInOut",
                        delay: index * 0.5,
                      }}
                      whileHover={{ scale: 1.3, rotate: 10 }}
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="font-display font-semibold text-sm">{item.degree}</h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 bg-primary/10 text-primary rounded w-fit uppercase tracking-wider">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                      <p className="text-xs text-muted-foreground/60 font-mono mt-1">{item.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
