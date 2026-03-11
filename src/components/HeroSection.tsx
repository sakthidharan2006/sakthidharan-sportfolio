import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Zap, FileCode, Braces, Atom, Server, Database, GitBranch, Code2, Route } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingTechIcons = [
  { icon: Atom, label: "React", x: "8%", y: "18%", size: 28, delay: 0, color: "hsl(193 95% 55%)", speed: 0.3, anim: "orbit" },
  { icon: Braces, label: "JS", x: "88%", y: "22%", size: 24, delay: 0.5, color: "hsl(50 90% 50%)", speed: 0.5, anim: "typewriter" },
  { icon: FileCode, label: "HTML", x: "5%", y: "55%", size: 22, delay: 1, color: "hsl(12 77% 52%)", speed: 0.2, anim: "heartbeat" },
  { icon: Code2, label: "CSS", x: "92%", y: "50%", size: 22, delay: 1.5, color: "hsl(205 87% 50%)", speed: 0.45, anim: "morph" },
  { icon: Server, label: "Node", x: "12%", y: "80%", size: 20, delay: 2, color: "hsl(120 40% 44%)", speed: 0.35, anim: "radar" },
  { icon: Database, label: "DB", x: "85%", y: "78%", size: 20, delay: 2.5, color: "hsl(120 40% 40%)", speed: 0.55, anim: "stack" },
  { icon: GitBranch, label: "Git", x: "18%", y: "38%", size: 18, delay: 3, color: "hsl(15 75% 55%)", speed: 0.25, anim: "pendulum" },
  { icon: Route, label: "API", x: "82%", y: "38%", size: 18, delay: 3.5, color: "hsl(190 90% 45%)", speed: 0.4, anim: "sonar" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const socialIconVariants: Variants = {
  hover: { scale: 1.15, transition: { type: "spring" as const, stiffness: 300 } },
  tap: { scale: 0.9 },
};

const ParallaxIcon = ({ tech, i }: { tech: typeof floatingTechIcons[number]; i: number }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -200 * tech.speed]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const IconComp = tech.icon;

  const getIconAnimation = () => {
    switch (tech.anim) {
      case "orbit":
        return {
          animate: { scale: [1, 1.1, 1] },
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: tech.delay },
        };
      case "typewriter":
        return {
          animate: { opacity: [1, 0.2, 1], scaleY: [1, 0.85, 1] },
          transition: { duration: 0.6, repeat: Infinity, repeatDelay: 2.5, delay: tech.delay },
        };
      case "heartbeat":
        return {
          animate: { scale: [1, 1.25, 1, 1.15, 1] },
          transition: { duration: 1.2, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" as const, delay: tech.delay },
        };
      case "morph":
        return {
          animate: { borderRadius: ["12px", "50%", "20%", "50%", "12px"] },
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay: tech.delay },
        };
      case "radar":
        return {
          animate: { scale: [1, 1.15, 1], opacity: [1, 0.7, 1] },
          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const, delay: tech.delay },
        };
      case "stack":
        return {
          animate: { y: [0, -4, 0, 4, 0] },
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: tech.delay },
        };
      case "pendulum":
        return {
          animate: { x: [-8, 8, -8] },
          transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const, delay: tech.delay },
        };
      case "sonar":
        return {
          animate: { scale: [1, 1.1, 1] },
          transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" as const, delay: tech.delay },
        };
      default:
        return {
          animate: { scale: [1, 1.1, 1] },
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay: tech.delay },
        };
    }
  };

  const iconAnim = getIconAnimation();

  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1"
      style={{ left: tech.x, top: tech.y, y, opacity }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0.2, 0.55, 0.2], scale: [1, 1.08, 1] }}
      transition={{
        opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: tech.delay },
        scale: { duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" as const, delay: tech.delay },
      }}
    >
      <div className="relative">
        {/* Orbital ring — dashed circle with orbiting dot */}
          {tech.anim === "orbit" && (
            <motion.div
              className="absolute -inset-4 rounded-full border border-dashed"
              style={{ borderColor: `${tech.color}25` }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute -top-1 left-1/2 w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: tech.color, boxShadow: `0 0 6px ${tech.color}` }}
              />
            </motion.div>
        )}

        {/* Radar sweep */}
        {tech.anim === "radar" && (
          <motion.div
            className="absolute -inset-3 rounded-full overflow-hidden"
            style={{ border: `1px solid ${tech.color}15` }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 w-1/2 h-px origin-left"
              style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}` }}
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: tech.delay }}
            />
          </motion.div>
        )}

        {/* Sonar rings expanding outward */}
        {tech.anim === "sonar" && (
          <>
            {[0, 0.75, 1.5].map((d) => (
              <motion.div
                key={d}
                className="absolute -inset-1 rounded-full"
                style={{ border: `1px solid ${tech.color}30` }}
                animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: tech.delay + d }}
              />
            ))}
          </>
        )}

        {/* Heartbeat glow pulse */}
        {tech.anim === "heartbeat" && (
          <motion.div
            className="absolute -inset-2 rounded-lg"
            style={{ backgroundColor: `${tech.color}10` }}
            animate={{ scale: [1, 1.5, 1, 1.3, 1], opacity: [0.3, 0.6, 0.3, 0.5, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2, ease: "easeInOut", delay: tech.delay }}
          />
        )}

        {/* Typewriter cursor blink */}
        {tech.anim === "typewriter" && (
          <motion.div
            className="absolute -right-1.5 top-1 bottom-1 w-0.5 rounded-full"
            style={{ backgroundColor: tech.color }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        )}

        {/* Pendulum pivot point */}
        {tech.anim === "pendulum" && (
          <motion.div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-3"
            style={{ background: `linear-gradient(to bottom, ${tech.color}40, transparent)` }}
          />
        )}

        <motion.div
          className="p-2.5 rounded-lg backdrop-blur-sm border border-border/20 relative overflow-hidden"
          style={{ backgroundColor: `${tech.color}08` }}
          animate={iconAnim.animate}
          transition={iconAnim.transition}
        >
          <IconComp style={{ color: tech.color, width: tech.size, height: tech.size }} />
        </motion.div>
      </div>
      <span className="text-[9px] font-mono font-medium text-muted-foreground/50 uppercase tracking-wider">{tech.label}</span>
    </motion.div>
  );
};

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Tech Icons */}
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-xs font-mono font-medium uppercase tracking-wider mb-6 cursor-default border border-primary/20"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="w-3.5 h-3.5" />
              </motion.div>
              Available for Opportunities
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
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
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Aspiring Software Developer crafting modern web experiences with clean code and creative solutions
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="btn-gradient px-8 py-6 text-sm font-medium rounded-xl" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="px-8 py-6 text-sm font-medium rounded-xl" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="secondary" className="px-8 py-6 text-sm font-medium rounded-xl" asChild>
                <a href="/Resume_Sakthidharan.pdf" download="Sakthidharan_E_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
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
                className="relative text-muted-foreground hover:text-primary transition-colors duration-200 p-3 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/20 group"
              >
                <social.icon className="w-5 h-5 relative z-10" />
                {/* Hover glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ boxShadow: "0 0 15px hsl(190 90% 42% / 0.15)" }}
                />
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
            className="inline-block p-2 rounded-lg hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/20"
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
