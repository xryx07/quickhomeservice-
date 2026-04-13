
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactFormProps {
  phone: string;
  setPhone: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  note: string;
  setNote: (value: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  phone, setPhone, email, setEmail, note, setNote
}) => {
  const { t } = useLanguage();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="phone">{t('booking.phone')} (+91)</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="10-digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
            maxLength={10}
          />
          <p className="text-xs text-muted-foreground">e.g. 9876543210</p>
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">{t('booking.email')}</Label>
          <Input id="email" type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor="note">{t('booking.notes')}</Label>
        <Textarea id="note" placeholder="Any special requirements..." value={note} onChange={(e) => setNote(e.target.value)} className="resize-none" rows={3} />
      </div>
    </>
  );
};

export default ContactForm;
