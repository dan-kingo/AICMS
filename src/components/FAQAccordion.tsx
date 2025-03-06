import faqs from "@/assets/constants/FAQ";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Button } from "./ui/button";

const FAQAccordion = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleFaqs = showMore
    ? faqs
    : faqs.filter((faq) => faq.category === "General Questions");

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {visibleFaqs.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h3 className="text-lg font-bold mb-2">{section.category}</h3>
          <Accordion type="single" collapsible>
            {section.items.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${sectionIndex}-${index}`}
              >
                <AccordionTrigger>{faq.title}</AccordionTrigger>
                <AccordionContent>{faq.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}

      {!showMore && (
        <div className="text-center mt-4">
          <Button onClick={() => setShowMore(true)}>Show More FAQs</Button>
        </div>
      )}
    </div>
  );
};
export default FAQAccordion;
