
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, MapPin, PhoneCall, Mail, CheckCircle, XCircle } from 'lucide-react';
import { Booking } from '@/utils/types';

interface BookingManagementProps {
  pendingBookings: Booking[];
  onAccept: (bookingId: string) => void;
  onReject: (bookingId: string) => void;
}

const BookingManagement = ({ 
  pendingBookings, 
  onAccept, 
  onReject 
}: BookingManagementProps) => {
  const { toast } = useToast();
  
  const handleAcceptBooking = (booking: Booking) => {
    onAccept(booking.id);
    
    toast({
      title: "Booking Accepted",
      description: `You have accepted the booking for ${booking.serviceName}. A confirmation has been sent to the customer.`,
    });
  };
  
  const handleRejectBooking = (booking: Booking) => {
    onReject(booking.id);
    
    toast({
      title: "Booking Rejected",
      description: `You have rejected the booking for ${booking.serviceName}. The customer has been notified.`,
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Booking Requests</CardTitle>
      </CardHeader>
      <CardContent>
        {pendingBookings.length === 0 ? (
          <div className="text-center py-8">
            <h3 className="text-lg font-medium mb-2">No pending bookings</h3>
            <p className="text-muted-foreground">You don't have any pending booking requests right now.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {pendingBookings.map((booking) => (
              <div key={booking.id} className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 border-b flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{booking.serviceName}</h3>
                    <span className="text-sm text-muted-foreground">Booking ID: #{booking.id}</span>
                  </div>
                  <Badge className="bg-orange-500">Pending</Badge>
                </div>
                
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <div className="text-sm">
                          {new Date(booking.dateTime).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <div className="text-sm">
                          {new Date(booking.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                        <div className="text-sm">
                          {booking.address.street}, {booking.address.city}, {booking.address.state}, {booking.address.zipCode}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm mb-2">Customer Details:</h4>
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                          {booking.customerName.charAt(0)}
                        </div>
                        <span>{booking.customerName}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <PhoneCall className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">+91 98765 43210</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">customer@example.com</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Service Price:</span>
                      <span>₹{booking.price}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Platform Fee:</span>
                      <span>₹{booking.commission}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Your Earning:</span>
                      <span className="text-green-600">₹{booking.price - booking.commission}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end space-x-3">
                    <Button 
                      variant="outline" 
                      className="border-red-500 text-red-500 hover:bg-red-50"
                      onClick={() => handleRejectBooking(booking)}
                    >
                      <XCircle className="h-4 w-4 mr-2" /> Reject
                    </Button>
                    <Button 
                      className="bg-green-500 hover:bg-green-600"
                      onClick={() => handleAcceptBooking(booking)}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" /> Accept
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingManagement;
