
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import DocumentVerificationOtp from '@/components/auth/DocumentVerificationOtp';

interface PersonalDetailsFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  verification: {
    emailVerified: boolean;
    phoneVerified: boolean;
    showEmailOtp: boolean;
    showPhoneOtp: boolean;
    handleVerifyEmail: (email: string) => void;
    handleVerifyPhone: (phone: string) => void;
    setEmailVerified: (value: boolean) => void;
    setPhoneVerified: (value: boolean) => void;
    setShowEmailOtp: (value: boolean) => void;
    setShowPhoneOtp: (value: boolean) => void;
  };
}

const PersonalDetailsForm = ({ formData, onInputChange, verification }: PersonalDetailsFormProps) => {
  const { 
    emailVerified, phoneVerified, showEmailOtp, showPhoneOtp,
    handleVerifyEmail, handleVerifyPhone, setEmailVerified, setPhoneVerified,
    setShowEmailOtp, setShowPhoneOtp
  } = verification;
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input 
            id="firstName" 
            name="firstName" 
            value={formData.firstName}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input 
            id="lastName" 
            name="lastName" 
            value={formData.lastName}
            onChange={onInputChange}
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <div className="flex gap-2">
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email}
            onChange={onInputChange}
            disabled={emailVerified}
            required
            className="flex-1"
          />
          {!emailVerified && !showEmailOtp && (
            <Button 
              type="button" 
              onClick={() => handleVerifyEmail(formData.email)}
              variant="secondary"
            >
              Verify Email
            </Button>
          )}
          {emailVerified && (
            <Button 
              type="button" 
              variant="ghost" 
              className="text-green-600 dark:text-green-400" 
              disabled
            >
              <CheckCircle size={16} className="mr-1" /> Verified
            </Button>
          )}
        </div>
        
        {showEmailOtp && !emailVerified && (
          <div className="mt-2">
            <DocumentVerificationOtp
              documentType="email"
              documentValue={formData.email}
              onVerified={() => {
                setEmailVerified(true);
                setShowEmailOtp(false);
              }}
            />
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <div className="flex gap-2">
          <Input 
            id="phone" 
            name="phone" 
            value={formData.phone}
            onChange={onInputChange}
            disabled={phoneVerified}
            required
            className="flex-1"
          />
          {!phoneVerified && !showPhoneOtp && (
            <Button 
              type="button" 
              onClick={() => handleVerifyPhone(formData.phone)}
              variant="secondary"
            >
              Verify Phone
            </Button>
          )}
          {phoneVerified && (
            <Button 
              type="button" 
              variant="ghost" 
              className="text-green-600 dark:text-green-400" 
              disabled
            >
              <CheckCircle size={16} className="mr-1" /> Verified
            </Button>
          )}
        </div>
        
        {showPhoneOtp && !phoneVerified && (
          <div className="mt-2">
            <DocumentVerificationOtp
              documentType="phone"
              documentValue={formData.phone}
              onVerified={() => {
                setPhoneVerified(true);
                setShowPhoneOtp(false);
              }}
            />
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="address">Address *</Label>
        <Input 
          id="address" 
          name="address" 
          value={formData.address}
          onChange={onInputChange}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="city">City *</Label>
          <Input 
            id="city" 
            name="city" 
            value={formData.city}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State *</Label>
          <Input 
            id="state" 
            name="state" 
            value={formData.state}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="zipCode">PIN Code *</Label>
          <Input 
            id="zipCode" 
            name="zipCode" 
            value={formData.zipCode}
            onChange={onInputChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
