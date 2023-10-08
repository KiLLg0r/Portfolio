"use client";

import styles from "./navigation.module.scss";

import ThemeToggle from "@components/ThemeToggle/themeToggle";

import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import { useEffect, useState } from "react";

const Navigation = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  useEffect(() => {
    openNavigation
      ? document.body.classList.add("hidden")
      : document.body.classList.remove("hidden");
  }, [openNavigation]);

  return (
    <header className={styles.header}>
      <div
        className={styles.hamburger}
        onClick={() => setOpenNavigation(!openNavigation)}
      >
        {openNavigation ? <RxCross1 /> : <RxHamburgerMenu />}
      </div>
      <nav
        className={`${styles.navigation} ${
          openNavigation ? styles.show : styles.hide
        }`}
      >
        <ul className={styles.navigation__links}>
          <a href="#home" className={styles.navigation__links__link}>
            Home
          </a>
          <a href="#about" className={styles.navigation__links__link}>
            About
          </a>
          <a href="#skills" className={styles.navigation__links__link}>
            Skills
          </a>
          <a href="#portfolio" className={styles.navigation__links__link}>
            Portfolio
          </a>
          <a href="#contact" className={styles.navigation__links__link}>
            Contact
          </a>
        </ul>
        <div className={styles.delimiter}></div>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navigation;
