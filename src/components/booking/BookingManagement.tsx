
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Booking } from '@/utils/types';
import { Check, X, QrCode, MapPin, Calendar, Clock, Phone, Mail, User } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react'; // Corrected import

interface BookingManagementProps {
  providerId: string;
}

const BookingManagement = ({ providerId }: BookingManagementProps) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showQRCode, setShowQRCode] = useState(false);
  const { toast } = useToast();
  
  // Mock data fetch - this would be replaced with an actual API call
  useEffect(() => {
    // Simulate API fetch
    const mockBookings: Booking[] = [
      {
        id: 'b1',
        serviceId: 's1',
        serviceName: 'Home Cleaning',
        providerId: 'p1',
        providerName: 'CleanMasters',
        customerId: 'c1',
        customerName: 'John Doe',
        status: 'pending',
        dateTime: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
        address: {
          id: 'a1',
          type: 'home',
          street: '123 Main St',
          city: 'Mumbai',
          state: 'Maharashtra',
          zipCode: '400001'
        },
        price: 799,
        commission: 79.9 // 10% commission
      },
      {
        id: 'b2',
        serviceId: 's2',
        serviceName: 'Electrical Repair',
        providerId: 'p1',
        providerName: 'CleanMasters',
        customerId: 'c2',
        customerName: 'Jane Smith',
        status: 'confirmed',
        dateTime: new Date(Date.now() + 172800000).toISOString(), // Day after tomorrow
        address: {
          id: 'a2',
          type: 'work',
          street: '456 Office Park',
          city: 'Delhi',
          state: 'Delhi',
          zipCode: '110001'
        },
        price: 599,
        commission: 59.9 // 10% commission
      },
      {
        id: 'b3',
        serviceId: 's3',
        serviceName: 'Plumbing Service',
        providerId: 'p1',
        providerName: 'CleanMasters',
        customerId: 'c3',
        customerName: 'Robert Johnson',
        status: 'in-progress',
        dateTime: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
        address: {
          id: 'a3',
          type: 'home',
          street: '789 Park Avenue',
          city: 'Bangalore',
          state: 'Karnataka',
          zipCode: '560001'
        },
        price: 649,
        commission: 64.9 // 10% commission
      }
    ];
    
    setBookings(mockBookings.filter(booking => booking.providerId === providerId));
  }, [providerId]);
  
  const handleAcceptBooking = (booking: Booking) => {
    // This would be an API call to update the booking status
    const updatedBookings = bookings.map(b => 
      b.id === booking.id ? { ...b, status: 'confirmed' as const } : b
    );
    setBookings(updatedBookings);
    
    toast({
      title: "Booking Accepted",
      description: `You have accepted the booking for ${booking.serviceName}. The customer has been notified.`,
    });
    
    // In a real implementation, this would trigger a notification to the customer
    console.log(`Notification sent to customer ${booking.customerName} via SMS and email`);
  };
  
  const handleRejectBooking = (booking: Booking) => {
    // This would be an API call to update the booking status
    const updatedBookings = bookings.map(b => 
      b.id === booking.id ? { ...b, status: 'cancelled' as const } : b
    );
    setBookings(updatedBookings);
    
    toast({
      title: "Booking Rejected",
      description: `You have rejected the booking for ${booking.serviceName}. The customer has been notified.`,
    });
    
    // In a real implementation, this would trigger a notification to the customer
    console.log(`Rejection notification sent to customer ${booking.customerName} via SMS and email`);
  };
  
  const handleStartService = (booking: Booking) => {
    // This would be an API call to update the booking status
    const updatedBookings = bookings.map(b => 
      b.id === booking.id ? { ...b, status: 'in-progress' as const } : b
    );
    setBookings(updatedBookings);
    
    toast({
      title: "Service Started",
      description: `You have started the service for ${booking.customerName}. The customer has been notified.`,
    });
    
    // In a real implementation, this would trigger a notification to the customer
    console.log(`Service start notification sent to customer ${booking.customerName} via SMS`);
  };
  
  const handleCompleteService = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowQRCode(true);
  };
  
  const handlePaymentReceived = () => {
    if (!selectedBooking) return;
    
    // This would be an API call to update the booking status and process payment
    const updatedBookings = bookings.map(b => 
      b.id === selectedBooking.id ? { ...b, status: 'completed' as const } : b
    );
    setBookings(updatedBookings);
    
    toast({
      title: "Payment Received",
      description: `Payment of ₹${selectedBooking.price} has been processed. ₹${selectedBooking.price - selectedBooking.commission} will be credited to your account after commission.`,
    });
    
    setShowQRCode(false);
    setSelectedBooking(null);
    
    // In a real implementation, this would process the payment and notify all parties
    console.log(`Payment processed for booking ${selectedBooking.id}`);
    console.log(`Completion notification sent to customer ${selectedBooking.customerName} via SMS and email`);
  };
  
  return (
    <div className="space-y-6">
      <Tabs defaultValue="pending">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending" className="space-y-4">
          {bookings.filter(b => b.status === 'pending').length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">
                No pending bookings
              </CardContent>
            </Card>
          ) : (
            bookings
              .filter(b => b.status === 'pending')
              .map(booking => (
                <Card key={booking.id}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{booking.serviceName}</CardTitle>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700"
                          onClick={() => handleRejectBooking(booking)}
                        >
                          <X className="h-4 w-4 mr-1" /> Reject
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700"
                          onClick={() => handleAcceptBooking(booking)}
                        >
                          <Check className="h-4 w-4 mr-1" /> Accept
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <User className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{booking.customerName}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>customer@example.com</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{new Date(booking.dateTime).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{new Date(booking.dateTime).toLocaleTimeString()}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{booking.address.street}, {booking.address.city}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t flex justify-between">
                      <span className="font-medium">Service Fee:</span>
                      <span className="font-bold">₹{booking.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))
          )}
        </TabsContent>
        
        <TabsContent value="confirmed" className="space-y-4">
          {bookings.filter(b => b.status === 'confirmed').length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">
                No confirmed bookings
              </CardContent>
            </Card>
          ) : (
            bookings
              .filter(b => b.status === 'confirmed')
              .map(booking => (
                <Card key={booking.id}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{booking.serviceName}</CardTitle>
                      <Button 
                        size="sm" 
                        onClick={() => handleStartService(booking)}
                      >
                        Start Service
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Display same booking details as in pending tab */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <User className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{booking.customerName}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>customer@example.com</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{new Date(booking.dateTime).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{new Date(booking.dateTime).toLocaleTimeString()}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{booking.address.street}, {booking.address.city}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t flex justify-between">
                      <span className="font-medium">Service Fee:</span>
                      <span className="font-bold">₹{booking.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))
          )}
        </TabsContent>
        
        <TabsContent value="in-progress" className="space-y-4">
          {bookings.filter(b => b.status === 'in-progress').length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">
                No services in progress
              </CardContent>
            </Card>
          ) : (
            bookings
              .filter(b => b.status === 'in-progress')
              .map(booking => (
                <Card key={booking.id}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{booking.serviceName}</CardTitle>
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => handleCompleteService(booking)}
                      >
                        <QrCode className="h-4 w-4 mr-1" /> 
                        Complete & Get Payment
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Display same booking details as in other tabs */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <User className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{booking.customerName}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>customer@example.com</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{new Date(booking.dateTime).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{new Date(booking.dateTime).toLocaleTimeString()}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{booking.address.street}, {booking.address.city}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t flex justify-between">
                      <span className="font-medium">Service Fee:</span>
                      <span className="font-bold">₹{booking.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))
          )}
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          {bookings.filter(b => b.status === 'completed').length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">
                No completed services
              </CardContent>
            </Card>
          ) : (
            bookings
              .filter(b => b.status === 'completed')
              .map(booking => (
                <Card key={booking.id}>
                  <CardHeader>
                    <CardTitle>{booking.serviceName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Display same booking details as in other tabs */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <User className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{booking.customerName}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>customer@example.com</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{new Date(booking.dateTime).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{new Date(booking.dateTime).toLocaleTimeString()}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>{booking.address.street}, {booking.address.city}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex justify-between">
                        <span className="font-medium">Service Fee:</span>
                        <span className="font-bold">₹{booking.price}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Commission (10%):</span>
                        <span>₹{booking.commission}</span>
                      </div>
                      <div className="flex justify-between mt-2 text-green-600 font-bold">
                        <span>Your Earnings:</span>
                        <span>₹{booking.price - booking.commission}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
          )}
        </TabsContent>
      </Tabs>
      
      {/* QR Code Modal for Payment */}
      {showQRCode && selectedBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Payment QR Code</h3>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <QRCodeSVG 
                  value={`https://quickhomeservice.com/pay?booking=${selectedBooking.id}&amount=${selectedBooking.price}`} 
                  size={200}
                  className="mx-auto"
                />
              </div>
              <p className="mt-4 text-center">
                Show this QR code to the customer for payment of ₹{selectedBooking.price}
              </p>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" onClick={() => setShowQRCode(false)}>
                  Cancel
                </Button>
                <Button onClick={handlePaymentReceived}>
                  Payment Received
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingManagement;
