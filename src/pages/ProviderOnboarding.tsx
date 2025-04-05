
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle, ChevronRight, Upload, Shield } from 'lucide-react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DocumentVerificationOtp from '@/components/auth/DocumentVerificationOtp';
import ProviderAgreement from '@/components/ProviderAgreement';

const ProviderOnboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
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
  
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [adhaarVerified, setAdhaarVerified] = useState(false);
  const [panVerified, setPanVerified] = useState(false);
  const [showAdhaarOtp, setShowAdhaarOtp] = useState(false);
  const [showPanOtp, setShowPanOtp] = useState(false);
  const [showEmailOtp, setShowEmailOtp] = useState(false);
  const [showPhoneOtp, setShowPhoneOtp] = useState(false);
  
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showAgreement, setShowAgreement] = useState(false);
  const [agreementSigned, setAgreementSigned] = useState(false);
  
  useEffect(() => {
    // Show the agreement at step 1
    if (step === 1 && !agreementSigned) {
      setShowAgreement(true);
    }
  }, [step, agreementSigned]);
  
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
  
  const handleVerifyPhone = () => {
    if (!formData.phone) {
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
      description: `We've sent a verification code to ${formData.phone}`,
    });
  };
  
  const handleVerifyEmail = () => {
    if (!formData.email) {
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
      description: `We've sent a verification code to ${formData.email}`,
    });
  };
  
  const handleVerifyAdhaar = () => {
    if (!formData.adhaarNumber) {
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
  
  const handleVerifyPan = () => {
    if (!formData.panNumber) {
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
  
  const handleAgreementSigned = () => {
    setAgreementSigned(true);
    setShowAgreement(false);
    
    toast({
      title: "Agreement Signed",
      description: "You have successfully signed the provider agreement.",
    });
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
            
            <div className="mb-8">
              <div className="flex justify-between items-center">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        step > i 
                          ? 'bg-green-500 text-white dark:bg-green-600' 
                          : step === i 
                            ? 'bg-brand-600 text-white dark:bg-brand-500' 
                            : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                      }`}
                    >
                      {step > i ? <CheckCircle size={18} /> : i}
                    </div>
                    <span className={`text-sm ${step === i ? 'font-medium' : 'text-muted-foreground'}`}>
                      {i === 1 ? 'Personal Details' : 
                       i === 2 ? 'Service Info' : 
                       i === 3 ? 'Verification' : 
                       'Banking Details'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative h-1 bg-gray-200 dark:bg-gray-800 mt-4">
                <div 
                  className="absolute top-0 left-0 h-full bg-brand-600 dark:bg-brand-500"
                  style={{ width: `${(step - 1) * 33.33}%` }}
                ></div>
              </div>
            </div>
            
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
                  {/* Step 1: Personal Details with Email and Phone Verification */}
                  {step === 1 && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input 
                            id="firstName" 
                            name="firstName" 
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input 
                            id="lastName" 
                            name="lastName" 
                            value={formData.lastName}
                            onChange={handleChange}
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
                            onChange={handleChange}
                            disabled={emailVerified}
                            required
                            className="flex-1"
                          />
                          {!emailVerified && !showEmailOtp && (
                            <Button 
                              type="button" 
                              onClick={handleVerifyEmail}
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
                            onChange={handleChange}
                            disabled={phoneVerified}
                            required
                            className="flex-1"
                          />
                          {!phoneVerified && !showPhoneOtp && (
                            <Button 
                              type="button" 
                              onClick={handleVerifyPhone}
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
                          onChange={handleChange}
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
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State *</Label>
                          <Input 
                            id="state" 
                            name="state" 
                            value={formData.state}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">PIN Code *</Label>
                          <Input 
                            id="zipCode" 
                            name="zipCode" 
                            value={formData.zipCode}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Step 2: Service Information */}
                  {step === 2 && (
                    <>
                      <div className="space-y-4">
                        <Label>Select Service Categories *</Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {categories.map((category) => (
                            <div 
                              key={category.id}
                              className={`border rounded-md p-3 cursor-pointer ${
                                formData.serviceCategories.includes(category.id) 
                                  ? 'border-brand-600 dark:border-brand-400 bg-brand-50 dark:bg-brand-900/20' 
                                  : 'hover:border-gray-400 dark:hover:border-gray-500'
                              }`}
                              onClick={() => handleCategoryToggle(category.id)}
                            >
                              <div className="flex items-center">
                                <div className="mr-2 text-xl">{category.icon}</div>
                                <div>{category.name}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="serviceDescription">Service Description *</Label>
                        <Textarea 
                          id="serviceDescription" 
                          name="serviceDescription" 
                          placeholder="Describe the services you provide, your experience, and your expertise..." 
                          rows={5}
                          value={formData.serviceDescription}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </>
                  )}
                  
                  {/* Step 3: Verification with OTP validation */}
                  {step === 3 && (
                    <>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="adhaarNumber">Aadhaar Number *</Label>
                          <div className="flex gap-2">
                            <Input 
                              id="adhaarNumber" 
                              name="adhaarNumber" 
                              placeholder="XXXX XXXX XXXX" 
                              value={formData.adhaarNumber}
                              onChange={handleChange}
                              disabled={adhaarVerified}
                              required
                              className="flex-1"
                            />
                            {!adhaarVerified && !showAdhaarOtp && (
                              <Button 
                                type="button" 
                                onClick={handleVerifyAdhaar}
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
                              onChange={handleChange}
                              disabled={panVerified}
                              required
                              className="flex-1"
                            />
                            {!panVerified && !showPanOtp && (
                              <Button 
                                type="button" 
                                onClick={handleVerifyPan}
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
                    </>
                  )}
                  
                  {/* Step 4: Banking Details */}
                  {step === 4 && (
                    <>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="accountHolderName">Account Holder Name *</Label>
                          <Input 
                            id="accountHolderName" 
                            name="accountHolderName" 
                            value={formData.accountHolderName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="accountNumber">Account Number *</Label>
                          <Input 
                            id="accountNumber" 
                            name="accountNumber" 
                            value={formData.accountNumber}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="ifscCode">IFSC Code *</Label>
                          <Input 
                            id="ifscCode" 
                            name="ifscCode" 
                            value={formData.ifscCode}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-800/50 flex items-start space-x-3">
                          <Shield className="text-brand-600 dark:text-brand-400 h-6 w-6 mt-0.5" />
                          <div>
                            <h4 className="font-medium mb-2">Agreement Confirmation</h4>
                            <p className="text-sm text-muted-foreground mb-4">
                              You have digitally signed the Provider Agreement that includes the 25% commission terms and platform policies.
                            </p>
                            <div className="flex items-start space-x-2">
                              <Checkbox 
                                id="terms" 
                                checked={agreedToTerms}
                                onCheckedChange={(checked) => setAgreedToTerms(!!checked)}
                              />
                              <Label 
                                htmlFor="terms" 
                                className="text-sm leading-tight cursor-pointer"
                              >
                                I confirm my acceptance of the agreement and that all information provided is accurate and complete.
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
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
