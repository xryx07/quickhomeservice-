
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot 
} from '@/components/ui/input-otp';
import { RefreshCw, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface DocumentVerificationOtpProps {
  documentType: 'aadhaar' | 'pan' | 'email' | 'phone';
  documentValue: string;
  onVerified: () => void;
}

const DocumentVerificationOtp = ({ 
  documentType, 
  documentValue, 
  onVerified 
}: DocumentVerificationOtpProps) => {
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState<number>(30);
  const [canResend, setCanResend] = useState<boolean>(false);
  const { toast } = useToast();
  
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
  
  const getLabel = () => {
    switch (documentType) {
      case 'aadhaar':
        return 'Aadhaar';
      case 'pan':
        return 'PAN';
      case 'email':
        return 'Email';
      case 'phone':
        return 'Phone';
      default:
        return 'Document';
    }
  };

  const handleVerify = () => {
    if (otp.length < 6) {
      toast({
        title: "Incomplete OTP",
        description: "Please enter the complete 6-digit code",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    
    // Mock OTP verification - in a real app this would call an API
    setTimeout(() => {
      setIsVerifying(false);
      setIsVerified(true);
      toast({
        title: `${getLabel()} Verified`,
        description: `Your ${getLabel()} has been successfully verified`,
        variant: "default",
      });
      onVerified();
    }, 1000);
  };
  
  const handleResendOtp = () => {
    if (!canResend) return;
    
    setCanResend(false);
    setTimer(30);
    
    toast({
      title: "OTP Sent",
      description: `A new verification code has been sent for your ${getLabel()}`,
    });
  };
  
  if (isVerified) {
    return (
      <div className="flex items-center justify-center p-4 bg-green-50 dark:bg-green-900/20 rounded-md">
        <CheckCircle className="text-green-600 dark:text-green-400 mr-2" />
        <span>{getLabel()} verification complete</span>
      </div>
    );
  }
  
  return (
    <div className="space-y-4 p-4 border rounded-md">
      <div className="text-sm text-muted-foreground">
        Enter the 6-digit code sent to {documentValue.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')}
      </div>
      
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
      
      <div className="flex gap-2">
        <Button
          onClick={handleVerify}
          disabled={otp.length < 6 || isVerifying || isVerified}
          className="w-full"
        >
          {isVerifying ? 'Verifying...' : 'Verify'}
        </Button>
        
        <Button
          variant="outline"
          onClick={handleResendOtp}
          disabled={!canResend || isVerified}
          className="flex items-center gap-1"
        >
          <RefreshCw size={16} className={!canResend && !isVerified ? 'animate-spin' : ''} />
          {canResend ? 'Resend OTP' : `Resend in ${timer}s`}
        </Button>
      </div>
    </div>
  );
};

export default DocumentVerificationOtp;
