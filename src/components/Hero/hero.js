import styles from "./hero.module.scss";

// Components
import ScrollNext from "@components/ScrollNext/scrollNext";

const Home = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.hidden} aria-hidden={true}></div>
      <div className={styles.group}>
        <h1 className={styles.title}>
          hi, I'm <span></span>
        </h1>
        <h3 className={styles.title__secondary}>
          I'm based in Brașov, Romania
        </h3>
        <h4 className={styles.title__tertiary}>
          My current focus is to create outstanding digital products
        </h4>
      </div>
      <ScrollNext to="#about" />
    </section>
  );
};

export default Home;
