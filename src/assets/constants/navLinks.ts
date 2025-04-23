import { useTranslation } from "react-i18next";

const useNavLinks = () => {
  const { t } = useTranslation();

  const navLinks = [
    { label: t("About"), href: "/about" },
    { label: t("FAQs"), href: "/faqs" },
    { label: t("Contact Us"), href: "/contact-us" },
  ];

  return navLinks;
};

export default useNavLinks;
