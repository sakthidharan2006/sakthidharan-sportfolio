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
              {/* Gradient ring */}
              <motion.div
                className="absolute w-[19rem] h-[19rem] md:w-[21.5rem] md:h-[21.5rem] rounded-2xl"
                style={{
                  background: "conic-gradient(from 0deg, hsl(190 90% 42%), hsl(210 85% 50%), hsl(250 70% 55%), hsl(190 90% 42%))",
                  padding: "2px",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-2xl bg-background" />
              </motion.div>
              <motion.div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden z-10"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <motion.img
                  src={profilePhoto}
                  alt="Sakthidharan E"
                  className="w-full h-full object-cover rounded-2xl"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }}
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
