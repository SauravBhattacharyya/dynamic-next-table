"use client";

import { AppContextType, RowDataType } from "@/types";
import { ColDef, ColGroupDef } from "ag-grid-community";
import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [rowData, setRowData] = useState<RowDataType[] | null>(null);
  const [columnDefs, setColumnDefs] = useState<
    (ColDef<RowDataType, any> | ColGroupDef<RowDataType>)[] | null | undefined
  >(null);

  const handleAddColumn = () => {};

  const handleAddRow = () => {
    if (columnDefs?.length) {
    }
  };

  return (
    <AppContext.Provider
      value={{
        rowData,
        columnDefs,
        handleAddColumn,
        handleAddRow,
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
