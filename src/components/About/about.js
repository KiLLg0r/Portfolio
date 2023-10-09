import styles from "./about.module.scss";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import ScrollNext from "@components/ScrollNext/scrollNext";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.title}>Who am I ?</div>
      <div className={styles.container}>
        <div className={styles.container__left}>
          <div className={styles.container__left__picture}>
            <Image
              alt={"Picture of me"}
              fill={true}
              src={
                "https://firebasestorage.googleapis.com/v0/b/sync-space-1ebab.appspot.com/o/assets%2FWhatsApp%20Image%202023-10-08%20at%2019.14.22_39faef2e.jpg?alt=media&token=a65c1ed4-e2d7-4d0b-abe4-3189249288c2&_gl=1*lub79w*_ga*MTA4OTQxOTQxNy4xNjg3MDI1MTcz*_ga_CW55HF8NVT*MTY5Njg2NTAzOC42LjEuMTY5Njg2NTA1Mi40Ni4wLjA."
              }
            />
          </div>
        </div>
        <div className={styles.container__right}>
          <div className={styles.container__right__text__group}>
            <div className={styles.container__right__text__group__title}>
              Short introduction
            </div>
            <div className={styles.container__right__text__group__text}>
              My name is Robert Oblesniuc. I&apos;m an<b> ambitious </b>
              tech enthusiast on a relentless journey of self-improvement.
              <b> Self-taught</b> and fueled by curiosity, I have a deep
              fascination with{" "}
              <b>
                Web Development, Artificial Intelligence, and Cyber Security
              </b>
              .
            </div>
          </div>
          <div className={styles.container__right__text__group}>
            <div className={styles.container__right__text__group__title}>
              Education
            </div>
            <div className={styles.container__right__text__group__text}>
              I am a 19 years old student. I am currently in my first year in
              <b> information technology</b> at the{" "}
              <b>Transilvania University of Brașov</b>. I graduated high school
              specialized in <b>mathematics and computer science</b>.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.resume}>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1YB-0QICBI0qirUgFeXIEVpD8IY20g37l/view?usp=drive_link"
        >
          <BsDownload />
          Download resume
        </a>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollNext to="#skills" />
      </div>
    </section>
  );
};

export default About;
