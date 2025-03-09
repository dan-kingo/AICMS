import categories from "@/assets/constants/complaintCategory";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import issueOptions from "@/assets/constants/issueOptions";

export default function useComplaintAI(
  setValue: UseFormSetValue<{
    description: string;
    issues: string[];
    category: string;
  }>
) {
  const [loading, setLoading] = useState(false);

  function analyzeComplaint(_description: string, selectedIssues: string[]) {
    setLoading(true);

    setTimeout(() => {
      // Analyze based on selected issues and map to category
      const categoriesForIssues = selectedIssues
        .map((issue) => issueOptions.find((o) => o.id === issue)?.category)
        .filter(Boolean); // Remove any undefined values

      // If multiple categories are found, pick one or handle it (e.g., prioritize)
      const category =
        categoriesForIssues.length > 0
          ? categories[categoriesForIssues[0] as keyof typeof categories]
          : categories.default; // Use the default category if no issues match

      setValue("category", category);
      setLoading(false);
    }, 2000);
  }

  return { loading, analyzeComplaint };
}
