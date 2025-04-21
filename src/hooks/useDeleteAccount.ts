import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useUser from "./useUser";
import Cookies from "js-cookie";

export const useDeleteAccount = () => {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await useUser();
      if (user && user._id) {
        setUserId(user._id);
      } else {
        console.error("User not found or unauthorized");
      }
    };
    fetchUser();
  }, []);

  const deleteAccount = async () => {
    if (!userId) {
      toast.error("User not authenticated or ID missing.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.delete(
        `https://aicms-api.onrender.com/api/user/delete-user/${userId}`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast.success("Your account has been deleted successfully.");
        Cookies.remove("token");
        navigate("/login");
      } else {
        toast.error("Failed to delete account.");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error("Failed to delete account.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteAccount };
};
