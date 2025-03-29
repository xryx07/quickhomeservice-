
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Booking } from '@/utils/types';
import { CalendarIcon, SearchIcon, PhoneIcon, MailIcon, MapPinIcon, UserIcon } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const statusColors: Record<string, string> = {
  'pending': 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
  'confirmed': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
  'in-progress': 'bg-purple-100 text-purple-800 hover:bg-purple-200',
  'completed': 'bg-green-100 text-green-800 hover:bg-green-200',
  'cancelled': 'bg-red-100 text-red-800 hover:bg-red-200',
};

const AdminBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  
  // Mock data - in a real implementation, this would be an API call
  useEffect(() => {
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
        providerId: 'p2',
        providerName: 'ElectriPro',
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
        providerId: 'p3',
        providerName: 'PlumbRight',
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
      },
      {
        id: 'b4',
        serviceId: 's4',
        serviceName: 'Professional Salon',
        providerId: 'p4',
        providerName: 'GlamHome',
        customerId: 'c4',
        customerName: 'Sarah Williams',
        status: 'completed',
        dateTime: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        address: {
          id: 'a4',
          type: 'home',
          street: '101 Residency Road',
          city: 'Chennai',
          state: 'Tamil Nadu',
          zipCode: '600001'
        },
        price: 899,
        commission: 89.9 // 10% commission
      },
      {
        id: 'b5',
        serviceId: 's1',
        serviceName: 'Home Cleaning',
        providerId: 'p1',
        providerName: 'CleanMasters',
        customerId: 'c5',
        customerName: 'Michael Brown',
        status: 'cancelled',
        dateTime: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        address: {
          id: 'a5',
          type: 'work',
          street: '202 IT Park',
          city: 'Pune',
          state: 'Maharashtra',
          zipCode: '411001'
        },
        price: 799,
        commission: 79.9 // 10% commission
      }
    ];
    
    setBookings(mockBookings);
  }, []);
  
  const filteredBookings = bookings.filter(booking => 
    booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.providerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const viewBookingDetails = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsDetailsOpen(true);
  };
  
  const formatDateTime = (dateTimeStr: string) => {
    const dateTime = new Date(dateTimeStr);
    return `${dateTime.toLocaleDateString()} at ${dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };
  
  return (
    <>
      <Navigation />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Booking Management</h1>
        
        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search bookings by customer, provider, service or ID..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Bookings</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          
          {['all', 'pending', 'confirmed', 'in-progress', 'completed', 'cancelled'].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBookings
                      .filter(booking => tab === 'all' || booking.status === tab)
                      .map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="font-medium">{booking.id}</TableCell>
                          <TableCell>{booking.serviceName}</TableCell>
                          <TableCell>{booking.customerName}</TableCell>
                          <TableCell>{booking.providerName}</TableCell>
                          <TableCell>{formatDateTime(booking.dateTime)}</TableCell>
                          <TableCell>₹{booking.price}</TableCell>
                          <TableCell>
                            <Badge className={statusColors[booking.status]}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => viewBookingDetails(booking)}
                            >
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      {/* Booking Details Dialog */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Booking Details</DialogTitle>
          </DialogHeader>
          
          {selectedBooking && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg">Booking Information</h3>
                  <div className="text-sm space-y-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Booking ID:</span>
                      <span className="font-medium">{selectedBooking.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-medium">{selectedBooking.serviceName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge className={statusColors[selectedBooking.status]}>
                        {selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date & Time:</span>
                      <span className="font-medium">{formatDateTime(selectedBooking.dateTime)}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg">Customer Information</h3>
                  <div className="text-sm space-y-2 mt-2">
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedBooking.customerName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="h-4 w-4 text-muted-foreground" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MailIcon className="h-4 w-4 text-muted-foreground" />
                      <span>customer@example.com</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg">Provider Information</h3>
                  <div className="text-sm space-y-2 mt-2">
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-4 w-4 text-muted-foreground" />
                      <span>{selectedBooking.providerName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="h-4 w-4 text-muted-foreground" />
                      <span>+91 87654 32109</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MailIcon className="h-4 w-4 text-muted-foreground" />
                      <span>provider@example.com</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg">Service Address</h3>
                  <div className="text-sm space-y-2 mt-2 border rounded-md p-3">
                    <div className="font-medium">{selectedBooking.address.type.charAt(0).toUpperCase() + selectedBooking.address.type.slice(1)} Address</div>
                    <div>{selectedBooking.address.street}</div>
                    <div>{selectedBooking.address.city}, {selectedBooking.address.state} - {selectedBooking.address.zipCode}</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg">Payment Information</h3>
                  <div className="text-sm space-y-2 mt-2 border rounded-md p-3">
                    <div className="flex justify-between">
                      <span>Service Amount:</span>
                      <span className="font-medium">₹{selectedBooking.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform Fee (5%):</span>
                      <span>₹{Math.round(selectedBooking.price * 0.05)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Provider Commission (10%):</span>
                      <span>₹{selectedBooking.commission}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span>Total Amount:</span>
                      <span className="font-bold">₹{selectedBooking.price + Math.round(selectedBooking.price * 0.05)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Provider Earnings:</span>
                      <span className="font-medium text-green-600">₹{selectedBooking.price - selectedBooking.commission}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform Revenue:</span>
                      <span className="font-medium text-green-600">₹{selectedBooking.commission + Math.round(selectedBooking.price * 0.05)}</span>
                    </div>
                  </div>
                </div>
                
                {selectedBooking.status === 'pending' && (
                  <div className="flex gap-2">
                    <Button variant="destructive" className="flex-1">Cancel Booking</Button>
                    <Button className="flex-1">Contact Provider</Button>
                  </div>
                )}
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDetailsOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </>
  );
};

export default AdminBookings;
