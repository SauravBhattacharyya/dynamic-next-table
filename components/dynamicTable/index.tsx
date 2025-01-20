"use client";
import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import {
  AllCommunityModule,
  ColDef,
  ColGroupDef,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import Image from "next/image";
import { IMAGE } from "@/utils/constants";

ModuleRegistry.registerModules([AllCommunityModule]);

interface RowData {
  id: number;
  [key: string]: string | number | null;
}

export default function DynamicTable() {
  const autoSizeStrategy = {
    type: "fitCellContents",
  };
  const [rowData, setRowData] = useState<RowData[]>([
    {
      id: 1,
      inputColumn: "Oct 12, 2024 at 14:08 PM",
      actionColumn: "Bitscale Evaluation - Account relevancy check.csv",
      enrichCompany: "Bitscale Evaluation - Account relevancy check.csv",
    },
    {
      id: 2,
      inputColumn: "Oct 12, 2024 at 14:08 PM",
      actionColumn: "BMW Evaluation - Relevancy check.csv",
      enrichCompany: "BMW Evaluation - Relevancy check.csv",
    },
    {
      id: 3,
      inputColumn: "Oct 12, 2024 at 14:08 PM",
      actionColumn: "Google Evaluation - Lilevancy check.csv",
      enrichCompany: "Google Evaluation - Lilevancy check.csv",
    },
    {
      id: 4,
      inputColumn: "Oct 12, 2024 at 14:08 PM",
      actionColumn: "Apple Evaluation - Olvancy check.csv",
      enrichCompany: "Apple Evaluation - Olvancy check.csv",
    },
    {
      id: 5,
      inputColumn: "Oct 12, 2024 at 14:08 PM",
      actionColumn: "Figma Evaluation - Evancy check.csv",
      enrichCompany: "Figma Evaluation - Evancy check.csv",
    },
  ]);

  const [columnDefs, setColumnDefs] = useState<
    (ColDef<RowData, any> | ColGroupDef<RowData>)[] | null | undefined
  >([
    {
      field: "id",
      headerName: "",
      editable: false,
      resizable: false,
    },
    {
      field: "playimg",
      headerName: "",
      editable: false,
      resizable: false,
      cellStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      cellRenderer: (params: any) => {
        return <Image src={params.value} alt="Play" width={24} height={24} />;
      },
    },
    {
      field: "inputColumn",
      headerName: "Input Column",
      editable: true,
    },
    {
      field: "actionColumn",
      headerName: "Action Column",
      editable: true,
    },
    {
      field: "enrichCompany",
      headerName: "Enrich Company",
      editable: true,
    },
  ]);

  const addRow = () => {
    const newId = rowData.length + 1;
    setRowData([...rowData, { id: newId, name: "", age: null }]);
  };

  const addColumn = () => {
    const newField = `field_${columnDefs.length + 1}`;
    setColumnDefs([
      ...columnDefs,
      { field: newField, headerName: `Column ${newField}`, editable: true },
    ]);
    setRowData(rowData.map((row) => ({ ...row, [newField]: "" })));
  };

  const deleteRow = () => {
    if (rowData.length > 0) {
      setRowData(rowData.slice(0, -1));
    }
  };

  const deleteColumn = () => {
    if (columnDefs.length > 0) {
      const updatedColumns = columnDefs.slice(0, -1);
      const lastColumnField = columnDefs[columnDefs.length - 1].field;
      setColumnDefs(updatedColumns);
      setRowData(
        rowData.map((row) => {
          const updatedRow = { ...row };
          delete updatedRow[lastColumnField];
          return updatedRow;
        })
      );
    }
  };

  return (
    <div>
      <div className="" style={{ height: 400, width: "100%" }}>
        <div style={{ marginBottom: "10px" }}>
          <button onClick={addRow}>Add Row</button>
          <button onClick={addColumn}>Add Column</button>
          <button onClick={deleteRow}>Delete Last Row</button>
          <button onClick={deleteColumn}>Delete Last Column</button>
        </div>
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
