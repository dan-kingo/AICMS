import { Hourglass, Loader, CheckCircle } from "lucide-react";

const statusData = [
  {
    title: "Pending",
    number: 10,
    icon: Hourglass,
  },
  {
    title: "In Progress",
    number: 5,
    icon: Loader,
  },
  {
    title: "Completed",
    number: 20,
    icon: CheckCircle,
  },
];

export default statusData;
