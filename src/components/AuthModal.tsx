
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { User, Key, AtSign, Phone, RefreshCw } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
  setMode: (mode: 'login' | 'register') => void;
}

const AuthModal = ({ isOpen, onClose, mode, setMode }: AuthModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isPhoneVerifying, setIsPhoneVerifying] = useState(false);
  const [role, setRole] = useState<'customer' | 'provider'>('customer');
  const [isLoading, setIsLoading] = useState(false);
  
  const { toast } = useToast();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login for demonstration
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Logged in successfully",
        description: "Welcome back to UrbanPro!",
      });
      onClose();
    }, 1500);
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isPhoneVerifying) {
      setIsPhoneVerifying(true);
      toast({
        title: "Verification code sent",
        description: `We've sent a verification code to ${phone}`,
      });
      return;
    }
    
    setIsLoading(true);
    
    // Mock registration for demonstration
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration successful",
        description: `You've been registered as a ${role}`,
      });
      onClose();
      
      // Reset form
      setEmail('');
      setPassword('');
      setName('');
      setPhone('');
      setOtp('');
      setIsPhoneVerifying(false);
    }, 1500);
  };
  
  const sendOtpAgain = () => {
    toast({
      title: "Verification code sent again",
      description: `We've sent a new verification code to ${phone}`,
    });
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {mode === 'login' ? 'Welcome Back!' : 'Create Your Account'}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue={mode} onValueChange={(value) => setMode(value as 'login' | 'register')}>
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Key className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="text-right">
                <a href="#" className="text-sm text-brand-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              
              <Button type="submit" className="w-full btn-brand" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4">
              {!isPhoneVerifying ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        className="pl-10"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reg-email">Email</Label>
                    <div className="relative">
                      <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="reg-email"
                        placeholder="Enter your email"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        className="pl-10"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reg-password">Password</Label>
                    <div className="relative">
                      <Key className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="reg-password"
                        type="password"
                        placeholder="Create a password"
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Register as</Label>
                    <div className="flex gap-4">
                      <div 
                        className={`flex-1 border rounded-md p-3 cursor-pointer ${role === 'customer' ? 'border-brand-600 bg-brand-50' : ''}`}
                        onClick={() => setRole('customer')}
                      >
                        <div className="font-medium">Customer</div>
                        <div className="text-sm text-muted-foreground">Book services</div>
                      </div>
                      <div 
                        className={`flex-1 border rounded-md p-3 cursor-pointer ${role === 'provider' ? 'border-brand-600 bg-brand-50' : ''}`}
                        onClick={() => setRole('provider')}
                      >
                        <div className="font-medium">Provider</div>
                        <div className="text-sm text-muted-foreground">Offer services</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <p className="text-muted-foreground">
                      We've sent a verification code to {phone}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="otp">Verification Code</Label>
                    <Input
                      id="otp"
                      placeholder="Enter verification code"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2"
                    onClick={sendOtpAgain}
                  >
                    <RefreshCw size={16} /> Resend Code
                  </Button>
                </div>
              )}
              
              <Button type="submit" className="w-full btn-brand" disabled={isLoading}>
                {isLoading 
                  ? 'Processing...' 
                  : isPhoneVerifying 
                    ? 'Complete Registration' 
                    : 'Continue to Verification'}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
