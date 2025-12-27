import { motion, Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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
                <a href="/resume.pdf" download="Sakthidharan_E_Resume.pdf">
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
