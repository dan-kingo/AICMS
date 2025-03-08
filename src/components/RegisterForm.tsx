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
import registerData from "@/assets/constants/registerData";
import { registerFormData } from "@/utils/registerFormSchema";
import useRegister from "@/hooks/useRegister";

const RegisterForm = () => {
  const { isLoading, form, onSubmit } = useRegister();

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
