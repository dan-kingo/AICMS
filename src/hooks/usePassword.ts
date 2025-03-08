import changePasswordSchema, {
  changePasswordData,
} from "@/utils/changePasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const usePassword = () => {
  const [isLoading, setLoading] = useState(false);
  const form = useForm<changePasswordData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "Dani@1123",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (_data: changePasswordData) => {
    setLoading(true);

    let isComponentMounted = true;

    try {
      const response = await fetch("https://localohst:3000/register");

      const result = await response.json();

      if (isComponentMounted) {
        if (result.success) {
          toast.success("Update successfully!");
          form.reset();
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      if (isComponentMounted) {
        toast.error("Failed to update.");
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
