import { useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type RegisterUserFunction = (
  data: { email: string; password: string },
  reset: () => void
) => Promise<void>;

const useRegister = (): {
  registerUser: RegisterUserFunction;
  verifyOTP: (otp: string) => Promise<void>;
  resendOTP: () => Promise<void>;
  isLoading: boolean;
  isOTPSent: boolean;
} => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isOTPSent, setOTPSent] = useState<boolean>(false);
  const navigate = useNavigate();

  const registerUser: RegisterUserFunction = async (data, _reset) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        data,
        { withCredentials: true } // ⬅️ Important: Ensures cookies are set
      );

      if (response.data.success) {
        setOTPSent(true);
        toast.success("OTP sent! Please verify your email.");
        navigate("/verify-otp");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message || "An unknown error occurred."
        );
      } else {
        toast.error("Failed to register.");
      }
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (otp: string) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/verify-otp",
        { otp }, // No email needed (backend gets it from cookies)
        { withCredentials: true } // ⬅️ Ensures cookie is sent with the request
      );

      if (response.data.success) {
        toast.success("OTP verified! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to verify OTP.");
    } finally {
      setLoading(false);
    }
  };

  const resendOTP = async () => {
    setLoading(true);
    try {
      console.log("Sending request to resend OTP...");

      const response = await axios.post(
        "http://localhost:3000/api/auth/resend-otp",
        {}, // No email needed (backend gets it from cookies)
        { withCredentials: true } // ⬅️ Ensures cookies are sent
      );

      console.log("Response from server:", response.data); // Log the server's response

      if (response.data.success) {
        toast.success("OTP resent successfully!");
      } else {
        toast.error("Failed to resend OTP.");
      }
    } catch (error) {
      console.log("Error resending OTP:", error); // Log error during the request
      toast.error("Error resending OTP.");
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, verifyOTP, resendOTP, isLoading, isOTPSent };
};

export default useRegister;
