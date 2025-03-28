
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Booking } from '@/utils/types';
import { Building, Calendar, CheckCircle, MapPin, Star, XCircle } from 'lucide-react';

interface BookingsTabProps {
  bookings: Booking[];
}

export const BookingsTab = ({ bookings }: BookingsTabProps) => {
  const { toast } = useToast();
  
  const handleRejectBooking = (bookingId: string) => {
    toast({
      title: "Booking Rejected",
      description: "You've rejected the booking.",
    });
  };
  
  const handleMarkComplete = (bookingId: string) => {
    toast({
      title: "Booking Completed",
      description: "You've marked the booking as completed.",
    });
  };
  
  const getRecentBookings = (bookings: Booking[], status?: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled') => {
    if (status) {
      return bookings.filter(booking => booking.status === status);
    }
    return bookings;
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Manage Bookings</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="confirmed">
          <TabsList className="mb-6">
            <TabsTrigger value="confirmed">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="confirmed">
            {getRecentBookings(bookings, 'confirmed').length === 0 ? (
              <div className="text-center py-8">
                <h3 className="text-lg font-medium mb-2">No upcoming bookings</h3>
                <p className="text-muted-foreground">You don't have any upcoming bookings right now.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {getRecentBookings(bookings, 'confirmed').map((booking) => (
                  <div key={booking.id} className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{booking.serviceName}</h3>
                        <Badge className="bg-blue-500">Confirmed</Badge>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            <div>
                              {new Date(booking.dateTime).toLocaleDateString()} at {new Date(booking.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                          
                          <div className="flex items-center text-sm">
                            {booking.address.type === 'home' ? (
                              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                            ) : (
                              <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                            )}
                            <div>
                              {booking.address.street}, {booking.address.city}
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Customer:</span>
                            <span className="font-medium">{booking.customerName}</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Amount:</span>
                            <span className="font-medium">₹{booking.price}</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Your Earning:</span>
                            <span className="font-medium text-green-600">₹{booking.price - booking.commission}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4 flex justify-end space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-red-500 border-red-500 hover:bg-red-50"
                          onClick={() => handleRejectBooking(booking.id)}
                        >
                          <XCircle className="h-4 w-4 mr-1" /> Reject
                        </Button>
                        <Button 
                          size="sm"
                          className="bg-green-500 hover:bg-green-600"
                          onClick={() => handleMarkComplete(booking.id)}
                        >
                          <CheckCircle className="h-4 w-4 mr-1" /> Mark as Complete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed">
            {getRecentBookings(bookings, 'completed').length === 0 ? (
              <div className="text-center py-8">
                <h3 className="text-lg font-medium mb-2">No completed bookings</h3>
                <p className="text-muted-foreground">You haven't completed any bookings yet.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {getRecentBookings(bookings, 'completed').map((booking) => (
                  <div key={booking.id} className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{booking.serviceName}</h3>
                        <Badge className="bg-green-500">Completed</Badge>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            <div>
                              {new Date(booking.dateTime).toLocaleDateString()} at {new Date(booking.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                          </div>
                          
                          <div className="flex items-center text-sm">
                            {booking.address.type === 'home' ? (
                              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                            ) : (
                              <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                            )}
                            <div>
                              {booking.address.street}, {booking.address.city}
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Customer:</span>
                            <span className="font-medium">{booking.customerName}</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Amount:</span>
                            <span className="font-medium">₹{booking.price}</span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Your Earning:</span>
                            <span className="font-medium text-green-600">₹{booking.price - booking.commission}</span>
                          </div>
                        </div>
                      </div>
                      
                      {booking.rating && (
                        <div className="border-t pt-4">
                          <div className="flex items-center mb-2">
                            <span className="text-sm mr-2">Customer Rating:</span>
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star 
                                  key={star}
                                  className={`h-4 w-4 ${star <= booking.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          {booking.feedback && (
                            <p className="text-sm italic text-muted-foreground">"{booking.feedback}"</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
