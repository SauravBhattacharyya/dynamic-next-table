"use client";

import { AppContextType, RowDataType } from "@/types";
import { MODALTYPE } from "@/utils/constants";
import { ColDef, ColGroupDef } from "ag-grid-community";
import { createContext, ReactNode, useContext, useState } from "react";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [rowData, setRowData] = useState<RowDataType[] | null>(null);
  const [columnDefs, setColumnDefs] = useState<
    (ColDef<RowDataType, any> | ColGroupDef<RowDataType>)[] | null | undefined
  >(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const handleModalOpen = (val: string) => {
    setModalType(val);
    setIsModalOpen(true);
  };

  const handleModalClose = (
    obj: { columnId: string; columnName: string } | boolean
  ) => {
    if (typeof obj !== "boolean") {
      if (modalType === MODALTYPE.ADDCOLUMN) {
        handleAddColumn(obj);
      }
    }
    setModalType(null);
    setIsModalOpen(false);
  };

  const handleAddColumn = (
    obj: { columnId: string; columnName: string } | boolean
  ) => {
    if (typeof obj === "boolean") return;
    const { columnId, columnName } = obj;
    const newColumn = {
      headerName: columnName,
      field: columnId,
      sortable: true,
      filter: true,
    };
    setColumnDefs((prevDefs) =>
      prevDefs ? [...prevDefs, newColumn] : [newColumn]
    );
  };

  return (
    <AppContext.Provider
      value={{
        rowData,
        columnDefs,
        isModalOpen,
        modalType,
        handleModalOpen,
        handleModalClose,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
