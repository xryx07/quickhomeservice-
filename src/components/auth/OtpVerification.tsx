
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RefreshCw } from 'lucide-react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState, useEffect } from 'react';

interface OtpVerificationProps {
  phone: string;
  otp: string;
  setOtp: (otp: string) => void;
  sendOtpAgain: () => void;
}

const OtpVerification = ({ phone, otp, setOtp, sendOtpAgain }: OtpVerificationProps) => {
  const [timer, setTimer] = useState<number>(30);
  const [canResend, setCanResend] = useState<boolean>(false);

  // Timer for OTP resend
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  // Handle OTP resend
  const handleResendOtp = () => {
    if (canResend) {
      sendOtpAgain();
      setTimer(30);
      setCanResend(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-muted-foreground">
          We've sent a verification code to {phone}
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="otp">Verification Code</Label>
        <InputOTP
          value={otp}
          onChange={setOtp}
          maxLength={6}
          render={({ slots }) => (
            <div className="flex justify-center gap-2">
              <InputOTPGroup>
                {slots.map((slot, index) => (
                  <InputOTPSlot key={index} {...slot} index={index} />
                ))}
              </InputOTPGroup>
            </div>
          )}
        />
      </div>
      
      <Button 
        type="button" 
        variant="outline" 
        className="w-full flex items-center justify-center gap-2"
        onClick={handleResendOtp}
        disabled={!canResend}
      >
        <RefreshCw size={16} className={canResend ? '' : 'animate-spin'} /> 
        {canResend ? 'Resend Code' : `Resend code in ${timer}s`}
      </Button>
    </div>
  );
};

export default OtpVerification;
