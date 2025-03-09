import Chatbot from "@/components/Chatbot";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Chatbot />
    </div>
  );
};

export default Layout;
