"use client";
import styles from "./styles.module.scss";
import { IMAGE } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";
import ControllerButtons from "./controllerButtons";

export default function TableController() {
  const [searchVal, setSearchVal] = useState("");
  return (
    <section className={styles.controllerWrapper}>
      <div className="flex items-center">
        <div className={styles.searchWrapper}>
          <Image src={IMAGE.SEARCHIMAGE} alt="search" width={16} height={16} />
          <input
            type="text"
            placeholder="Search"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </div>
        <ControllerButtons image={IMAGE.ROWIMAGE} label="1/1 Row" />
        <ControllerButtons image={IMAGE.COLUMNIMAGE} label="3/3 Column" />
        <ControllerButtons image={IMAGE.FILTERIMAGE} label="0 Filter" />
        <ControllerButtons image={IMAGE.SORTIMAGE} label="Sort" />
      </div>
      <div className="flex items-center">
        <Image
          src={IMAGE.SHAREIMAGE}
          alt="Share"
          className="cursor-pointer mr-8"
          width={18}
          height={18}
        />
        <Image
          src={IMAGE.DOWNLOADIMAGE}
          alt="Download"
          className="cursor-pointer mr-8"
          width={18}
          height={18}
        />
        <Image
          src={IMAGE.DELETEIMAGE}
          alt="Delete"
          className="cursor-pointer"
          width={18}
          height={18}
        />
      </div>
    </section>
  );
}
