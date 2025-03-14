import { createBrowserRouter } from "react-router-dom";
import {
  About,
  ChangePassword,
  ComplaintHistory,
  Contact,
  Dashboard,
  FAQs,
  HelpAndSupport,
  Home,
  Login,
  MakeComplaint,
  Register,
  Settings,
  UserProfile,
} from "./pages";
import Layout from "./pages/Layout";
import Error from "./pages/Error";

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
]);

export default router;
