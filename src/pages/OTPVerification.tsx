import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useRegister from "@/hooks/useRegister";
import { useState } from "react";
import { toast } from "sonner";

const OTPVerification = () => {
  // Separate loading states for verifying and resending OTP
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const { verifyOTP, resendOTP } = useRegister();
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    setIsVerifying(true);
    verifyOTP(otp).finally(() => setIsVerifying(false));
  };

  const handleResend = () => {
    setIsResending(true);
    resendOTP().finally(() => setIsResending(false));
  };

  return (
    <div className="md:mx-20 mx-4 my-12 mt-24 flex items-center justify-center flex-col gap-18">
      <Card className="bg-white dark:bg-dark p-8">
        <CardHeader className="text-lg font-semibold text-center">
          Enter OTP
        </CardHeader>
        <Input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          maxLength={6}
          className="text-center text-lg"
        />
        <Button
          className="dark:text-white"
          onClick={handleVerify}
          disabled={isVerifying}
        >
          {isVerifying ? "Verifying..." : "Verify OTP"}
        </Button>
        <Button onClick={handleResend} variant="ghost" disabled={isResending}>
          {isResending ? "Resending..." : "Resend OTP"}
        </Button>
      </Card>
    </div>
  );
};

export default OTPVerification;
