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
      className="py-14 border-t border-border relative overflow-hidden bg-secondary/40"
    >
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <span className="font-hand text-5xl text-foreground/80 leading-none">
            — Sakthidharan
          </span>

          <div className="flex items-center gap-8 opacity-70">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -2 }}
                className="text-foreground hover:opacity-100 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>Handcrafted with</span>
            <Heart className="w-3 h-3 fill-accent text-accent" />
            <span>by {identity.name} · © {currentYear}</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

