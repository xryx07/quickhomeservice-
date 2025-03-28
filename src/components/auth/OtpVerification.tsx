
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RefreshCw } from 'lucide-react';

interface OtpVerificationProps {
  phone: string;
  otp: string;
  setOtp: (otp: string) => void;
  sendOtpAgain: () => void;
}

const OtpVerification = ({ phone, otp, setOtp, sendOtpAgain }: OtpVerificationProps) => {
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <p className="text-muted-foreground">
          We've sent a verification code to {phone}
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="otp">Verification Code</Label>
        <Input
          id="otp"
          placeholder="Enter verification code"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
      </div>
      
      <Button 
        type="button" 
        variant="outline" 
        className="w-full flex items-center justify-center gap-2"
        onClick={sendOtpAgain}
      >
        <RefreshCw size={16} /> Resend Code
      </Button>
    </div>
  );
};

export default OtpVerification;
