import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="min-h-custom flex flex-col mt-[68px]">
      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center text-center md:px-6 px-1">
        <h1 className="font-palanquin text-[26px] md:text-5xl font-semibold">
          {t("Welcome to EEU Complaint System")}
        </h1>
        <p className="mt-4 text-sm md:text-lg dark:text-gray-400 text-gray-600">
          {t("Submit, track, and resolve complaints right now")}!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <Button
            onClick={() => navigate("/login")}
            className="dark:text-white"
          >
            {t("Submit a Complaint")}
          </Button>
          <Button
            onClick={() => navigate("/faqs")}
            variant="outline"
            className="dark:text-white"
          >
            {t("Learn More")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
