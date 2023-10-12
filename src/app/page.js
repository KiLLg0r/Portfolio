// Components
import Hero from "@components/Hero/hero";
import About from "@components/About/about";
import Skills from "@components/Skills/skills";
import Portfolio from "@components/portfolio/portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
    </main>
  );
}
