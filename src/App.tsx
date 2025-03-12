import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Toaster } from "./components/ui/sonner";
import AuthProvider from "./contexts/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" richColors />
    </AuthProvider>
  );
};

export default App;
