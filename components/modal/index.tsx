import { ModalProps } from "@/types";
import { FC } from "react";
import styles from "./styles.module.scss";

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, type }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className={`bg-white rounded-lg shadow-lg ${styles.modalWrapper}`}>
        <div className="flex justify-end p-2">
          <button
            onClick={() => onClose(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div>
          <div className="text-center text-2xl">{type}</div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
