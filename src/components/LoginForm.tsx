import { z } from "zod";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

import { Button } from "./ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useState } from "react";
import loginSchema from "@/utils/loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import loginData from "@/assets/constants/loginData";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmit = async (_data: z.infer<typeof loginSchema>) => {
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
        navigate("/");
      }
    } finally {
      if (isComponentMounted) setLoading(false);
    }

    return () => {
      isComponentMounted = false;
    };
  };

  return (
    <div className="dark:bg-dark p-4 bg-white  md:w-96 w-80 flex flex-col rounded-lg shadow-lg">
      <h1 className="md:text-xl font-semibold  pb-6 text-lg font-palanquin flex justify-center w-full">
        Wellcome Back
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full  space-y-6 "
        >
          {loginData.map((formInput, index) => (
            <FormField
              key={index}
              control={form.control}
              name={formInput.name as keyof z.infer<typeof loginSchema>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{formInput.label}</FormLabel>
                  <FormControl>
                    <Input
                      type={formInput.type}
                      className="placeholder:text-[13px] md:placeholder:text-[14px] rounded-full"
                      placeholder={formInput.placeholder}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            className="dark:text-white rounded-full w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging..." : "Login"}
          </Button>
        </form>
      </Form>
      <p className="font-md text-center py-4">
        Don't have an account?{" "}
        <NavLink to="/register" className="text-primary">
          Register
        </NavLink>
      </p>
    </div>
  );
};

export default LoginForm;
