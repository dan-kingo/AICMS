import { useForm, Controller } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import complaintFormSchema, {
  ComplaintFormType,
} from "@/utils/complaintValidation";

export default function ComplaintForm() {
  const [file, setFile] = useState<File | null>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ComplaintFormType>({
    resolver: zodResolver(complaintFormSchema),
    defaultValues: { description: "" },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const onSubmit = (data: ComplaintFormType) => {
    console.log("Submitted Complaint:", data);
    toast.success("Complaint Submitted Successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Complaint Description */}
      <div>
        <Label htmlFor="description">Complaint Description</Label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Textarea
              className="mt-4 resize-none h-32"
              {...field}
              id="description"
              placeholder="Describe your complaint..."
            />
          )}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>

      {/* Supporting File (Optional) */}
      <div>
        <Label htmlFor="file-upload" className="block mb-4 font-medium">
          Upload Supporting File (Optional)
        </Label>
        <Input
          id="file-upload"
          type="file"
          accept="image/*, .pdf, .docx"
          className="mt-2 w-full p-3 border border-gray-300 rounded-md cursor-pointer"
          onChange={handleFileChange}
        />
        {file && (
          <div className="mt-2 text-sm text-gray-500">
            Selected file: {file.name}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full mt-6 flex justify-center items-center dark:text-white cursor-pointer"
      >
        Submit Complaint
      </Button>
    </form>
  );
}
