"use client";

import { AppContextType, RowDataType } from "@/types";
import { ColDef, ColGroupDef } from "ag-grid-community";
import { createContext, ReactNode, useContext, useState } from "react";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [rowData, setRowData] = useState<RowDataType[] | null>(null);
  const [columnDefs, setColumnDefs] = useState<
    (ColDef<RowDataType, any> | ColGroupDef<RowDataType>)[] | null | undefined
  >(null);

  return (
    <AppContext.Provider value={{ rowData, columnDefs }}>
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
