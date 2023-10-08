import Image from "next/image";
import styles from "./page.module.scss";

// Components
import Hero from "@components/Hero/hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
