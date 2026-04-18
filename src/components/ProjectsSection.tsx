import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/TiltCard";
import truckImage from "@/assets/truck-project.png";

const projects = [
  {
    title: "SmartFleet AI - Intelligent Infrastructure for Modern Logistics",
    description:
      "A comprehensive web-based fleet tracking system with role-based demo logins for Admin, Fleet Owner, and Drivers. Features dark-themed UI with real-time vehicle management and instant dashboard access.",
    features: [
      "Multi-role demo login",
      "Real-time tracking",
      "Dark themed UI",
      "Driver & vehicle management",
    ],
    tech: ["React", "Tailwind CSS", "Supabase", "TypeScript"],
    icon: Globe,
    github: "https://github.com",
    live: "https://smarfleetai.vercel.app/",
    image: truckImage,
    featured: true,
  },
];

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
          <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">// projects</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight heading-glow">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            A collection of projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        {/* Featured Project */}
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
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        {project.icon && (
                          <div className="p-2.5 rounded-xl bg-primary/10">
                            <project.icon className="w-5 h-5 text-primary" />
                          </div>
                        )}
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-[10px] font-mono font-medium uppercase tracking-wider">
                          Featured
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 text-sm">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" className="rounded-xl text-xs" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3.5 h-3.5 mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.live && (
                          <Button className="btn-gradient rounded-xl text-xs" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3.5 h-3.5 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12 flex items-center justify-center min-h-[300px] lg:min-h-full relative overflow-hidden">
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                          backgroundSize: '40px 40px'
                        }} />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative z-10"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full max-w-md rounded-xl shadow-2xl border border-border/50"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <TiltCard key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-xl p-6 md:p-8 border border-border/50 card-hover"
                >
                  <h3 className="font-display text-lg font-bold mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-lg text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" size="sm" className="p-0 h-auto" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80 text-xs">
                      <Github className="w-3.5 h-3.5" />
                      View on GitHub
                    </a>
                  </Button>
                </motion.div>
              </TiltCard>
            ))}
        </div>
      </div>
    </section>
  );
};
