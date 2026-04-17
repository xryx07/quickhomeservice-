import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 pt-20 lg:pt-28 pb-10">
        {/* Oversized wordmark */}
        <div className="border-b border-background/10 pb-12 mb-12">
          <div className="font-display text-6xl md:text-8xl lg:text-[10rem] font-medium leading-none tracking-tighter">
            Quick<span className="display-italic text-primary">home</span>.
          </div>
          <p className="mt-6 text-background/60 text-lg max-w-md">{t('foot.tag')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <FooterCol title={t('foot.company')}>
            <FooterLink to="/">{t('foot.about')}</FooterLink>
            <FooterLink to="/become-provider">{t('nav.provider')}</FooterLink>
            <FooterLink to="/">{t('foot.careers')}</FooterLink>
            <FooterLink to="/">{t('foot.press')}</FooterLink>
          </FooterCol>

          <FooterCol title={t('foot.svc')}>
            <FooterLink to="/services?category=cleaning">Cleaning</FooterLink>
            <FooterLink to="/services?category=plumbing">Plumbing</FooterLink>
            <FooterLink to="/services?category=electrician">Electrical</FooterLink>
            <FooterLink to="/services?category=beauty">Beauty & Spa</FooterLink>
          </FooterCol>

          <FooterCol title={t('foot.help')}>
            <FooterLink to="/contact">{t('foot.contact')}</FooterLink>
            <FooterLink to="/terms">{t('foot.terms')}</FooterLink>
            <FooterLink to="/terms">{t('foot.privacy')}</FooterLink>
          </FooterCol>

          <FooterCol title="Connect">
            <a href="mailto:hello@quickhome.in" className="block py-1.5 text-sm text-background/70 hover:text-background transition-colors">
              hello@quickhome.in
            </a>
            <a href="tel:+918770219859" className="block py-1.5 text-sm text-background/70 hover:text-background transition-colors">
              +91 8770 219 859
            </a>
            <div className="flex gap-3 mt-4">
              <SocialIcon><Instagram size={16} /></SocialIcon>
              <SocialIcon><Twitter size={16} /></SocialIcon>
              <SocialIcon><Linkedin size={16} /></SocialIcon>
            </div>
          </FooterCol>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-widest text-background/50">
            © {year} Quickhome. {t('foot.rights')}
          </p>
          <p className="text-xs uppercase tracking-widest text-background/50 flex items-center gap-1">
            {t('foot.made')} <span className="text-primary">●</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h4 className="text-xs uppercase tracking-[0.2em] text-background/50 mb-5">{title}</h4>
    <div className="space-y-1">{children}</div>
  </div>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="group block py-1.5 text-sm text-background/70 hover:text-background transition-colors">
    <span className="inline-flex items-center gap-1">
      {children}
      <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
    </span>
  </Link>
);

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <a href="#" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center text-background/70 hover:bg-background hover:text-foreground hover:border-background transition-all">
    {children}
  </a>
);

export default Footer;
