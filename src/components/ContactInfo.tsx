import contactInfo from "@/assets/constants/contact";
import { icons } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col space-y-4 pb-8">
      {contactInfo.map((item, index) => {
        const Icon = icons[item.iconName as keyof typeof icons];
        return (
          <div key={index} className="flex items-center space-x-4">
            <Icon className="w-6 h-6 text-primary" />
            <div className="space-y-1">
              <h3 className="md:text-[18px] text-sm text-primary font-semibold font-palanquin">
                {item.title}
              </h3>
              <p className="md:text-[14px] text-[13px] ">{item.description1}</p>
              <p className="md:text-[14px] text-[13px]">{item.description2}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
