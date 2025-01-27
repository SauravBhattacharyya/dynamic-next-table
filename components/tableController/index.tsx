"use client";
import styles from "./styles.module.scss";
import { IMAGE, MODALTYPE } from "@/utils/constants";
import Image from "next/image";
import ControllerButtons from "./controllerButtons";
import { useAppContext } from "@/context/appContext";

export default function TableController() {
  const { handleModalOpen } = useAppContext();
  return (
    <>
      <section className={styles.controllerWrapper}>
        <div className="flex items-center">
          <div className={styles.searchWrapper}>
            <Image
              src={IMAGE.SEARCHIMAGE}
              alt="search"
              width={16}
              height={16}
            />
            <input type="text" placeholder="Search" />
          </div>
          <ControllerButtons
            image={IMAGE.COLUMNIMAGE}
            label="Add Column"
            onClick={() => handleModalOpen(MODALTYPE.ADDCOLUMN)}
          />
          <ControllerButtons image={IMAGE.ROWIMAGE} label="Add Row" />
          <ControllerButtons image={IMAGE.FILTERIMAGE} label="Filter" />
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
    </>
  );
}
