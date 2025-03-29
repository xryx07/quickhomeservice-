import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { Service } from '@/utils/types';
import DateTimeSelector from './DateTimeSelector';
import AddressForm from './AddressForm';
import ContactForm from './ContactForm';
import PaymentSelector from './PaymentSelector';

interface BookingFormProps {
  service: Service;
  onBookingComplete?: () => void;
}

const BookingForm = ({ service, onBookingComplete }: BookingFormProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [street, setStreet] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [landmark, setLandmark] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [addressType, setAddressType] = useState<'home' | 'work' | 'other'>('home');
  const [paymentMethod, setPaymentMethod] = useState<'prepaid' | 'onservice'>('prepaid');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleGetCurrentLocation = () => {
    setStreet('123 Current Location');
    setCity('Mumbai');
    setState('Maharashtra');
    setZipCode('400001');
    
    toast({
      title: "Location Detected",
      description: "We've detected your current location. Please verify the address details.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot || !street || !city || !state || !zipCode || !phone || !email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      const bookingData = {
        serviceId: service.id,
        serviceName: service.name,
        providerId: service.providerId,
        providerName: service.providerName,
        dateTime: new Date(`${format(date, 'yyyy-MM-dd')} ${timeSlot}`).toISOString(),
        address: {
          type: addressType,
          street,
          city,
          state,
          zipCode,
          landmark
        },
        customerPhone: phone,
        customerEmail: email,
        note: note,
        price: service.price,
        paymentMethod
      };
      
      console.log('Booking created:', bookingData);
      
      if (paymentMethod === 'prepaid') {
        toast({
          title: "Redirecting to Payment",
          description: `You'll be redirected to complete payment of ₹${service.price} for your booking.`,
        });
        
        setTimeout(() => {
          toast({
            title: "Payment Successful!",
            description: `Your booking for ${service.name} has been confirmed. You will receive a confirmation email and SMS shortly.`,
          });
          
          setIsSubmitting(false);
          
          resetForm();
          
          if (onBookingComplete) {
            onBookingComplete();
          }
        }, 2000);
      } else {
        toast({
          title: "Booking Successful!",
          description: `Your booking for ${service.name} has been placed. You will pay ₹${service.price} after the service is completed. You will receive a confirmation email and SMS shortly.`,
        });
        
        setIsSubmitting(false);
        
        resetForm();
        
        if (onBookingComplete) {
          onBookingComplete();
        }
      }
    }, 1500);
  };
  
  const resetForm = () => {
    setDate(undefined);
    setTimeSlot('');
    setStreet('');
    setCity('');
    setState('');
    setZipCode('');
    setLandmark('');
    setPhone('');
    setEmail('');
    setNote('');
    setAddressType('home');
    setPaymentMethod('prepaid');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book {service.name}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <DateTimeSelector 
            date={date} 
            setDate={setDate} 
            timeSlot={timeSlot} 
            setTimeSlot={setTimeSlot} 
          />
          
          <AddressForm 
            street={street}
            setStreet={setStreet}
            city={city}
            setCity={setCity}
            state={state}
            setState={setState}
            zipCode={zipCode}
            setZipCode={setZipCode}
            landmark={landmark}
            setLandmark={setLandmark}
            addressType={addressType}
            setAddressType={setAddressType}
            handleGetCurrentLocation={handleGetCurrentLocation}
          />
          
          <ContactForm 
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            note={note}
            setNote={setNote}
          />
          
          <PaymentSelector 
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            price={service.price}
          />
        </CardContent>
        
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-brand-600 hover:bg-brand-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : paymentMethod === 'prepaid' ? "Pay & Confirm Booking" : "Confirm Booking"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default BookingForm;
