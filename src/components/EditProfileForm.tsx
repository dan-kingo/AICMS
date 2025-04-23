import { NavLink, useLocation } from "react-router-dom";

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
import { profileUpdateData } from "@/utils/profileUpdateSchema";

import useUpdate from "@/hooks/useUpdate";
import { useTranslation } from "react-i18next";
import useProfileForm from "@/assets/constants/profileData";

const EditProfileForm = () => {
  const location = useLocation();
  const isUserPath = location.pathname === "/dashboard";
  const { form, isLoading, onSubmit } = useUpdate();
  const { t } = useTranslation();
  const profileData = useProfileForm();
  return (
    <div
      className={`${
        isUserPath ? "dark:bg-dark bg-white  w-full rounded-lg shadow-lg" : ""
      } p-4   flex flex-col `}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full  space-y-6 "
        >
          {profileData.map((formInput, index) => (
            <FormField
              key={index}
              control={form.control}
              name={formInput.name as keyof profileUpdateData}
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
              className={`dark:text-white ${
                isUserPath ? " rounded-full md:w-1/2 w-full" : "w-full"
              } `}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? t("Saving...") : t("Save Now")}
            </Button>
          </div>
        </form>
      </Form>
      {isUserPath && (
        <p className="font-md text-center py-4">
          {t("Do you want to change you password")}?{" "}
          <NavLink to="/dashboard/change-password" className="text-primary">
            {t("Click Here")}
          </NavLink>
        </p>
      )}
    </div>
  );
};

export default EditProfileForm;
