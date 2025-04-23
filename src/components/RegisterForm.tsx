import { NavLink } from "react-router-dom";

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
import registerSchema, { registerFormData } from "@/utils/registerFormSchema";
import useRegister from "@/hooks/useRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import useRegisterForm from "@/assets/constants/registerData";

const RegisterForm = () => {
  const registerData = useRegisterForm();
  const { isLoading, registerUser } = useRegister();

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
  const { t } = useTranslation();
  return (
    <div className="dark:bg-dark p-4 bg-white  w-[340px] md:w-[450px] flex flex-col rounded-lg shadow-lg">
      <h1 className="md:text-xl font-semibold  pb-6 text-lg font-palanquin flex justify-center w-full">
        {t("Create Your Account")}
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => registerUser(data, form.reset))}
          className="w-full  space-y-6 "
        >
          {registerData.map((formInput, index) => (
            <FormField
              key={index}
              control={form.control}
              name={formInput.name as keyof registerFormData}
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
            {isLoading ? t("Registering...") : t("Register")}
          </Button>
        </form>
      </Form>
      <p className="font-md text-center py-4">
        {t("Already a member")}?{" "}
        <NavLink to="/login" className="text-primary">
          {t("Login")}
        </NavLink>
      </p>
    </div>
  );
};

export default RegisterForm;
