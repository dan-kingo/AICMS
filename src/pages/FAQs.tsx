import FAQAccordion from "@/components/FAQAccordion";
import FAQImage from "../assets/images/FAQs-amico.svg";
import SearchInput from "@/components/SearchInput";
import { useState } from "react";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const Help = () => {
  const [searchItem, setSearchItem] = useState("");
  const { t } = useTranslation();
  return (
    <div className="md:mx-20 mx-4 my-12 mt-24">
      <div className="flex  gap-12 pt-6 py-24">
        <div className="w-full  md:pt-12 md:pb-6">
          <h1 className=" font-bold font-palanquin  md:text-6xl text-4xl md:mb-12 mb-8 dark:text-gray-200 text-gray-900">
            {t("Frequenty Asked Questions")}
          </h1>
          <SearchInput
            onSearch={(term) => setSearchItem(term)}
            placeholder="Search questions here..."
          />
          <FAQAccordion searchTerm={searchItem} />
        </div>
        <div className="w-full  hidden md:block ">
          <img
            src={FAQImage}
            alt="FAQ Image"
            className="w-[450px] hidden md:block fixed"
          />
        </div>
      </div>
      <Footer />{" "}
    </div>
  );
};

export default Help;
