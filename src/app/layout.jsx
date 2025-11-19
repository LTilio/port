import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export default function Layout() {
  return (
    <div
      className="
        min-h-screen
        flex flex-col
        max-w-6xl 
        mx-auto px-5 py-10
        bg-stone-200
        text-stone-800
      "
    >
      <Header />
      <main className="flex-1 mb-[95px] font-poppins ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
