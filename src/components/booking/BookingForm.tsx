
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { Service } from '@/utils/types';
import { useBookingForm } from './hooks/useBookingForm';
import { DateTimeSelector } from './DateTimeSelector';
import { AddressForm } from './AddressForm';
import { ContactForm } from './ContactForm';
import { PaymentSelector } from './PaymentSelector';

interface BookingFormProps {
  service: Service;
  onBookingComplete?: () => void;
}

const BookingForm = ({ service, onBookingComplete }: BookingFormProps) => {
  const { toast } = useToast();
  const {
    formData,
    updateFormData,
    isSubmitting,
    handleGetCurrentLocation,
    handleSubmit,
  } = useBookingForm(service, onBookingComplete, toast);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book {service.name}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <DateTimeSelector 
            date={formData.date} 
            setDate={(date) => updateFormData('date', date)} 
            timeSlot={formData.timeSlot} 
            setTimeSlot={(timeSlot) => updateFormData('timeSlot', timeSlot)} 
          />
          
          <AddressForm 
            street={formData.street}
            setStreet={(street) => updateFormData('street', street)}
            city={formData.city}
            setCity={(city) => updateFormData('city', city)}
            state={formData.state}
            setState={(state) => updateFormData('state', state)}
            zipCode={formData.zipCode}
            setZipCode={(zipCode) => updateFormData('zipCode', zipCode)}
            landmark={formData.landmark}
            setLandmark={(landmark) => updateFormData('landmark', landmark)}
            addressType={formData.addressType}
            setAddressType={(addressType) => updateFormData('addressType', addressType)}
            handleGetCurrentLocation={handleGetCurrentLocation}
          />
          
          <ContactForm 
            phone={formData.phone}
            setPhone={(phone) => updateFormData('phone', phone)}
            email={formData.email}
            setEmail={(email) => updateFormData('email', email)}
            note={formData.note}
            setNote={(note) => updateFormData('note', note)}
          />
          
          <PaymentSelector 
            paymentMethod={formData.paymentMethod}
            setPaymentMethod={(paymentMethod) => updateFormData('paymentMethod', paymentMethod)}
            price={service.price}
          />
        </CardContent>
        
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-brand-600 hover:bg-brand-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : formData.paymentMethod === 'prepaid' ? "Pay & Confirm Booking" : "Confirm Booking"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default BookingForm;
