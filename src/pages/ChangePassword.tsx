import useChangePasswordForm from "@/assets/constants/changePassword";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import usePassword from "@/hooks/usePassword";
import { changePasswordData } from "@/utils/changePasswordSchema";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const ChangePassword = () => {
  const location = useLocation();
  const isChangePassword = location.pathname === "/dashboard/change-password";
  const { isLoading, form, onSubmit } = usePassword();
  const { t } = useTranslation();
  const changePassword = useChangePasswordForm();
  return (
    <div
      className={`flex  ${
        isChangePassword
          ? " dark:bg-dark rounded-lg shadow-lg mt-6 bg-white  md:ms-12 py-12 h-11/12  items-center justify-center md:w-11/12"
          : "w-full "
      }   px-4  flex-col `}
    >
      {isChangePassword && (
        <h1 className="md:text-2xl font-semibold  pb-6 text-xl font-palanquin flex justify-center w-full">
          {t("Change Password")}
        </h1>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full  space-y-6 "
        >
          {changePassword.map((formInput, index) => (
            <FormField
              key={index}
              control={form.control}
              name={formInput.name as keyof changePasswordData}
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

          <div className=" flex justify-center ">
            <Button
              className={`dark:text-white ${
                isChangePassword ? " rounded-full md:w-1/2 w-full" : "w-full"
              } `}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? t("Changing...") : t("Change Password")}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default ChangePassword;
