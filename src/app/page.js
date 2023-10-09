import styles from "./page.module.scss";

// Components
import Hero from "@components/Hero/hero";
import About from "@components/About/about";
import Skills from "@components/Skills/skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
