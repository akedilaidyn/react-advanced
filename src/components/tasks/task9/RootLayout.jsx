import { Outlet } from "react-router";
import Navbar from "../../shared/Navbar";

export function RootLayout() {
  return (
    <>
      <header className="bg-neutral-950 text-white h-18 mb-8">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <h1 className="font-bold text-lg">React Advanced Tasks</h1>
          <Navbar />
        </div>
      </header>
      <main className="flex flex-col max-w-7xl mx-auto space-y-8">
        <Outlet />
      </main>
    </>
  );
}
