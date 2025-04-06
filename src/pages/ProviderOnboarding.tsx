
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ChevronRight } from 'lucide-react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProviderAgreement from '@/components/ProviderAgreement';
import ProgressTracker from '@/components/onboarding/ProgressTracker';
import PersonalDetailsForm from '@/components/onboarding/steps/PersonalDetailsForm';
import ServiceInfoForm from '@/components/onboarding/steps/ServiceInfoForm';
import VerificationForm from '@/components/onboarding/steps/VerificationForm';
import BankingDetailsForm from '@/components/onboarding/steps/BankingDetailsForm';
import { useVerification } from '@/hooks/useVerification';

const ProviderOnboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    emailVerified, setEmailVerified,
    phoneVerified, setPhoneVerified,
    adhaarVerified, setAdhaarVerified,
    panVerified, setPanVerified,
    showEmailOtp, setShowEmailOtp,
    showPhoneOtp, setShowPhoneOtp,
    showAdhaarOtp, setShowAdhaarOtp,
    showPanOtp, setShowPanOtp,
    handleVerifyEmail, handleVerifyPhone,
    handleVerifyAdhaar, handleVerifyPan,
    handleFileUpload
  } = useVerification();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    serviceCategories: [] as string[],
    serviceDescription: '',
    adhaarNumber: '',
    panNumber: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: ''
  });
  
  const [showAgreement, setShowAgreement] = useState(false);
  const [agreementSigned, setAgreementSigned] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  useEffect(() => {
    // Show the agreement after completing documentation step
    if (step === 3 && adhaarVerified && panVerified && !agreementSigned) {
      setShowAgreement(true);
    }
  }, [step, adhaarVerified, panVerified, agreementSigned]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCategoryToggle = (category: string) => {
    setFormData(prev => {
      const updatedCategories = prev.serviceCategories.includes(category)
        ? prev.serviceCategories.filter(c => c !== category)
        : [...prev.serviceCategories, category];
      
      return {
        ...prev,
        serviceCategories: updatedCategories
      };
    });
  };
  
  const handleAgreementSigned = () => {
    setAgreementSigned(true);
    setShowAgreement(false);
    setAgreedToTerms(true);
    
    toast({
      title: "Agreement Signed",
      description: "You have successfully signed the provider agreement.",
    });
    
    // Auto-advance to banking details step
    setStep(4);
  };
  
  const handleNext = () => {
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !emailVerified || !phoneVerified) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required personal details and verify your email and phone.",
          variant: "destructive",
        });
        return;
      }
    } else if (step === 2) {
      if (formData.serviceCategories.length === 0 || !formData.serviceDescription) {
        toast({
          title: "Missing Information",
          description: "Please select at least one service category and provide a description.",
          variant: "destructive",
        });
        return;
      }
    } else if (step === 3) {
      if (!formData.adhaarNumber || !formData.panNumber || !adhaarVerified || !panVerified) {
        toast({
          title: "Missing Information",
          description: "Please provide and verify all required verification details.",
          variant: "destructive",
        });
        return;
      }
      
      // Don't advance - agreement will show automatically
      return;
    }
    
    setStep(prev => prev + 1);
  };
  
  const handleBack = () => {
    setStep(prev => prev - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      toast({
        title: "Terms & Conditions Required",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.accountNumber || !formData.ifscCode || !formData.accountHolderName) {
      toast({
        title: "Missing Information",
        description: "Please provide all required banking details.",
        variant: "destructive",
      });
      return;
    }
    
    // Submit form data (mock submission)
    toast({
      title: "Registration Submitted",
      description: "Your provider application has been submitted successfully. We'll review and get back to you soon.",
    });
    
    // Navigate to confirmation page
    setTimeout(() => {
      navigate('/provider-confirmation');
    }, 2000);
  };
  
  const categories = [
    { id: 'cleaning', name: 'Cleaning', icon: '🧹' },
    { id: 'electrician', name: 'Electrician', icon: '⚡' },
    { id: 'plumbing', name: 'Plumbing', icon: '🔧' },
    { id: 'beauty', name: 'Beauty & Spa', icon: '💅' },
    { id: 'appliance', name: 'Appliance Repair', icon: '🔌' },
    { id: 'painting', name: 'Painting', icon: '🎨' },
    { id: 'pest', name: 'Pest Control', icon: '🐜' },
    { id: 'carpentry', name: 'Carpentry', icon: '🪚' }
  ];

  const steps = [
    { id: 1, label: 'Personal Details' },
    { id: 2, label: 'Service Info' },
    { id: 3, label: 'Verification' },
    { id: 4, label: 'Banking Details' }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {showAgreement && (
        <ProviderAgreement onAgreementSigned={handleAgreementSigned} />
      )}
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Become a Service Provider</h1>
            <p className="text-muted-foreground mb-8">Join our platform and start offering your services to thousands of customers.</p>
            
            <ProgressTracker currentStep={step} steps={steps} />
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>
                  {step === 1 ? 'Personal Details' : 
                   step === 2 ? 'Service Information' : 
                   step === 3 ? 'Verification Documents' : 
                   'Banking Details'}
                </CardTitle>
                <CardDescription>
                  {step === 1 ? 'Provide your basic information and verify contacts' : 
                   step === 2 ? 'Tell us about the services you offer' : 
                   step === 3 ? 'Upload and verify necessary documents' : 
                   'Add your bank account details for payments'}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {step === 1 && (
                    <PersonalDetailsForm 
                      formData={formData} 
                      onInputChange={handleChange}
                      verification={{
                        emailVerified,
                        phoneVerified,
                        showEmailOtp,
                        showPhoneOtp,
                        handleVerifyEmail,
                        handleVerifyPhone,
                        setEmailVerified,
                        setPhoneVerified,
                        setShowEmailOtp,
                        setShowPhoneOtp
                      }}
                    />
                  )}
                  
                  {step === 2 && (
                    <ServiceInfoForm 
                      formData={formData}
                      onInputChange={handleChange}
                      handleCategoryToggle={handleCategoryToggle}
                      categories={categories}
                    />
                  )}
                  
                  {step === 3 && (
                    <VerificationForm 
                      formData={formData}
                      onInputChange={handleChange}
                      verification={{
                        adhaarVerified,
                        panVerified,
                        showAdhaarOtp,
                        showPanOtp,
                        handleVerifyAdhaar,
                        handleVerifyPan,
                        handleFileUpload,
                        setAdhaarVerified,
                        setPanVerified,
                        setShowAdhaarOtp,
                        setShowPanOtp
                      }}
                    />
                  )}
                  
                  {step === 4 && (
                    <BankingDetailsForm 
                      formData={formData}
                      onInputChange={handleChange}
                      agreementSigned={agreementSigned}
                      setShowAgreement={setShowAgreement}
                    />
                  )}
                </form>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                {step > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {step < 4 ? (
                  <Button 
                    type="button" 
                    className="btn-brand"
                    onClick={handleNext}
                  >
                    Next <ChevronRight size={16} className="ml-1" />
                  </Button>
                ) : (
                  <Button 
                    type="button" 
                    className="btn-brand"
                    onClick={handleSubmit}
                  >
                    Submit Application
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProviderOnboarding;
