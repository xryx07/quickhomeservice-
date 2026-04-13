
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, User, LogIn, Home, Briefcase, Phone, LogOut } from 'lucide-react';
import { AuthModal } from './auth';
import { useToast } from '@/components/ui/use-toast';
import { ThemeToggle } from './theme-toggle';
import { useAuth } from '@/contexts/AuthContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isAuthenticated, profile, userRole, signOut } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openLoginModal = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const openRegisterModal = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const handleLogout = async () => {
    await signOut();
    toast({
      title: "लॉग आउट / Logged out",
      description: "आप सफलतापूर्वक लॉग आउट हो गए हैं।",
    });
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold">QuickHomeService</h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link font-medium">
              <span className="flex items-center gap-1"><Home size={18} /> होम</span>
            </Link>
            <Link to="/services" className="nav-link font-medium">
              <span className="flex items-center gap-1"><Briefcase size={18} /> सेवाएं</span>
            </Link>
            <Link to="/become-provider" className="nav-link font-medium">
              <span className="flex items-center gap-1"><User size={18} /> प्रोवाइडर बनें</span>
            </Link>
            <Link to="/contact" className="nav-link font-medium">
              <span className="flex items-center gap-1"><Phone size={18} /> संपर्क</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />

            {isAuthenticated ? (
              <div className="relative group">
                <Button variant="ghost" className="flex items-center gap-2">
                  <User size={18} /> {profile?.full_name || 'मेरा खाता'}
                </Button>
                <div className="absolute right-0 mt-2 w-48 bg-background rounded-md shadow-lg invisible group-hover:visible transition-all border border-border">
                  <div className="py-1">
                    <Link to={userRole === 'provider' ? '/provider/profile' : '/profile'} className="block px-4 py-2 hover:bg-muted">
                      प्रोफ़ाइल
                    </Link>
                    {userRole === 'admin' && (
                      <Link to="/admin" className="block px-4 py-2 hover:bg-muted">
                        एडमिन डैशबोर्ड
                      </Link>
                    )}
                    {userRole === 'provider' && (
                      <Link to="/provider/dashboard" className="block px-4 py-2 hover:bg-muted">
                        प्रोवाइडर डैशबोर्ड
                      </Link>
                    )}
                    <button onClick={handleLogout} className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-muted">
                      <LogOut size={16} /> लॉग आउट
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Button variant="ghost" onClick={openLoginModal} className="flex items-center gap-2">
                  <LogIn size={18} /> लॉगिन
                </Button>
                <Button onClick={openRegisterModal} className="btn-brand">साइन अप</Button>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button onClick={toggleMenu}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="nav-link font-medium py-2">होम / Home</Link>
              <Link to="/services" className="nav-link font-medium py-2">सेवाएं / Services</Link>
              <Link to="/become-provider" className="nav-link font-medium py-2">प्रोवाइडर बनें</Link>
              <Link to="/contact" className="nav-link font-medium py-2">संपर्क / Contact</Link>

              {isAuthenticated ? (
                <>
                  <Link to={userRole === 'provider' ? '/provider/profile' : '/profile'} className="nav-link font-medium py-2">
                    प्रोफ़ाइल
                  </Link>
                  <button onClick={handleLogout} className="text-left py-2 nav-link font-medium">
                    लॉग आउट
                  </button>
                </>
              ) : (
                <div className="flex space-x-4 pt-2">
                  <Button variant="outline" onClick={openLoginModal} className="w-full">लॉगिन</Button>
                  <Button onClick={openRegisterModal} className="w-full btn-brand">साइन अप</Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        setMode={setAuthMode}
      />
    </nav>
  );
};

export default Navigation;
