import { useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const registerUser: RegisterUserFunction = async (data, _reset) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://aicms-api.onrender.com/api/auth/register",
        data,
        { withCredentials: true }
      );

      if (response.data.success) {
        setOTPSent(true);
        toast.success(t("OTP sent! Please verify your email."));
        navigate("/verify-otp");
      } else {
        toast.error(t("Something went wrong. Please try again."));
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          t(`${error.response?.data?.message}`) ||
            t("An unknown error occurred.")
        );
      } else {
        toast.error(t("Failed to register."));
      }
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (otp: string) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://aicms-api.onrender.com/api/auth/verify-otp",
        { otp },
        { withCredentials: true }
      );

      if (response.data.success) {
        toast.success("OTP verified! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      toast.error("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resendOTP = async () => {
    setLoading(true);
    try {
      console.log("Sending request to resend OTP...");

      const response = await axios.post(
        "https://aicms-api.onrender.com/api/auth/resend-otp",
        {},
        { withCredentials: true }
      );

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
