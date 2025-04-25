import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactFormData } from "@/utils/contactFormSchema";
import { Textarea } from "./ui/textarea";
import useContact from "@/hooks/useContact";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useContactForm from "@/assets/constants/formData";
import { Loader2Icon } from "lucide-react";

const ContactForm = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { form, isLoading, onSubmit } = useContact();

  const formData = useContactForm();
  let isContactPath = location.pathname === "/contact-us";
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={` space-y-6 ${isContactPath ? "w-full md:w-3/4" : "w-full"}`}
      >
        {formData.map((formInput, index) => (
          <FormField
            key={index}
            control={form.control}
            name={formInput.name as keyof contactFormData}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formInput.label}</FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-[13px] md:placeholder:text-[14px]"
                    placeholder={formInput.placeholder}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="h-40 resize-none placeholder:text-[13px] md:placeholder:text-[14px]"
                  placeholder="Type your message here..."
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="dark:text-white" type="submit" disabled={isLoading}>
          {isLoading ? <Loader2Icon className="animate-spin" /> : t("Submit")}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
