import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import useComplaint from "@/hooks/useComplaint";

export default function ComplaintForm() {
  const [file, setFile] = useState<File | null>(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { description: "" },
  });

  const { submitComplaint } = useComplaint();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const onSubmit = (data: { description: string }) => {
    if (file) {
      const formData = new FormData();
      formData.append("description", data.description); // adjust key based on backend
      formData.append("supportingFile", file);

      // Submit with FormData
      submitComplaint(formData, true);
    } else {
      const jsonData = {
        description: data.description,
      };

      // Submit with JSON
      submitComplaint(jsonData, false);
    }

    reset();
    setFile(null); // reset file input too
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
        <input
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
