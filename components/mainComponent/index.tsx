"use client";
import { useAppContext } from "@/context/appContext";
import DynamicTable from "../dynamicTable";
import Header from "../header";
import TableController from "../tableController";
import AddColumnModal from "../modal/addModal/column";

export default function MainComoponent() {
  const { isModalOpen, handleModalClose, modalType } = useAppContext();
  return (
    <main className="mx-auto min-w-screen min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col h-full">
        <TableController />
        <DynamicTable />
      </div>
      {isModalOpen && (
        <AddColumnModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          type={modalType}
        />
      )}
    </main>
  );
}
