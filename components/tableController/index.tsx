"use client";
import styles from "./styles.module.scss";
import { IMAGE } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";
import ControllerButtons from "./controllerButtons";
import { useAppContext } from "@/context/appContext";
import { ModalTypes } from "@/types";

export default function TableController() {
  const { handleAddColumn, handleAddRow, columnDefs } = useAppContext();
  const [searchVal, setSearchVal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalTypes | null>(null);

  const addNewColumm = () => {};

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
        <ControllerButtons
          image={IMAGE.COLUMNIMAGE}
          label="Add Column"
          onClick={addNewColumm}
        />
        <ControllerButtons
          image={IMAGE.ROWIMAGE}
          label="Add Row"
          onClick={handleAddRow}
          isDisabled={!columnDefs?.length}
        />
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
  );
}
