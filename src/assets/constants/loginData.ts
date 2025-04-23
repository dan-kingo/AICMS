import { useTranslation } from "react-i18next";

const useLoginForm = () => {
  const { t } = useTranslation();

  const loginData = [
    {
      name: "userName",
      label: t("Username"),
      placeholder: t("Enter your username"),
      type: "text",
    },
    {
      name: "password",
      label: t("Password"),
      placeholder: t("Enter your password"),
      type: "password",
    },
  ];

  return loginData;
};

export default useLoginForm;
