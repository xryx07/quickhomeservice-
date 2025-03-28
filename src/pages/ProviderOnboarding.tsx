
import { useState } from 'react';
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
import { CheckCircle, ChevronRight, Upload } from 'lucide-react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
  
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
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
  
  const handleFileUpload = (fieldName: string) => {
    // Mock file upload
    toast({
      title: "File Uploaded",
      description: "Your document has been uploaded successfully.",
    });
  };
  
  const handleNext = () => {
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required personal details.",
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
      if (!formData.adhaarNumber || !formData.panNumber) {
        toast({
          title: "Missing Information",
          description: "Please provide all required verification details.",
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
      
      <main className="flex-grow bg-gray-50 py-12">
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
                          ? 'bg-green-500 text-white' 
                          : step === i 
                            ? 'bg-brand-600 text-white' 
                            : 'bg-gray-200 text-gray-500'
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
              <div className="relative h-1 bg-gray-200 mt-4">
                <div 
                  className="absolute top-0 left-0 h-full bg-brand-600"
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
                  {step === 1 ? 'Provide your basic information' : 
                   step === 2 ? 'Tell us about the services you offer' : 
                   step === 3 ? 'Upload necessary documents for verification' : 
                   'Add your bank account details for payments'}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Personal Details */}
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
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
                                  ? 'border-brand-600 bg-brand-50' 
                                  : 'hover:border-gray-400'
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
                  
                  {/* Step 3: Verification */}
                  {step === 3 && (
                    <>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="adhaarNumber">Aadhaar Number *</Label>
                          <Input 
                            id="adhaarNumber" 
                            name="adhaarNumber" 
                            placeholder="XXXX XXXX XXXX" 
                            value={formData.adhaarNumber}
                            onChange={handleChange}
                            required
                          />
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
                          <Input 
                            id="panNumber" 
                            name="panNumber" 
                            placeholder="ABCDE1234F" 
                            value={formData.panNumber}
                            onChange={handleChange}
                            required
                          />
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
                        
                        <div className="flex items-start space-x-2 pt-4">
                          <Checkbox 
                            id="terms" 
                            checked={agreedToTerms}
                            onCheckedChange={(checked) => setAgreedToTerms(!!checked)}
                          />
                          <Label 
                            htmlFor="terms" 
                            className="text-sm leading-tight cursor-pointer"
                          >
                            I agree that UrbanPro will take a 25% commission on all completed services. I have read and agree to the Terms of Service and Privacy Policy.
                          </Label>
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
