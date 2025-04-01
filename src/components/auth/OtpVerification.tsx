
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RefreshCw } from 'lucide-react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { authApi } from '@/api';

interface OtpVerificationProps {
  phone: string;
  otp: string;
  setOtp: (otp: string) => void;
  sendOtpAgain: () => void;
}

const OtpVerification = ({ phone, otp, setOtp, sendOtpAgain }: OtpVerificationProps) => {
  const [timer, setTimer] = useState<number>(30);
  const [canResend, setCanResend] = useState<boolean>(false);
  const [isResending, setIsResending] = useState<boolean>(false);
  const { toast } = useToast();

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

  // Handle OTP resend using API
  const handleResendOtp = async () => {
    if (canResend && !isResending) {
      setIsResending(true);
      try {
        const result = await authApi.resendOtp(phone);
        if (result.success) {
          toast({
            title: "Verification code sent",
            description: `A new code has been sent to ${phone}`,
          });
          sendOtpAgain(); // Call the original function for any local state updates
          setTimer(30);
          setCanResend(false);
        } else {
          toast({
            title: "Failed to send code",
            description: result.message || "Please try again later",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Failed to send code",
          description: "Could not send a new verification code. Please try again.",
          variant: "destructive",
        });
        console.error('Failed to resend OTP:', error);
      } finally {
        setIsResending(false);
      }
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
        disabled={!canResend || isResending}
      >
        <RefreshCw size={16} className={isResending || !canResend ? 'animate-spin' : ''} /> 
        {isResending 
          ? 'Sending...' 
          : canResend 
            ? 'Resend Code' 
            : `Resend code in ${timer}s`}
      </Button>
    </div>
  );
};

export default OtpVerification;
