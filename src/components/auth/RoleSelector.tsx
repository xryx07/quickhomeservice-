
import { Label } from '@/components/ui/label';

interface RoleSelectorProps {
  role: 'customer' | 'provider';
  setRole: (role: 'customer' | 'provider') => void;
}

const RoleSelector = ({ role, setRole }: RoleSelectorProps) => {
  return (
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
  );
};

export default RoleSelector;
