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
    path: "/profile",
    icon: User,
  },
  {
    title: "Make Complaint",
    path: "/complaint/new",
    icon: FilePlus,
  },
  {
    title: "Complaint History",
    path: "/complaints",
    icon: ListChecks,
  },
  {
    title: "Change Password",
    path: "/change-password",
    icon: Key,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
  {
    title: "Help and Support",
    path: "/help",
    icon: HelpCircle,
  },
];

export default sidebarItems;
