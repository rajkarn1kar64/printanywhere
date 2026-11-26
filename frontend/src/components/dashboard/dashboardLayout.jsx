import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
      <Sidebar />

      <div className="ml-0 min-h-screen lg:ml-64">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}