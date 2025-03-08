import faqs from "@/assets/constants/FAQ";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";

interface Props {
  searchTerm: string;
}

const FAQAccordion = ({ searchTerm }: Props) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const location = useLocation();
  const isFAQPath = location.pathname === "/faqs";

  // Ensure searchTerm is processed correctly, trimming whitespace and making lowercase
  const lowerCaseSearchTerm = searchTerm?.trim().toLowerCase() || "";

  //  Search in ALL FAQs regardless of showMore state
  const allFilteredFaqs = faqs
    .map((section) => ({
      ...section,
      items: section.items.filter((faq) =>
        [faq.title, faq.content]
          .map((text) => text.toLowerCase().replace(/&/g, "and")) // Normalize '&' to 'and'
          .some((text) =>
            text.includes(lowerCaseSearchTerm.replace(/&/g, "and"))
          )
      ),
    }))
    .filter((section) => section.items.length > 0);

  // 🔹 If there's a search term, we should display all matching FAQs
  const visibleFaqs = lowerCaseSearchTerm
    ? allFilteredFaqs
    : showMore
    ? allFilteredFaqs
    : allFilteredFaqs.filter((faq) => faq.category === "General Questions");

  return (
    <div
      className={`  ${isFAQPath ? " w-full max-w-2xl mx-auto p-4" : "w-full"}`}
    >
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

      {/* Show More / Show Less Buttons (Only when not searching) */}
      {!lowerCaseSearchTerm &&
        !showMore &&
        allFilteredFaqs.some((faq) => faq.category !== "General Questions") && (
          <div className="text-center mt-4">
            <Button
              variant={isFAQPath ? "default" : "link"}
              className={`dark:text-white `}
              onClick={() => setShowMore(true)}
            >
              Show More FAQs
            </Button>
          </div>
        )}

      {!lowerCaseSearchTerm && showMore && allFilteredFaqs.length > 1 && (
        <div className="text-center mt-4">
          <Button
            variant={isFAQPath ? "default" : "link"}
            className="dark:text-white"
            onClick={() => setShowMore(false)}
          >
            Show Less
          </Button>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;
