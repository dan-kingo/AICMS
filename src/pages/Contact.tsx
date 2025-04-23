import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import SocialLink from "@/components/SocialLink";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="md:mx-20 mx-4 my-12 mt-24">
      <div className="flex gap-8 md:flex-nowrap flex-wrap">
        {/* left hand contact section */}
        <div className="flex flex-4/6 p-4 bg-white dark:bg-dark  flex-col space-y-4 rounded-sm shadow-xl w-full md:h-[816px] h-[792px]">
          <h1 className="md:text-2xl text-xl font-palanquin font-semibold">
            {t("Contact Information")}
          </h1>
          <ContactInfo />

          <h1 className="md:text-2xl text-xl font-palanquin font-semibold">
            {t("Social Links")}
          </h1>

          <SocialLink />
        </div>

        {/* right hand contact section  */}
        <div className="flex flex-col p-4 bg-white dark:bg-dark  w-full rounded-sm shadow-xl">
          <p className="md:text-2xl text-xl font-palanquin font-semibold mb-6">
            {t("Fill out the form")}
          </p>
          <ContactForm />
          <Map />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
