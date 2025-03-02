import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Help/FAQ", href: "/help" },
  { label: "Contact Us", href: "/contact-us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="dark:bg-dark bg-white py-4 px-6 md:px-20 flex justify-between items-center relative">
      {/* Logo Section */}
      <NavLink to="/" className="flex items-center">
        <Zap className="text-primary md:size-8" />
        <p className="ps-2 font-semibold md:text-xl text-sm">
          EEU Complaint System
        </p>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map(({ label, href }) => (
          <NavLink
            key={label}
            to={href}
            className="hover:text-primary transition"
          >
            {label}
          </NavLink>
        ))}
        <DarkModeToggle />
        <Button onClick={() => navigate("/login")} variant="outline">
          Login
        </Button>
        <Button
          onClick={() => navigate("/register")}
          className="dark:text-white"
        >
          Register
        </Button>
      </div>

      {/* Mobile Controls (Hamburger + Dark Mode) */}
      <div className="md:hidden flex items-center gap-4">
        <DarkModeToggle />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Sidebar (Sliding from Right) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed top-0 right-0 w-3/4 h-full bg-body dark:text-white text-dark shadow-lg flex flex-col py-6 px-6 md:hidden"
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
            <NavLink key={label} to={href} className="transitio">
              {label}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="mt-10 flex flex-col gap-4">
          <Button onClick={() => navigate("/login")} variant="outline">
            Login
          </Button>
          <Button
            onClick={() => navigate("/register")}
            className="dark:text-white"
          >
            Register
          </Button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
