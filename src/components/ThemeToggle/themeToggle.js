"use client";

// Icons
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { useEffect, useState } from "react";

import styles from "./themeToggle.module.scss";

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(
    window.localStorage.getItem("theme") || "dark",
  );
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <button
      className={styles.themeToggle}
      onClick={() => setActiveTheme(inactiveTheme)}
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
    >
      <span
        aria-hidden={activeTheme === "dark"}
        className={activeTheme === "light" ? styles.show : styles.hide}
      >
        <BiSolidMoon />
      </span>
      <span
        aria-hidden={activeTheme === "light"}
        className={activeTheme === "dark" ? styles.show : styles.hide}
      >
        <BiSolidSun />
      </span>
    </button>
  );
};

export default ThemeToggle;
