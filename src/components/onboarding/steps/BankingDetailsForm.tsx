
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

interface BankingDetailsFormProps {
  formData: {
    accountNumber: string;
    ifscCode: string;
    accountHolderName: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  agreementSigned: boolean;
  setShowAgreement: (value: boolean) => void;
}

const BankingDetailsForm = ({ 
  formData, 
  onInputChange,
  agreementSigned,
  setShowAgreement
}: BankingDetailsFormProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="accountHolderName">Account Holder Name *</Label>
        <Input 
          id="accountHolderName" 
          name="accountHolderName" 
          value={formData.accountHolderName}
          onChange={onInputChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="accountNumber">Account Number *</Label>
        <Input 
          id="accountNumber" 
          name="accountNumber" 
          value={formData.accountNumber}
          onChange={onInputChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="ifscCode">IFSC Code *</Label>
        <Input 
          id="ifscCode" 
          name="ifscCode" 
          value={formData.ifscCode}
          onChange={onInputChange}
          required
        />
      </div>
      
      {agreementSigned && (
        <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800/50 flex items-start space-x-3">
          <Shield className="text-green-600 dark:text-green-400 h-6 w-6 mt-0.5" />
          <div>
            <h4 className="font-medium mb-2">Agreement Signed</h4>
            <p className="text-sm text-muted-foreground">
              You have digitally signed the Provider Agreement that includes the 25% commission terms and platform policies.
            </p>
            <div className="mt-3">
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => setShowAgreement(true)}
              >
                View Agreement Again
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankingDetailsForm;
