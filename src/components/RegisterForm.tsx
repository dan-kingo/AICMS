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
import registerData from "@/assets/constants/registerData";
import registerSchema from "@/utils/registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof registerSchema>>({
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

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
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

  return (
    <div className="dark:bg-dark p-4 bg-white  w-[350px] md:w-[450px] flex flex-col rounded-lg shadow-lg">
      <h1 className="md:text-xl font-semibold  pb-6 text-lg font-palanquin flex justify-center w-full">
        Create Your Account
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full  space-y-6 "
        >
          {registerData.map((formInput, index) => (
            <FormField
              key={index}
              control={form.control}
              name={formInput.name as keyof z.infer<typeof registerSchema>}
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
          {/* <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full rounded-full">
                      <SelectValue placeholder="Enter your gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <Button
            className="dark:text-white rounded-full w-full"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </Button>
        </form>
      </Form>
      <p className="font-md text-center py-4">
        Already a member?{" "}
        <NavLink to="/login" className="text-primary">
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default RegisterForm;
