
import { Shield } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CustomerTerms = () => {
  return (
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
  );
};

export default CustomerTerms;
