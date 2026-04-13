
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { indianStates, getCitiesByState } from '@/data/indianLocations';
import { useLanguage } from '@/contexts/LanguageContext';

interface AddressFormProps {
  street: string;
  setStreet: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  state: string;
  setState: (value: string) => void;
  zipCode: string;
  setZipCode: (value: string) => void;
  landmark: string;
  setLandmark: (value: string) => void;
  addressType: 'home' | 'work' | 'other';
  setAddressType: (value: 'home' | 'work' | 'other') => void;
  handleGetCurrentLocation: () => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({
  street, setStreet, city, setCity, state, setState,
  zipCode, setZipCode, landmark, setLandmark,
  addressType, setAddressType, handleGetCurrentLocation
}) => {
  const { t } = useLanguage();
  const cities = state ? getCitiesByState(state) : [];

  return (
    <>
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <Label htmlFor="addressType">{t('booking.address_type')}</Label>
          <Button type="button" variant="outline" size="sm" onClick={handleGetCurrentLocation} className="text-xs">
            📍 {t('booking.current_location')}
          </Button>
        </div>
        <Select value={addressType} onValueChange={(value) => setAddressType(value as 'home' | 'work' | 'other')}>
          <SelectTrigger id="addressType"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="home">🏠 {t('booking.home')}</SelectItem>
            <SelectItem value="work">🏢 {t('booking.work')}</SelectItem>
            <SelectItem value="other">📍 {t('booking.other')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label htmlFor="street">{t('booking.street')}</Label>
        <Textarea id="street" placeholder="House no., building, street, colony..." value={street} onChange={(e) => setStreet(e.target.value)} className="resize-none" rows={2} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="state">{t('booking.state')}</Label>
          <Select value={state} onValueChange={(val) => { setState(val); setCity(''); }}>
            <SelectTrigger id="state"><SelectValue placeholder={t('booking.select_state')} /></SelectTrigger>
            <SelectContent>
              {indianStates.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="city">{t('booking.city')}</Label>
          <Select value={city} onValueChange={setCity} disabled={!state}>
            <SelectTrigger id="city"><SelectValue placeholder={state ? t('booking.select_city') : t('booking.select_state_first')} /></SelectTrigger>
            <SelectContent>
              {cities.map((c) => (<SelectItem key={c} value={c}>{c}</SelectItem>))}
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="zipCode">{t('booking.pin')}</Label>
          <Input id="zipCode" placeholder="6-digit PIN code" value={zipCode} onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 6))} maxLength={6} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="landmark">{t('booking.landmark')}</Label>
          <Input id="landmark" placeholder="Nearby landmark" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
        </div>
      </div>
    </>
  );
};

export default AddressForm;
