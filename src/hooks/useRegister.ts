import { useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { registerFormData } from "@/utils/registerFormSchema";

type RegisterUserFunction = (
  data: registerFormData,
  reset: () => void
) => Promise<void>;

const useRegister = (): {
  registerUser: RegisterUserFunction;
  isLoading: boolean;
} => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const registerUser: RegisterUserFunction = async (data, reset) => {
    setLoading(true);
    try {
      const response = await axios.post<{ success: boolean }>(
        "http://localhost:3000/api/auth/register",
        data
      );

      if (response.data.success) {
        toast.success("Registered successfully!", {
          description: `Thanks for registering, ${data.firstName} ${data.lastName}!`,
        });
        reset();
        setTimeout(() => navigate("/login"), 1500);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "An unknown error occurred.";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to register.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, isLoading };
};

export default useRegister;
