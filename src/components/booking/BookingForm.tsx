
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { CalendarIcon, Clock, CreditCard, Banknote } from 'lucide-react';
import { Service, Address } from '@/utils/types';

interface BookingFormProps {
  service: Service;
  onBookingComplete?: () => void;
}

const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
];

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 
  'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
];

const states = [
  'Maharashtra', 'Delhi', 'Karnataka', 'Telangana', 'Tamil Nadu',
  'West Bengal', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'Madhya Pradesh'
];

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
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  
  const { toast } = useToast();

  const handleGetCurrentLocation = () => {
    // In a real implementation, this would use the browser's geolocation API
    // and then reverse geocode to get the address
    setUseCurrentLocation(true);
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
    
    // In a real application, this would be an API call to create a booking
    // Simulate API call with setTimeout
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
      
      // Show success toast based on payment method
      if (paymentMethod === 'prepaid') {
        toast({
          title: "Redirecting to Payment",
          description: `You'll be redirected to complete payment of ₹${service.price + Math.round(service.price * 0.05)} for your booking.`,
        });
        
        // Simulate payment processing
        setTimeout(() => {
          toast({
            title: "Payment Successful!",
            description: `Your booking for ${service.name} has been confirmed. You will receive a confirmation email and SMS shortly.`,
          });
          
          setIsSubmitting(false);
          
          // Reset form
          resetForm();
          
          // Callback if provided
          if (onBookingComplete) {
            onBookingComplete();
          }
        }, 2000);
      } else {
        toast({
          title: "Booking Successful!",
          description: `Your booking for ${service.name} has been placed. You will pay ₹${service.price + Math.round(service.price * 0.05)} after the service is completed. You will receive a confirmation email and SMS shortly.`,
        });
        
        setIsSubmitting(false);
        
        // Reset form
        resetForm();
        
        // Callback if provided
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
    setUseCurrentLocation(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book {service.name}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="date">Select Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                  id="date"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 1))}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="time">Select Time</Label>
            <Select value={timeSlot} onValueChange={setTimeSlot}>
              <SelectTrigger id="time">
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {slot}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <Label htmlFor="addressType">Address Type</Label>
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                onClick={handleGetCurrentLocation}
                className="text-xs"
              >
                Use Current Location
              </Button>
            </div>
            <Select value={addressType} onValueChange={(value) => setAddressType(value as 'home' | 'work' | 'other')}>
              <SelectTrigger id="addressType">
                <SelectValue placeholder="Select address type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="work">Work</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="street">Street Address</Label>
            <Textarea
              id="street"
              placeholder="Enter your street address, house number, building, etc."
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="resize-none"
              rows={2}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="city">City</Label>
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger id="city">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="state">State</Label>
              <Select value={state} onValueChange={setState}>
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="zipCode">PIN Code</Label>
              <Input
                id="zipCode"
                placeholder="Enter PIN code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="landmark">Landmark (Optional)</Label>
              <Input
                id="landmark"
                placeholder="Nearby landmark"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          
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
          
          <div className="space-y-1">
            <Label htmlFor="note">Special Instructions (Optional)</Label>
            <Textarea
              id="note"
              placeholder="Any special requirements or notes for the service provider"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="resize-none"
              rows={3}
            />
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Service Price:</span>
              <span className="font-semibold">₹{service.price}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Platform Fee:</span>
              <span>₹{Math.round(service.price * 0.05)}</span>
            </div>
            <div className="flex justify-between items-center mt-2 text-lg font-bold">
              <span>Total:</span>
              <span>₹{service.price + Math.round(service.price * 0.05)}</span>
            </div>
          </div>
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
