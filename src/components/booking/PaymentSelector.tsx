
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CreditCard, Banknote, Smartphone } from 'lucide-react';
import { formatINR } from '@/data/indianLocations';

interface PaymentSelectorProps {
  paymentMethod: 'prepaid' | 'onservice';
  setPaymentMethod: (method: 'prepaid' | 'onservice') => void;
  price: number;
}

export const PaymentSelector: React.FC<PaymentSelectorProps> = ({
  paymentMethod, setPaymentMethod, price
}) => {
  return (
    <>
      <div className="space-y-2">
        <Label>भुगतान विधि / Payment Method</Label>
        <RadioGroup
          value={paymentMethod}
          onValueChange={(value) => setPaymentMethod(value as 'prepaid' | 'onservice')}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2 rounded-md border p-3">
            <RadioGroupItem value="prepaid" id="prepaid" />
            <Label htmlFor="prepaid" className="flex items-center cursor-pointer">
              <Smartphone className="mr-2 h-4 w-4" />
              UPI / ऑनलाइन भुगतान करें
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-3">
            <RadioGroupItem value="onservice" id="onservice" />
            <Label htmlFor="onservice" className="flex items-center cursor-pointer">
              <Banknote className="mr-2 h-4 w-4" />
              सेवा के बाद भुगतान (नकद / UPI)
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>सेवा शुल्क / Service Charge</span>
          <span>{formatINR(price)}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>GST (18%)</span>
          <span>{formatINR(Math.round(price * 0.18))}</span>
        </div>
        <div className="flex justify-between items-center mt-2 text-lg font-bold border-t pt-2">
          <span>कुल / Total:</span>
          <span>{formatINR(Math.round(price * 1.18))}</span>
        </div>
      </div>
    </>
  );
};

export default PaymentSelector;
