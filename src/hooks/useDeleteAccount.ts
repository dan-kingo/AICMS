import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useUser from "./useUser";

export const useDeleteAccount = () => {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await useUser();
      if (user) {
        setUserId(user._id);
      } else {
        console.error("User not found or unauthorized");
      }
    };
    fetchUser();
  }, []);

  const deleteAccount = async () => {
    const token = Cookies.get("token");

    if (!token || !userId) {
      toast.error("User not authenticated or ID missing.");
      return;
    }

    setLoading(true);
    try {
      await axios.delete(
        `http://localhost:3000/api/user/delete-user/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      toast.success("Your account has been deleted successfully.");
      Cookies.remove("token");
      navigate("/login");
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error("Failed to delete account.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteAccount };
};
