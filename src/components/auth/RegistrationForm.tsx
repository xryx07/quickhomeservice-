
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { User, AtSign, Phone, Key } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
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

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (phone && !validateIndianPhone(phone)) {
      toast({
        title: "अमान्य फ़ोन नंबर",
        description: "कृपया एक मान्य 10 अंकों का भारतीय मोबाइल नंबर दर्ज करें।",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Weak Password",
        description: "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const phoneFormatted = phone.startsWith('+91') ? phone : `+91${phone.replace(/\D/g, '')}`;
      const { error } = await signUp(email, password, name, phoneFormatted);

      if (error) {
        toast({
          title: "पंजीकरण विफल / Registration Failed",
          description: error.message || "Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "पंजीकरण सफल! / Registration Successful!",
          description: "कृपया अपना ईमेल सत्यापित करें। Please check your email to verify your account.",
        });
        onClose();
      }
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">पूरा नाम / Full Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            id="name"
            placeholder="अपना पूरा नाम दर्ज करें"
            className="pl-10"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="reg-email">ईमेल / Email</Label>
        <div className="relative">
          <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            id="reg-email"
            type="email"
            placeholder="अपना ईमेल दर्ज करें"
            className="pl-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">फ़ोन नंबर / Phone (+91)</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            id="phone"
            placeholder="10 अंकों का मोबाइल नंबर"
            className="pl-10"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={10}
          />
        </div>
        <p className="text-xs text-muted-foreground">उदाहरण: 9876543210</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="reg-password">पासवर्ड / Password</Label>
        <div className="relative">
          <Key className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            id="reg-password"
            type="password"
            placeholder="पासवर्ड बनाएं (कम से कम 6 अक्षर)"
            className="pl-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
      </div>

      <Button type="submit" className="w-full btn-brand" disabled={isLoading}>
        {isLoading ? 'प्रोसेसिंग...' : 'पंजीकरण करें / Register'}
      </Button>
    </form>
  );
};

export default RegistrationForm;
