
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, ChevronRight, Check, X, Clock, MapPin, DollarSign } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react'; // Fixed import - no default export

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

type BookingStatus = 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';

interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  providerId: string;
  providerName: string;
  customerId: string;
  customerName: string;
  dateTime: string;
  address: Address;
  price: number;
  commission: number;
  status: BookingStatus;
  rating?: number;
  feedback?: string;
}

// Mock data for bookings
const mockBookings: Booking[] = [
  {
    id: 'b1',
    serviceId: 's1',
    serviceName: 'House Cleaning',
    providerId: 'p1',
    providerName: 'CleanMasters',
    customerId: 'c1',
    customerName: 'John Doe',
    dateTime: '2023-10-15T10:00:00',
    address: {
      street: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105'
    },
    price: 799,
    commission: 79.9,
    status: 'pending'
  },
  {
    id: 'b2',
    serviceId: 's2',
    serviceName: 'Plumbing Repair',
    providerId: 'p1',
    providerName: 'CleanMasters',
    customerId: 'c2',
    customerName: 'Jane Smith',
    dateTime: '2023-10-16T14:00:00',
    address: {
      street: '456 Market St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94103'
    },
    price: 649,
    commission: 64.9,
    status: 'confirmed'
  },
  {
    id: 'b3',
    serviceId: 's3',
    serviceName: 'Electrical Work',
    providerId: 'p1',
    providerName: 'CleanMasters',
    customerId: 'c3',
    customerName: 'Robert Brown',
    dateTime: '2023-10-12T11:00:00',
    address: {
      street: '789 Oak St',
      city: 'Oakland',
      state: 'CA',
      zipCode: '94610'
    },
    price: 599,
    commission: 59.9,
    status: 'completed'
  }
];

const BookingManagement: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [showQR, setShowQR] = useState<string | null>(null);
  const { toast } = useToast();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleAccept = (id: string) => {
    // Using type assertion to ensure the status is of type BookingStatus
    const updatedBookings = bookings.map(booking => 
      booking.id === id ? { ...booking, status: 'confirmed' as BookingStatus } : booking
    );
    setBookings(updatedBookings);
    toast({
      title: "Booking Accepted",
      description: "You have accepted the booking request.",
    });
  };

  const handleReject = (id: string) => {
    // Using type assertion to ensure the status is of type BookingStatus
    const updatedBookings = bookings.map(booking => 
      booking.id === id ? { ...booking, status: 'cancelled' as BookingStatus } : booking
    );
    setBookings(updatedBookings);
    toast({
      title: "Booking Rejected",
      description: "You have rejected the booking request.",
    });
  };

  const handleStart = (id: string) => {
    // Using type assertion to ensure the status is of type BookingStatus
    const updatedBookings = bookings.map(booking => 
      booking.id === id ? { ...booking, status: 'in-progress' as BookingStatus } : booking
    );
    setBookings(updatedBookings);
    toast({
      title: "Service Started",
      description: "You have marked this service as in progress.",
    });
  };

  const handleComplete = (id: string) => {
    // Using type assertion to ensure the status is of type BookingStatus
    const updatedBookings = bookings.map(booking => 
      booking.id === id ? { ...booking, status: 'completed' as BookingStatus } : booking
    );
    setBookings(updatedBookings);
    toast({
      title: "Service Completed",
      description: "You have marked this service as completed.",
    });
  };

  const getStatusBadge = (status: BookingStatus) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'confirmed':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800">Confirmed</Badge>;
      case 'in-progress':
        return <Badge variant="outline" className="bg-purple-100 text-purple-800">In Progress</Badge>;
      case 'completed':
        return <Badge variant="outline" className="bg-green-100 text-green-800">Completed</Badge>;
      case 'cancelled':
        return <Badge variant="outline" className="bg-red-100 text-red-800">Cancelled</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const filteredBookings = activeTab === 'all' 
    ? bookings 
    : bookings.filter(booking => booking.status === activeTab);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Manage Your Bookings</h1>
      
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Bookings</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab}>
          {filteredBookings.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No bookings found</h3>
              <p className="text-muted-foreground">You don't have any {activeTab !== 'all' ? activeTab : ''} bookings at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredBookings.map((booking) => (
                <Card key={booking.id} className="mb-4">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{booking.serviceName}</CardTitle>
                        <p className="text-muted-foreground">{booking.customerName}</p>
                      </div>
                      {getStatusBadge(booking.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={18} className="text-muted-foreground" />
                          <span>{formatDate(booking.dateTime)}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin size={18} className="text-muted-foreground" />
                          <span>
                            {booking.address.street}, {booking.address.city}, {booking.address.state} {booking.address.zipCode}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign size={18} className="text-muted-foreground" />
                          <span>₹{booking.price} (Commission: ₹{booking.commission})</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:items-end justify-center gap-2">
                        {booking.status === 'pending' && (
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              className="text-red-600 hover:text-red-700"
                              onClick={() => handleReject(booking.id)}
                            >
                              <X size={16} className="mr-1" /> Reject
                            </Button>
                            <Button 
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleAccept(booking.id)}
                            >
                              <Check size={16} className="mr-1" /> Accept
                            </Button>
                          </div>
                        )}
                        
                        {booking.status === 'confirmed' && (
                          <Button 
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => handleStart(booking.id)}
                          >
                            <Clock size={16} className="mr-1" /> Start Service
                          </Button>
                        )}
                        
                        {booking.status === 'in-progress' && (
                          <div className="flex flex-col items-center gap-2">
                            <Button 
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleComplete(booking.id)}
                            >
                              <Check size={16} className="mr-1" /> Mark as Completed
                            </Button>
                            <Button 
                              variant="outline"
                              onClick={() => setShowQR(booking.id)}
                            >
                              Show Payment QR
                            </Button>
                          </div>
                        )}
                        
                        {booking.status === 'completed' && (
                          <Button 
                            variant="outline"
                            onClick={() => setShowQR(booking.id)}
                          >
                            Show Payment QR
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    {showQR === booking.id && (
                      <div className="mt-4 flex flex-col items-center">
                        <h3 className="font-medium mb-2">Scan to Pay</h3>
                        <QRCodeSVG 
                          value={`payment:${booking.id}:${booking.price}`} 
                          size={200} 
                          className="mb-2"
                        />
                        <p className="text-sm text-muted-foreground mb-2">
                          Amount: ₹{booking.price}
                        </p>
                        <Button variant="outline" onClick={() => setShowQR(null)}>
                          Close
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingManagement;
