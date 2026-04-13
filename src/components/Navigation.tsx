
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, User, LogIn, Home, Briefcase, Phone, LogOut, CalendarDays, X } from 'lucide-react';
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openLoginModal = () => { setAuthMode('login'); setIsAuthModalOpen(true); };
  const openRegisterModal = () => { setAuthMode('register'); setIsAuthModalOpen(true); };

  const handleLogout = async () => {
    await signOut();
    toast({ title: t('nav.logout'), description: "You have been logged out." });
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">QH</span>
            </div>
            <span className="text-xl font-bold hidden sm:inline">QuickHomeService</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5">
              <Home size={16} /> {t('nav.home')}
            </Link>
            <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5">
              <Briefcase size={16} /> {t('nav.services')}
            </Link>
            <Link to="/become-provider" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5">
              <User size={16} /> {t('nav.become_provider')}
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5">
              <Phone size={16} /> {t('nav.contact')}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />

            {isAuthenticated ? (
              <div className="relative group">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center">
                    <User size={14} />
                  </div>
                  <span className="max-w-[100px] truncate text-sm">{profile?.full_name || t('nav.my_account')}</span>
                </Button>
                <div className="absolute right-0 mt-1 w-52 bg-background rounded-lg shadow-xl invisible group-hover:visible transition-all border border-border z-50">
                  <div className="py-2">
                    <Link to={userRole === 'provider' ? '/provider/profile' : '/profile'} className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-muted transition-colors">
                      <User size={14} /> {t('nav.profile')}
                    </Link>
                    <Link to="/profile" className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-muted transition-colors">
                      <CalendarDays size={14} /> {t('nav.my_bookings')}
                    </Link>
                    {userRole === 'admin' && (
                      <Link to="/admin" className="flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-muted transition-colors">
                        {t('nav.admin')}
                      </Link>
                    )}
                    <hr className="my-1 border-border" />
                    <button onClick={handleLogout} className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm hover:bg-muted text-destructive transition-colors">
                      <LogOut size={14} /> {t('nav.logout')}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={openLoginModal} className="text-sm">
                  <LogIn size={16} className="mr-1.5" /> {t('nav.login')}
                </Button>
                <Button size="sm" onClick={openRegisterModal} className="btn-brand text-sm">
                  {t('nav.signup')}
                </Button>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-1">
            <LanguageToggle />
            <ThemeToggle />
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-4 animate-fade-in border-t border-border pt-3">
            <div className="flex flex-col space-y-1">
              {[
                { to: '/', label: t('nav.home') },
                { to: '/services', label: t('nav.services') },
                { to: '/become-provider', label: t('nav.become_provider') },
                { to: '/contact', label: t('nav.contact') },
              ].map(link => (
                <Link key={link.to} to={link.to} className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-muted transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}

              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-muted" onClick={() => setIsMenuOpen(false)}>{t('nav.profile')}</Link>
                  <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="px-3 py-2.5 rounded-md text-sm font-medium text-destructive hover:bg-muted text-left">
                    {t('nav.logout')}
                  </button>
                </>
              ) : (
                <div className="flex gap-3 pt-2 px-3">
                  <Button variant="outline" size="sm" onClick={() => { openLoginModal(); setIsMenuOpen(false); }} className="flex-1">{t('nav.login')}</Button>
                  <Button size="sm" onClick={() => { openRegisterModal(); setIsMenuOpen(false); }} className="flex-1 btn-brand">{t('nav.signup')}</Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} mode={authMode} setMode={setAuthMode} />
    </nav>
  );
};

export default Navigation;
