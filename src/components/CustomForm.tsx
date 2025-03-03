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

const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
  toast.success("Form submitted successfully!");
};

const CustomForm = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-3/4 space-y-6"
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
                  <Input placeholder={formInput.placeholder} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="h-40"
                  placeholder="Type your message here..."
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="dark:text-white" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CustomForm;
