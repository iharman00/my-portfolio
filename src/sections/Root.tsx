import HeroSection from "./HeroSection.tsx";
import AboutSection from "./AboutSection.tsx";
import SkillsSection from "./SkillsSection.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import ProjectsSection from "./ProjectsSection.tsx";
import ContactSection from "./ContactSection.tsx";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Root;
