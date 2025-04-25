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
import loginSchema, { loginFormData } from "@/utils/loginFormSchema";
import useLogin from "@/hooks/useLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useLoginForm from "@/assets/constants/loginData";
import { useTranslation } from "react-i18next";
import { Loader2Icon } from "lucide-react";

const LoginForm = () => {
  const { isLoading, loginUser } = useLogin();

  const form = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  const { t } = useTranslation();
  const loginData = useLoginForm();
  return (
    <div className="dark:bg-dark p-4 bg-white md:w-96 w-80 flex flex-col rounded-lg shadow-lg">
      <h1 className="md:text-xl font-semibold pb-6 text-lg font-palanquin flex justify-center w-full">
        {t("Welcome Back")}
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(loginUser)}
          className="w-full space-y-6"
        >
          {loginData.map((formInput, index) => (
            <FormField
              key={index}
              control={form.control}
              name={formInput.name as keyof loginFormData}
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
            {isLoading ? <Loader2Icon className="animate-spin" /> : t("Login")}
          </Button>
        </form>

        <NavLink
          to="/forgot-password"
          className="text-primary pt-4 tex-md text-center"
        >
          {t("Forgot Password")}
        </NavLink>
      </Form>
      <p className="font-md text-center py-4">
        {t("Don't have an account")}?{" "}
        <NavLink to="/register" className="text-primary">
          {t("Register")}
        </NavLink>
      </p>
    </div>
  );
};

export default LoginForm;
