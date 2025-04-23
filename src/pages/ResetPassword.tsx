import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader } from "@/components/ui/card";
import useResetPassword from "@/hooks/useResetPassword";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  const {
    resetPassword,
    newPassword,
    confirmPassword,
    setConfirmPassword,
    setNewPassword,
    isLoading,
  } = useResetPassword();

  const { t } = useTranslation();
  return (
    <div className="md:mx-20 mx-4 my-12 mt-24 flex items-center justify-center flex-col gap-18">
      <Card className="bg-white dark:bg-dark p-8">
        <CardHeader className="text-lg font-semibold text-center">
          {t("Reset Your Password")}
        </CardHeader>
        <Input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter New Password"
          className="text-center text-lg"
        />
        <Input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm New Password"
          className="text-center text-lg"
        />
        <Button
          className="dark:text-white"
          onClick={resetPassword}
          disabled={isLoading}
        >
          {isLoading ? t("Resetting...") : t("Reset Password")}
        </Button>
      </Card>
    </div>
  );
};

export default ResetPassword;
