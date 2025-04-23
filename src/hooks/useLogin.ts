import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { loginFormData } from "@/utils/loginFormSchema";
import { useTranslation } from "react-i18next";

const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();
  const loginUser = async (data: loginFormData) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://aicms-api.onrender.com/api/auth/login",
        data,
        { withCredentials: true }
      );

      if (response.data.success) {
        toast.success(t("Logged in successfully!"));
        navigate("/dashboard");
      } else {
        toast.error(t("Something went wrong. Please try again."));
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "An unknown error occurred.";
        toast.error(t(`${errorMessage}`));
      } else {
        toast.error(t("Failed to login"));
      }
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, isLoading };
};

export default useLogin;
