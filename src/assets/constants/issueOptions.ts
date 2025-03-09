export const issueOptions = [
  { id: "power_outage", label: "Power Outage", category: "power" },
  { id: "meter_fault", label: "Meter Fault", category: "power" },
  { id: "power_line_fault", label: "Power Line Fault", category: "power" },

  {
    id: "customer_info_change",
    label: "Customer Info Change",
    category: "customer",
  },

  {
    id: "new_meter_wanting",
    label: "New Meter Wanting",
    category: "eeuService",
  },
  { id: "more_energy", label: "More Energy", category: "eeuService" },

  {
    id: "improper_hospitality",
    label: "Improper Hospitality",
    category: "employee",
  },
  {
    id: "misbehaved_employee",
    label: "Misbehaved Employee",
    category: "employee",
  },
  { id: "corruption", label: "Corruption", category: "employee" },

  { id: "new_meter", label: "New Meter", category: "meter" },

  { id: "card_not_working", label: "Card Not Working", category: "prepaid" },
  {
    id: "prepaid_meter_fault",
    label: "Prepaid Meter Fault",
    category: "prepaid",
  },

  { id: "incorrect_bill", label: "Incorrect Bill", category: "billing" },
] as const;

export type Issue = (typeof issueOptions)[number];
export default issueOptions;
