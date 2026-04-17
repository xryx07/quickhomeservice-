import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

const dict = {
  // Nav
  'nav.home': { en: 'Home', hi: 'होम' },
  'nav.services': { en: 'Services', hi: 'सेवाएं' },
  'nav.provider': { en: 'Become a Pro', hi: 'प्रोवाइडर बनें' },
  'nav.contact': { en: 'Contact', hi: 'संपर्क' },
  'nav.login': { en: 'Sign in', hi: 'लॉगिन' },
  'nav.signup': { en: 'Get started', hi: 'साइन अप' },
  'nav.account': { en: 'My account', hi: 'मेरा खाता' },
  'nav.profile': { en: 'Profile', hi: 'प्रोफ़ाइल' },
  'nav.logout': { en: 'Sign out', hi: 'लॉग आउट' },
  'nav.admin': { en: 'Admin dashboard', hi: 'एडमिन डैशबोर्ड' },
  'nav.providerDash': { en: 'Provider dashboard', hi: 'प्रोवाइडर डैशबोर्ड' },

  // Hero
  'hero.eyebrow': { en: 'Issue 01 — Home, considered.', hi: 'अंक 01 — घर, सोच-समझ कर।' },
  'hero.title.a': { en: 'The new standard', hi: 'घरेलू सेवा का' },
  'hero.title.b': { en: 'in home services.', hi: 'नया मानक।' },
  'hero.lede': {
    en: 'Vetted professionals, fixed prices, and a service experience designed with the care of a master craftsman — not a call-centre.',
    hi: 'जांचे-परखे पेशेवर, तय कीमत और मास्टर कारीगर की देखभाल के साथ डिज़ाइन किया गया सेवा अनुभव।',
  },
  'hero.search': { en: 'What needs fixing today?', hi: 'आज क्या ठीक करना है?' },
  'hero.cta': { en: 'Find a pro', hi: 'प्रो खोजें' },
  'hero.stat1.k': { en: 'Verified pros', hi: 'सत्यापित प्रो' },
  'hero.stat2.k': { en: 'Cities served', hi: 'शहर' },
  'hero.stat3.k': { en: 'Average rating', hi: 'औसत रेटिंग' },

  // Sections
  'cat.eyebrow': { en: 'The Catalogue', hi: 'सूची' },
  'cat.title.a': { en: 'Every craft, ', hi: 'हर कला, ' },
  'cat.title.b': { en: 'one address.', hi: 'एक पता।' },
  'cat.lede': {
    en: 'From a leaking tap to a full home repaint — browse a curated catalogue of services delivered with quiet expertise.',
    hi: 'टपकते नल से लेकर घर की पूरी पेंटिंग तक — शांत विशेषज्ञता के साथ क्यूरेटेड सेवाओं की सूची देखें।',
  },
  'cat.count': { en: 'services', hi: 'सेवाएं' },

  'how.eyebrow': { en: 'The Method', hi: 'तरीका' },
  'how.title': { en: 'Booking, refined.', hi: 'बुकिंग, परिष्कृत।' },
  'how.s1.t': { en: 'Choose with intention', hi: 'सोच-समझ कर चुनें' },
  'how.s1.d': { en: 'Browse honest reviews, real pricing, and the people behind the work — no filler, no surprises.', hi: 'ईमानदार समीक्षाएं, असली कीमतें और काम के पीछे के लोगों को देखें।' },
  'how.s2.t': { en: 'A time that suits you', hi: 'आपके अनुकूल समय' },
  'how.s2.d': { en: 'Pick a slot down to the half-hour. We respect the calendar of a busy household.', hi: 'आधे-घंटे तक स्लॉट चुनें। हम व्यस्त घर के कैलेंडर का सम्मान करते हैं।' },
  'how.s3.t': { en: 'Work, beautifully done', hi: 'काम, खूबसूरती से पूरा' },
  'how.s3.d': { en: 'Your professional arrives on time, in uniform, and leaves the space cleaner than they found it.', hi: 'आपका पेशेवर समय पर, वर्दी में आता है और जगह को पहले से साफ छोड़ता है।' },

  'why.eyebrow': { en: 'What sets us apart', hi: 'हमारी पहचान' },
  'why.title.a': { en: 'Quiet luxury, ', hi: 'शांत विलासिता, ' },
  'why.title.b': { en: 'everyday prices.', hi: 'रोज़मर्रा के दाम।' },
  'why.f1.t': { en: 'Fixed-price quotes', hi: 'तय कीमत' },
  'why.f1.d': { en: 'You see the price before they ring the bell. No hourly games, no last-minute surcharges.', hi: 'घंटी बजाने से पहले कीमत देखें। कोई छुपी फीस नहीं।' },
  'why.f2.t': { en: '60-minute response', hi: '60-मिनट प्रतिक्रिया' },
  'why.f2.d': { en: 'Pipe burst at 11pm? Our emergency network is on the road in under an hour, every hour.', hi: '11 बजे रात पाइप फटा? हमारा इमरजेंसी नेटवर्क हर घंटे एक घंटे में रास्ते में है।' },
  'why.f3.t': { en: 'QuickGuard cover', hi: 'क्विकगार्ड सुरक्षा' },
  'why.f3.d': { en: 'Every booking is insured up to ₹10,000 against accidental damage. The fine print is short, and fair.', hi: 'हर बुकिंग दुर्घटनावश नुकसान के विरुद्ध ₹10,000 तक बीमित है।' },
  'why.f4.t': { en: 'Bilingual service', hi: 'द्विभाषी सेवा' },
  'why.f4.d': { en: 'English, हिंदी, and the warmth of being understood. Switch the site language with a single tap.', hi: 'English, हिंदी, और समझे जाने की गर्माहट। एक टैप में भाषा बदलें।' },

  'cta.eyebrow': { en: 'For professionals', hi: 'पेशेवरों के लिए' },
  'cta.title.a': { en: 'Build a craft business ', hi: 'अपने अनुसार ' },
  'cta.title.b': { en: 'on your own terms.', hi: 'कारीगरी का व्यवसाय बनाएं।' },
  'cta.lede': { en: 'Set your own hours, keep 88% of what you earn, and join a guild of professionals who take pride in their work.', hi: 'अपने घंटे तय करें, अपनी कमाई का 88% रखें, और काम पर गर्व करने वाले पेशेवरों के समूह में शामिल हों।' },
  'cta.btn': { en: 'Apply to join', hi: 'शामिल होने के लिए आवेदन करें' },

  // Footer
  'foot.tag': { en: 'Home services, considered.', hi: 'घरेलू सेवाएं, सोची-समझी।' },
  'foot.company': { en: 'Company', hi: 'कंपनी' },
  'foot.about': { en: 'About', hi: 'हमारे बारे में' },
  'foot.careers': { en: 'Careers', hi: 'करियर' },
  'foot.press': { en: 'Press', hi: 'प्रेस' },
  'foot.help': { en: 'Help', hi: 'सहायता' },
  'foot.contact': { en: 'Contact', hi: 'संपर्क' },
  'foot.terms': { en: 'Terms', hi: 'नियम' },
  'foot.privacy': { en: 'Privacy', hi: 'गोपनीयता' },
  'foot.svc': { en: 'Services', hi: 'सेवाएं' },
  'foot.rights': { en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।' },
  'foot.made': { en: 'Crafted in India', hi: 'भारत में निर्मित' },
};

type Key = keyof typeof dict;

interface Ctx {
  language: Language;
  setLanguage: (l: Language) => void;
  t: (k: Key) => string;
}

const LanguageContext = createContext<Ctx | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLang] = useState<Language>(() => {
    return (localStorage.getItem('app-lang') as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('app-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (k: Key) => dict[k]?.[language] ?? k;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
