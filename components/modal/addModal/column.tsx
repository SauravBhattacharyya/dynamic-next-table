"use client";
import styles from "../styles.module.scss";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import Modal from "..";
import { ModalOnCloseType } from "@/types";

interface AppColumnModalProps {
  isOpen: boolean;
  onClose: ModalOnCloseType;
  type: string | null;
}

const INITIALSTATE = { columnId: "", columnName: "" };
const AddColumnModal: FC<AppColumnModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState(INITIALSTATE);
  const [errors, setErrors] = useState(INITIALSTATE);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      if (name === "columnId" && /\s/.test(value)) {
        return prevState;
      }
      return { ...prevState, [name]: value };
    });
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };

  const clearForm = () => {
    setFormData(INITIALSTATE);
    setErrors(INITIALSTATE);
  };

  const validateForm = () => {
    const newErrors: { columnId: string; columnName: string } = {
      columnId: "",
      columnName: "",
    };
    if (!formData.columnId.trim()) {
      newErrors.columnId = "Column ID is required.";
    }
    if (!formData.columnName.trim()) {
      newErrors.columnName = "Column Name is required.";
    }
    setErrors(newErrors);
    return !newErrors.columnId && !newErrors.columnName;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    clearForm();
    onClose(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} type={type}>
      <form onSubmit={handleSubmit} className={styles.formModal}>
        <div className={styles.formGroup}>
          <label htmlFor="columnId" className={styles.formLabel}>
            Column Id
          </label>
          <input
            type="text"
            id="columnId"
            name="columnId"
            value={formData.columnId}
            onChange={handleInputChange}
            className={styles.formInput}
          />
          {errors.columnId && (
            <p className={styles.errorText}>{errors.columnId}</p>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="columnName" className={styles.formLabel}>
            Column Name
          </label>
          <input
            type="text"
            id="columnName"
            name="columnName"
            value={formData.columnName}
            onChange={handleInputChange}
            className={styles.formInput}
          />
          {errors.columnName && (
            <p className={styles.errorText}>{errors.columnName}</p>
          )}
        </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
          <button type="button" className={styles.clearBtn} onClick={clearForm}>
            Clear
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddColumnModal;
