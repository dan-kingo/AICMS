import changePasswordSchema, {
  changePasswordData,
} from "@/utils/changePasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

const usePassword = () => {
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);
  const form = useForm<changePasswordData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: changePasswordData) => {
    setLoading(true);
    let isComponentMounted = true;

    try {
      const response = await axios.post(
        "https://aicms-api.onrender.com/api/user/change-password",
        data,
        { withCredentials: true }
      );

      const result = response.data;

      if (isComponentMounted) {
        if (result.success) {
          toast.success(t("Password changed successfully!"));
          form.reset();
        } else {
          toast.error(
            t(`${result.message}`) ||
              t("Something went wrong. Please try again.")
          );
        }
      }
    } catch (error) {
      console.log(error);
      if (isComponentMounted) {
        toast.error(t("Failed to update. Please try again."));
      }
    } finally {
      if (isComponentMounted) setLoading(false);
    }

    return () => {
      isComponentMounted = false;
    };
  };

  return { isLoading, form, onSubmit };
};

export default usePassword;
