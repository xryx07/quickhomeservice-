
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { User, AtSign, Phone, Key } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { validateIndianPhone } from '@/data/indianLocations';

interface RegistrationFormProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: RegistrationFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { signUp } = useAuth();
  const { t } = useLanguage();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (phone && !validateIndianPhone(phone)) {
      toast({ title: "Invalid Phone", description: "Please enter a valid 10-digit Indian mobile number.", variant: "destructive" });
      return;
    }
    if (password.length < 6) {
      toast({ title: "Weak Password", description: "Password must be at least 6 characters.", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    try {
      const phoneFormatted = phone ? (phone.startsWith('+91') ? phone : `+91${phone.replace(/\D/g, '')}`) : '';
      const { error } = await signUp(email, password, name, phoneFormatted);
      if (error) {
        toast({ title: "Registration Failed", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Registration Successful!", description: "Your account has been created. Welcome!" });
        onClose();
      }
    } catch {
      toast({ title: "Registration failed", description: "Something went wrong.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">{t('auth.full_name')}</Label>
        <div className="relative">
          <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input id="name" placeholder="Enter your full name" className="pl-10" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="reg-email">{t('auth.email')}</Label>
        <div className="relative">
          <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input id="reg-email" type="email" placeholder="Enter your email" className="pl-10" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">{t('auth.phone')}</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input id="phone" placeholder="10-digit mobile number" className="pl-10" value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={10} />
        </div>
        <p className="text-xs text-muted-foreground">e.g. 9876543210</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="reg-password">{t('auth.password')}</Label>
        <div className="relative">
          <Key className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input id="reg-password" type="password" placeholder="Create a password (min 6 chars)" className="pl-10" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
        </div>
      </div>
      <Button type="submit" className="w-full btn-brand" disabled={isLoading}>
        {isLoading ? t('auth.processing') : t('auth.register_btn')}
      </Button>
    </form>
  );
};

export default RegistrationForm;
