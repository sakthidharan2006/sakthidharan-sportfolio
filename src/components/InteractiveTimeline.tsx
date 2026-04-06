import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Award, BookOpen, Cloud, Briefcase, ChevronDown, Calendar, MapPin } from "lucide-react";

const milestones = [
  {
    year: "2023",
    icon: Briefcase,
    title: "Internship at SBA HIGH-TECH Solutions",
    subtitle: "Industry Experience",
    description:
      "Gained hands-on experience working on real-world projects and collaborating with industry professionals.",
    details: [
      "Developed practical skills in software development",
      "Collaborated with cross-functional teams",
      "Worked on production-grade codebases",
    ],
    color: "primary",
  },
  {
    year: "2024",
    icon: Cloud,
    title: "Microsoft Azure Fundamentals",
    subtitle: "Microsoft Certification",
    description:
      "Strengthened knowledge of cloud computing, Azure architecture, and management & governance practices.",
    details: [
      "Cloud Computing Foundations",
      "Azure Architecture & Services",
      "Management & Governance",
    ],
    color: "accent",
  },
  {
    year: "2024",
    icon: Award,
    title: "AWS & Cybersecurity Certifications",
    subtitle: "AWS & Cisco",
    description:
      "Completed AWS Cloud Practitioner Essentials, Intro to Generative AI, and Cisco Cybersecurity certification.",
    details: [
      "AWS Cloud Practitioner Essentials",
      "Introduction to Generative AI",
      "Cisco Cybersecurity Fundamentals",
    ],
    color: "primary",
  },
  {
    year: "2026",
    icon: Award,
    title: "Data Science & Analytics Certs",
    subtitle: "Cisco Networking Academy",
    description:
      "Completed Data Analytics Essentials and Introduction to Data Science certifications.",
    details: [
      "Data Analytics Essentials",
      "Introduction to Data Science",
      "Statistical Analysis & Visualization",
    ],
    color: "accent",
  },
  {
    year: "2026",
    icon: Award,
    title: "TN-IMPACT 2026 · TANCAM Hackathon",
    subtitle: "TANCAM · Dassault Systèmes · TIDCO",
    description:
      "Participated in Special Expert Sessions by TANCAM as part of TN-IMPACT 2026 Industrial Hackathon at KIT, Tamil Nadu.",
    details: [
      "Advanced Manufacturing Sessions",
      "Industrial Hackathon",
      "Expert-led Workshops",
    ],
    color: "accent",
  },
  {
    year: "2026",
    icon: Award,
    title: "AI & Python Certifications",
    subtitle: "Cisco & Google",
    description:
      "Earned Introduction to Modern AI, Python Essentials 1, and Google Gemini Certified Student qualifications.",
    details: [
      "Introduction to Modern AI",
      "Python Essentials 1",
      "Google Gemini Certified Student",
    ],
    color: "primary",
  },
  {
    year: "2026",
    icon: Award,
    title: "EmbeddedX · GDG On Campus",
    subtitle: "Google Developer Groups · CVR College of Engineering",
    description:
      "Participated in EmbeddedX event organized by Google Developer Groups On Campus, exploring embedded systems and developer collaboration.",
    details: [
      "Embedded Systems",
      "GDG On Campus Event",
      "Developer Community Engagement",
    ],
    color: "primary",
  },
  {
    year: "Ongoing",
    icon: BookOpen,
    title: "Self-Learning Journey",
    subtitle: "Personal Development",
    description:
      "Dedicated to continuous learning through documentation, tutorials, and building real-world projects.",
    details: [
      "Full-Stack Development",
      "Modern Best Practices",
      "Open Source Contributions",
    ],
    color: "accent",
  },
];

const TimelineNode = ({
  milestone,
  index,
  isActive,
  onClick,
}: {
  milestone: (typeof milestones)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } gap-4 md:gap-0`}
    >
      {/* Node dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 0.2 + index * 0.08, type: "spring", stiffness: 200 }}
        className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <motion.div
          className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-colors duration-300 ${
            isActive
              ? "bg-primary border-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
              : "bg-card border-border hover:border-primary/50"
          }`}
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <milestone.icon
            className={`w-4 h-4 transition-colors ${
              isActive ? "text-primary-foreground" : "text-muted-foreground"
            }`}
          />
        </motion.div>
        {/* Glow ring */}
        <motion.div
          className="absolute inset-0 rounded-xl border border-primary/30"
          animate={isActive ? { scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] } : { scale: 1, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Year label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 + index * 0.08 }}
        className={`absolute left-6 md:left-1/2 top-12 -translate-x-1/2 font-mono text-[10px] tracking-wider text-primary font-semibold whitespace-nowrap`}
      >
        {milestone.year}
      </motion.div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 10 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isLeft ? -40 : 40, y: 10 }}
        transition={{ duration: 0.5, delay: 0.15 + index * 0.08, type: "spring", stiffness: 80 }}
        className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
          isLeft ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <motion.div
          onClick={onClick}
          className={`relative bg-card rounded-xl p-5 border cursor-pointer transition-all duration-300 group ${
            isActive
              ? "border-primary/40 shadow-[0_0_30px_-8px_hsl(var(--primary)/0.2)]"
              : "border-border/50 hover:border-primary/20"
          }`}
          whileHover={{ y: -2 }}
        >
          {/* Connector line to node */}
          <div
            className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-6 h-px bg-gradient-to-r ${
              isLeft
                ? "right-0 translate-x-full from-border to-transparent"
                : "left-0 -translate-x-full from-transparent to-border"
            }`}
          />

          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h3 className="font-display text-sm font-bold tracking-tight group-hover:text-primary transition-colors">
                {milestone.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-primary/80 text-xs font-medium">{milestone.subtitle}</span>
                <span className="text-muted-foreground/40">·</span>
                <span className="font-mono text-[10px] text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5" />
                  {milestone.year}
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isActive ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="shrink-0 mt-1"
            >
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </div>

          <p className="text-muted-foreground text-xs leading-relaxed mb-3">
            {milestone.description}
          </p>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-3 border-t border-border/50 space-y-2">
                  {milestone.details.map((detail, i) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      <span className="text-xs text-muted-foreground font-mono">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const InteractiveTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30" ref={containerRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">
            // journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight heading-glow">
            Interactive Timeline
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Click on any milestone to explore the details of my growth journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Static track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border/40" />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-primary/30 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => (
              <TimelineNode
                key={milestone.title}
                milestone={milestone}
                index={index}
                isActive={activeIndex === index}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
