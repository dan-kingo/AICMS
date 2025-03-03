import ContactInfo from "@/components/ContactInfo";
import CustomForm from "@/components/CustomForm";
import Map from "@/components/Map";
import SocialLink from "@/components/SocialLink";

const Contact = () => {
  return (
    <div className="md:mx-20 mx-4 my-12">
      <div className="flex gap-8 md:flex-nowrap flex-wrap">
        {/* left hand contact section */}
        <div className="flex flex-4/6 p-4 bg-white dark:bg-dark  flex-col space-y-4 rounded-sm shadow-xl w-full ">
          <h1 className="md:text-2xl text-xl font-palanquin font-semibold">
            Contact Information
          </h1>
          <ContactInfo />

          <h1 className="md:text-2xl text-xl font-palanquin font-semibold">
            Social Links
          </h1>

          <SocialLink />
        </div>

        {/* right hand contact section  */}
        <div className="flex flex-col p-4 bg-white dark:bg-dark  w-full rounded-sm shadow-xl">
          <h1 className="md:text-2xl text-xl font-palanquin font-semibold mb-6">
            Fill out the form
          </h1>
          <CustomForm />
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
