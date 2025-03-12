import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { loginFormData } from "@/utils/loginFormSchema";

const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const loginUser = async (data: loginFormData) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        data,
        { withCredentials: true }
      );

      if (response.data.success) {
        toast.success("Logged in successfully!");
        navigate("/dashboard");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "An unknown error occurred.";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to login");
      }
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, isLoading };
};

export default useLogin;
