
import React from 'react';
import { Image } from '@/components/ui/image';

const ProviderTerms = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-8">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Provider Agreement"
          className="rounded-lg shadow-md max-w-full h-auto"
          fallbackCategory="document"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* English Terms */}
        <div>
          <h2 className="text-xl font-bold mb-4">Provider Terms (English)</h2>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>1. Services</h3>
            <p>Provider agrees to perform services as described in service listings created by the Provider and agreed upon with Customers.</p>
            
            <h3>2. Provider Responsibilities</h3>
            <p>Provider shall:</p>
            <ul>
              <li>Perform services with professional care and skill</li>
              <li>Ensure all equipment used is in good working condition</li>
              <li>Arrive at scheduled appointments on time</li>
              <li>Maintain proper licensing and insurance as required by law</li>
            </ul>
            
            <h3>3. Payments</h3>
            <p>Provider will receive payment for services as specified in the service agreement minus platform fees as outlined in the payment schedule.</p>
            
            <h3>4. Cancellation</h3>
            <p>Provider must notify the platform of cancellations at least 24 hours in advance or may be subject to penalties.</p>
            
            <h3>5. Dispute Resolution</h3>
            <p>Any disputes shall be resolved through the platform's dispute resolution process.</p>
            
            <h3>6. Term and Termination</h3>
            <p>This agreement may be terminated by either party with 30 days written notice.</p>
          </div>
        </div>
        
        {/* Hindi Terms */}
        <div className="border-t md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-6">
          <h2 className="text-xl font-bold mb-4">प्रदाता नियम (हिंदी)</h2>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h3>1. सेवाएं</h3>
            <p>प्रदाता उन सेवाओं को प्रदान करने के लिए सहमत होता है जो प्रदाता द्वारा बनाई गई सेवा सूची में वर्णित हैं और ग्राहकों के साथ सहमत हैं।</p>
            
            <h3>2. प्रदाता की जिम्मेदारियां</h3>
            <p>प्रदाता:</p>
            <ul>
              <li>पेशेवर देखभाल और कौशल के साथ सेवाएं प्रदान करेगा</li>
              <li>सुनिश्चित करेगा कि उपयोग किया जाने वाला सभी उपकरण अच्छी कार्य स्थिति में है</li>
              <li>निर्धारित अपॉइंटमेंट पर समय पर पहुंचेगा</li>
              <li>कानून द्वारा आवश्यक उचित लाइसेंसिंग और बीमा बनाए रखेगा</li>
            </ul>
            
            <h3>3. भुगतान</h3>
            <p>प्रदाता को सेवाओं के लिए भुगतान प्राप्त होगा जैसा कि सेवा समझौते में निर्दिष्ट है, जिसमें से भुगतान अनुसूची में बताए अनुसार प्लेटफॉर्म शुल्क घटाया जाएगा।</p>
            
            <h3>4. रद्दीकरण</h3>
            <p>प्रदाता को रद्दीकरण के बारे में प्लेटफॉर्म को कम से कम 24 घंटे पहले सूचित करना होगा अन्यथा दंड के अधीन हो सकता है।</p>
            
            <h3>5. विवाद समाधान</h3>
            <p>किसी भी विवाद का समाधान प्लेटफॉर्म की विवाद समाधान प्रक्रिया के माध्यम से किया जाएगा।</p>
            
            <h3>6. अवधि और समाप्ति</h3>
            <p>यह समझौता किसी भी पक्ष द्वारा 30 दिनों के लिखित नोटिस के साथ समाप्त किया जा सकता है।</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderTerms;
