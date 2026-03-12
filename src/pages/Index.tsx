import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageLoader } from "@/components/PageLoader";
import { SectionDivider } from "@/components/SectionDivider";
import { CursorGlow } from "@/components/CursorGlow";

const Index = () => {
  return (
    <>
      <CursorGlow />
      <PageLoader />
      <div className="min-h-screen bg-background tech-grid relative">
        {/* Tech-themed decorative background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {/* Gradient blobs */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-3xl dark:bg-primary/[0.02]" />
          <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-3xl dark:bg-accent/[0.02]" />
          <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/[0.03] blur-3xl dark:bg-primary/[0.02]" />
          
          {/* Vertical circuit traces */}
          <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-primary/8 to-transparent" />
          <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-primary/6 to-transparent" />
          <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
          
          {/* Horizontal circuit traces */}
          <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/6 to-transparent" />
          <div className="absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
          <div className="absolute top-[70%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
          <div className="absolute top-[90%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/6 to-transparent" />
          
          {/* Circuit junction nodes */}
          <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-primary/15 shadow-[0_0_8px_hsl(var(--primary)/0.1)]" />
          <div className="absolute top-[45%] right-[15%] w-2 h-2 rounded-full bg-primary/12 shadow-[0_0_8px_hsl(var(--primary)/0.1)]" />
          <div className="absolute top-[70%] left-[25%] w-1.5 h-1.5 rounded-full bg-accent/15 shadow-[0_0_6px_hsl(var(--accent)/0.1)]" />
          <div className="absolute top-[90%] right-[30%] w-2 h-2 rounded-full bg-primary/10 shadow-[0_0_8px_hsl(var(--primary)/0.08)]" />
          
          {/* Corner brackets — tech frame accents */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-primary/10 rounded-tl-sm" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-primary/10 rounded-tr-sm" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-primary/10 rounded-bl-sm" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-primary/10 rounded-br-sm" />
          
          {/* Binary/data stream accents */}
          <div className="absolute top-[35%] left-4 font-mono text-[8px] text-primary/8 leading-tight tracking-widest select-none">
            01<br/>10<br/>01<br/>11<br/>00
          </div>
          <div className="absolute top-[60%] right-4 font-mono text-[8px] text-primary/8 leading-tight tracking-widest select-none">
            10<br/>01<br/>11<br/>00<br/>10
          </div>
        </div>
        <Navbar />
        <main>
          <HeroSection />
          <SectionDivider />
          <AboutSection />
          <SectionDivider />
          <SkillsSection />
          <SectionDivider />
          <ProjectsSection />
          <SectionDivider />
          <ExperienceSection />
          <SectionDivider />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
