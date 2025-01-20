import { ColDef, ColGroupDef } from "ag-grid-community";

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
}
