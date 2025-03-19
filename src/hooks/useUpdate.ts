import profileUpdateSchema, {
  profileUpdateData,
} from "@/utils/profileUpdateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useUser from "./useUser";
import axios from "axios";

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
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/update-user",
        data,
        { withCredentials: true }
      );

      if (response.data.success) {
        toast.success("Updated successfully!");
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
