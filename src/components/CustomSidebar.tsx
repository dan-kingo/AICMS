import useSidebar from "@/assets/constants/sidebarItems";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";

// Menu items.

const CustomSidebar = () => {
  const location = useLocation();
  const sidebarItems = useSidebar();

  return (
    <SidebarProvider>
      <Sidebar className="sidebar-height">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="mt-6">
              <SidebarMenu>
                {sidebarItems.map((item) => {
                  let isActiveLink = location.pathname === item.path;

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className="hover:text-primary">
                        <NavLink
                          to={item.path}
                          className={` py-8 ps-12 ${
                            isActiveLink ? "text-primary" : ""
                          }`}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
export default CustomSidebar;
