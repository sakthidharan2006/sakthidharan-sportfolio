import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono">
            <Code2 className="w-3.5 h-3.5 text-primary" />
            <span>Built by Sakthidharan E © {currentYear}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sakthidharan2006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/sakthidharan-e-"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:sakthidharane16@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
