import Hero from "./Hero.tsx";
import About from "./About.tsx";
import Skills from "./Skills.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Root;
