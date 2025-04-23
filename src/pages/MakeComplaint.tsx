import ComplaintForm from "@/components/ComplaintForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function MakeComplaint() {
  const { t } = useTranslation();
  return (
    <Card className="lg:mx-auto lg:p-6 lg:my-4 dark:bg-dark md:w-11/12 w-full bg-white">
      <CardHeader>
        <CardTitle>{t("Make a Complaint")}</CardTitle>
      </CardHeader>
      <CardContent>
        <ComplaintForm />
      </CardContent>
    </Card>
  );
}
