import { useTranslation } from "react-i18next";

const useContactInfo = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      iconName: "MapPin",
      title: t("Office Address"),
      description1: t("Ethiopian Electric Utility Bahir Dar District."),
      description2: t("Bahir Dar, Amhara, Ethiopia."),
    },
    {
      iconName: "Phone",
      title: t("Phone Numbers"),
      description1: t("Customer Support: +251 999-888-777"),
      description2: t("Technical Support: +251 955-444-333"),
    },
    {
      iconName: "Mail",
      title: t("Email Contacts"),
      description1: t("General: eeusupport@gmail.com"),
      description2: t("Technical: techsupporteeu@gmail.com"),
    },
    {
      iconName: "Clock",
      title: t("Working Hours"),
      description1: t("Monday – Friday: 2:30 – 11:30 AM (LT)."),
      description2: t("Saturday – Sunday: Emergency supports."),
    },
  ];

  return contactInfo;
};

export default useContactInfo;
