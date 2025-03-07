import CustomSidebar from "@/components/CustomSidebar";
import DashboardNavbar from "@/components/DashboardNavbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col">
      <DashboardNavbar />

      <div className="flex flex-1">
        <aside className="w-64 sm:hidden md:block">
          <CustomSidebar />
        </aside>

        <main className="flex-1   p-6 sm:p-4 sidebar-height overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
