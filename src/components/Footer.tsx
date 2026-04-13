
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">QH</span>
              </div>
              <h2 className="text-xl font-bold">QuickHomeService</h2>
            </div>
            <p className="mb-6 text-background/60 text-sm leading-relaxed">
              {t('footer.about')}
            </p>
            <div className="flex space-x-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: t('nav.home') },
                { to: '/services', label: t('nav.services') },
                { to: '/become-provider', label: t('nav.become_provider') },
                { to: '/contact', label: t('nav.contact') },
                { to: '/terms', label: t('footer.terms') },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-background/60 hover:text-background transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">{t('footer.our_services')}</h3>
            <ul className="space-y-2.5">
              {[
                { cat: 'cleaning', label: t('cat.cleaning') },
                { cat: 'electrician', label: t('cat.electrician') },
                { cat: 'plumbing', label: t('cat.plumbing') },
                { cat: 'beauty', label: t('cat.beauty') },
                { cat: 'appliance', label: t('cat.appliance') },
                { cat: 'painting', label: t('cat.painting') },
              ].map(s => (
                <li key={s.cat}>
                  <Link to={`/services?category=${s.cat}`} className="text-sm text-background/60 hover:text-background transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">{t('footer.contact_us')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-background/60">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>support@quickhomeservice.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/60">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+91 8770219859</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/60">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs text-background/40 font-medium uppercase tracking-wider mb-2">{t('footer.download_app')}</p>
              <div className="flex gap-2">
                <div className="bg-background/10 rounded-lg px-3 py-2 text-xs">
                  <span className="text-background/40">Coming Soon</span>
                  <p className="font-semibold text-sm">Google Play</p>
                </div>
                <div className="bg-background/10 rounded-lg px-3 py-2 text-xs">
                  <span className="text-background/40">Coming Soon</span>
                  <p className="font-semibold text-sm">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-background/40">
          <p>&copy; {new Date().getFullYear()} QuickHomeService. {t('footer.rights')}</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/terms" className="hover:text-background transition-colors">{t('footer.terms')}</Link>
            <Link to="/terms" className="hover:text-background transition-colors">{t('footer.privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
