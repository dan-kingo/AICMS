import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useComplaintStore } from "@/store/complaintStore";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const useComplaint = () => {
  const { t } = useTranslation();
  const { resetComplaint, setLoading } = useComplaintStore();
  const [isLoading, setLoadingState] = useState(false);
  const navigate = useNavigate();

  const submitComplaint = async (
    data: FormData | { description: string },
    isFormData: boolean
  ) => {
    setLoadingState(true);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://aicms-api.onrender.com/api/complaints",
        data,
        {
          headers: {
            ...(isFormData
              ? { "Content-Type": "multipart/form-data" }
              : { "Content-Type": "application/json" }),
          },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        toast.success(t("Complaint submitted successfully!"));
        resetComplaint();
        navigate("/dashboard/complaints");
      } else {
        toast.error(t("Something went wrong. Please try again."));
      }
    } catch (error) {
      console.error(error);
      toast.error(t("Failed to submit complaint"));
    } finally {
      setLoadingState(false);
      setLoading(false);
    }
  };

  return { submitComplaint, isLoading };
};

export default useComplaint;
