import { useForm, Controller } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import ComplaintCategorySelect from "./ComplaintCategorySelect";
import ComplaintCheckboxes from "./ComplaintCheckboxes";
import useComplaintAI from "@/hooks/useComplaintAI";
import { toast } from "sonner";

type ComplaintForm = {
  description: string;
  issues: string[];
  category: string;
};

export default function ComplaintForm() {
  const { control, handleSubmit, setValue, watch } = useForm<ComplaintForm>({
    defaultValues: { description: "", issues: [], category: "" },
  });

  const { loading, analyzeComplaint } = useComplaintAI(setValue);

  const onSubmit = (data: ComplaintForm) => {
    console.log("Submitted Complaint:", data);
    toast("Complaint Submitted Successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Complaint Description */}
      <div>
        <Label htmlFor="description">Complaint Description</Label>
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Textarea
              className="mt-4 resize-none h-32"
              {...field}
              id="description"
              placeholder="Describe your complaint..."
              onBlur={() => analyzeComplaint(field.value, watch("issues"))}
            />
          )}
        />
      </div>

      {/* Checkboxes for issues */}
      <ComplaintCheckboxes
        control={control}
        setValue={setValue}
        analyzeComplaint={analyzeComplaint}
        watch={watch}
      />

      {/* AI Suggested Category */}
      <ComplaintCategorySelect control={control} loading={loading} />

      {/* Submit Button */}
      <Button type="submit" className="w-full dark:text-white">
        {loading ? <Loader2 className="animate-spin" /> : "Submit Complaint"}
      </Button>
    </form>
  );
}
