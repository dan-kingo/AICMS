const categories = {
  power: "Supply",
  customer: "Customer",
  eeuService: "EEU Service",
  employee: "Employee",
  meter: "Meter",
  prepaid: "Pre-Paid",
  billing: "Billing",
} as const;

export type CategoryKey = keyof typeof categories;
export default categories;
