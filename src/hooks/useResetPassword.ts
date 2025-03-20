import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useResetPassword = () => {
  const { resetId } = useParams<{ resetId: string }>(); // ✅ Use correct param name
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const resetPassword = async () => {
    console.log(resetId);
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    setIsLoading(true);
    try {
      await axios.post(`http://localhost:3000/api/auth/reset-password`, {
        resetToken: resetId,
        newPassword,
      });

      toast.success("Password reset successfully!");
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios Error Response:", error.response?.data);
        toast.error(
          error.response?.data?.message || "Error resetting password."
        );
      } else {
        console.error("Unknown Error:", error);
        toast.error("An unexpected error occurred.");
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
