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
      const response = await axios.post(
        `http://localhost:3000/api/auth/reset-password`,
        {
          resetToken: resetId, // Ensure you're sending the correct field
          newPassword,
        }
      );

      console.log("Response:", response.data); // Log response for debugging
      toast.success("Password reset successfully!");
      navigate("/login");
    } catch (error) {
      // Check if it's an Axios error
      if (axios.isAxiosError(error)) {
        // Log the Axios error response data if it exists
        console.error("Axios Error Response:", error.response?.data);
        toast.error(
          error.response?.data?.message || "Error resetting password."
        );
      } else {
        // Log unknown errors
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
