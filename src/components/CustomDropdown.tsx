import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, User, Settings, HelpCircle, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import useLogout from "@/hooks/useLogout";
import useUser from "@/hooks/useUser";
import { useState, useEffect } from "react";

interface User {
  firstName: string;
  [key: string]: any;
}

const CustomDropDown = () => {
  const { logoutUser } = useLogout();
  const { handleSubmit } = useForm();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await useUser();
      setUser(userData);
      console.log(userData);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <DropdownMenu>
        {/* Fix: Use asChild to prevent extra button wrapping */}
        <DropdownMenuTrigger asChild>
          <Button className="dark:text-white flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage
                src="https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="User Image"
              />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            {user ? user.firstName : "Guest"}
            <ChevronDown size="16px" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* Fix: Use asChild to ensure Link replaces DropdownMenuItem properly */}
          <DropdownMenuItem asChild>
            <Link to="/dashboard">
              <User size={16} />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard/settings">
              <Settings size={16} />
              Settings & Privacy
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/dashboard/help">
              <HelpCircle size={16} />
              Help & Support
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <form onSubmit={handleSubmit(logoutUser)}>
              <Button
                className="flex items-center justify-center w-full"
                variant="outline"
              >
                <LogOut size={16} />
                Logout
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CustomDropDown;
