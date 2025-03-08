import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  let isDashboardPath = location.pathname.startsWith("/dashboard");

  return (
    <div className="pt-12 ">
      <p
        className={`text-center dark:text-gray-600 text-gray-400 ${
          isDashboardPath ? "md:ml-64" : ""
        }`}
      >
        &copy; {new Date().getFullYear()} Ethiopian Electric Utility. All Rights
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
