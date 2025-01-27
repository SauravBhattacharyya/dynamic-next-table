import { ColDef, ColGroupDef } from "ag-grid-community";
import { ReactNode } from "react";

export type ModalOnCloseType = (
  arg: { columnId: string; columnName: string } | boolean
) => void;

export type RowDataType = {
  id: number;
  [key: string]: string | number | null;
};
export interface AppContextType {
  rowData: RowDataType[] | null | undefined;
  columnDefs:
    | (ColDef<RowDataType, any> | ColGroupDef<RowDataType>)[]
    | null
    | undefined;
  isModalOpen: boolean;
  modalType: string | null;
  handleModalOpen: (arg1: string) => void;
  handleModalClose: ModalOnCloseType;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: ModalOnCloseType;
  children: ReactNode;
  type: string | null;
}
