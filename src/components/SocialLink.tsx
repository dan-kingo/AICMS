import { socialIcons } from "@/assets/constants/icons";
import socialLinks from "@/assets/constants/social";
import { NavLink } from "react-router-dom";

const SocialLink = () => {
  return (
    <div className="flex flex-col space-y-4 pb-4">
      {socialLinks.map((item, index) => {
        const Icon = socialIcons[item.iconName as keyof typeof socialIcons];
        return (
          <NavLink
            key={index}
            to={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex space-x-4 items-center hover:text-primary hover:delay-100"
          >
            <Icon className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition w-10 h-10 text-primary" />
            <div className="space-y-1">
              <h1>{item.title}</h1>
              <p className="hidden md:block text-sm text-secondary">
                {item.url}
              </p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SocialLink;
