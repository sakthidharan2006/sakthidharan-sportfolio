import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/TiltCard";
import { projects } from "@/data";


export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">// projects.deployed</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight heading-glow">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            A collection of projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <TiltCard>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative bg-card/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 transition-colors"
                  style={{ boxShadow: "0 20px 60px -20px hsl(var(--primary)/0.2), inset 0 1px 0 hsl(var(--primary)/0.08)" }}
                >
                  {/* HUD top bar */}
                  <div className="flex items-center justify-between px-5 py-2.5 border-b border-border/40 bg-background/30">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-destructive/60" />
                        <span className="w-2 h-2 rounded-full bg-accent/60" />
                        <span className="w-2 h-2 rounded-full bg-primary/60" />
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground/70 ml-2 tracking-wider">~/projects/smartfleet-ai</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="font-mono text-[9px] text-primary uppercase tracking-widest">LIVE</span>
                    </div>
                  </div>

                  {/* Corner brackets */}
                  <span className="absolute top-12 left-2 w-3 h-3 border-t border-l border-primary/40 z-10" />
                  <span className="absolute top-12 right-2 w-3 h-3 border-t border-r border-primary/40 z-10" />
                  <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-primary/40 z-10" />
                  <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-primary/40 z-10" />

                  <div className="grid lg:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        {project.icon && (
                          <motion.div
                            className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <project.icon className="w-5 h-5 text-primary" />
                          </motion.div>
                        )}
                        <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-md text-[10px] font-mono font-medium uppercase tracking-wider">
                          // featured
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 text-sm">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="font-mono font-semibold mb-3 text-[10px] uppercase tracking-widest text-primary flex items-center gap-2">
                          <Terminal className="w-3 h-3" />
                          Key Features
                        </h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                              <span className="text-primary">›</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-secondary/60 backdrop-blur-sm text-secondary-foreground border border-border/50 rounded-md text-xs font-mono hover:border-primary/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" className="rounded-lg text-xs font-mono border-border/60 hover:border-primary/60" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3.5 h-3.5 mr-2" />
                            ./code
                          </a>
                        </Button>
                        {project.live && (
                          <Button className="btn-gradient rounded-lg text-xs font-mono" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3.5 h-3.5 mr-2" />
                              ./demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12 flex items-center justify-center min-h-[300px] lg:min-h-full relative overflow-hidden">
                      {/* Grid */}
                      <div className="absolute inset-0 opacity-[0.08]" style={{
                        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                      }} />
                      {/* Scanline */}
                      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                        style={{ backgroundImage: "repeating-linear-gradient(0deg, hsl(var(--primary)) 0 1px, transparent 1px 3px)" }}
                      />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative z-10"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full max-w-md rounded-xl shadow-2xl border border-primary/20"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
      </div>
    </section>
  );
};
