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
        <div className="min-h-screen bg-background tech-grid paper-grain relative">

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
