import { createBrowserRouter } from "react-router-dom";
import {
  About,
  Error,
  ChangePassword,
  ComplaintHistory,
  Contact,
  Dashboard,
  FAQs,
  ForgotPassword,
  HelpAndSupport,
  Home,
  Layout,
  Login,
  MakeComplaint,
  OTPVerification,
  Register,
  ResetPassword,
  Settings,
  UserProfile,
  AdminDashboardLayout,
  ManageUsers,
  ManageComplaints,
  AdminSetting,
} from "./pages";
import AdminDashboard from "./pages/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faqs",
        element: <FAQs />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "verify-otp",
    element: <OTPVerification />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "reset-password/:resetId",
    element: <ResetPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <UserProfile />,
      },
      {
        path: "add-complaint",
        element: <MakeComplaint />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "help",
        element: <HelpAndSupport />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "complaints",
        element: <ComplaintHistory />,
      },
    ],
  },

  {
    path: "/admin-dashboard",
    element: <AdminDashboardLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "manage-users", element: <ManageUsers /> },
      { path: "manage-complaints", element: <ManageComplaints /> },
      { path: "settings", element: <AdminSetting /> },
    ],
  },
]);

export default router;
