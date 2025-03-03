import contactInfo from "@/assets/constants/contact";
import { icons, socialIcons } from "@/assets/constants/icons";
import socialLinks from "@/assets/constants/social";
import { NavLink } from "react-router-dom";

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
        {/* left hand contact section */}
        <div className="flex flex-4/6 p-4 bg-white dark:bg-dark  flex-col space-y-4 rounded-sm shadow-xl w-full">
          <h1 className="md:text-2xl text-xl font-palanquin font-semibold">
            Contact Information
          </h1>
          {/* contact info section */}
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

          {/* social links section  */}

          <h1 className="md:text-2xl text-xl font-palanquin font-semibold">
            Social Links
          </h1>

          <div className="flex space-x-4">
            {socialLinks.map((item, index) => {
              const Icon =
                socialIcons[item.iconName as keyof typeof socialIcons];
              return (
                <NavLink
                  key={index}
                  to={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* right hand contact section  */}
        <div className="flex p-4 bg-white dark:bg-dark h-96 w-full rounded-sm shadow-xl">
          right
        </div>
      </div>
    </div>
  );
};

export default Contact;
