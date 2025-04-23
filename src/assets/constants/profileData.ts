import { useTranslation } from "react-i18next";

const useProfileForm = () => {
  const { t } = useTranslation();

  const profileData = [
    {
      name: "firstName",
      label: t("First Name"),
      placeholder: t("Enter your first name"),
      type: "text",
    },
    {
      name: "lastName",
      label: t("Last Name"),
      placeholder: t("Enter your last name"),
      type: "text",
    },
    {
      name: "userName",
      label: t("Username"),
      placeholder: t("Enter your username"),
      type: "text",
    },
    {
      name: "email",
      label: t("Email"),
      placeholder: t("Enter your email address"),
      type: "email",
    },
    {
      name: "phoneNumber",
      label: t("Phone Number"),
      placeholder: t("Enter your phone number"),
      type: "number",
    },
  ];

  return profileData;
};

export default useProfileForm;
