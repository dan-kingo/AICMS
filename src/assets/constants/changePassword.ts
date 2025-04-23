import { useTranslation } from "react-i18next";

const useChangePasswordForm = () => {
  const { t } = useTranslation();

  const changePassword = [
    {
      name: "currentPassword",
      label: t("Current Password"),
      placeholder: t("Enter your current password"),
      type: "password",
    },
    {
      name: "newPassword",
      label: t("New Password"),
      placeholder: t("Enter your new password"),
      type: "password",
    },
    {
      name: "confirmPassword",
      label: t("Confirm Password"),
      placeholder: t("Confirm the new password"),
      type: "password",
    },
  ];

  return changePassword;
};

export default useChangePasswordForm;
