import ComplaintForm from "@/components/ComplaintForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MakeComplaint() {
  return (
    <Card className="lg:mx-auto lg:p-6 lg:my-4 dark:bg-dark md:w-11/12 w-full bg-white">
      <CardHeader>
        <CardTitle>Make a Complaint</CardTitle>
      </CardHeader>
      <CardContent>
        <ComplaintForm />
      </CardContent>
    </Card>
  );
}
