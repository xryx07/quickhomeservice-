
import { Info } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AdditionalLegalInfo = () => {
  return (
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
  );
};

export default AdditionalLegalInfo;
