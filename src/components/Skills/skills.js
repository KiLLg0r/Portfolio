import styles from "./skills.module.scss";
// Components
import ScrollNext from "@components/ScrollNext/scrollNext";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.title}>Skills</div>
      <div className={styles.skills__group}>
        <div className={styles.skills__group__title}>FRONT-END</div>
        <div className={styles.skills__group__content}>
          <div className={styles.skills__group__content__item}>HTML5</div>
          <div className={styles.skills__group__content__item}>CSS3</div>
          <div className={styles.skills__group__content__item}>Sass</div>
          <div className={styles.skills__group__content__item}>JavaScript</div>
          <div className={styles.skills__group__content__item}>React.js</div>
          <div className={styles.skills__group__content__item}>Next.js</div>
          <div className={styles.skills__group__content__item}>Bootstrap</div>
          <div className={styles.skills__group__content__item}>NextUI</div>
          <div className={styles.skills__group__content__item}>Redux</div>
          <div className={styles.skills__group__content__item}>
            Framer motion
          </div>
          <div className={styles.skills__group__content__item}>Yjs</div>
        </div>
      </div>
      <div className={styles.skills__group}>
        <div className={styles.skills__group__title}>BACK-END</div>
        <div className={styles.skills__group__content}>
          <div className={styles.skills__group__content__item}>C++</div>
          <div className={styles.skills__group__content__item}>PHP</div>
          <div className={styles.skills__group__content__item}>WordPress</div>
          <div className={styles.skills__group__content__item}>Python</div>
          <div className={styles.skills__group__content__item}>Node.js</div>
          <div className={styles.skills__group__content__item}>Axios</div>
          <div className={styles.skills__group__content__item}>MySQL</div>
          <div className={styles.skills__group__content__item}>PostgreSQL</div>
          <div className={styles.skills__group__content__item}>Solidity</div>
          <div className={styles.skills__group__content__item}>Firebase</div>
          <div className={styles.skills__group__content__item}>
            Google Cloud
          </div>
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
