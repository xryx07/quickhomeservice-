
import { ShieldCheck } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProviderTerms = () => {
  return (
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
              <p>4.6 If a customer is not satisfied with your service, they may be eligible for a partial or full refund as determined by our customer satisfaction policy.</p>
              <p>4.7 Collecting payment directly from customers and failing to report it to the platform is strictly prohibited and will result in immediate termination of your account and possible legal action.</p>
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
          
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg font-medium">
              7. Service Quality and Performance
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-2">
              <p>7.1 Service Quality Standards:</p>
              <p className="ml-6">7.1.1 You are expected to deliver services that meet or exceed the quality standards described in your service listing.</p>
              <p className="ml-6">7.1.2 If a customer is dissatisfied with your service, they may request a review by our customer satisfaction team.</p>
              <p className="ml-6">7.1.3 If the service is determined to be substantially below promised quality, you may receive only partial payment or no payment for the service.</p>
              
              <p>7.2 Performance Consequences:</p>
              <p className="ml-6">7.2.1 Consistent poor performance or customer dissatisfaction may result in reduced visibility of your services on our platform.</p>
              <p className="ml-6">7.2.2 Repeated failure to meet service standards may result in temporary suspension or permanent termination of your provider account.</p>
              <p className="ml-6">7.2.3 Direct violation of our terms, including fraudulent behavior, misrepresentation of services, or collecting payments outside the platform will result in immediate termination and potential legal action.</p>
              
              <p>7.3 Incentives for Excellence:</p>
              <p className="ml-6">7.3.1 Providers who maintain high ratings and customer satisfaction will be prioritized in search results and recommendations.</p>
              <p className="ml-6">7.3.2 Top-performing providers may qualify for reduced commission rates and promotional opportunities.</p>
              <p className="ml-6">7.3.3 Consistently high-rated providers will be eligible for our "Premium Provider" program, which includes additional benefits and increased work opportunities.</p>
              <p className="ml-6">7.3.4 Top-performing providers may receive priority for new service categories and market expansions.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg font-medium">
              8. Dispute Resolution and Penalties
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 space-y-2">
              <p>8.1 Service Disputes:</p>
              <p className="ml-6">8.1.1 All service quality disputes will be reviewed by our customer satisfaction team within 5 business days.</p>
              <p className="ml-6">8.1.2 The customer satisfaction team may request evidence from both the provider and the customer.</p>
              <p className="ml-6">8.1.3 Based on the review, the team may determine a full payment, partial payment, or no payment is warranted.</p>
              
              <p>8.2 Prohibited Conduct and Penalties:</p>
              <p className="ml-6">8.2.1 Soliciting customers to book services directly outside the platform is strictly prohibited.</p>
              <p className="ml-6">8.2.2 Collecting payments directly from customers for services booked through the platform will result in immediate account termination.</p>
              <p className="ml-6">8.2.3 Providing deliberately substandard services or engaging in unprofessional conduct may result in account suspension.</p>
              <p className="ml-6">8.2.4 False advertising or misrepresentation of qualifications or services will result in immediate removal of the service listing.</p>
              
              <p>8.3 Appeal Process:</p>
              <p className="ml-6">8.3.1 Providers may appeal decisions made by the customer satisfaction team within 10 business days.</p>
              <p className="ml-6">8.3.2 Appeals will be reviewed by a senior management team member.</p>
              <p className="ml-6">8.3.3 The decision made on appeal is final and binding.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ProviderTerms;
