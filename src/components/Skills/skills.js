import styles from "./skills.module.scss";
// Components
import ScrollNext from "@components/ScrollNext/scrollNext";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.title}>&lt;Skills &#47;&gt;</div>
      <div className={styles.skills__group}>
        <div className={styles.skills__group__title}>FRONT-END</div>
        <div className={styles.skills__group__content}>
          <div className={styles.item}>HTML5</div>
          <div className={styles.item}>CSS3</div>
          <div className={styles.item}>Sass</div>
          <div className={styles.item}>JavaScript</div>
          <div className={styles.item}>React.js</div>
          <div className={styles.item}>Next.js</div>
          <div className={styles.item}>Bootstrap</div>
          <div className={styles.item}>NextUI</div>
          <div className={styles.item}>Redux</div>
          <div className={styles.item}>Framer motion</div>
          <div className={styles.item}>Yjs</div>
        </div>
      </div>
      <div className={styles.skills__group}>
        <div className={styles.skills__group__title}>BACK-END</div>
        <div className={styles.skills__group__content}>
          <div className={styles.item}>C++</div>
          <div className={styles.item}>PHP</div>
          <div className={styles.item}>WordPress</div>
          <div className={styles.item}>Python</div>
          <div className={styles.item}>Node.js</div>
          <div className={styles.item}>Axios</div>
          <div className={styles.item}>MySQL</div>
          <div className={styles.item}>PostgreSQL</div>
          <div className={styles.item}>Solidity</div>
          <div className={styles.item}>Firebase</div>
          <div className={styles.item}>Google Cloud</div>
        </div>
      </div>
      <div style={{ display: "grid", placeItems: "center" }}>
        <ScrollNext to="#portfolio" />
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Image src="/html.png" alt="HTML" width={100} height={100} />
        </div>
        <div className={styles.icon}>
          <Image src="/css.png" alt="CSS" width={100} height={100} />
        </div>
        <div className={styles.icon}>
          <Image
            src="/javascript.png"
            alt="JavaScript"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.icon}>
          <Image src="/c++.png" alt="C++" width={100} height={100} />
        </div>
        <div className={styles.icon}>
          <Image src="/p-next.webp" alt="NextJS" width={100} height={100} />
        </div>
        <div className={styles.icon}>
          <Image src="/react.png" alt="ReactJS" width={100} height={100} />
        </div>
        <div className={styles.icon}>
          <Image src="/sass.png" alt="Sass" width={100} height={100} />
        </div>
        <div className={styles.icon}>
          <Image src="/php.png" alt="PHP" width={100} height={100} />
        </div>
        <div className={styles.icon}>
          <Image
            src="/wordpress.png"
            alt="WordPress"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
