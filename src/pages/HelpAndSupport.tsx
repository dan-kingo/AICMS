import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";
import { useTranslation } from "react-i18next";

const HelpAndSupport = () => {
  const { t } = useTranslation();
  return (
    <div className=" lg:mx-auto lg:p-6 md:w-[96%]">
      <h1 className="text-2xl font-semibold mb-6">{t("Help & Support")}</h1>

      {/* Frequently Asked Questions */}
      <Card className="mb-6 dark:bg-dark ">
        <CardHeader>
          <CardTitle>{t("Frequently Asked Questions")}</CardTitle>
        </CardHeader>
        <CardContent>
          <FAQAccordion searchTerm="" />
        </CardContent>
      </Card>

      {/* Contact Us */}

      <Card className="mb-6 dark:bg-dark">
        <CardHeader>
          <CardTitle>{t("Contact Support")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpAndSupport;
