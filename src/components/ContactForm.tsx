import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { toast } from "sonner";
import { contactFormSchema } from "@/utils/contactFormSchema";
import formData from "@/assets/constants/formData";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "1aab92dc-a0b9-4043-a390-b72203d93691");
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("subject", data.subject);

    let isComponentMounted = true; // ✅ Track component state

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (isComponentMounted) {
        if (result.success) {
          toast.success("Form submitted successfully!", {
            description: `Thanks for your message, ${data.fullname}!`,
          });
          form.reset();
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      if (isComponentMounted) {
        toast.error("Failed to send message.");
      }
    } finally {
      if (isComponentMounted) setLoading(false);
    }

    return () => {
      isComponentMounted = false;
    };
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-3/4 space-y-6 "
      >
        {formData.map((formInput, index) => (
          <FormField
            key={index}
            control={form.control}
            name={formInput.name as keyof z.infer<typeof contactFormSchema>}
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
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
