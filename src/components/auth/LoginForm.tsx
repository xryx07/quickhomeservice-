
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { AtSign, Key } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface LoginFormProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { signIn } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await signIn(email, password);
      if (error) {
        toast({
          title: "लॉगिन विफल / Login Failed",
          description: error.message || "Invalid credentials. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "स्वागत है! / Welcome!",
          description: "QuickHomeService में आपका स्वागत है!",
        });
        onClose();
      }
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="login-email">ईमेल / Email</Label>
        <div className="relative">
          <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            id="login-email"
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
        <Label htmlFor="login-password">पासवर्ड / Password</Label>
        <div className="relative">
          <Key className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <Input
            id="login-password"
            type="password"
            placeholder="अपना पासवर्ड दर्ज करें"
            className="pl-10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full btn-brand" disabled={isLoading}>
        {isLoading ? 'प्रोसेसिंग...' : 'लॉगिन करें / Login'}
      </Button>
    </form>
  );
};

export default LoginForm;
