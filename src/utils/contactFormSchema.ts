import { z } from "zod";

const contactFormSchema = z.object({
  fullname: z
    .string({ required_error: "Full Name is required!" })
    .min(5, { message: "Full name must be at least 5 characters long." })
    .max(50, { message: "Full name cannot exceed 50 characters." }),

  email: z
    .string({ required_error: "Email is required!" })
    .email({ message: "Invalid email format. Please enter a valid email." }),

  subject: z
    .string({ required_error: "Subject is required!" })
    .min(5, { message: "Subject must be at least 5 characters long." })
    .max(100, { message: "Subject cannot exceed 100 characters." }),

  message: z
    .string({ required_error: "Message is required!" })
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(500, { message: "Message cannot exceed 500 characters." }),
});

export { contactFormSchema };
