import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, FileCode, Braces, Atom, Server, Database, GitBranch, Code2, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const floatingTechIcons = [
  { icon: Atom, label: "React", x: "8%", y: "18%", size: 28, delay: 0, color: "hsl(193 95% 55%)", speed: 0.3 },
  { icon: Braces, label: "JS", x: "88%", y: "22%", size: 24, delay: 0.5, color: "hsl(50 90% 50%)", speed: 0.5 },
  { icon: FileCode, label: "HTML", x: "5%", y: "55%", size: 22, delay: 1, color: "hsl(12 77% 52%)", speed: 0.2 },
  { icon: Code2, label: "CSS", x: "92%", y: "50%", size: 22, delay: 1.5, color: "hsl(205 87% 50%)", speed: 0.45 },
  { icon: Server, label: "Node", x: "12%", y: "80%", size: 20, delay: 2, color: "hsl(120 40% 44%)", speed: 0.35 },
  { icon: Database, label: "DB", x: "85%", y: "78%", size: 20, delay: 2.5, color: "hsl(120 40% 40%)", speed: 0.55 },
  { icon: GitBranch, label: "Git", x: "18%", y: "38%", size: 18, delay: 3, color: "hsl(15 75% 55%)", speed: 0.25 },
  { icon: Route, label: "API", x: "82%", y: "38%", size: 18, delay: 3.5, color: "hsl(217 71% 45%)", speed: 0.4 },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const socialIconVariants: Variants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring" as const, stiffness: 300 },
  },
  tap: { scale: 0.9 },
};

const ParallaxIcon = ({ tech, i }: { tech: typeof floatingTechIcons[number]; i: number }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -200 * tech.speed]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const IconComp = tech.icon;

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1"
      style={{ left: tech.x, top: tech.y, y, opacity }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.25, 0.5, 0.25],
        scale: 1,
        rotate: i % 2 === 0 ? [0, 360] : [0, -360],
      }}
      transition={{
        opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: tech.delay },
        scale: { duration: 0.6, delay: tech.delay, ease: "backOut" as const },
        rotate: { duration: 6 + i * 1.5, repeat: Infinity, ease: "linear" as const, delay: tech.delay },
      }}
    >
      <div
        className="p-2.5 rounded-xl backdrop-blur-sm border border-border/30"
        style={{ backgroundColor: `${tech.color}10` }}
      >
        <IconComp style={{ color: tech.color, width: tech.size, height: tech.size }} />
      </div>
      <span className="text-[10px] font-medium text-muted-foreground/60">{tech.label}</span>
    </motion.div>
  );
};

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [-20, 20, -20],
            y: [20, -20, 20],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
        />
      </div>

      {/* Floating Tech Icons with Parallax */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {floatingTechIcons.map((tech, i) => (
          <ParallaxIcon key={tech.label} tech={tech} i={i} />
        ))}
      </div>

      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 cursor-default"
            >
              <Sparkles className="w-4 h-4" />
              Available for Opportunities
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <motion.span
              className="text-gradient inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Sakthidharan E
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Aspiring Software Developer crafting modern web experiences with clean code and creative solutions
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="btn-gradient px-8 py-6 text-lg rounded-full" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="secondary" className="px-8 py-6 text-lg rounded-full" asChild>
                <a href="/Resume_Sakthidharan.pdf" download="Sakthidharan_E_Resume.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            {[
              { href: "https://github.com/sakthidharan2006", icon: Github },
              { href: "https://linkedin.com/in/sakthidharan-e-", icon: Linkedin },
              { href: "mailto:sakthidharane16@gmail.com", icon: Mail },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 rounded-full hover:bg-primary/10"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            variants={floatingVariants}
            animate="animate"
            className="inline-block p-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
