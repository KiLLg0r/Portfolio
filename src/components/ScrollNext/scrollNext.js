import styles from "./scrollNext.module.scss";
import { BsChevronDoubleDown } from "react-icons/bs";

const ScrollNext = ({ to }) => {
  return (
    <a className={styles.next} href={to}>
      <BsChevronDoubleDown />
    </a>
  );
};

export default ScrollNext;
