import contactInfo from "@/assets/constants/contact";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const icons = {
  MapPin,
  Phone,
  Mail,
  Clock,
};

const Contact = () => {
  return (
    <div className="md:mx-20 mx-4 my-12">
      {/* <div className="flex items-center flex-col">
        <h1 className="md:text-3xl text-lg font-semibold font-palanquin">
          Contact Us
        </h1>
        <p className="text-gray-600">
          We're here to help! Reach out to us for support, inquiries, or
          feedback.
        </p>
      </div> */}

      <div className="flex gap-8 md:flex-nowrap flex-wrap">
        <div className="flex flex-4/6 p-4 bg-white dark:bg-dark  flex-col space-y-4 rounded-sm shadow-xl w-full">
          <h1 className="md:text-2xl text-xl font-palanquin font-semibold">
            Contact Information
          </h1>
          {contactInfo.map((item, index) => {
            const Icon = icons[item.iconName as keyof typeof icons];
            return (
              <div key={index} className="flex items-center space-x-4">
                <Icon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="md:text-[18px] text-sm text-primary font-semibold font-palanquin">
                    {item.title}
                  </h3>
                  <p className="md:text-[15px] text-[13px] ">
                    {item.description1}
                  </p>
                  <p className="md:text-[15px] text-[13px]">
                    {item.description2}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex p-4 bg-white dark:bg-dark h-96 w-full rounded-sm shadow-xl">
          right
        </div>
      </div>
    </div>
  );
};

export default Contact;
