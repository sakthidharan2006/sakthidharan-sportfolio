import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";
import { identity, socialLinks } from "@/data";

// Custom LeetCode Icon Component
const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.102 17.93l-2.62 2.62c-.546.546-1.25.82-1.953.82-.703 0-1.407-.274-1.953-.82l-4.172-4.172c-1.094-1.094-1.094-2.867 0-3.96l2.62-2.62 1.406 1.407-2.62 2.62c-.273.273-.273.703 0 .976l4.172 4.172c.273.273.703.273.976 0l2.62-2.62 1.407 1.406zM22.547 9.516l-2.62 2.62-1.406-1.406 2.62-2.62c.273-.273.273-.703 0-.976l-4.172-4.172c-.273-.273-.703-.273-.976 0l-2.62 2.62-1.407-1.406 2.62-2.62c1.094-1.094 2.867-1.094 3.96 0l4.172 4.172c1.094 1.094 1.094 2.867 0 3.96zM8.5 14.672l5.172-5.172 1.406 1.406-5.172 5.172-1.406-1.406z"/>
  </svg>
);

const socials = [
  { href: socialLinks.github, icon: Github, label: "GitHub" },
  { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: socialLinks.email, icon: Mail, label: "Email" },
  { href: socialLinks.leetcode, icon: LeetCodeIcon, label: "LeetCode" },
];


export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={ref}
      className="py-10 border-t border-border/40 relative overflow-hidden bg-card/20 backdrop-blur-xl"
    >
      {/* Scanline */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, hsl(var(--primary)) 0 1px, transparent 1px 3px)" }}
      />
      {/* Subtle gradient glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-20 bg-primary/5 rounded-full blur-3xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-accent"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 className="w-3.5 h-3.5 text-primary" />
            </motion.div>
            <span className="tracking-wide">
              <span className="text-primary">$</span> built_with{" "}
              <motion.span
                className="inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-3 h-3 text-destructive inline-block -mt-0.5" />
              </motion.span>{" "}
              by Sakthidharan E © {currentYear}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors p-2.5 rounded-lg bg-card/40 backdrop-blur-sm hover:bg-primary/10 border border-border/40 hover:border-primary/40"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
