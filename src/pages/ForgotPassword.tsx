import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import useForgotPassword from "@/hooks/useForgotPassword";
import { Card, CardHeader } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
  const { t } = useTranslation();
  const { requestPasswordReset, isLoading } = useForgotPassword();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      toast.error(t("Please enter your email"));
      return;
    }

    requestPasswordReset(email);
  };

  return (
    <div className="md:mx-20 mx-4 my-12 mt-24 flex items-center justify-center flex-col gap-18">
      <Card className="bg-white dark:bg-dark p-8 w-80">
        <CardHeader className="text-center font-semibold">
          {t("Forgot Password")}
        </CardHeader>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="text-center text-lg"
        />
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
          className="dark:text-white"
        >
          {isLoading ? t("Sending...") : t("Send Reset Link")}
        </Button>
      </Card>
    </div>
  );
};

export default ForgotPassword;
