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
import profileData from "@/assets/constants/profileData";

const EditProfileForm = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "John",
      lastName: "Smith",
      userName: "@johnas",
      email: "johnas23@gmail.com",
      phoneNumber: "0923455676",
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
    <div className="dark:bg-dark p-4 bg-white  w-full  flex flex-col rounded-lg shadow-lg">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full  space-y-6 "
        >
          {profileData.map((formInput, index) => (
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

          <div className="flex justify-center">
            <Button
              className="dark:text-white rounded-full  w-1/2 "
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Now"}
            </Button>
          </div>
        </form>
      </Form>
      <p className="font-md text-center py-4">
        Do you want to change you password?{" "}
        <NavLink to="/dashboard/change-password" className="text-primary">
          Click Here
        </NavLink>
      </p>
    </div>
  );
};

export default EditProfileForm;
