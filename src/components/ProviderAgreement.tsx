
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FileText, Shield } from 'lucide-react';
import ESignatureCanvas from './ESignatureCanvas';
import ProviderTerms from './terms/ProviderTerms';

interface ProviderAgreementProps {
  onAgreementSigned: () => void;
}

const ProviderAgreement = ({ onAgreementSigned }: ProviderAgreementProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [hasReadTerms, setHasReadTerms] = useState(false);
  const [showSignatureCanvas, setShowSignatureCanvas] = useState(false);
  const [signature, setSignature] = useState<string | null>(null);
  
  const handleSaveSignature = (signatureDataUrl: string) => {
    setSignature(signatureDataUrl);
    setShowSignatureCanvas(false);
    
    // After signature is saved, complete the agreement process
    onAgreementSigned();
    setIsOpen(false);
  };
  
  const handleContinue = () => {
    if (hasReadTerms) {
      setShowSignatureCanvas(true);
    }
  };
  
  const handleClose = () => {
    setIsOpen(false);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {!showSignatureCanvas ? (
          <>
            <DialogHeader>
              <div className="flex items-center">
                <Shield className="text-brand-600 dark:text-brand-400 mr-2 h-6 w-6" />
                <DialogTitle className="text-2xl">Service Provider Agreement</DialogTitle>
              </div>
              <DialogDescription>
                Please read the following terms and conditions carefully before proceeding with your service provider registration.
              </DialogDescription>
            </DialogHeader>
            
            <div className="my-6 border rounded-lg overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-900 p-4 flex justify-between items-center border-b">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <h3 className="font-semibold">Provider Terms & Conditions</h3>
                </div>
                <div className="text-sm text-muted-foreground">
                  Last updated: April 5, 2025
                </div>
              </div>
              
              <div className="p-4 max-h-[50vh] overflow-y-auto">
                <ProviderTerms />
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="terms" 
                checked={hasReadTerms}
                onCheckedChange={(checked) => setHasReadTerms(!!checked)}
              />
              <Label htmlFor="terms" className="text-sm">
                I confirm that I have read, understood, and agree to the terms and conditions of the Provider Agreement.
              </Label>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button 
                onClick={handleContinue} 
                disabled={!hasReadTerms}
              >
                Continue to Signature
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>E-Signature</DialogTitle>
              <DialogDescription>
                Please sign below to confirm your agreement to the terms and conditions.
              </DialogDescription>
            </DialogHeader>
            
            <ESignatureCanvas onSave={handleSaveSignature} />
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowSignatureCanvas(false)}>
                Back to Terms
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProviderAgreement;
