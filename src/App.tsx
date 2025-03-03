import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" richColors />
    </>
  );
};

export default App;
