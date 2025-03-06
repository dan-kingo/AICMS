import FAQImage from "../assets/FAQs-amico.svg";
import SearchInput from "@/components/SearchInput";

const Help = () => {
  return (
    <div className="md:mx-20 mx-4 my-12 mt-24">
      <div className="flex  gap-12 pt-6 py-24">
        <div className="w-full md:mx-6 md:pt-12 md:pb-6">
          <h1 className=" font-bold font-palanquin  md:text-6xl text-4xl md:mb-12 mb-8 dark:text-gray-200 text-gray-900">
            Frequenty Asked Questions
          </h1>
          <SearchInput />
        </div>
        <div className="w-full items-center  justify-center hidden md:flex ">
          <img
            src={FAQImage}
            alt="FAQ Image"
            className="w-[450px] hidden md:block dark:opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Help;
