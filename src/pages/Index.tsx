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
      {/* Decorative gradient blobs – light theme accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl dark:bg-primary/[0.02]" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-[hsl(200_65%_48%/0.05)] blur-3xl dark:bg-[hsl(200_65%_48%/0.02)]" />
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[hsl(245_58%_50%/0.04)] blur-3xl dark:bg-[hsl(245_58%_50%/0.02)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full bg-primary/[0.03] blur-3xl dark:bg-primary/[0.01]" />
        {/* Floating dots */}
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary/30 animate-pulse-slow" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 left-1/4 w-1 h-1 rounded-full bg-primary/20 animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-1/3 w-2 h-2 rounded-full bg-primary/30 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-5 w-px h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/3 right-5 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
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
