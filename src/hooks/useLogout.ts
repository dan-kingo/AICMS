import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useLogout = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const logoutUser = async () => {
    setLoading(true);

    try {
      const response = await axios.get("http://localhost:3000/api/auth/logout");

      if (response.data.success) {
        toast.success("Logged out successfully!");
        navigate("/");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "An unknown error occurred.";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to logout");
      }
    } finally {
      setLoading(false);
    }
  };

  return { logoutUser, isLoading };
};

export default useLogout;
