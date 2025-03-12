import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" richColors />
    </>
  );
};

export default App;
