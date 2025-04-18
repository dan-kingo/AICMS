// src/hooks/useUpdate.ts
import profileUpdateSchema, {
  profileUpdateData,
} from "@/utils/profileUpdateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useUserStore from "@/store/userStore";
import axios from "axios";
import useUser from "./useUser";
import Cookies from "js-cookie";

const useUpdate = () => {
  const [isLoading, setLoading] = useState(false);
  const form = useForm<profileUpdateData>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      phoneNumber: "",
    },
  });

  const fetchUser = async () => {
    const userData = await useUser();
    if (userData) {
      form.reset(userData);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [form.reset]);

  const onSubmit = async (data: profileUpdateData) => {
    setLoading(true);

    const token = Cookies.get("token");
    const user = useUserStore.getState().user; // Assuming you store user in Zustand

    if (!user?._id) {
      toast.error("User not found in local store.");
      return;
    }

    try {
      const response = await axios.put(
        `https://aicms-api.onrender.com/api/user/update-user/${user._id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success("Updated successfully!");

        useUserStore.getState().updateUser(response.data.user);
        form.reset(response.data.user);
      } else {
        toast.error(response.data.message || "Something went wrong.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, onSubmit, form };
};

export default useUpdate;
