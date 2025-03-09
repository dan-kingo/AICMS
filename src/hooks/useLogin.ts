import loginSchema, { loginFormData } from "@/utils/loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const form = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit = async (_data: loginFormData) => {
    setLoading(true);

    let isComponentMounted = true;

    try {
      const response = await fetch("https://localohst:3000/register");

      const result = await response.json();

      if (isComponentMounted) {
        if (result.success) {
          toast.success("Logged in successfully!");
          navigate("/Dashboard");
          form.reset();
        } else {
          toast.error("Something went wrong. Please try again.");
          navigate("/");
        }
      }
    } catch (error) {
      if (isComponentMounted) {
        toast.error("Failed to login.");
        navigate("/dashboard");
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

export default useLogin;
