import styles from "./about.module.scss";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import ScrollNext from "@components/ScrollNext/scrollNext";

const About = () => {
  return (
    <main className={styles.about} id="about">
      <div className={styles.title}>Who am I ?</div>
      <div className={styles.container}>
        <div className={styles.container__left}>
          <div className={styles.container__left__picture}>
            <Image
              alt={"Picture of me"}
              fill={true}
              src={
                "https://firebasestorage.googleapis.com/v0/b/sync-space-1ebab.appspot.com/o/assets%2FWhatsApp%20Image%202023-10-08%20at%2019.14.22_39faef2e.jpg?alt=media&token=659957a7-f795-4e0e-9112-c018d9197bd5&_gl=1*1xrip9h*_ga*MTA4OTQxOTQxNy4xNjg3MDI1MTcz*_ga_CW55HF8NVT*MTY5Njc4MTYwOS40LjEuMTY5Njc4MTY4NS40OS4wLjA."
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
              My name is Robert Oblesniuc. I'm an<b> ambitious </b>
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
          href="https://firebasestorage.googleapis.com/v0/b/sync-space-1ebab.appspot.com/o/assets%2FResume.pdf?alt=media&token=e67861d2-7bbf-4b51-8f1c-2dcd374aa574&_gl=1*1vph5ww*_ga*MTA4OTQxOTQxNy4xNjg3MDI1MTcz*_ga_CW55HF8NVT*MTY5Njc4MTYwOS40LjEuMTY5Njc4MjQyMS40OS4wLjA."
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
    </main>
  );
};

export default About;
