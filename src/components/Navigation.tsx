import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AuthModal } from './auth';
import { useToast } from '@/components/ui/use-toast';
import { ThemeToggle } from './theme-toggle';
import { LanguageToggle } from './LanguageToggle';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isAuthenticated, profile, userRole, signOut } = useAuth();
  const { t } = useLanguage();

  const openLogin = () => { setAuthMode('login'); setIsAuthModalOpen(true); };
  const openSignup = () => { setAuthMode('register'); setIsAuthModalOpen(true); };

  const handleLogout = async () => {
    await signOut();
    toast({ title: t('nav.logout'), description: '' });
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo — wordmark with editorial slash */}
          <Link to="/" className="flex items-baseline gap-2 group">
            <span className="font-display text-2xl lg:text-[1.6rem] font-medium tracking-tight">Quick</span>
            <span className="font-display text-2xl lg:text-[1.6rem] font-medium tracking-tight display-italic text-primary">home</span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-muted-foreground ml-1 self-center">est. 2025</span>
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="nav-link text-sm uppercase tracking-widest font-medium">{t('nav.home')}</Link>
            <Link to="/services" className="nav-link text-sm uppercase tracking-widest font-medium">{t('nav.services')}</Link>
            <Link to="/become-provider" className="nav-link text-sm uppercase tracking-widest font-medium">{t('nav.provider')}</Link>
            <Link to="/contact" className="nav-link text-sm uppercase tracking-widest font-medium">{t('nav.contact')}</Link>
          </nav>

          {/* Right cluster */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <div className="w-px h-6 bg-border mx-2" />
            {isAuthenticated ? (
              <div className="relative group">
                <Button variant="ghost" className="text-sm rounded-full">
                  {profile?.full_name?.split(' ')[0] || t('nav.account')}
                </Button>
                <div className="absolute right-0 top-full pt-2 w-56 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all">
                  <div className="bg-popover border border-border rounded-lg shadow-[var(--shadow-lift)] py-2">
                    <Link to={userRole === 'provider' ? '/provider/profile' : '/profile'} className="block px-4 py-2.5 text-sm hover:bg-secondary">
                      {t('nav.profile')}
                    </Link>
                    {userRole === 'admin' && (
                      <Link to="/admin" className="block px-4 py-2.5 text-sm hover:bg-secondary">{t('nav.admin')}</Link>
                    )}
                    {userRole === 'provider' && (
                      <Link to="/provider/profile" className="block px-4 py-2.5 text-sm hover:bg-secondary">{t('nav.providerDash')}</Link>
                    )}
                    <div className="border-t border-border my-1" />
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-sm hover:bg-secondary">{t('nav.logout')}</button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Button variant="ghost" onClick={openLogin} className="text-sm rounded-full">{t('nav.login')}</Button>
                <Button onClick={openSignup} className="rounded-full bg-foreground text-background hover:bg-foreground/90 text-sm group">
                  {t('nav.signup')}
                  <ArrowUpRight size={15} className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </>
            )}
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 ml-1" aria-label="Menu">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-1">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="py-3 font-display text-2xl">{t('nav.home')}</Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} className="py-3 font-display text-2xl">{t('nav.services')}</Link>
              <Link to="/become-provider" onClick={() => setIsMenuOpen(false)} className="py-3 font-display text-2xl">{t('nav.provider')}</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="py-3 font-display text-2xl">{t('nav.contact')}</Link>
              <div className="h-px bg-border my-4" />
              {isAuthenticated ? (
                <>
                  <Link to={userRole === 'provider' ? '/provider/profile' : '/profile'} onClick={() => setIsMenuOpen(false)} className="py-3">{t('nav.profile')}</Link>
                  <button onClick={handleLogout} className="text-left py-3">{t('nav.logout')}</button>
                </>
              ) : (
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" onClick={openLogin} className="flex-1 rounded-full">{t('nav.login')}</Button>
                  <Button onClick={openSignup} className="flex-1 rounded-full bg-foreground text-background">{t('nav.signup')}</Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} mode={authMode} setMode={setAuthMode} />
    </header>
  );
};

export default Navigation;
