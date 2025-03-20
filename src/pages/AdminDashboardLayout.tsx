import AdminSidebar from "@/components/AdminSidebar";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Outlet } from "react-router-dom";

const AdminDashboardLayout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <DashboardNavbar />

      <div className="flex flex-1">
        <aside className="w-64 hidden md:block">
          <AdminSidebar />
        </aside>
        <main className="flex-1   p-6 sm:p-4 sidebar-height overflow-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AdminDashboardLayout;
