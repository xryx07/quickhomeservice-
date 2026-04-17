
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="phone">फ़ोन नंबर / Phone (+91)</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="10 अंकों का मोबाइल नंबर"
            value={phone}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '').slice(0, 10);
              setPhone(val);
            }}
            maxLength={10}
          />
          <p className="text-xs text-muted-foreground">उदाहरण: 9876543210</p>
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="email">ईमेल / Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="अपना ईमेल दर्ज करें"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      
      <div className="space-y-1">
        <Label htmlFor="note">विशेष निर्देश / Special Instructions (वैकल्पिक)</Label>
        <Textarea
          id="note"
          placeholder="कोई विशेष अनुरोध या निर्देश..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="resize-none"
          rows={3}
        />
      </div>
    </>
  );
};

export default ContactForm;
