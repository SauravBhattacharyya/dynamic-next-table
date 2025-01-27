import MainComoponent from "@/components/mainComponent";
import { AppProvider } from "@/context/appContext";
import { Bounce, ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <AppProvider>
        <MainComoponent />
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
