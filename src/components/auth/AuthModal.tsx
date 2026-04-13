
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { useLanguage } from '@/contexts/LanguageContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
  setMode: (mode: 'login' | 'register') => void;
}

const AuthModal = ({ isOpen, onClose, mode, setMode }: AuthModalProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {mode === 'login' ? t('auth.welcome') : t('auth.create_account')}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={mode} onValueChange={(value) => setMode(value as 'login' | 'register')}>
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="login">{t('nav.login')}</TabsTrigger>
            <TabsTrigger value="register">{t('nav.signup')}</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <LoginForm onClose={onClose} />
          </TabsContent>

          <TabsContent value="register">
            <RegistrationForm onClose={onClose} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
