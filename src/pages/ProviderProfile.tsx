
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { Star, MapPin, Building, Calendar, DollarSign, ArrowUp, ArrowDown, Check, CheckCircle, XCircle } from 'lucide-react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Provider, Booking, Transaction } from '@/utils/types';

// Mock data
const transactions: Transaction[] = [
  {
    id: 't1',
    type: 'credit',
    amount: 599.25,
    description: 'Payment for Electrician Services',
    date: '2023-07-15',
    bookingId: 'b1'
  },
  {
    id: 't2',
    type: 'credit',
    amount: 486.75,
    description: 'Payment for Plumbing Repairs',
    date: '2023-07-10',
    bookingId: 'b2'
  },
  {
    id: 't3',
    type: 'debit',
    amount: 400,
    description: 'Withdrawal to Bank Account',
    date: '2023-07-05'
  }
];

const bookings: Booking[] = [
  {
    id: 'b1',
    serviceId: '2',
    serviceName: 'Electrician Services',
    providerId: 'p1',
    providerName: 'ElectriPro',
    customerId: 'c1',
    customerName: 'Vikram Singh',
    status: 'completed',
    dateTime: '2023-07-15T14:30:00',
    address: {
      id: 'a1',
      type: 'home',
      street: '123 Main St',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001'
    },
    price: 799,
    commission: 199.75,
    rating: 4.8,
    feedback: 'Excellent service! Fixed the issue quickly and professionally.'
  },
  {
    id: 'b2',
    serviceId: '3',
    serviceName: 'Plumbing Repairs',
    providerId: 'p1',
    providerName: 'ElectriPro',
    customerId: 'c2',
    customerName: 'Neha Gupta',
    status: 'completed',
    dateTime: '2023-07-10T09:15:00',
    address: {
      id: 'a2',
      type: 'work',
      street: '456 Office Park',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560001'
    },
    price: 649,
    commission: 162.25,
    rating: 4.5,
    feedback: 'Good service, fixed the leak properly.'
  },
  {
    id: 'b3',
    serviceId: '2',
    serviceName: 'Electrician Services',
    providerId: 'p1',
    providerName: 'ElectriPro',
    customerId: 'c3',
    customerName: 'Anjali Desai',
    status: 'confirmed',
    dateTime: '2023-07-22T11:00:00',
    address: {
      id: 'a3',
      type: 'home',
      street: '789 Residential Lane',
      city: 'Delhi',
      state: 'Delhi',
      zipCode: '110001'
    },
    price: 599,
    commission: 149.75
  }
];

const provider: Provider = {
  id: 'p1',
  name: 'Suresh Patel',
  email: 'suresh.patel@example.com',
  phone: '+91 98765 43210',
  role: 'provider',
  services: ['electrician', 'plumbing'],
  verification: {
    isVerified: true,
    adhaarNumber: '1234 5678 9012',
    bankDetails: {
      accountNumber: '1234567890',
      ifscCode: 'ABCD0001234',
      accountHolderName: 'Suresh Patel',
    }
  },
  wallet: {
    balance: 1086,
    transactions: transactions
  },
  rating: 4.7,
  totalJobs: 32
};

const ProviderProfile = () => {
  const [name, setName] = useState(provider.name);
  const [email, setEmail] = useState(provider.email);
  const [phone, setPhone] = useState(provider.phone);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  
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
  
  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = parseFloat(withdrawAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to withdraw.",
        variant: "destructive",
      });
      return;
    }
    
    if (amount > provider.wallet.balance) {
      toast({
        title: "Insufficient Balance",
        description: "You don't have sufficient balance to withdraw this amount.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Withdrawal Initiated",
      description: `₹${amount} will be transferred to your bank account within 24-48 hours.`,
    });
    
    setWithdrawAmount('');
  };
  
  const handleAcceptBooking = (bookingId: string) => {
    toast({
      title: "Booking Accepted",
      description: "You've accepted the booking successfully.",
    });
  };
  
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
  
  const calculateEarnings = (bookings: Booking[]) => {
    const total = bookings
      .filter(booking => booking.status === 'completed')
      .reduce((sum, booking) => sum + (booking.price - booking.commission), 0);
    
    return total;
  };
  
  const getRecentBookings = (bookings: Booking[], status?: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled') => {
    if (status) {
      return bookings.filter(booking => booking.status === status);
    }
    return bookings;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column - Profile Card & Stats */}
              <div className="md:w-1/3">
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarFallback className="text-3xl">
                          {provider.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <h2 className="text-2xl font-bold">{provider.name}</h2>
                      <p className="text-muted-foreground">{provider.email}</p>
                      <p className="text-muted-foreground mb-4">{provider.phone}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <Badge className="bg-green-500">Verified Provider</Badge>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 font-medium">{provider.rating}</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-100 h-1 mb-4">
                        <div 
                          className="h-full bg-brand-600"
                          style={{ width: `${(provider.rating / 5) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {provider.totalJobs} jobs completed
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mb-6">
                  <CardHeader className="pb-2">
                    <CardTitle>Wallet Balance</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Available Balance</p>
                        <h3 className="text-3xl font-bold">₹{provider.wallet.balance}</h3>
                      </div>
                    </div>
                    
                    <form onSubmit={handleWithdraw}>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="withdrawAmount">Withdraw Amount</Label>
                          <Input 
                            id="withdrawAmount"
                            type="number"
                            placeholder="Enter amount"
                            value={withdrawAmount}
                            onChange={(e) => setWithdrawAmount(e.target.value)}
                          />
                        </div>
                        <Button type="submit" className="w-full btn-brand">
                          Withdraw to Bank
                        </Button>
                      </div>
                    </form>
                    
                    <Separator className="my-6" />
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Recent Transactions</h4>
                      {transactions.slice(0, 3).map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`p-2 rounded-full ${transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'} mr-3`}>
                              {transaction.type === 'credit' ? (
                                <ArrowUp className={`h-4 w-4 ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`} />
                              ) : (
                                <ArrowDown className={`h-4 w-4 ${transaction.type === 'debit' ? 'text-red-600' : 'text-green-600'}`} />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-sm">{transaction.description}</p>
                              <p className="text-xs text-muted-foreground">{transaction.date}</p>
                            </div>
                          </div>
                          <div className={`font-medium ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Services</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      {provider.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="mr-2 capitalize">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Right column - Tabs */}
              <div className="md:w-2/3">
                <Tabs defaultValue="bookings">
                  <TabsList className="mb-6">
                    <TabsTrigger value="bookings">Bookings</TabsTrigger>
                    <TabsTrigger value="earnings">Earnings</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="bookings">
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
                  </TabsContent>
                  
                  <TabsContent value="earnings">
                    <Card className="mb-6">
                      <CardHeader className="pb-2">
                        <CardTitle>Earnings Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center">
                                <p className="text-sm text-muted-foreground">Total Earnings</p>
                                <h3 className="text-2xl font-bold">₹{calculateEarnings(bookings)}</h3>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center">
                                <p className="text-sm text-muted-foreground">Completed Jobs</p>
                                <h3 className="text-2xl font-bold">{getRecentBookings(bookings, 'completed').length}</h3>
                              </div>
                            </CardContent>
                          </Card>
                          
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex flex-col items-center">
                                <p className="text-sm text-muted-foreground">Average Rating</p>
                                <h3 className="text-2xl font-bold">{provider.rating}</h3>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <h4 className="font-medium mb-4">Transaction History</h4>
                        <div className="overflow-x-auto">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {transactions.map((transaction) => (
                                <TableRow key={transaction.id}>
                                  <TableCell>{transaction.date}</TableCell>
                                  <TableCell>{transaction.description}</TableCell>
                                  <TableCell>
                                    <Badge variant="outline" className={transaction.type === 'credit' ? 'text-green-600 border-green-600' : 'text-red-600 border-red-600'}>
                                      {transaction.type === 'credit' ? 'Credit' : 'Debit'}
                                    </Badge>
                                  </TableCell>
                                  <TableCell className={`text-right ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                                    {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Bank Account Details</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Account Holder Name</p>
                              <p className="font-medium">{provider.verification.bankDetails?.accountHolderName}</p>
                            </div>
                            
                            <div>
                              <p className="text-sm text-muted-foreground">Account Number</p>
                              <p className="font-medium">XXXX XXXX {provider.verification.bankDetails?.accountNumber.slice(-4)}</p>
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground">IFSC Code</p>
                            <p className="font-medium">{provider.verification.bankDetails?.ifscCode}</p>
                          </div>
                          
                          <Button variant="outline" className="mt-2">
                            Update Bank Details
                          </Button>
                        </div>
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

export default ProviderProfile;
