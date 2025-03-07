import { Zap } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const DashboardNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
      } z-50 py-4 px-4 md:px-14 flex justify-between items-center fixed top-0 w-full`}
    >
      {/* Logo Section */}
      <NavLink to="/" className="flex items-center">
        <Zap className="text-primary md:size-8" />
        <p className="ps-2 font-semibold md:text-xl text-sm">
          EEU Complaint System
        </p>
      </NavLink>
      <div>
        <Button className="dark:text-white rounded-full">Logout</Button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
