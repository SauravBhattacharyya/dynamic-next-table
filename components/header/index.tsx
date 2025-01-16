"use client";
import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";
import Toggle from "../toggle";
import Image from "next/image";
import { IMAGE } from "@/utils/constants";

export default function Header() {
  const [fileName, setFileName] = useState<string>("");
  return (
    <header className={styles.headerWrapper}>
      <div className="flex items-center">
        <div className="cursor-pointer">
          <Image
            src={IMAGE.BACKBUTTON}
            alt="Back Button"
            width={18}
            height={18}
          />
        </div>
        <input
          className={styles.filenameInput}
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="Name of the file"
        />
      </div>
      <div className="flex items-center">
        <Toggle />
        <div className={styles.profileImage}>
          <Image
            src={IMAGE.PROFILEIMAGE}
            alt="Profile Image"
            width={18}
            height={18}
          />
        </div>
      </div>
    </header>
  );
}
