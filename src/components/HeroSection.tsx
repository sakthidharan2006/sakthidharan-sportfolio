import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Mail, Download, Sparkles, ArrowRight } from "lucide-react";
import { identity, socialLinks } from "@/data";

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.102 17.93l-2.62 2.62c-.546.546-1.25.82-1.953.82-.703 0-1.407-.274-1.953-.82l-4.172-4.172c-1.094-1.094-1.094-2.867 0-3.96l2.62-2.62 1.406 1.407-2.62 2.62c-.273.273-.273.703 0 .976l4.172 4.172c.273.273.703.273.976 0l2.62-2.62 1.407 1.406zM22.547 9.516l-2.62 2.62-1.406-1.406 2.62-2.62c.273-.273.273-.703 0-.976l-4.172-4.172c-.273-.273-.703-.273-.976 0l-2.62 2.62-1.407-1.406 2.62-2.62c1.094-1.094 2.867-1.094 3.96 0l4.172 4.172c1.094 1.094 1.094 2.867 0 3.96zM8.5 14.672l5.172-5.172 1.406 1.406-5.172 5.172-1.406-1.406z"/>
  </svg>
);

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } },
};

export const HeroSection = () => {
  const [firstName, ...rest] = identity.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="min-h-[100svh] relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="section-container relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto sm:mx-0 relative"
        >
          {/* Location / status chip */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-block px-3 py-1 border border-border rounded-full text-[10px] uppercase tracking-[0.2em] font-medium bg-background/60 backdrop-blur-sm text-foreground/80">
              Based in India — Open for work
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display font-semibold leading-[0.95] tracking-tight text-balance text-[2.75rem] xs:text-5xl sm:text-6xl md:text-7xl"
          >
            Hi, I'm <span className="italic font-normal">{firstName}</span>
            {lastName && (
              <>
                <br />
                <span className="text-muted-foreground">{lastName}</span>
              </>
            )}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="mt-5 text-lg sm:text-xl leading-relaxed max-w-lg text-muted-foreground"
          >
            Full Stack Developer with hands-on experience designing and developing <span className="ink-underline text-foreground">web applications</span> using Java, React.js, Node.js, Express.js and MongoDB — passionate about building scalable, efficient solutions.
          </motion.p>

          {/* Availability line */}
          <motion.div variants={item} className="mt-4 text-sm text-foreground/70 flex items-center gap-2">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500/50 animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.div>

          {/* Actions */}
          <motion.div variants={item} className="mt-10 flex flex-col gap-3 max-w-md">
            <a
              href="#projects"
              className="group relative flex items-center justify-between px-6 py-5 bg-foreground text-background rounded-2xl overflow-hidden shadow-xl shadow-black/5 hover:-translate-y-0.5 transition-transform duration-300"
            >
              <span className="text-lg font-medium tracking-tight">View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="#contact"
                className="flex items-center justify-center px-4 py-4 border-2 border-foreground font-semibold rounded-2xl hover:bg-foreground hover:text-background transition-colors"
              >
                Contact
              </a>
              <a
                href={identity.resumeUrl}
                download={identity.resumeDownloadAs}
                className="flex items-center justify-center gap-2 px-4 py-4 border-2 border-foreground font-semibold rounded-2xl hover:bg-foreground hover:text-background transition-colors"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            <button
              onClick={() => window.dispatchEvent(new Event("open-ai-chat"))}
              className="relative flex items-center justify-center px-4 py-4 bg-secondary rounded-2xl border-2 border-dashed border-foreground/25 group hover:border-foreground/50 transition-colors"
            >
              <span className="sticky-note absolute -top-3 left-4">
                <Sparkles className="w-2.5 h-2.5 inline -mt-0.5 mr-1" />
                Ask AI Assistant
              </span>
              <span className="text-foreground/80 font-medium group-hover:text-foreground transition-colors">
                Curious about my work?
              </span>
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={item} className="mt-10 flex items-center gap-8 opacity-60">
            {[
              { href: socialLinks.github, icon: Github, label: "GitHub" },
              { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: socialLinks.email, icon: Mail, label: "Email" },
              { href: socialLinks.leetcode, icon: LeetCodeIcon, label: "LeetCode" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-foreground hover:opacity-100 hover:-translate-y-0.5 transition-all"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
