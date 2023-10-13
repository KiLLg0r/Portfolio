import styles from "./contact.module.scss";

// Icons
import { FaGithub, FaLinkedin, FaInstagram, FaGoogle } from "react-icons/fa6";
import { HiMail, HiUser, HiPhone, HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h1 className={styles.contact__title}>&lt;Contact &#47;&gt;</h1>
      <p className={styles.contact__information}>
        If you want to get in touch, talk to me about a project collaboration,
        view more about my projects or just say hi, feel free to contact me
        using one of the options below.
      </p>
      <div className={styles.contact__container}>
        <div className={styles.contact__left}>
          <a href="https://instagram.com/rob.oblesniuc" target="_blank">
            <div className={styles.contact__item}>
              <div className={styles.contact__item__icon}>
                <FaInstagram />
              </div>
              <div
                data-text="DM me on Instagram!"
                className={styles.contact__item__text}
              >
                DM me on Instagram!
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/robert-andrei-oblesniuc-42a7281b8/">
            <div className={styles.contact__item}>
              <div className={styles.contact__item__icon}>
                <FaLinkedin />
              </div>
              <div
                data-text="Connect with me on LinkedIn!"
                className={styles.contact__item__text}
              >
                Connect with me on LinkedIn!
              </div>
            </div>
          </a>
          <a href="https://github.com/KiLLg0r">
            <div className={styles.contact__item}>
              <div className={styles.contact__item__icon}>
                <FaGithub />
              </div>
              <div
                data-text="Check out my GitHub projects!"
                className={styles.contact__item__text}
              >
                Check out my GitHub projects!
              </div>
            </div>
          </a>
          <a href="mailto:rob.oblesniuc@gmail.com">
            <div className={styles.contact__item}>
              <div className={styles.contact__item__icon}>
                <FaGoogle />
              </div>
              <div
                data-text="Send me an email!"
                className={styles.contact__item__text}
              >
                Send me an email!
              </div>
            </div>
          </a>
        </div>
        <div className={styles.contact__right}>
          <div className={styles.contact__item}>
            <div className={styles.contact__item__icon}>
              <HiUser />
            </div>
            <p>Robert Oblesniuc</p>
          </div>
          <div className={styles.contact__item}>
            <div className={styles.contact__item__icon}>
              <HiLocationMarker />
            </div>
            <p>Brașov, Romania</p>
          </div>
          <div className={styles.contact__item}>
            <div className={styles.contact__item__icon}>
              <HiPhone />
            </div>
            <p>(+40) 774 653 200</p>
          </div>
          <div className={styles.contact__item}>
            <div className={styles.contact__item__icon}>
              <HiMail />
            </div>
            <p>rob.oblesniuc@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
