import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const useForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const requestPasswordReset = async (email: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://aicms-api.onrender.com/api/auth/forgot-password",
        { email }
      );

      if (response.data.success) {
        toast.success(t("Password reset link sent to your email."));
      } else {
        toast.error(t("Failed to send password reset link."));
      }
    } catch (error) {
      toast.error(t("Error sending password reset link."));
    } finally {
      setIsLoading(false);
    }
  };

  return { requestPasswordReset, isLoading };
};

export default useForgotPassword;
