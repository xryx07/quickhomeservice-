
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CreditCard, Banknote } from 'lucide-react';

interface PaymentSelectorProps {
  paymentMethod: 'prepaid' | 'onservice';
  setPaymentMethod: (method: 'prepaid' | 'onservice') => void;
  price: number;
}

const PaymentSelector: React.FC<PaymentSelectorProps> = ({
  paymentMethod, setPaymentMethod, price
}) => {
  const commissionAmount = Math.round(price * 0.05);
  const totalAmount = price + commissionAmount;

  return (
    <>
      <div className="space-y-2">
        <Label>Payment Method</Label>
        <RadioGroup 
          value={paymentMethod} 
          onValueChange={(value) => setPaymentMethod(value as 'prepaid' | 'onservice')}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2 rounded-md border p-3">
            <RadioGroupItem value="prepaid" id="prepaid" />
            <Label htmlFor="prepaid" className="flex items-center cursor-pointer">
              <CreditCard className="mr-2 h-4 w-4" />
              Pay Now (Online)
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-3">
            <RadioGroupItem value="onservice" id="onservice" />
            <Label htmlFor="onservice" className="flex items-center cursor-pointer">
              <Banknote className="mr-2 h-4 w-4" />
              Pay After Service (QR Code)
            </Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Service Price:</span>
          <span className="font-semibold">₹{price}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Platform Fee:</span>
          <span>₹{commissionAmount}</span>
        </div>
        <div className="flex justify-between items-center mt-2 text-lg font-bold">
          <span>Total:</span>
          <span>₹{totalAmount}</span>
        </div>
      </div>
    </>
  );
};

export default PaymentSelector;
