import z from "zod";

const complaintFormSchema = z.object({
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long" })
    .max(500, { message: "Description must be no longer than 500 characters" }),
  category: z.string().nonempty({ message: "Category is required" }),
});

export type ComplaintFormType = z.infer<typeof complaintFormSchema>;

export default complaintFormSchema;
