import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  User,
  Settings,
  HelpCircle,
  LogOut,
  User2Icon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import useLogout from "@/hooks/useLogout";
import useUserStore from "@/store/userStore";
import { useTranslation } from "react-i18next";

const CustomDropDown = () => {
  const { logoutUser } = useLogout();
  const { handleSubmit } = useForm();
  const { t } = useTranslation();

  const user = useUserStore((state) => state.user);

  return (
    <div>
      <DropdownMenu>
        {/* Fix: Use asChild to prevent extra button wrapping */}
        <DropdownMenuTrigger asChild>
          <Button className="dark:text-white flex items-center gap-2">
            <User2Icon />
            {user ? user.firstName : t("Guest")}
            <ChevronDown size="16px" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>{t("My Account")}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* Fix: Use asChild to ensure Link replaces DropdownMenuItem properly */}
          <DropdownMenuItem asChild>
            <Link to="/dashboard">
              <User size={16} />
              {t("Profile")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard/settings">
              <Settings size={16} />
              {t("Settings & Privacy")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard/help">
              <HelpCircle size={16} />
              {t("Help & Support")}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <form onSubmit={handleSubmit(logoutUser)}>
              <Button
                className="flex items-center justify-center w-full"
                variant="outline"
              >
                <LogOut size={16} />
                {t("Logout")}
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CustomDropDown;
