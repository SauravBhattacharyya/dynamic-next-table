import DynamicTable from "@/components/dynamicTable";
import Header from "@/components/header";
import TableController from "@/components/tableController";
import { AppProvider } from "@/context/appContext";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <AppProvider>
        <main className="mx-auto min-w-screen min-h-screen flex flex-col">
          <Header />
          <div className="flex flex-col h-full">
            <TableController />
            <DynamicTable />
          </div>
        </main>
      </AppProvider>
    </>
  );
}
