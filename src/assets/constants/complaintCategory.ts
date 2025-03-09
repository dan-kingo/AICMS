const categories = {
  supply: "Supply",
  customer: "Customer",
  eeuService: "EEU Service",
  employee: "Employee",
  meter: "Meter",
  prepaid: "Pre-Paid",
  billing: "Billing",
  default: "Uncategorized",
} as const;

export const categoryOptions = [
  "Supply",
  "Customer",
  "EEU Service",
  "Employee",
  "Meter",
  "Pre-Paid",
  "Billing",
];

export type CategoryKey = keyof typeof categories;
export default categories;
