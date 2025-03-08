import {
  User,
  FilePlus,
  ListChecks,
  Key,
  Settings,
  HelpCircle,
} from "lucide-react";

const sidebarItems = [
  {
    title: "User Profile",
    path: "/dashboard",
    icon: User,
  },
  {
    title: "Make Complaint",
    path: "/dashboard/add-complaint",
    icon: FilePlus,
  },
  {
    title: "Complaint History",
    path: "/dashboard/complaints",
    icon: ListChecks,
  },
  {
    title: "Change Password",
    path: "/dashboard/change-password",
    icon: Key,
  },
  {
    title: "Settings and Privacy",
    path: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Help and Support",
    path: "/dashboard/help",
    icon: HelpCircle,
  },
];

export default sidebarItems;
