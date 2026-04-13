
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

const translations = {
  // Navigation
  'nav.home': { en: 'Home', hi: 'होम' },
  'nav.services': { en: 'Services', hi: 'सेवाएं' },
  'nav.become_provider': { en: 'Become a Provider', hi: 'प्रोवाइडर बनें' },
  'nav.contact': { en: 'Contact', hi: 'संपर्क' },
  'nav.login': { en: 'Login', hi: 'लॉगिन' },
  'nav.signup': { en: 'Sign Up', hi: 'साइन अप' },
  'nav.my_account': { en: 'My Account', hi: 'मेरा खाता' },
  'nav.profile': { en: 'Profile', hi: 'प्रोफ़ाइल' },
  'nav.admin': { en: 'Admin Dashboard', hi: 'एडमिन डैशबोर्ड' },
  'nav.provider_dashboard': { en: 'Provider Dashboard', hi: 'प्रोवाइडर डैशबोर्ड' },
  'nav.logout': { en: 'Logout', hi: 'लॉग आउट' },
  'nav.my_bookings': { en: 'My Bookings', hi: 'मेरी बुकिंग' },

  // Hero
  'hero.title': { en: 'Quality home services, on demand', hi: 'गुणवत्ता वाली घर की सेवाएं, मांग पर' },
  'hero.subtitle': { en: 'Experienced, hand-picked Professionals to serve you at your doorstep', hi: 'अनुभवी, चुने हुए पेशेवर आपके दरवाज़े पर' },
  'hero.search_placeholder': { en: 'Search for services... (e.g. AC repair, plumber, electrician)', hi: 'सेवा खोजें... (जैसे AC रिपेयर, प्लंबर, इलेक्ट्रीशियन)' },
  'hero.search': { en: 'Search', hi: 'खोजें' },
  'hero.select_city': { en: 'Select your city', hi: 'अपना शहर चुनें' },
  'hero.trust_1': { en: 'Transparent Pricing', hi: 'पारदर्शी कीमत' },
  'hero.trust_1_desc': { en: 'See fixed prices before you book. No hidden charges.', hi: 'बुकिंग से पहले निश्चित कीमत देखें। कोई छुपी फीस नहीं।' },
  'hero.trust_2': { en: 'Verified Experts', hi: 'वेरिफाइड विशेषज्ञ' },
  'hero.trust_2_desc': { en: 'Our professionals are well trained and background verified.', hi: 'हमारे पेशेवर प्रशिक्षित और बैकग्राउंड वेरिफाइड हैं।' },
  'hero.trust_3': { en: 'Fully Equipped', hi: 'पूरी तरह सुसज्जित' },
  'hero.trust_3_desc': { en: 'We bring everything needed to get the job done well.', hi: 'काम पूरा करने के लिए ज़रूरी सब कुछ हम लाते हैं।' },
  'hero.quality_assured': { en: '100% Quality Assured', hi: '100% गुणवत्ता की गारंटी' },
  'hero.quality_desc': { en: "If you don't love our service, we will make it right.", hi: 'अगर सेवा पसंद न आए, तो हम ठीक करेंगे।' },

  // Categories
  'cat.cleaning': { en: 'Cleaning', hi: 'सफ़ाई' },
  'cat.electrician': { en: 'Electrician', hi: 'इलेक्ट्रीशियन' },
  'cat.plumbing': { en: 'Plumbing', hi: 'प्लंबिंग' },
  'cat.beauty': { en: 'Beauty & Spa', hi: 'ब्यूटी और स्पा' },
  'cat.appliance': { en: 'Appliance Repair', hi: 'अप्लायंस रिपेयर' },
  'cat.painting': { en: 'Home Painting', hi: 'होम पेंटिंग' },
  'cat.pest': { en: 'Pest Control', hi: 'पेस्ट कंट्रोल' },
  'cat.carpentry': { en: 'Carpentry', hi: 'बढ़ई का काम' },
  'cat.ac_repair': { en: 'AC Repair & Service', hi: 'AC रिपेयर और सर्विस' },
  'cat.men_salon': { en: "Men's Salon", hi: 'पुरुष सैलून' },
  'cat.women_salon': { en: "Women's Salon", hi: 'महिला सैलून' },
  'cat.bathroom': { en: 'Bathroom & Kitchen', hi: 'बाथरूम और किचन' },

  // Sections
  'section.browse_categories': { en: 'What are you looking for?', hi: 'आप क्या ढूंढ रहे हैं?' },
  'section.how_it_works': { en: 'How It Works', hi: 'कैसे काम करता है' },
  'section.why_us': { en: 'Why QuickHomeService?', hi: 'QuickHomeService क्यों?' },
  'section.popular_services': { en: 'Most Booked Services', hi: 'सबसे ज़्यादा बुक की गई सेवाएं' },
  'section.join_provider': { en: 'Join Our Network of Service Providers', hi: 'हमारे सेवा प्रदाता नेटवर्क से जुड़ें' },
  'section.join_provider_desc': { en: 'Are you a skilled professional? Partner with us to grow your business and reach more customers across India.', hi: 'क्या आप एक कुशल पेशेवर हैं? हमारे साथ जुड़ें और पूरे भारत में अपना व्यापार बढ़ाएं।' },
  'section.view_all': { en: 'View All Services', hi: 'सभी सेवाएं देखें' },

  // How it works
  'how.step1_title': { en: 'Choose Service', hi: 'सेवा चुनें' },
  'how.step1_desc': { en: 'Browse through our wide range of home services and pick what you need.', hi: 'हमारी विस्तृत घरेलू सेवाओं में से अपनी ज़रूरत चुनें।' },
  'how.step2_title': { en: 'Book Appointment', hi: 'अपॉइंटमेंट बुक करें' },
  'how.step2_desc': { en: 'Select your preferred date, time and provide your address details.', hi: 'अपनी पसंदीदा तारीख, समय चुनें और पता बताएं।' },
  'how.step3_title': { en: 'Get It Done', hi: 'काम पूरा करवाएं' },
  'how.step3_desc': { en: 'Our verified professional arrives at your doorstep and completes the service.', hi: 'हमारा वेरिफाइड प्रोफेशनल आपके घर आकर सेवा पूरी करता है।' },

  // Service Card
  'service.book_now': { en: 'Book Now', hi: 'अभी बुक करें' },
  'service.top_rated': { en: 'Top Rated', hi: 'टॉप रेटेड' },
  'service.features': { en: 'Features', hi: 'विशेषताएं' },
  'service.more': { en: 'more', hi: 'और' },
  'service.starts_at': { en: 'Starts at', hi: 'शुरुआत' },

  // Booking
  'booking.title': { en: 'Book', hi: 'बुक करें' },
  'booking.address_type': { en: 'Address Type', hi: 'पता प्रकार' },
  'booking.home': { en: 'Home', hi: 'घर' },
  'booking.work': { en: 'Office', hi: 'ऑफिस' },
  'booking.other': { en: 'Other', hi: 'अन्य' },
  'booking.street': { en: 'Street Address', hi: 'पता' },
  'booking.state': { en: 'State', hi: 'राज्य' },
  'booking.city': { en: 'City', hi: 'शहर' },
  'booking.pin': { en: 'PIN Code', hi: 'पिन कोड' },
  'booking.landmark': { en: 'Landmark (Optional)', hi: 'लैंडमार्क (वैकल्पिक)' },
  'booking.phone': { en: 'Phone Number', hi: 'फ़ोन नंबर' },
  'booking.email': { en: 'Email', hi: 'ईमेल' },
  'booking.notes': { en: 'Special Instructions (Optional)', hi: 'विशेष निर्देश (वैकल्पिक)' },
  'booking.payment': { en: 'Payment Method', hi: 'भुगतान विधि' },
  'booking.pay_online': { en: 'Pay Online (UPI/Card)', hi: 'ऑनलाइन भुगतान (UPI/कार्ड)' },
  'booking.pay_after': { en: 'Pay After Service (Cash/UPI)', hi: 'सेवा के बाद भुगतान (नकद/UPI)' },
  'booking.gst': { en: 'GST (18%)', hi: 'GST (18%)' },
  'booking.total': { en: 'Total', hi: 'कुल' },
  'booking.current_location': { en: 'Use Current Location', hi: 'वर्तमान स्थान' },
  'booking.confirm': { en: 'Confirm Booking', hi: 'बुकिंग कन्फर्म करें' },
  'booking.pay_confirm': { en: 'Pay & Confirm', hi: 'भुगतान करें और कन्फर्म करें' },
  'booking.select_state': { en: 'Select state', hi: 'राज्य चुनें' },
  'booking.select_city': { en: 'Select city', hi: 'शहर चुनें' },
  'booking.select_state_first': { en: 'Select state first', hi: 'पहले राज्य चुनें' },

  // Auth
  'auth.welcome': { en: 'Welcome Back!', hi: 'स्वागत है!' },
  'auth.create_account': { en: 'Create Your Account', hi: 'अपना खाता बनाएं' },
  'auth.email': { en: 'Email', hi: 'ईमेल' },
  'auth.password': { en: 'Password', hi: 'पासवर्ड' },
  'auth.full_name': { en: 'Full Name', hi: 'पूरा नाम' },
  'auth.phone': { en: 'Phone Number (+91)', hi: 'फ़ोन नंबर (+91)' },
  'auth.login_btn': { en: 'Login', hi: 'लॉगिन करें' },
  'auth.register_btn': { en: 'Register', hi: 'पंजीकरण करें' },
  'auth.processing': { en: 'Processing...', hi: 'प्रोसेसिंग...' },

  // Footer
  'footer.about': { en: 'Your one-stop solution for all home service needs. Trusted by lakhs of customers across India.', hi: 'घर की सभी सेवाओं के लिए एक ही जगह। पूरे भारत में लाखों ग्राहकों का भरोसा।' },
  'footer.quick_links': { en: 'Quick Links', hi: 'त्वरित लिंक' },
  'footer.our_services': { en: 'Our Services', hi: 'हमारी सेवाएं' },
  'footer.contact_us': { en: 'Contact Us', hi: 'संपर्क करें' },
  'footer.rights': { en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।' },
  'footer.terms': { en: 'Terms & Conditions', hi: 'नियम और शर्तें' },
  'footer.privacy': { en: 'Privacy Policy', hi: 'गोपनीयता नीति' },
  'footer.download_app': { en: 'Download App', hi: 'ऐप डाउनलोड करें' },

  // Unique features
  'unique.loyalty_title': { en: '🎁 QuickCoins Rewards', hi: '🎁 QuickCoins रिवार्ड्स' },
  'unique.loyalty_desc': { en: 'Earn coins on every booking. Redeem for discounts on future services.', hi: 'हर बुकिंग पर कॉइन कमाएं। भविष्य की सेवाओं पर छूट पाएं।' },
  'unique.emergency_title': { en: '🚨 Emergency Booking', hi: '🚨 इमरजेंसी बुकिंग' },
  'unique.emergency_desc': { en: 'Need urgent help? Book emergency services and get a professional within 60 minutes.', hi: 'तुरंत मदद चाहिए? इमरजेंसी बुकिंग करें और 60 मिनट में प्रोफेशनल पाएं।' },
  'unique.compare_title': { en: '⚖️ Compare Prices', hi: '⚖️ कीमतें तुलना करें' },
  'unique.compare_desc': { en: 'Compare prices from multiple providers and choose the best deal.', hi: 'कई प्रोवाइडर्स की कीमतों की तुलना करें और बेस्ट डील चुनें।' },
  'unique.tracking_title': { en: '📍 Live Tracking', hi: '📍 लाइव ट्रैकिंग' },
  'unique.tracking_desc': { en: 'Track your service provider in real-time from booking to completion.', hi: 'बुकिंग से लेकर काम पूरा होने तक अपने सर्विस प्रोवाइडर को ट्रैक करें।' },
  'unique.guarantee_title': { en: '🛡️ QuickGuard Protection', hi: '🛡️ QuickGuard सुरक्षा' },
  'unique.guarantee_desc': { en: 'Up to ₹10,000 damage protection on every service. Your home is safe with us.', hi: 'हर सेवा पर ₹10,000 तक की डैमेज प्रोटेक्शन। आपका घर हमारे साथ सुरक्षित।' },

  // Stats
  'stats.customers': { en: 'Happy Customers', hi: 'खुश ग्राहक' },
  'stats.providers': { en: 'Verified Providers', hi: 'वेरिफाइड प्रोवाइडर' },
  'stats.cities': { en: 'Cities Covered', hi: 'शहरों में सेवा' },
  'stats.bookings': { en: 'Bookings Completed', hi: 'बुकिंग पूरी' },

  // Common
  'common.view_details': { en: 'View Details', hi: 'विवरण देखें' },
  'common.become_provider': { en: 'Become a Provider', hi: 'प्रोवाइडर बनें' },
  'common.register_now': { en: 'Register Now', hi: 'अभी रजिस्टर करें' },
};

type TranslationKey = keyof typeof translations;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('qhs-language');
    return (saved === 'hi' ? 'hi' : 'en') as Language;
  });

  const t = (key: TranslationKey): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] || entry['en'] || key;
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'hi' : 'en';
    setLanguage(newLang);
    localStorage.setItem('qhs-language', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
