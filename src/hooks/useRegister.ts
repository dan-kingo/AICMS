import registerSchema, { registerFormData } from "@/utils/registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useRegister = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const form = useForm<registerFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: registerFormData) => {
    setLoading(true);

    let isComponentMounted = true;

    try {
      const response = await fetch("https://localohst:3000/register");

      const result = await response.json();

      if (isComponentMounted) {
        if (result.success) {
          toast.success("Registerd successfully!", {
            description: `Thanks for registering, ${data.firstName} ${data.lastName}!`,
          });
          navigate("/login");
          form.reset();
        } else {
          toast.error("Something went wrong. Please try again.");
          navigate("/");
        }
      }
    } catch (error) {
      if (isComponentMounted) {
        toast.error("Failed to register.");
        navigate("/");
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

export default useRegister;
