import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryOptions } from "@/assets/constants/complaintCategory";

type Props = {
  control: any;
  loading: boolean;
};

export default function ComplaintCategorySelect({ control, loading }: Props) {
  return (
    <div>
      <label className="mb-4">Suggested Category</label>
      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger>
              <SelectValue
                placeholder={
                  loading ? "Analyzing..." : field.value || "Select a category"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {categoryOptions.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
}
