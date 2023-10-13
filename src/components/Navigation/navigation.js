"use client";

import styles from "./navigation.module.scss";

import ThemeToggle from "@components/ThemeToggle/themeToggle";

import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const router = useRouter();
  const path = router.asPath === "/" ? "" : "/";

  useEffect(() => {
    openNavigation
      ? document.body.classList.add("hidden")
      : document.body.classList.remove("hidden");
  }, [openNavigation]);

  return (
    <>
      <header className={styles.header}>
        <nav
          className={`${styles.navigation} ${
            openNavigation ? styles.show : styles.hide
          }`}
        >
          <ul className={styles.navigation__links}>
            <a href={`${path}#home`} className={styles.navigation__links__link}>
              Home
            </a>
            <a
              href={`${path}#about`}
              className={styles.navigation__links__link}
            >
              About
            </a>
            <a
              href={`${path}#skills`}
              className={styles.navigation__links__link}
            >
              Skills
            </a>
            <a
              href={`${path}#portfolio`}
              className={styles.navigation__links__link}
            >
              Portfolio
            </a>
            <a
              href={`${path}#contact`}
              className={styles.navigation__links__link}
            >
              Contact
            </a>
          </ul>
          <div className={styles.delimiter}></div>
          <ThemeToggle />
        </nav>
      </header>
      <div
        className={styles.hamburger}
        onClick={() => setOpenNavigation(!openNavigation)}
      >
        {openNavigation ? <RxCross1 /> : <RxHamburgerMenu />}
      </div>
    </>
  );
};

export default Navigation;
