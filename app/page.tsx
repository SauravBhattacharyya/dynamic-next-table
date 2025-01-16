import DynamicTable from "@/components/dynamicTable";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import TableController from "@/components/tableController";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <div>
          <TableController />
          <DynamicTable />
        </div>
      </div>
    </main>
  );
}
