
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export const useVerification = () => {
  const { toast } = useToast();
  const [showEmailOtp, setShowEmailOtp] = useState(false);
  const [showPhoneOtp, setShowPhoneOtp] = useState(false);
  const [showAdhaarOtp, setShowAdhaarOtp] = useState(false);
  const [showPanOtp, setShowPanOtp] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [adhaarVerified, setAdhaarVerified] = useState(false);
  const [panVerified, setPanVerified] = useState(false);

  const handleVerifyEmail = (email: string) => {
    if (!email) {
      toast({
        title: "Missing Information",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    setShowEmailOtp(true);
    
    toast({
      title: "Verification Code Sent",
      description: `We've sent a verification code to ${email}`,
    });
  };
  
  const handleVerifyPhone = (phone: string) => {
    if (!phone) {
      toast({
        title: "Missing Information",
        description: "Please enter your phone number",
        variant: "destructive",
      });
      return;
    }
    
    setShowPhoneOtp(true);
    
    toast({
      title: "Verification Code Sent",
      description: `We've sent a verification code to ${phone}`,
    });
  };
  
  const handleVerifyAdhaar = (adhaarNumber: string) => {
    if (!adhaarNumber) {
      toast({
        title: "Missing Information",
        description: "Please enter your Aadhaar number",
        variant: "destructive",
      });
      return;
    }
    
    setShowAdhaarOtp(true);
    
    toast({
      title: "Verification Code Sent",
      description: `We've sent a verification code to the phone number linked with your Aadhaar`,
    });
  };
  
  const handleVerifyPan = (panNumber: string) => {
    if (!panNumber) {
      toast({
        title: "Missing Information",
        description: "Please enter your PAN number",
        variant: "destructive",
      });
      return;
    }
    
    setShowPanOtp(true);
    
    toast({
      title: "Verification Code Sent",
      description: `We've sent a verification code to verify your PAN details`,
    });
  };
  
  const handleFileUpload = (fieldName: string) => {
    // Mock file upload
    toast({
      title: "File Uploaded",
      description: "Your document has been uploaded successfully.",
    });
  };

  return {
    emailVerified,
    setEmailVerified,
    phoneVerified,
    setPhoneVerified,
    adhaarVerified,
    setAdhaarVerified,
    panVerified,
    setPanVerified,
    showEmailOtp,
    setShowEmailOtp,
    showPhoneOtp,
    setShowPhoneOtp,
    showAdhaarOtp,
    setShowAdhaarOtp,
    showPanOtp,
    setShowPanOtp,
    handleVerifyEmail,
    handleVerifyPhone,
    handleVerifyAdhaar,
    handleVerifyPan,
    handleFileUpload
  };
};
