import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

const HelpAndSupport = () => {
  return (
    <div className=" lg:mx-auto lg:p-6">
      <h1 className="text-2xl font-semibold mb-6">Help & Support</h1>

      {/* Frequently Asked Questions */}
      <Card className="mb-6 dark:bg-dark">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <FAQAccordion searchTerm="" />
        </CardContent>
      </Card>

      {/* Contact Us */}

      <Card className="mb-6 dark:bg-dark">
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpAndSupport;
