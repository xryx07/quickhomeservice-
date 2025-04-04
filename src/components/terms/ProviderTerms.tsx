
import { ShieldCheck, Globe } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProviderTerms = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-6">
        <ShieldCheck className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-semibold">Service Provider Terms</h2>
      </div>
      
      <p className="mb-4 text-muted-foreground">
        Last updated: April 4, 2025
      </p>
      
      <Tabs defaultValue="english" className="mb-6">
        <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto">
          <TabsTrigger value="english" className="flex items-center">
            <Globe className="h-4 w-4 mr-2" /> English
          </TabsTrigger>
          <TabsTrigger value="hindi" className="flex items-center">
            <Globe className="h-4 w-4 mr-2" /> हिंदी
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="english" className="mt-6">
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
        </TabsContent>
        
        <TabsContent value="hindi" className="mt-6">
          <div className="prose prose-blue max-w-none">
            <p>
              ये सेवा प्रदाता शर्तें ("प्रदाता शर्तें") हमारे प्लेटफॉर्म पर एक सेवा प्रदाता के रूप में आपकी भागीदारी को नियंत्रित करती हैं।
              सेवा प्रदाता के रूप में पंजीकरण करके, आप हमारी सामान्य सेवा शर्तों के अतिरिक्त इन प्रदाता शर्तों से बंधे होने के लिए सहमत होते हैं।
            </p>
            
            <Accordion type="single" collapsible className="my-6">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  1. सेवा प्रदाता पात्रता और ऑनबोर्डिंग
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-2">
                  <p>1.1 आपकी आयु कम से कम 18 वर्ष होनी चाहिए और आप अपने क्षेत्राधिकार में कानूनी रूप से काम करने के योग्य होने चाहिए।</p>
                  <p>1.2 आपको हमारी सत्यापन प्रक्रिया पूरी करनी होगी, जिसमें पृष्ठभूमि जांच और कौशल मूल्यांकन शामिल हो सकते हैं।</p>
                  <p>1.3 आपको पंजीकरण और ऑनबोर्डिंग के दौरान सटीक, वर्तमान और पूर्ण जानकारी प्रदान करनी होगी।</p>
                  <p>1.4 आप अपनी सेवाओं के लिए आवश्यक सभी लाइसेंस, परमिट और बीमा बनाए रखने के लिए जिम्मेदार हैं।</p>
                  <p>1.5 हम अपने विवेक से आपके आवेदन को अस्वीकार करने या आपके प्रदाता खाते को समाप्त करने का अधिकार रखते हैं।</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  2. सेवा लिस्टिंग और मूल्य निर्धारण
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-2">
                  <p>2.1 आप सटीक सेवा लिस्टिंग बनाने के लिए जिम्मेदार हैं, जिसमें विवरण, मूल्य निर्धारण और उपलब्धता शामिल हैं।</p>
                  <p>2.2 आप अपने स्वयं के मूल्य निर्धारित करते हैं, हालांकि हम प्लेटफॉर्म मानकों को बनाए रखने के लिए मूल्य निर्धारण दिशानिर्देश सुझा सकते हैं।</p>
                  <p>2.3 आप कृत्रिम रूप से कीमतों को बढ़ा नहीं सकते हैं या अन्य प्रदाताओं के साथ मूल्य निर्धारण में संलग्न नहीं हो सकते हैं।</p>
                  <p>2.4 हम उन लिस्टिंग को हटाने या संशोधित करने का अधिकार रखते हैं जो हमारी नीतियों या लागू कानूनों का उल्लंघन करती हैं।</p>
                  <p>2.5 आप सहमत हैं कि हम आपकी सेवाओं को हमारे प्लेटफॉर्म भर में विभिन्न प्रारूपों और संदर्भों में प्रदर्शित कर सकते हैं।</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  3. सेवा वितरण और मानक
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-2">
                  <p>3.1 आप पेशेवर, सक्षम और समय पर सेवाएं प्रदान करने के लिए सहमत हैं।</p>
                  <p>3.2 आपको निर्धारित अपॉइंटमेंट पर समय पर और उचित रूप से सुसज्जित होकर पहुंचना होगा।</p>
                  <p>3.3 आपको अपनी सेवाओं पर लागू होने वाले सभी सुरक्षा प्रोटोकॉल और उद्योग मानकों का पालन करना होगा।</p>
                  <p>3.4 आप अपने स्वयं के उपकरण और उपकरण लाने के लिए जिम्मेदार हैं, जब तक कि अन्यथा निर्दिष्ट न हो।</p>
                  <p>3.5 आप ग्राहकों के साथ पेशेवर रूप से संवाद करने और किसी भी समस्या या देरी के बारे में तुरंत सूचित करने के लिए सहमत हैं।</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">
                  4. भुगतान और कमीशन
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-2">
                  <p>4.1 हम हमारे प्लेटफॉर्म के माध्यम से बुक की गई सभी पूर्ण सेवाओं पर 25% कमीशन लेते हैं।</p>
                  <p>4.2 भुगतान हमारे प्लेटफॉर्म के माध्यम से संसाधित किए जाएंगे और हमारे भुगतान अनुसूची के अनुसार आपके खाते में वितरित किए जाएंगे।</p>
                  <p>4.3 आप हमारे प्लेटफॉर्म के माध्यम से अर्जित आय पर सभी करों के लिए जिम्मेदार हैं।</p>
                  <p>4.4 आप हमारे प्लेटफॉर्म के माध्यम से बुक की गई सेवाओं के लिए ग्राहकों से सीधे भुगतान स्वीकार नहीं करने के लिए सहमत हैं।</p>
                  <p>4.5 भुगतान विवादों को हमारी भुगतान विवाद समाधान प्रक्रिया के अनुसार हल किया जाएगा।</p>
                  <p>4.6 यदि कोई ग्राहक आपकी सेवा से संतुष्ट नहीं है, तो वह हमारी ग्राहक संतुष्टि नीति द्वारा निर्धारित आंशिक या पूर्ण धनवापसी के लिए पात्र हो सकता है।</p>
                  <p>4.7 ग्राहकों से सीधे भुगतान एकत्र करना और इसे प्लेटफॉर्म को रिपोर्ट करने में विफलता सख्ती से निषिद्ध है और इसके परिणामस्वरूप आपके खाते को तुरंत समाप्त कर दिया जाएगा और संभावित कानूनी कार्रवाई की जाएगी।</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">
                  5. रद्दीकरण और नो-शोज़
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-2">
                  <p>5.1 आपको हमारी रद्दीकरण नीति का पालन करना होगा और यदि आप बुकिंग को पूरा नहीं कर सकते हैं तो अग्रिम सूचना प्रदान करनी होगी।</p>
                  <p>5.2 बार-बार रद्दीकरण या नो-शोज़ के परिणामस्वरूप दंड हो सकता है, जिसमें खाता निलंबन शामिल है।</p>
                  <p>5.3 यदि कोई ग्राहक बुकिंग रद्द करता है, तो हमारी रद्दीकरण नीति के अनुसार मुआवजा प्रदान किया जाएगा।</p>
                  <p>5.4 अप्रत्याशित घटनाओं का मूल्यांकन रद्दीकरण उद्देश्यों के लिए केस-बाय-केस आधार पर किया जाएगा।</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-medium">
                  6. प्लेटफॉर्म के साथ संबंध
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-2">
                  <p>6.1 आप एक स्वतंत्र ठेकेदार हैं और हमारे प्लेटफॉर्म के कर्मचारी, भागीदार या एजेंट नहीं हैं।</p>
                  <p>6.2 आप कर्मचारी लाभों के हकदार नहीं हैं और आप अपने स्वयं के खर्चों और बीमा के लिए जिम्मेदार हैं।</p>
                  <p>6.3 आप अपने आप को हमारे प्लेटफॉर्म के कर्मचारी या प्रतिनिधि के रूप में प्रस्तुत नहीं कर सकते हैं।</p>
                  <p>6.4 आप अन्य प्लेटफॉर्मों या स्वतंत्र रूप से सेवाएं प्रदान करने का अधिकार रखते हैं।</p>
                  <p>6.5 हम उचित सूचना के साथ इन प्रदाता शर्तों को संशोधित करने का अधिकार रखते हैं।</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg font-medium">
                  7. सेवा गुणवत्ता और प्रदर्शन
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-2">
                  <p>7.1 सेवा गुणवत्ता मानक:</p>
                  <p className="ml-6">7.1.1 आपसे अपेक्षा की जाती है कि आप अपनी सेवा लिस्टिंग में वर्णित गुणवत्ता मानकों को पूरा करने या उससे अधिक सेवाएं प्रदान करेंगे।</p>
                  <p className="ml-6">7.1.2 यदि कोई ग्राहक आपकी सेवा से असंतुष्ट है, तो वह हमारी ग्राहक संतुष्टि टीम द्वारा समीक्षा का अनुरोध कर सकता है।</p>
                  <p className="ml-6">7.1.3 यदि सेवा वादा की गई गुणवत्ता से काफी कम होने का निर्धारण किया जाता है, तो आपको केवल आंशिक भुगतान या कोई भुगतान नहीं मिल सकता है।</p>
                  
                  <p>7.2 प्रदर्शन परिणाम:</p>
                  <p className="ml-6">7.2.1 लगातार खराब प्रदर्शन या ग्राहक असंतोष के परिणामस्वरूप हमारे प्लेटफॉर्म पर आपकी सेवाओं की दृश्यता कम हो सकती है।</p>
                  <p className="ml-6">7.2.2 सेवा मानकों को पूरा करने में बार-बार विफलता के परिणामस्वरूप अस्थायी निलंबन या आपके प्रदाता खाते की स्थायी समाप्ति हो सकती है।</p>
                  <p className="ml-6">7.2.3 हमारी शर्तों का सीधा उल्लंघन, जिसमें धोखाधड़ी व्यवहार, सेवाओं का गलत प्रतिनिधित्व, या प्लेटफॉर्म के बाहर भुगतान एकत्र करना शामिल है, के परिणामस्वरूप तत्काल समाप्ति और संभावित कानूनी कार्रवाई होगी।</p>
                  
                  <p>7.3 उत्कृष्टता के लिए प्रोत्साहन:</p>
                  <p className="ml-6">7.3.1 उच्च रेटिंग और ग्राहक संतुष्टि बनाए रखने वाले प्रदाताओं को खोज परिणामों और सिफारिशों में प्राथमिकता दी जाएगी।</p>
                  <p className="ml-6">7.3.2 शीर्ष प्रदर्शन करने वाले प्रदाता कम कमीशन दरों और प्रचार अवसरों के लिए योग्य हो सकते हैं।</p>
                  <p className="ml-6">7.3.3 लगातार उच्च रेटेड प्रदाता हमारे "प्रीमियम प्रदाता" कार्यक्रम के लिए पात्र होंगे, जिसमें अतिरिक्त लाभ और बढ़े हुए काम के अवसर शामिल हैं।</p>
                  <p className="ml-6">7.3.4 शीर्ष प्रदर्शन करने वाले प्रदाताओं को नई सेवा श्रेणियों और बाजार विस्तार के लिए प्राथमिकता मिल सकती है।</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg font-medium">
                  8. विवाद समाधान और दंड
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 space-y-2">
                  <p>8.1 सेवा विवाद:</p>
                  <p className="ml-6">8.1.1 सभी सेवा गुणवत्ता विवादों की समीक्षा हमारी ग्राहक संतुष्टि टीम द्वारा 5 कार्य दिवसों के भीतर की जाएगी।</p>
                  <p className="ml-6">8.1.2 ग्राहक संतुष्टि टीम प्रदाता और ग्राहक दोनों से प्रमाण का अनुरोध कर सकती है।</p>
                  <p className="ml-6">8.1.3 समीक्षा के आधार पर, टीम यह निर्धारित कर सकती है कि पूर्ण भुगतान, आंशिक भुगतान या कोई भुगतान नहीं का औचित्य है।</p>
                  
                  <p>8.2 निषिद्ध आचरण और दंड:</p>
                  <p className="ml-6">8.2.1 ग्राहकों को प्लेटफॉर्म के बाहर सीधे सेवाएं बुक करने के लिए आकर्षित करना सख्ती से निषिद्ध है।</p>
                  <p className="ml-6">8.2.2 प्लेटफॉर्म के माध्यम से बुक की गई सेवाओं के लिए ग्राहकों से सीधे भुगतान एकत्र करने के परिणामस्वरूप तत्काल खाता समाप्ति होगी।</p>
                  <p className="ml-6">8.2.3 जानबूझकर निम्न स्तर की सेवाएं प्रदान करने या अपेशेवर आचरण में संलग्न होने के परिणामस्वरूप खाता निलंबन हो सकता है।</p>
                  <p className="ml-6">8.2.4 योग्यता या सेवाओं के झूठे विज्ञापन या गलत प्रतिनिधित्व के परिणामस्वरूप सेवा लिस्टिंग को तुरंत हटा दिया जाएगा।</p>
                  
                  <p>8.3 अपील प्रक्रिया:</p>
                  <p className="ml-6">8.3.1 प्रदाता ग्राहक संतुष्टि टीम द्वारा लिए गए निर्णयों के खिलाफ 10 कार्य दिवसों के भीतर अपील कर सकते हैं।</p>
                  <p className="ml-6">8.3.2 अपीलों की समीक्षा वरिष्ठ प्रबंधन टीम के सदस्य द्वारा की जाएगी।</p>
                  <p className="ml-6">8.3.3 अपील पर लिया गया निर्णय अंतिम और बाध्यकारी है।</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProviderTerms;
