import { LayoutDashboard, Users, Settings, ClipboardList } from "lucide-react";

const adminSidebar = [
  {
    title: "Dashboard",
    path: "/admin-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Manage Users",
    path: "/admin-dashboard/manage-users",
    icon: Users,
  },
  {
    title: "Manage Complaints",
    path: "/admin-dashboard/manage-complaints",
    icon: ClipboardList,
  },
  {
    title: "Settings",
    path: "/admin-dashboard/settings",
    icon: Settings,
  },
];

export default adminSidebar;
