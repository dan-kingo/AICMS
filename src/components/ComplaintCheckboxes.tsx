import { Controller } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import issueOptions from "@/assets/constants/issueOptions";

type Props = {
  control: any;
  setValue: any;
  analyzeComplaint: (description: string, selectedIssues: string[]) => void;
  watch: any;
};

const ComplaintCheckboxes = ({
  control,
  setValue,
  analyzeComplaint,
  watch,
}: Props) => {
  return (
    <div>
      <Label>Select Relevant Issues</Label>
      <div className="flex flex-wrap gap-6 mt-4">
        {issueOptions.map((issue) => (
          <Controller
            key={issue.id}
            name="issues"
            control={control}
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  className="dark:text-white dark:border-gray-500 border-gray-700"
                  id={issue.id}
                  checked={field.value.includes(issue.id)}
                  onCheckedChange={(checked) => {
                    const newIssues = checked
                      ? [...field.value, issue.id]
                      : field.value.filter((i: string) => i !== issue.id);
                    setValue("issues", newIssues);
                    analyzeComplaint(watch("description"), newIssues);
                  }}
                />
                <Label htmlFor={issue.id}>{issue.label}</Label>
              </div>
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ComplaintCheckboxes;
