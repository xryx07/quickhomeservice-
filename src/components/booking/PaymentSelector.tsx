
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Smartphone, Banknote } from 'lucide-react';
import { formatINR } from '@/data/indianLocations';
import { useLanguage } from '@/contexts/LanguageContext';

interface PaymentSelectorProps {
  paymentMethod: 'prepaid' | 'onservice';
  setPaymentMethod: (method: 'prepaid' | 'onservice') => void;
  price: number;
}

export const PaymentSelector: React.FC<PaymentSelectorProps> = ({
  paymentMethod, setPaymentMethod, price
}) => {
  const { t } = useLanguage();

  return (
    <>
      <div className="space-y-2">
        <Label>{t('booking.payment')}</Label>
        <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as 'prepaid' | 'onservice')} className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2 rounded-md border p-3">
            <RadioGroupItem value="prepaid" id="prepaid" />
            <Label htmlFor="prepaid" className="flex items-center cursor-pointer">
              <Smartphone className="mr-2 h-4 w-4" /> {t('booking.pay_online')}
            </Label>
          </div>
          <div className="flex items-center space-x-2 rounded-md border p-3">
            <RadioGroupItem value="onservice" id="onservice" />
            <Label htmlFor="onservice" className="flex items-center cursor-pointer">
              <Banknote className="mr-2 h-4 w-4" /> {t('booking.pay_after')}
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="border-t pt-4 space-y-1">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>Service Charge</span>
          <span>{formatINR(price)}</span>
        </div>
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{t('booking.gst')}</span>
          <span>{formatINR(Math.round(price * 0.18))}</span>
        </div>
        <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
          <span>{t('booking.total')}:</span>
          <span>{formatINR(Math.round(price * 1.18))}</span>
        </div>
      </div>
    </>
  );
};

export default PaymentSelector;
