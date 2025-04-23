import { Menu, X, Zap } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomDropDown from "./CustomDropdown";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import { Button } from "./ui/button";
import useSidebar from "@/assets/constants/sidebarItems";
import LanguageSwitcher from "./LanguageSwitcher";

const DashboardNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const sidebarItems = useSidebar();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(!scrolled);
      } else {
        setScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "dark:bg-dark  bg-white shadow-xl" : "dark:bg-dark  bg-white"
      } z-50 py-4 px-4 lg:px-14 flex justify-between items-center fixed top-0 w-full`}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <Zap className="text-primary size-8" />
        <p className="ps-2 font-semibold md:text-xl hidden sm:block">
          EEU Complaint System
        </p>
      </div>

      <div className="hidden md:flex gap-4 ">
        <DarkModeToggle />
        <LanguageSwitcher />
        <CustomDropDown />
      </div>

      {/* Mobile Controls (Hamburger + Dark Mode) */}
      <div className="md:hidden flex items-center gap-4">
        <CustomDropDown />
        <DarkModeToggle />
        <Button variant="outline" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={28} />
        </Button>
      </div>

      {/* Mobile Menu Sidebar (Sliding from Right) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed top-0 z-50 right-0 w-3/4 sm:w-1/2  h-full bg-body dark:text-white text-dark shadow-lg flex flex-col py-6 px-6 md:hidden"
      >
        {/* Close Button */}
        <Button
          variant="outline"
          className="self-end mb-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <X size={28} />
        </Button>

        {/* Navigation Links */}
        <div className="flex flex-col gap-6">
          {sidebarItems.map((item) => {
            let isActiveLink = location.pathname === item.path;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                className={`hover:text-primary transition ${
                  isActiveLink ? "text-primary" : ""
                }  flex gap-4 `}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <item.icon />
                {item.title}
              </NavLink>
            );
          })}
          <LanguageSwitcher />
        </div>
      </motion.div>
    </nav>
  );
};

export default DashboardNavbar;
