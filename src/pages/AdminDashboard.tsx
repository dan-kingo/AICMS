import AdminSidebar from "@/components/AdminSidebar";
import CustomBar from "@/components/CustomBar";
import DashboardNavbar from "@/components/DashboardNavbar";
import StatusCard from "@/components/StatusCard";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <DashboardNavbar />

      <div className="flex flex-1">
        <aside className="w-64 hidden md:block">
          <AdminSidebar />
        </aside>
        <main className="flex-1   p-6 sm:p-4 sidebar-height overflow-auto ">
          <div className="flex lg:gap-16 gap-4  w-full flex-wrap">
            <StatusCard />
          </div>
          <CustomBar />
        </main>
      </div>
    </div>
  );
};
export default AdminDashboard;
