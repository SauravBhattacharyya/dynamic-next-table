import { FC } from "react";

type ModalTypes = {
  type: "Add Row" | "Add Column" | "Delete Row" | "Delete Column";
};
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ModalTypes;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="p-4"></div>
      </div>
    </div>
  );
};

export default Modal;
