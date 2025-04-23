import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useResetPassword = () => {
  const { resetId } = useParams<{ resetId: string }>();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const resetPassword = async () => {
    console.log(resetId);
    if (newPassword !== confirmPassword) {
      toast.error(t("Passwords do not match."));
      return;
    }

    if (newPassword.length < 8) {
      toast.error(t("Password must be at least 8 characters."));
      return;
    }

    setIsLoading(true);
    try {
      await axios.post(
        `https://aicms-api.onrender.com/api/auth/reset-password`,
        {
          resetToken: resetId,
          newPassword,
        }
      );

      toast.success(t("Password reset successfully!"));
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error Response:", error.response?.data);
        toast.error(
          t(`${error.response?.data?.message}`) ||
            t("Error resetting password.")
        );
      } else {
        console.error("Unknown Error:", error);
        toast.error(t("An unexpected error occurred."));
      }
    } finally {
      setIsLoading(false);
    }
  };
  return {
    resetPassword,
    isLoading,
    newPassword,
    confirmPassword,
    setNewPassword,
    setConfirmPassword,
  };
};

export default useResetPassword;
