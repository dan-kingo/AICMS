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
import { useTranslation } from "react-i18next";

const useUpdate = () => {
  const { t } = useTranslation();
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

    const user = useUserStore.getState().user;

    if (!user?._id) {
      toast.error(t("User not found in local store."));
      return;
    }

    try {
      const response = await axios.put(
        `https://aicms-api.onrender.com/api/user/update-user/${user._id}`,
        data,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success(t("Updated successfully!"));

        useUserStore.getState().updateUser(response.data.user);
        form.reset(response.data.user);
      } else {
        toast.error(
          t(`${response.data.message}`) || t("Something went wrong.")
        );
      }
    } catch (error) {
      console.log(error);
      toast.error(t("Failed to update! Please try again."));
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, onSubmit, form };
};

export default useUpdate;
