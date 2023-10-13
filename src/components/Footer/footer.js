import styles from "./footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div>
        <p>© Copyright {year} | Robert Oblesniuc </p>
        <p className={styles.credit}>
          Icons by{" "}
          <a href="https://iconscout.com/contributors/tomsdesign/3ds">
            Toms Design
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
