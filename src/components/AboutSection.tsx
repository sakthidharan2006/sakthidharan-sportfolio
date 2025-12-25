import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Lightbulb, Award, BookOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "B.Tech - Information Technology",
      description: "Bannari Amman Institute of Technology (Pursuing)",
    },
    {
      icon: Award,
      title: "Diploma - Computer Technology",
      description: "Kongu Polytechnic College — 84%",
    },
    {
      icon: BookOpen,
      title: "SSLC",
      description: "Nest School",
    },
    {
      icon: Code,
      title: "Full-Stack Focus",
      description: "Proficient in software, hardware, and networking fundamentals",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Passionate about tackling complex challenges with elegant solutions",
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
          <span className="text-primary font-medium mb-4 block">Get to Know Me</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card overflow-hidden">
                  <img 
                    src={profilePhoto} 
                    alt="Sakthidharan E" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate IT professional and aspiring software developer pursuing{" "}
              <span className="text-foreground font-medium">B.Tech in Information Technology</span>{" "}
              at Bannari Amman Institute of Technology. 
              My journey in tech has equipped me with a comprehensive understanding of software 
              development, hardware systems, and networking fundamentals.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I thrive on solving complex problems and continuously expanding my skill set. 
              Whether it's building full-stack web applications or optimizing system performance, 
              I approach every challenge with curiosity and determination to deliver impactful solutions.
            </p>

            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
