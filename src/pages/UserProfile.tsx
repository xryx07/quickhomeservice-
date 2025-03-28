
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { Edit, Home, Building, MapPin, Clock, Star, CheckCircle, RefreshCw } from 'lucide-react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Booking, Address, Customer } from '@/utils/types';

// Mock data
const addresses: Address[] = [
  {
    id: 'a1',
    type: 'home',
    street: '123 Main Street',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400001',
    landmark: 'Near Central Park'
  },
  {
    id: 'a2',
    type: 'work',
    street: '456 Office Complex',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400002',
    landmark: 'Opposite Star Mall'
  }
];

const bookings: Booking[] = [
  {
    id: 'b1',
    serviceId: '1',
    serviceName: 'House Cleaning',
    providerId: 'p1',
    providerName: 'CleanMasters',
    customerId: 'c1',
    customerName: 'John Doe',
    status: 'completed',
    dateTime: '2023-07-10T10:00:00',
    address: addresses[0],
    price: 799,
    commission: 199.75,
    rating: 4.5,
    feedback: 'Great service, very thorough cleaning!'
  },
  {
    id: 'b2',
    serviceId: '2',
    serviceName: 'Electrician Services',
    providerId: 'p2',
    providerName: 'ElectriPro',
    customerId: 'c1',
    customerName: 'John Doe',
    status: 'confirmed',
    dateTime: '2023-07-20T14:30:00',
    address: addresses[1],
    price: 599,
    commission: 149.75
  },
  {
    id: 'b3',
    serviceId: '3',
    serviceName: 'Plumbing Repairs',
    providerId: 'p3',
    providerName: 'PlumbRight',
    customerId: 'c1',
    customerName: 'John Doe',
    status: 'cancelled',
    dateTime: '2023-07-05T09:00:00',
    address: addresses[0],
    price: 649,
    commission: 162.25
  }
];

const customer: Customer = {
  id: 'c1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+91 98765 43210',
  role: 'customer',
  addresses: addresses,
  bookings: bookings
};

const UserProfile = () => {
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEditingAddress, setIsEditingAddress] = useState<string | null>(null);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  
  const { toast } = useToast();
  
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };
  
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Passwords Don't Match",
        description: "New password and confirm password must match.",
        variant: "destructive",
      });
      return;
    }
    
    if (!currentPassword) {
      toast({
        title: "Current Password Required",
        description: "Please enter your current password.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Password Changed",
      description: "Your password has been changed successfully.",
    });
    
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };
  
  const handleEditAddress = (address: Address) => {
    setIsEditingAddress(address.id);
    setEditingAddress({...address});
  };
  
  const handleSaveAddress = () => {
    if (!editingAddress) return;
    
    toast({
      title: "Address Updated",
      description: "Your address has been updated successfully.",
    });
    
    setIsEditingAddress(null);
    setEditingAddress(null);
  };
  
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingAddress) return;
    
    const { name, value } = e.target;
    setEditingAddress({
      ...editingAddress,
      [name]: value
    });
  };
  
  const handleRateBooking = (bookingId: string, rating: number) => {
    toast({
      title: "Booking Rated",
      description: `You've rated the service ${rating} stars.`,
    });
  };
  
  const handleBookAgain = (serviceId: string) => {
    toast({
      title: "Redirecting",
      description: "Taking you to book this service again.",
    });
  };
  
  const handleCancelBooking = (bookingId: string) => {
    toast({
      title: "Booking Cancelled",
      description: "Your booking has been cancelled successfully.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column - Profile Card */}
              <div className="md:w-1/3">
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarFallback className="text-3xl">
                          {customer.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <h2 className="text-2xl font-bold">{customer.name}</h2>
                      <p className="text-muted-foreground">{customer.email}</p>
                      <p className="text-muted-foreground mb-4">{customer.phone}</p>
                      <Badge>Customer</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Addresses</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {addresses.map((address) => (
                        <div key={address.id}>
                          {isEditingAddress === address.id ? (
                            <div className="space-y-3 p-3 border rounded-lg bg-gray-50">
                              <div className="flex items-center">
                                <Badge className="capitalize">{address.type}</Badge>
                              </div>
                              
                              <div className="grid grid-cols-1 gap-3">
                                <div className="space-y-1">
                                  <Label htmlFor="street">Street</Label>
                                  <Input 
                                    id="street" 
                                    name="street" 
                                    value={editingAddress?.street} 
                                    onChange={handleAddressChange}
                                  />
                                </div>
                                
                                <div className="space-y-1">
                                  <Label htmlFor="landmark">Landmark</Label>
                                  <Input 
                                    id="landmark" 
                                    name="landmark" 
                                    value={editingAddress?.landmark} 
                                    onChange={handleAddressChange}
                                  />
                                </div>
                                
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="space-y-1">
                                    <Label htmlFor="city">City</Label>
                                    <Input 
                                      id="city" 
                                      name="city" 
                                      value={editingAddress?.city} 
                                      onChange={handleAddressChange}
                                    />
                                  </div>
                                  
                                  <div className="space-y-1">
                                    <Label htmlFor="state">State</Label>
                                    <Input 
                                      id="state" 
                                      name="state" 
                                      value={editingAddress?.state} 
                                      onChange={handleAddressChange}
                                    />
                                  </div>
                                </div>
                                
                                <div className="space-y-1">
                                  <Label htmlFor="zipCode">PIN Code</Label>
                                  <Input 
                                    id="zipCode" 
                                    name="zipCode" 
                                    value={editingAddress?.zipCode} 
                                    onChange={handleAddressChange}
                                  />
                                </div>
                              </div>
                              
                              <div className="flex justify-end space-x-2 mt-3">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => setIsEditingAddress(null)}
                                >
                                  Cancel
                                </Button>
                                <Button 
                                  size="sm"
                                  className="btn-brand"
                                  onClick={handleSaveAddress}
                                >
                                  Save
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div className="p-3 border rounded-lg">
                              <div className="flex justify-between items-start mb-2">
                                <Badge className="capitalize">{address.type}</Badge>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  className="h-8 w-8"
                                  onClick={() => handleEditAddress(address)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </div>
                              
                              <div className="space-y-1 text-sm">
                                <div className="flex items-start">
                                  <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                                  <div>
                                    <p>{address.street}</p>
                                    {address.landmark && <p className="text-muted-foreground">{address.landmark}</p>}
                                    <p>{address.city}, {address.state} {address.zipCode}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      
                      <Button 
                        variant="outline" 
                        className="w-full mt-2"
                      >
                        Add New Address
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Right column - Tabs */}
              <div className="md:w-2/3">
                <Tabs defaultValue="bookings">
                  <TabsList className="mb-6">
                    <TabsTrigger value="bookings">My Bookings</TabsTrigger>
                    <TabsTrigger value="settings">Account Settings</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="bookings">
                    <Card>
                      <CardContent className="p-6">
                        {bookings.length === 0 ? (
                          <div className="text-center py-12">
                            <h3 className="text-xl font-medium mb-2">No bookings yet</h3>
                            <p className="text-muted-foreground mb-6">You haven't made any bookings yet.</p>
                            <Button className="btn-brand">Explore Services</Button>
                          </div>
                        ) : (
                          <div className="space-y-6">
                            {bookings.map((booking) => (
                              <div key={booking.id} className="border rounded-lg overflow-hidden">
                                <div className="bg-gray-50 p-4 border-b">
                                  <div className="flex justify-between items-center">
                                    <h3 className="font-semibold">{booking.serviceName}</h3>
                                    <Badge className={
                                      booking.status === 'completed' ? 'bg-green-500' :
                                      booking.status === 'confirmed' ? 'bg-blue-500' :
                                      booking.status === 'in-progress' ? 'bg-orange-500' :
                                      booking.status === 'cancelled' ? 'bg-red-500' :
                                      'bg-gray-500'
                                    }>
                                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                    </Badge>
                                  </div>
                                </div>
                                
                                <div className="p-4">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div className="space-y-2">
                                      <div className="flex items-center text-sm">
                                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                        <div>
                                          {new Date(booking.dateTime).toLocaleDateString()} at {new Date(booking.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                      </div>
                                      
                                      <div className="flex items-center text-sm">
                                        {booking.address.type === 'home' ? (
                                          <Home className="h-4 w-4 mr-2 text-muted-foreground" />
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
                                        <span className="text-sm text-muted-foreground">Provider:</span>
                                        <span className="font-medium">{booking.providerName}</span>
                                      </div>
                                      
                                      <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Amount:</span>
                                        <span className="font-medium">₹{booking.price}</span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {booking.status === 'completed' && !booking.rating && (
                                    <div className="border-t pt-4">
                                      <div className="text-sm mb-2">Rate this service:</div>
                                      <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                          <Button 
                                            key={star}
                                            variant="ghost" 
                                            size="icon"
                                            className="h-8 w-8"
                                            onClick={() => handleRateBooking(booking.id, star)}
                                          >
                                            <Star className={`h-5 w-5 ${star <= (booking.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                          </Button>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  
                                  {booking.rating && (
                                    <div className="border-t pt-4">
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                          <span className="text-sm mr-2">Your rating:</span>
                                          <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                              <Star 
                                                key={star}
                                                className={`h-4 w-4 ${star <= booking.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                              />
                                            ))}
                                          </div>
                                        </div>
                                        <Button 
                                          variant="outline" 
                                          size="sm"
                                          className="flex items-center gap-1"
                                          onClick={() => handleBookAgain(booking.serviceId)}
                                        >
                                          <RefreshCw className="h-3 w-3" /> Book Again
                                        </Button>
                                      </div>
                                      {booking.feedback && (
                                        <p className="text-sm mt-2 italic text-muted-foreground">"{booking.feedback}"</p>
                                      )}
                                    </div>
                                  )}
                                  
                                  {booking.status === 'confirmed' && (
                                    <div className="border-t pt-4 flex justify-end">
                                      <Button 
                                        variant="outline" 
                                        size="sm"
                                        className="text-red-500 border-red-500 hover:bg-red-50"
                                        onClick={() => handleCancelBooking(booking.id)}
                                      >
                                        Cancel Booking
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="settings">
                    <Card className="mb-6">
                      <CardHeader className="pb-2">
                        <CardTitle>Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleUpdateProfile} className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              <Input 
                                id="name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input 
                                id="email" 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input 
                              id="phone" 
                              value={phone} 
                              onChange={(e) => setPhone(e.target.value)} 
                              required
                            />
                          </div>
                          
                          <div className="flex justify-end">
                            <Button type="submit" className="btn-brand">
                              Update Profile
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Change Password</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleChangePassword} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input 
                              id="currentPassword" 
                              type="password" 
                              value={currentPassword} 
                              onChange={(e) => setCurrentPassword(e.target.value)} 
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input 
                              id="newPassword" 
                              type="password" 
                              value={newPassword} 
                              onChange={(e) => setNewPassword(e.target.value)} 
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                            <Input 
                              id="confirmPassword" 
                              type="password" 
                              value={confirmPassword} 
                              onChange={(e) => setConfirmPassword(e.target.value)} 
                              required
                            />
                          </div>
                          
                          <div className="flex justify-end">
                            <Button type="submit" className="btn-brand">
                              Change Password
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserProfile;
