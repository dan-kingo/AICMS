import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Cookies from "js-cookie";
import useUserStore from "@/store/userStore";
import { useTranslation } from "react-i18next";

const useLogout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const logoutUser = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "https://aicms-api.onrender.com/api/auth/logout"
      );

      if (response.data.success) {
        toast.success(t("Logged out successfully!"));
        useUserStore.getState().setUser(null);
        Object.keys(Cookies.get()).forEach((cookie) => {
          Cookies.remove(cookie);
        });
        navigate("/");
      } else {
        toast.error(t("Something went wrong. Please try again."));
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "An unknown error occurred.";
        toast.error(t(`${errorMessage}`));
      } else {
        toast.error(t("Failed to logout"));
      }
    } finally {
      setLoading(false);
    }
  };

  return { logoutUser, isLoading };
};

export default useLogout;
