"use client";
import { AgGridReact } from "ag-grid-react";
import React from "react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import { useAppContext } from "@/context/appContext";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function DynamicTable() {
  const { rowData, columnDefs } = useAppContext();

  return (
    <div>
      <div className="" style={{ height: 400, width: "100%" }}>
        <AgGridReact
          domLayout="print"
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{ editable: true, resizable: true }}
          autoSizeStrategy={{ type: "fitCellContents" }}
          theme={themeQuartz.withParams({
            wrapperBorder: true,
            headerRowBorder: true,
            rowBorder: { style: "solid", width: 1, color: "#E2E2E3" },
            columnBorder: { style: "solid", color: "#E2E2E3" },
            headerBackgroundColor: "#F6F6F6",
          })}
        />
      </div>
    </div>
  );
}
