import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Smart Truck Loading Optimization System",
    description:
      "A full-stack MERN application that optimizes cargo loading for logistics companies. Features intelligent space utilization algorithms, real-time visualization, and comprehensive reporting.",
    features: [
      "3D cargo visualization",
      "Optimization algorithms",
      "User authentication",
      "Report generation",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    icon: Truck,
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode support, and a clean design.",
    features: ["Responsive design", "Dark mode", "Smooth animations", "Contact form"],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for managing tasks and projects with drag-and-drop functionality, priority levels, and deadline tracking.",
    features: ["Drag & drop", "Priority levels", "Deadline tracking", "Categories"],
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    featured: false,
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
          <span className="text-primary font-medium mb-4 block">My Work</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-card rounded-3xl overflow-hidden border border-border/50 card-hover">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      {project.icon && (
                        <div className="p-3 rounded-xl bg-primary/10">
                          <project.icon className="w-6 h-6 text-primary" />
                        </div>
                      )}
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" className="rounded-full" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.live && (
                        <Button className="btn-gradient rounded-full" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12 flex items-center justify-center min-h-[300px] lg:min-h-full">
                    <div className="w-full max-w-sm aspect-video rounded-xl bg-card/80 backdrop-blur shadow-2xl flex items-center justify-center border border-border/50">
                      <Truck className="w-16 h-16 text-primary/50" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 card-hover"
              >
                <h3 className="font-display text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="p-0 h-auto" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-primary/80">
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </Button>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
