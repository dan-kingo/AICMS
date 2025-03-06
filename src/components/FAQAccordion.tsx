import faqs from "@/assets/constants/FAQ";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Button } from "./ui/button";

interface Props {
  searchTerm: string;
}

const FAQAccordion = ({ searchTerm }: Props) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  // Ensure searchTerm is processed correctly
  const lowerCaseSearchTerm = searchTerm?.toLowerCase() || "";

  const filteredFaqs = faqs
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (faq) =>
          faq.title.toLowerCase().includes(lowerCaseSearchTerm) ||
          faq.content.toLowerCase().includes(lowerCaseSearchTerm)
      ),
    }))
    .filter((section) => section.items.length > 0);

  const visibleFaqs = showMore
    ? filteredFaqs
    : filteredFaqs.filter((faq) => faq.category === "General Questions");

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {visibleFaqs.length > 0 ? (
        visibleFaqs.map((section, sectionIndex) => (
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
        ))
      ) : (
        <p className="text-gray-500 text-center mt-4">
          No matching FAQs found.
        </p>
      )}

      {/* Show More / Show Less Buttons */}
      {!showMore &&
        filteredFaqs.some((faq) => faq.category !== "General Questions") && (
          <div className="text-center mt-4">
            <Button onClick={() => setShowMore(true)}>Show More FAQs</Button>
          </div>
        )}

      {showMore && filteredFaqs.length > 1 && (
        <div className="text-center mt-4">
          <Button onClick={() => setShowMore(false)}>Show Less</Button>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;
