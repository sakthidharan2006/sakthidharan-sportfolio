import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageLoader } from "@/components/PageLoader";
import { SectionDivider } from "@/components/SectionDivider";
import { CursorGlow } from "@/components/CursorGlow";
import { AnimatedSection } from "@/components/AnimatedSection";

import { SmoothScroll } from "@/components/SmoothScroll";
import { AIChatbot } from "@/components/AIChatbot";

const Index = () => {
  return (
    <>
      <SmoothScroll />
      <CursorGlow />
      <PageLoader />
        <div className="min-h-screen bg-background tech-grid relative">
        {/* Tech-themed decorative background */}
          <div className="site-ambient-bg fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {/* Gradient blobs */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-3xl dark:bg-primary/[0.02]" />
          <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-3xl dark:bg-accent/[0.02]" />
          <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/[0.03] blur-3xl dark:bg-primary/[0.02]" />
          
          {/* Vertical circuit traces with data-flow animation */}
          <div className="absolute top-0 left-[10%] w-px h-full"
            style={{ background: 'linear-gradient(to bottom, transparent 0%, transparent 30%, hsl(var(--primary) / 0.3) 50%, transparent 70%, transparent 100%)', backgroundSize: '1px 200%', animation: 'data-flow-vertical 8s linear infinite' }} />
          <div className="absolute top-0 left-[25%] w-px h-full"
            style={{ background: 'linear-gradient(to bottom, transparent 0%, transparent 30%, hsl(var(--primary) / 0.2) 50%, transparent 70%, transparent 100%)', backgroundSize: '1px 200%', animation: 'data-flow-vertical 12s linear infinite 2s' }} />
          <div className="absolute top-0 right-[15%] w-px h-full"
            style={{ background: 'linear-gradient(to bottom, transparent 0%, transparent 30%, hsl(var(--primary) / 0.25) 50%, transparent 70%, transparent 100%)', backgroundSize: '1px 200%', animation: 'data-flow-vertical 10s linear infinite 4s' }} />
          <div className="absolute top-0 right-[30%] w-px h-full"
            style={{ background: 'linear-gradient(to bottom, transparent 0%, transparent 30%, hsl(var(--accent) / 0.2) 50%, transparent 70%, transparent 100%)', backgroundSize: '1px 200%', animation: 'data-flow-vertical 14s linear infinite 6s' }} />
          
          {/* Horizontal circuit traces with data-flow animation */}
          <div className="absolute top-[20%] left-0 w-full h-px"
            style={{ background: 'linear-gradient(to right, transparent 0%, transparent 30%, hsl(var(--primary) / 0.25) 50%, transparent 70%, transparent 100%)', backgroundSize: '200% 1px', animation: 'data-flow-horizontal 10s linear infinite' }} />
          <div className="absolute top-[45%] left-0 w-full h-px"
            style={{ background: 'linear-gradient(to right, transparent 0%, transparent 30%, hsl(var(--accent) / 0.2) 50%, transparent 70%, transparent 100%)', backgroundSize: '200% 1px', animation: 'data-flow-horizontal 14s linear infinite 3s' }} />
          <div className="absolute top-[70%] left-0 w-full h-px"
            style={{ background: 'linear-gradient(to right, transparent 0%, transparent 30%, hsl(var(--primary) / 0.2) 50%, transparent 70%, transparent 100%)', backgroundSize: '200% 1px', animation: 'data-flow-horizontal 12s linear infinite 5s' }} />
          <div className="absolute top-[90%] left-0 w-full h-px"
            style={{ background: 'linear-gradient(to right, transparent 0%, transparent 30%, hsl(var(--primary) / 0.25) 50%, transparent 70%, transparent 100%)', backgroundSize: '200% 1px', animation: 'data-flow-horizontal 11s linear infinite 7s' }} />
          
          {/* Circuit junction nodes with pulse */}
          <div className="absolute top-[20%] left-[10%] w-2.5 h-2.5 rounded-full bg-primary/30" style={{ animation: 'node-pulse 4s ease-in-out infinite' }} />
          <div className="absolute top-[45%] right-[15%] w-2.5 h-2.5 rounded-full bg-primary/30" style={{ animation: 'node-pulse 4s ease-in-out infinite 1s' }} />
          <div className="absolute top-[70%] left-[25%] w-2 h-2 rounded-full bg-accent/30" style={{ animation: 'node-pulse 4s ease-in-out infinite 2s' }} />
          <div className="absolute top-[90%] right-[30%] w-2.5 h-2.5 rounded-full bg-primary/30" style={{ animation: 'node-pulse 4s ease-in-out infinite 3s' }} />
          
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
          <AnimatedSection direction="up">
            <AboutSection />
          </AnimatedSection>
          <SectionDivider />
          <AnimatedSection direction="left">
            <SkillsSection />
          </AnimatedSection>
          <SectionDivider />
          <AnimatedSection direction="scale">
            <ProjectsSection />
          </AnimatedSection>
          <SectionDivider />
          <AnimatedSection direction="right">
            <InteractiveTimeline />
          </AnimatedSection>
          <SectionDivider />
          <AnimatedSection direction="left">
            <ExperienceSection />
          </AnimatedSection>
          <SectionDivider />
          <AnimatedSection direction="up">
            <ContactSection />
          </AnimatedSection>
        </main>
        <Footer />
        <ScrollToTop />
        <AIChatbot />
        
        
      </div>
    </>
  );
};

export default Index;
