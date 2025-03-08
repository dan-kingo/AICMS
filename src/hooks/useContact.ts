import { contactFormData, contactFormSchema } from "@/utils/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const useContact = () => {
  const [isLoading, setLoading] = useState(false);

  const form = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  const onSubmit = async (data: contactFormData) => {
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

  return { isLoading, form, onSubmit };
};

export default useContact;
