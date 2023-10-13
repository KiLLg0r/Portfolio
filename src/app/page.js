// Components
import Hero from "@components/Hero/hero";
import About from "@components/About/about";
import Skills from "@components/Skills/skills";
import Portfolio from "@components/Portfolio/portfolio";
import Contact from "@components/Contact/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
