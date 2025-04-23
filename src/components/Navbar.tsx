import { useEffect, useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import useNavLinks from "@/assets/constants/navLinks";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navLinks = useNavLinks();

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
      } z-50 py-4 px-4 md:px-20 flex justify-between items-center fixed top-0 w-full`}
    >
      {/* Logo Section */}
      <NavLink to="/" className="flex items-center">
        <Zap className="text-primary size-9 md:size-8" />
        <p className="ps-2 font-semibold md:text-xl text-sm hidden md:block">
          EEU Complaint System
        </p>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 items-center">
        {navLinks.map(({ label, href }) => (
          <NavLink
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            key={label}
            to={href}
            className={({ isActive }) =>
              `hover:text-primary transition ${isActive ? "text-primary" : ""} `
            }
          >
            {label}
          </NavLink>
        ))}
        <DarkModeToggle />
        <LanguageSwitcher />
        <Button onClick={() => navigate("/login")} variant="outline">
          {t("Login")}
        </Button>
        <Button
          onClick={() => navigate("/register")}
          className="dark:text-white"
        >
          {t("Register")}
        </Button>
      </div>

      {/* Mobile Controls (Hamburger + Dark Mode) */}
      <div className="lg:hidden flex items-center gap-4">
        <DarkModeToggle />
        <LanguageSwitcher />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Sidebar (Sliding from Right) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed top-0 z-50 right-0 w-3/4 h-full bg-body dark:text-white text-dark shadow-lg flex flex-col py-6 px-6 md:hidden"
      >
        {/* Close Button */}
        <button
          className="self-end mb-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <X size={28} />
        </button>

        {/* Navigation Links */}
        <div className="flex flex-col gap-6">
          {navLinks.map(({ label, href }) => (
            <NavLink
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              key={label}
              to={href}
              className={({ isActive }) =>
                `hover:text-primary transition ${
                  isActive ? "text-primary" : ""
                } `
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="mt-10 flex flex-col gap-4">
          <Button onClick={() => navigate("/login")} variant="outline">
            {t("Login")}
          </Button>
          <Button
            onClick={() => navigate("/register")}
            className="dark:text-white"
          >
            {t("Register")}
          </Button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
