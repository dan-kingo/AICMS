import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import useComplaint from "@/hooks/useComplaint";
import { useTranslation } from "react-i18next";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

export default function ComplaintForm() {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);

  const { control, handleSubmit } = useForm({
    defaultValues: { description: "" },
  });

  const { submitComplaint, isLoading } = useComplaint();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;

    if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5MB.");
      setFile(null);
    } else {
      setFile(selectedFile);
    }
  };

  const onSubmit = (data: { description: string }) => {
    if (!data.description.trim()) {
      toast.error("Complaint description is required.");
      return;
    }

    if (file) {
      const formData = new FormData();
      formData.append("description", data.description.trim());
      formData.append("supportingFile", file);

      submitComplaint(formData, true);
    } else {
      const jsonData = {
        description: data.description.trim(),
      };

      submitComplaint(jsonData, false);
    }

    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="description">{t("Complaint Description")}</Label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Textarea
              className="mt-4 resize-none h-32"
              {...field}
              id="description"
              placeholder={t("Describe your complaint...")}
            />
          )}
        />
      </div>

      {/* Supporting File (Optional) */}
      <div>
        <Label htmlFor="file-upload" className="block mb-4 font-medium">
          {t("Upload Supporting File (Optional)")}
        </Label>
        <input
          id="file-upload"
          type="file"
          accept="image/*, .pdf, .docx, .mp3, .wav"
          className="mt-2 w-full p-3 border border-gray-300 rounded-md cursor-pointer"
          onChange={handleFileChange}
        />

        {file && (
          <div className="mt-2 text-sm text-gray-500">
            Selected file: {file.name}
          </div>
        )}
      </div>

      <Button
        disabled={isLoading}
        type="submit"
        className="w-full mt-6 flex justify-center items-center dark:text-white cursor-pointer"
      >
        {isLoading ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          t("Submit Complaint")
        )}
      </Button>
    </form>
  );
}
