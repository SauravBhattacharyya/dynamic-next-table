import DynamicTable from "@/components/dynamicTable";
import Header from "@/components/header";
import TableController from "@/components/tableController";
import { AppProvider } from "@/context/appContext";
import { Bounce, ToastContainer } from "react-toastify";

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
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          closeOnClick={true}
          transition={Bounce}
        />
      </AppProvider>
    </>
  );
}
