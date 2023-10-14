"use client";

import style from "./goBack.module.scss";
import { useRouter } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";

const GoBack = () => {
  const router = useRouter();

  return (
    <button className={style.goBack} onClick={() => router.back()}>
      <BsChevronLeft />
      Go back
    </button>
  );
};

export default GoBack;
