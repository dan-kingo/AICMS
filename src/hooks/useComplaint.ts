import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useComplaintStore } from "@/store/complaintStore";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useComplaint = () => {
  const { resetComplaint, setLoading } = useComplaintStore();
  const [isLoading, setLoadingState] = useState(false);
  const navigate = useNavigate();

  const token = Cookies.get("token");

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
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        toast.success("Complaint submitted successfully!");
        resetComplaint();
        navigate("/dashboard/complaints");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit complaint");
    } finally {
      setLoadingState(false);
      setLoading(false);
    }
  };

  return { submitComplaint, isLoading };
};

export default useComplaint;
