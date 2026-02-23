import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Cloud, Briefcase } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Internship",
    organization: "SBA HIGH-TECH Solutions",
    period: "2023",
    description:
      "Gained hands-on experience working on real-world projects and collaborating with industry professionals. Developed practical skills in software development and problem-solving.",
    highlights: ["Real-world Projects", "Industry Experience", "Professional Development"],
  },
  {
    icon: Cloud,
    title: "Microsoft Azure Fundamentals",
    organization: "Microsoft Certification",
    period: "2024",
    description:
      "This journey has strengthened my knowledge of cloud computing, Azure architecture, and effective management & governance practices.",
    highlights: ["Cloud Computing", "Azure Architecture", "Management & Governance"],
  },
  {
    icon: Award,
    title: "AWS Certifications",
    organization: "Amazon Web Services",
    period: "2024",
    description:
      "Completed AWS Cloud Practitioner Essentials and Introduction to Generative AI - Art of the Possible. Built foundational knowledge in cloud services and AI capabilities.",
    highlights: ["Cloud Practitioner Essentials", "Generative AI Fundamentals", "AWS Services"],
  },
  {
    icon: Award,
    title: "Cybersecurity Certification",
    organization: "Cisco Networking Academy",
    period: "2024",
    description:
      "Completed Introduction to Cybersecurity course, gaining essential knowledge in security fundamentals, threat detection, and network protection strategies.",
    highlights: ["Network Security", "Threat Detection", "Security Best Practices"],
  },
  {
    icon: Award,
    title: "Data Analytics Essentials",
    organization: "Cisco Networking Academy",
    period: "2026",
    description:
      "Completed Data Analytics Essentials certification through Cisco Networking Academy at Bannari Amman Institute of Technology, building skills in data analysis and visualization.",
    highlights: ["Data Analysis", "Data Visualization", "Analytics Fundamentals"],
  },
  {
    icon: Award,
    title: "Introduction to Data Science",
    organization: "Cisco Networking Academy",
    period: "2026",
    description:
      "Completed Introduction to Data Science certification through Cisco Networking Academy at Bannari Amman Institute of Technology, gaining foundational knowledge in data science concepts and methodologies.",
    highlights: ["Data Science", "Data Methodologies", "Statistical Analysis"],
  },
  {
    icon: Award,
    title: "Introduction to Modern AI",
    organization: "Cisco Networking Academy",
    period: "2026",
    description:
      "Completed Introduction to Modern AI certification through Cisco Networking Academy at Bannari Amman Institute of Technology, exploring modern AI concepts and applications.",
    highlights: ["Modern AI", "AI Applications", "Machine Learning Basics"],
  },
  {
    icon: Award,
    title: "Python Essentials 1",
    organization: "Cisco Networking Academy & Python Institute",
    period: "2026",
    description:
      "Completed Python Essentials 1 certification through Cisco Networking Academy at Bannari Amman Institute of Technology, building foundational Python programming skills.",
    highlights: ["Python Programming", "Scripting", "Software Development"],
  },
  {
    icon: BookOpen,
    title: "Self-Learning Journey",
    organization: "Personal Development",
    period: "Ongoing",
    description:
      "Dedicated to continuous learning through documentation, tutorials, and building real-world projects. Focus on practical, industry-relevant skills and modern development practices.",
    highlights: ["Full-Stack Development", "Best Practices", "Modern Technologies"],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">My Journey</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Experience & Learning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my growth through hands-on experience and continuous learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block origin-top"
          />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 80 }}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Animated Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 200 }}
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 hidden md:block animate-glow"
                />

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 card-hover">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                        <exp.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary text-sm">{exp.organization}</p>
                        <p className="text-muted-foreground text-sm">{exp.period}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
