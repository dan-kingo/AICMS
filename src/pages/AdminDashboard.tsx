import CustomBar from "@/components/CustomBar";
import CustomSidebar from "@/components/CustomSidebar";
import DashboardNavbar from "@/components/DashboardNavbar";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <DashboardNavbar />

      <div className="flex flex-1">
        <aside className="w-64 hidden md:block">
          <CustomSidebar />
        </aside>
        <main className="flex-1   p-6 sm:p-4 sidebar-height overflow-auto ">
          <CustomBar />
        </main>
      </div>
    </div>
  );
};
export default AdminDashboard;
