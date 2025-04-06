
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CheckCircle, Upload } from 'lucide-react';
import DocumentVerificationOtp from '@/components/auth/DocumentVerificationOtp';

interface VerificationFormProps {
  formData: {
    adhaarNumber: string;
    panNumber: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  verification: {
    adhaarVerified: boolean;
    panVerified: boolean;
    showAdhaarOtp: boolean;
    showPanOtp: boolean;
    handleVerifyAdhaar: (adhaarNumber: string) => void;
    handleVerifyPan: (panNumber: string) => void;
    handleFileUpload: (fieldName: string) => void;
    setAdhaarVerified: (value: boolean) => void;
    setPanVerified: (value: boolean) => void;
    setShowAdhaarOtp: (value: boolean) => void;
    setShowPanOtp: (value: boolean) => void;
  };
}

const VerificationForm = ({ formData, onInputChange, verification }: VerificationFormProps) => {
  const {
    adhaarVerified, panVerified, showAdhaarOtp, showPanOtp,
    handleVerifyAdhaar, handleVerifyPan, handleFileUpload,
    setAdhaarVerified, setPanVerified, setShowAdhaarOtp, setShowPanOtp
  } = verification;
  
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="adhaarNumber">Aadhaar Number *</Label>
        <div className="flex gap-2">
          <Input 
            id="adhaarNumber" 
            name="adhaarNumber" 
            placeholder="XXXX XXXX XXXX" 
            value={formData.adhaarNumber}
            onChange={onInputChange}
            disabled={adhaarVerified}
            required
            className="flex-1"
          />
          {!adhaarVerified && !showAdhaarOtp && (
            <Button 
              type="button" 
              onClick={() => handleVerifyAdhaar(formData.adhaarNumber)}
              variant="secondary"
            >
              Verify Aadhaar
            </Button>
          )}
          {adhaarVerified && (
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
        
        {showAdhaarOtp && !adhaarVerified && (
          <div className="mt-2">
            <DocumentVerificationOtp
              documentType="aadhaar"
              documentValue={formData.adhaarNumber}
              onVerified={() => {
                setAdhaarVerified(true);
                setShowAdhaarOtp(false);
              }}
            />
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <Label>Upload Aadhaar Card *</Label>
        <div className="border-2 border-dashed rounded-md p-6 text-center">
          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
          <div className="text-sm text-muted-foreground mb-2">
            Click to upload, or drag and drop
          </div>
          <Button 
            type="button" 
            variant="outline"
            onClick={() => handleFileUpload('aadhaarCard')}
          >
            Select File
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="panNumber">PAN Number *</Label>
        <div className="flex gap-2">
          <Input 
            id="panNumber" 
            name="panNumber" 
            placeholder="ABCDE1234F" 
            value={formData.panNumber}
            onChange={onInputChange}
            disabled={panVerified}
            required
            className="flex-1"
          />
          {!panVerified && !showPanOtp && (
            <Button 
              type="button" 
              onClick={() => handleVerifyPan(formData.panNumber)}
              variant="secondary"
            >
              Verify PAN
            </Button>
          )}
          {panVerified && (
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
        
        {showPanOtp && !panVerified && (
          <div className="mt-2">
            <DocumentVerificationOtp
              documentType="pan"
              documentValue={formData.panNumber}
              onVerified={() => {
                setPanVerified(true);
                setShowPanOtp(false);
              }}
            />
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <Label>Upload PAN Card *</Label>
        <div className="border-2 border-dashed rounded-md p-6 text-center">
          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
          <div className="text-sm text-muted-foreground mb-2">
            Click to upload, or drag and drop
          </div>
          <Button 
            type="button" 
            variant="outline"
            onClick={() => handleFileUpload('panCard')}
          >
            Select File
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label>Upload Profile Photo *</Label>
        <div className="border-2 border-dashed rounded-md p-6 text-center">
          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
          <div className="text-sm text-muted-foreground mb-2">
            Click to upload, or drag and drop
          </div>
          <Button 
            type="button" 
            variant="outline"
            onClick={() => handleFileUpload('profilePhoto')}
          >
            Select File
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;
