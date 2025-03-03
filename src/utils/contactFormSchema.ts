import { z } from "zod";

const contactFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export { contactFormSchema };
