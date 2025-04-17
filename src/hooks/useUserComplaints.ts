import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

interface Complaint {
  user: string;
  description: string;
  category: string;
  status: string;
  createdAt: string;
}
export const useUserComplaints = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(false);

  const token = Cookies.get("token");

  useEffect(() => {
    const fetchComplaints = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://aicms-api.onrender.com/api/complaints",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );
        setComplaints(res.data);
      } catch (err) {
        console.error("Failed to fetch complaints", err);
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  return { complaints, loading };
};
