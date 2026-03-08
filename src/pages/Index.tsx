import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background tech-grid relative">
      {/* Decorative gradient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-3xl dark:bg-primary/[0.02]" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-3xl dark:bg-accent/[0.02]" />
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/[0.03] blur-3xl dark:bg-primary/[0.02]" />
        {/* Subtle scan lines */}
        <div className="absolute top-1/2 left-5 w-px h-20 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
        <div className="absolute top-1/3 right-5 w-px h-32 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      </div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
