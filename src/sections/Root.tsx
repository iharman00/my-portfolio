import Hero from "../sections/Hero.tsx";
import About from "../sections/About.tsx";
import Skills from "../sections/Skills.tsx";
import Header from "../sections/Header.tsx";
import Footer from "../sections/Footer.tsx";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
};

export default Root;
