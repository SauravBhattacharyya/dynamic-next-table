"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function Toggle() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleToggle = () => setIsOn((prev) => !prev);

  return (
    <>
      <div
        onClick={handleToggle}
        className={`mr-4 ${styles.toggleWrapper} ${
          isOn ? styles.active : styles.inactive
        }`}
      >
        <div className={styles.toggle} />
      </div>
      <p
        className={`mr-12 font-medium text-sm ${
          isOn ? "text-green-500" : "text-red-500 line-through"
        }`}
      >
        Auto Save
      </p>
    </>
  );
}
