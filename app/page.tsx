import DynamicTable from "@/components/dynamicTable";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import TableController from "@/components/tableController";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto min-w-screen min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 h-full">
        <Sidebar />
        <div className="flex-1">
          <TableController />
          <DynamicTable />
        </div>
      </div>
    </main>
  );
}
