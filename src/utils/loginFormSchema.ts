import { z } from "zod";

const loginSchema = z.object({
  userName: z
    .string({ required_error: "User Name is required." })
    .min(5, { message: "Username must be at least 5 characters long." }),
  password: z
    .string({ required_error: "Password is required." })
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/\d/, { message: "Password must contain at least one digit." })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character.",
    }),
});

export type loginFormData = z.infer<typeof loginSchema>;
export default loginSchema;
