
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { indianStates, getCitiesByState } from '@/data/indianLocations';

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
  street, setStreet,
  city, setCity,
  state, setState,
  zipCode, setZipCode,
  landmark, setLandmark,
  addressType, setAddressType,
  handleGetCurrentLocation
}) => {
  const cities = state ? getCitiesByState(state) : [];

  return (
    <>
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <Label htmlFor="addressType">पता प्रकार / Address Type</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleGetCurrentLocation}
            className="text-xs"
          >
            📍 वर्तमान स्थान / Current Location
          </Button>
        </div>
        <Select value={addressType} onValueChange={(value) => setAddressType(value as 'home' | 'work' | 'other')}>
          <SelectTrigger id="addressType">
            <SelectValue placeholder="पता प्रकार चुनें" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="home">🏠 घर / Home</SelectItem>
            <SelectItem value="work">🏢 ऑफिस / Work</SelectItem>
            <SelectItem value="other">📍 अन्य / Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-1">
        <Label htmlFor="street">पता / Street Address</Label>
        <Textarea
          id="street"
          placeholder="मकान नंबर, भवन का नाम, गली, कॉलोनी..."
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="resize-none"
          rows={2}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="state">राज्य / State</Label>
          <Select value={state} onValueChange={(val) => { setState(val); setCity(''); }}>
            <SelectTrigger id="state">
              <SelectValue placeholder="राज्य चुनें" />
            </SelectTrigger>
            <SelectContent>
              {indianStates.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label htmlFor="city">शहर / City</Label>
          <Select value={city} onValueChange={setCity} disabled={!state}>
            <SelectTrigger id="city">
              <SelectValue placeholder={state ? "शहर चुनें" : "पहले राज्य चुनें"} />
            </SelectTrigger>
            <SelectContent>
              {cities.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
              <SelectItem value="other">अन्य / Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="zipCode">पिन कोड / PIN Code</Label>
          <Input
            id="zipCode"
            placeholder="6 अंकों का पिन कोड"
            value={zipCode}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '').slice(0, 6);
              setZipCode(val);
            }}
            maxLength={6}
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="landmark">लैंडमार्क (वैकल्पिक)</Label>
          <Input
            id="landmark"
            placeholder="नजदीकी लैंडमार्क"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default AddressForm;
