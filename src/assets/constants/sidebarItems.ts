import {
  User,
  FilePlus,
  ListChecks,
  Key,
  Settings,
  HelpCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const useSidebar = () => {
  const { t } = useTranslation();

  const sidebarItems = [
    {
      title: t("User Profile"),
      path: "/dashboard",
      icon: User,
    },
    {
      title: t("Make Complaint"),
      path: "/dashboard/add-complaint",
      icon: FilePlus,
    },
    {
      title: t("Complaint History"),
      path: "/dashboard/complaints",
      icon: ListChecks,
    },
    {
      title: t("Change Password"),
      path: "/dashboard/change-password",
      icon: Key,
    },
    {
      title: t("Settings and Privacy"),
      path: "/dashboard/settings",
      icon: Settings,
    },
    {
      title: t("Help and Support"),
      path: "/dashboard/help",
      icon: HelpCircle,
    },
  ];

  return sidebarItems;
};

export default useSidebar;
