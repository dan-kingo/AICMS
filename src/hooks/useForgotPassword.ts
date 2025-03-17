import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const useForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const requestPasswordReset = async (email: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/forgot-password",
        { email }
      );

      if (response.data.success) {
        toast.success("Password reset link sent to your email.");
      } else {
        toast.error("Failed to send password reset link.");
      }
    } catch (error) {
      toast.error("Error sending password reset link.");
    } finally {
      setIsLoading(false);
    }
  };

  return { requestPasswordReset, isLoading };
};

export default useForgotPassword;
