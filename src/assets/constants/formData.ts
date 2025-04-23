import { useTranslation } from "react-i18next";

const useContactForm = () => {
  const { t } = useTranslation();

  const formData = [
    {
      name: "fullname",
      label: t("Full Name"),
      placeholder: t("Enter your full name"),
    },
    {
      name: "email",
      label: t("Email"),
      placeholder: t("Enter your email"),
    },
    {
      name: "subject",
      label: t("Subject"),
      placeholder: t("Enter your subject"),
    },
  ];

  return formData;
};

export default useContactForm;
