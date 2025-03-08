import profileUpdateSchema, {
  profileUpdateData,
} from "@/utils/profileUpdateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const useUpdate = () => {
  const [isLoading, setLoading] = useState(false);
  const form = useForm<profileUpdateData>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      firstName: "Johnas",
      lastName: "Smith",
      userName: "@johnas",
      email: "johnas23@gmail.com",
      phoneNumber: "0923455676",
    },
  });

  const onSubmit = async (_data: profileUpdateData) => {
    setLoading(true);

    let isComponentMounted = true;

    try {
      const response = await fetch(
        "https://localohst:3000/dashboard/update-profile"
      );

      const result = await response.json();

      if (isComponentMounted) {
        if (result.success) {
          toast.success("Updated successfully!");
          form.reset();
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      if (isComponentMounted) {
        toast.error("Failed to update!.");
      }
    } finally {
      if (isComponentMounted) setLoading(false);
    }

    return () => {
      isComponentMounted = false;
    };
  };
  return { isLoading, onSubmit, form };
};

export default useUpdate;
