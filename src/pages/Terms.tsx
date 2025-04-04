
import { FileText, Shield, ShieldCheck, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
              <p className="text-muted-foreground">
                Please read these terms carefully before using our services
              </p>
            </div>
            
            <Tabs defaultValue="customers" className="mb-10">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="customers">For Customers</TabsTrigger>
                <TabsTrigger value="providers">For Service Providers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="customers" className="mt-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-6">
                    <Shield className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-semibold">Customer Terms of Service</h2>
                  </div>
                  
                  <p className="mb-6 text-muted-foreground">
                    Last updated: April 4, 2025
                  </p>
                  
                  <div className="prose prose-blue max-w-none">
                    <p>
                      Welcome to our service platform. These Terms of Service ("Terms") govern your use of our website, 
                      mobile applications, and services. By accessing or using our platform, you agree to be bound by these Terms.
                    </p>
                    
                    <Accordion type="single" collapsible className="my-6">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-medium">
                          1. Account Registration and Use
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-2">
                          <p>1.1 You must be at least 18 years old to use our services.</p>
                          <p>1.2 You are responsible for maintaining the confidentiality of your account information.</p>
                          <p>1.3 You agree to provide accurate, current, and complete information during registration.</p>
                          <p>1.4 You are solely responsible for all activities that occur under your account.</p>
                          <p>1.5 We reserve the right to suspend or terminate your account for any violation of these Terms.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-medium">
                          2. Booking and Payment Terms
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-2">
                          <p>2.1 Service prices are set by the service providers and are displayed before booking.</p>
                          <p>2.2 Payment is processed at the time of booking or as specified during the booking process.</p>
                          <p>2.3 You agree to pay all applicable fees and taxes associated with your bookings.</p>
                          <p>2.4 Cancellation and refund policies are service-specific and will be displayed before booking.</p>
                          <p>2.5 We may use third-party payment processors, and you agree to their respective terms of service.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-medium">
                          3. User Conduct and Responsibilities
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-2">
                          <p>3.1 You agree not to use our platform for any illegal or unauthorized purpose.</p>
                          <p>3.2 You agree to provide a safe and appropriate environment for service providers.</p>
                          <p>3.3 You agree to communicate professionally with service providers and our staff.</p>
                          <p>3.4 You agree not to engage in any activity that could damage, disable, or impair our services.</p>
                          <p>3.5 You are responsible for preparing your premises appropriately for the booked service.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-medium">
                          4. Reviews and Feedback
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-2">
                          <p>4.1 You may leave reviews for services you have received.</p>
                          <p>4.2 Reviews must be honest, accurate, and based on personal experience.</p>
                          <p>4.3 We reserve the right to remove reviews that violate our review guidelines.</p>
                          <p>4.4 You grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your reviews.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-medium">
                          5. Limitation of Liability
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-2">
                          <p>5.1 We act as a platform connecting customers with service providers and are not responsible for the quality of services provided.</p>
                          <p>5.2 To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                          <p>5.3 Our total liability for any claims arising from these Terms or your use of our platform shall not exceed the amounts paid by you for the service in question.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-6">
                        <AccordionTrigger className="text-lg font-medium">
                          6. Dispute Resolution
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-2">
                          <p>6.1 Any disputes arising from these Terms or your use of our platform shall first be addressed through informal negotiation.</p>
                          <p>6.2 If the dispute cannot be resolved informally, it shall be submitted to binding arbitration.</p>
                          <p>6.3 The arbitration shall be conducted in accordance with the rules of the American Arbitration Association.</p>
                          <p>6.4 The arbitration shall be conducted in [Your City, State/Country].</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="providers" className="mt-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-6">
                    <ShieldCheck className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-semibold">Service Provider Terms</h2>
                  </div>
                  
                  <p className="mb-6 text-muted-foreground">
                    Last updated: April 4, 2025
                  </p>
                  
                  <div className="prose prose-blue max-w-none">
                    <p>
                      These Service Provider Terms ("Provider Terms") govern your participation as a service provider on our platform. 
                      By registering as a service provider, you agree to be bound by these Provider Terms in addition to our general Terms of Service.
                    </p>
                    
                    <Accordion type="single" collapsible className="my-6">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-medium">
                          1. Service Provider Eligibility and Onboarding
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-2">
                          <p>1.1 You must be at least 18 years old and legally eligible to work in your jurisdiction.</p>
                          <p>1.2 You must complete our verification process, which may include background checks and skills assessments.</p>
                          <p>1.3 You must provide accurate, current, and complete information during registration and onboarding.</p>
                          <p>1.4 You are responsible for maintaining all necessary licenses, permits, and insurance required for your services.</p>
                          <p>1.5 We reserve the right to reject your application or terminate your provider account at our discretion.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-medium">
                          2. Service Listings and Pricing
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-2">
                          <p>2.1 You are responsible for creating accurate service listings, including descriptions, pricing, and availability.</p>
                          <p>2.2 You set your own prices, though we may suggest pricing guidelines to maintain platform standards.</p>
                          <p>2.3 You may not artificially inflate prices or engage in price fixing with other providers.</p>
                          <p>2.4 We reserve the right to remove or modify listings that violate our policies or applicable laws.</p>
                          <p>2.5 You agree that we may display your services in various formats and contexts throughout our platform.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-medium">
                          3. Service Delivery and Standards
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-2">
                          <p>3.1 You agree to provide services in a professional, competent, and timely manner.</p>
                          <p>3.2 You must arrive at scheduled appointments on time and properly equipped.</p>
                          <p>3.3 You must follow all safety protocols and industry standards applicable to your services.</p>
                          <p>3.4 You are responsible for bringing your own tools and equipment unless otherwise specified.</p>
                          <p>3.5 You agree to communicate professionally with customers and notify them promptly of any issues or delays.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-medium">
                          4. Payments and Commission
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-2">
                          <p>4.1 We charge a 25% commission on all completed services booked through our platform.</p>
                          <p>4.2 Payments will be processed through our platform and distributed to your account according to our payment schedule.</p>
                          <p>4.3 You are responsible for all taxes on income earned through our platform.</p>
                          <p>4.4 You agree not to accept direct payments from customers for services booked through our platform.</p>
                          <p>4.5 Payment disputes will be resolved according to our payment dispute resolution process.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-medium">
                          5. Cancellations and No-Shows
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-2">
                          <p>5.1 You must adhere to our cancellation policy and provide advance notice if you cannot fulfill a booking.</p>
                          <p>5.2 Repeated cancellations or no-shows may result in penalties, including account suspension.</p>
                          <p>5.3 If a customer cancels a booking, compensation will be provided according to our cancellation policy.</p>
                          <p>5.4 Force majeure events will be evaluated on a case-by-case basis for cancellation purposes.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-6">
                        <AccordionTrigger className="text-lg font-medium">
                          6. Relationship with Platform
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 space-y-2">
                          <p>6.1 You are an independent contractor and not an employee, partner, or agent of our platform.</p>
                          <p>6.2 You are not entitled to employee benefits and are responsible for your own expenses and insurance.</p>
                          <p>6.3 You may not represent yourself as an employee or representative of our platform.</p>
                          <p>6.4 You retain the right to provide services through other platforms or independently.</p>
                          <p>6.5 We reserve the right to modify these Provider Terms with reasonable notice.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-center mb-6">
                <Info className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold">Additional Legal Information</h2>
              </div>
              
              <Accordion type="single" collapsible>
                <AccordionItem value="privacy">
                  <AccordionTrigger>Privacy Policy</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Our detailed Privacy Policy explains how we collect, use, and protect your personal information.
                    </p>
                    <p>
                      Please review our full Privacy Policy [link to privacy policy] for comprehensive information on data privacy.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="cookies">
                  <AccordionTrigger>Cookie Policy</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.
                    </p>
                    <p>
                      By using our platform, you agree to our use of cookies in accordance with our Cookie Policy.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="intellectual">
                  <AccordionTrigger>Intellectual Property</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      All content on our platform, including text, graphics, logos, and software, is our property or the property of our licensors and is protected by intellectual property laws.
                    </p>
                    <p>
                      You may not use, reproduce, or distribute our content without express permission.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="modifications">
                  <AccordionTrigger>Modifications to Terms</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      We may modify these Terms at any time by posting the revised terms on our platform.
                    </p>
                    <p>
                      Your continued use of our platform after the effective date of the revised Terms constitutes your acceptance of the changes.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms, please contact us.
              </p>
              <FileText className="h-8 w-8 text-blue-600 mx-auto" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
