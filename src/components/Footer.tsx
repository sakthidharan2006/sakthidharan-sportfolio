import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

const socials = [
  { href: "https://github.com/sakthidharan2006", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/sakthidharan-e-", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:sakthidharane16@gmail.com", icon: Mail, label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={ref}
      className="py-10 border-t border-border relative overflow-hidden"
    >
      {/* Subtle gradient glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-20 bg-primary/5 rounded-full blur-3xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 className="w-3.5 h-3.5 text-primary" />
            </motion.div>
            <span>
              Built with{" "}
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
                className="text-muted-foreground hover:text-primary transition-colors p-2.5 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/20"
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
