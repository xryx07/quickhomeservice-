
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { 
  BarChart, 
  DollarSign, 
  Users, 
  Calendar, 
  Search, 
  CheckCircle, 
  XCircle, 
  User, 
  LogOut,
  Menu
} from 'lucide-react';

import Navigation from '@/components/Navigation';
import { Booking, Provider, Customer } from '@/utils/types';

// Mock data
const pendingProviders: Provider[] = [
  {
    id: 'p1',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    role: 'provider',
    services: ['cleaning', 'plumbing'],
    verification: {
      isVerified: false,
      adhaarNumber: '1234 5678 9012',
      bankDetails: {
        accountNumber: '1234567890',
        ifscCode: 'ABCD0001234',
        accountHolderName: 'Rahul Sharma',
      }
    },
    wallet: {
      balance: 0,
      transactions: []
    },
    rating: 0,
    totalJobs: 0
  },
  {
    id: 'p2',
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    phone: '+91 87654 32109',
    role: 'provider',
    services: ['beauty'],
    verification: {
      isVerified: false,
      adhaarNumber: '9876 5432 1098',
      bankDetails: {
        accountNumber: '0987654321',
        ifscCode: 'WXYZ0007654',
        accountHolderName: 'Priya Patel',
      }
    },
    wallet: {
      balance: 0,
      transactions: []
    },
    rating: 0,
    totalJobs: 0
  }
];

const recentBookings: Booking[] = [
  {
    id: 'b1',
    serviceId: '1',
    serviceName: 'House Cleaning',
    providerId: 'p3',
    providerName: 'Anil Kumar',
    customerId: 'c1',
    customerName: 'Vikram Singh',
    status: 'completed',
    dateTime: '2023-07-15T10:00:00',
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
    rating: 4.5,
    feedback: 'Great service!'
  },
  {
    id: 'b2',
    serviceId: '2',
    serviceName: 'Electrician Services',
    providerId: 'p4',
    providerName: 'Suresh Patel',
    customerId: 'c2',
    customerName: 'Neha Gupta',
    status: 'confirmed',
    dateTime: '2023-07-18T14:30:00',
    address: {
      id: 'a2',
      type: 'work',
      street: '456 Office Park',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560001'
    },
    price: 599,
    commission: 149.75
  },
  {
    id: 'b3',
    serviceId: '3',
    serviceName: 'Plumbing Repairs',
    providerId: 'p5',
    providerName: 'Raj Malhotra',
    customerId: 'c3',
    customerName: 'Anjali Desai',
    status: 'pending',
    dateTime: '2023-07-20T09:15:00',
    address: {
      id: 'a3',
      type: 'home',
      street: '789 Residential Lane',
      city: 'Delhi',
      state: 'Delhi',
      zipCode: '110001'
    },
    price: 649,
    commission: 162.25
  }
];

const Admin = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  
  const handleVerifyProvider = (providerId: string) => {
    toast({
      title: "Provider Verified",
      description: "Provider has been verified successfully.",
    });
  };
  
  const handleRejectProvider = (providerId: string) => {
    toast({
      title: "Provider Rejected",
      description: "Provider application has been rejected.",
    });
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Statistics
  const stats = [
    {
      title: "Total Revenue",
      value: "₹42,500",
      icon: <DollarSign className="h-5 w-5 text-muted-foreground" />
    },
    {
      title: "Providers",
      value: "36",
      icon: <Users className="h-5 w-5 text-muted-foreground" />
    },
    {
      title: "Customers",
      value: "189",
      icon: <User className="h-5 w-5 text-muted-foreground" />
    },
    {
      title: "Bookings",
      value: "274",
      icon: <Calendar className="h-5 w-5 text-muted-foreground" />
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`bg-brand-900 text-white w-64 fixed inset-y-0 left-0 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out z-30`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold">UrbanPro Admin</h1>
        </div>
        
        <nav className="mt-6">
          <a href="#dashboard" className="block py-3 px-6 bg-brand-800">
            <div className="flex items-center">
              <BarChart className="h-5 w-5 mr-3" />
              Dashboard
            </div>
          </a>
          <a href="#providers" className="block py-3 px-6 hover:bg-brand-800 transition-colors">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-3" />
              Providers
            </div>
          </a>
          <a href="#customers" className="block py-3 px-6 hover:bg-brand-800 transition-colors">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-3" />
              Customers
            </div>
          </a>
          <a href="#bookings" className="block py-3 px-6 hover:bg-brand-800 transition-colors">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-3" />
              Bookings
            </div>
          </a>
          <a href="#settings" className="block py-3 px-6 hover:bg-brand-800 transition-colors">
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 mr-3" />
              Earnings
            </div>
          </a>
        </nav>
        
        <div className="absolute bottom-0 w-full p-6">
          <Button variant="outline" className="w-full bg-transparent text-white border-white/20 hover:bg-brand-800 hover:text-white">
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="lg:ml-64 w-full">
        {/* Mobile header */}
        <header className="bg-white p-4 shadow-sm flex items-center justify-between lg:hidden">
          <h1 className="text-xl font-bold">UrbanPro Admin</h1>
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </header>
        
        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <form onSubmit={handleSearch} className="hidden md:flex items-center bg-white rounded-md border px-3 py-1">
              <Search className="h-4 w-4 text-muted-foreground mr-2" />
              <Input 
                type="text" 
                placeholder="Search..." 
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          
          {/* Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                  <div className="p-2 bg-gray-100 rounded-full">{stat.icon}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
            {/* Provider Verification */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Provider Verification</CardTitle>
              </CardHeader>
              <CardContent>
                {pendingProviders.length === 0 ? (
                  <p className="text-center py-4 text-muted-foreground">No pending verifications</p>
                ) : (
                  <div className="space-y-4">
                    {pendingProviders.map((provider) => (
                      <div key={provider.id} className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarFallback>{provider.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">{provider.name}</h4>
                            <p className="text-sm text-muted-foreground">{provider.services.join(', ')}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            className="bg-green-500 hover:bg-green-600"
                            onClick={() => handleVerifyProvider(provider.id)}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" /> Verify
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-red-500 border-red-500 hover:bg-red-50"
                            onClick={() => handleRejectProvider(provider.id)}
                          >
                            <XCircle className="h-4 w-4 mr-1" /> Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Recent Bookings */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recent Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                      <div>
                        <h4 className="font-medium">{booking.serviceName}</h4>
                        <div className="flex items-center text-sm text-muted-foreground gap-2">
                          <span>{booking.customerName}</span>
                          <span>•</span>
                          <span>{new Date(booking.dateTime).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="font-medium">₹{booking.price}</div>
                          <div className="text-xs text-muted-foreground">Commission: ₹{booking.commission}</div>
                        </div>
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
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Provider and Customer List Tabs */}
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="providers">
                <TabsList className="mb-6">
                  <TabsTrigger value="providers">Providers</TabsTrigger>
                  <TabsTrigger value="customers">Customers</TabsTrigger>
                </TabsList>
                
                <TabsContent value="providers">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Services</TableHead>
                          <TableHead>Rating</TableHead>
                          <TableHead>Jobs</TableHead>
                          <TableHead>Earnings</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Anil Kumar</TableCell>
                          <TableCell>Cleaning, Plumbing</TableCell>
                          <TableCell>4.8</TableCell>
                          <TableCell>24</TableCell>
                          <TableCell>₹18,760</TableCell>
                          <TableCell><Badge className="bg-green-500">Active</Badge></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Suresh Patel</TableCell>
                          <TableCell>Electrician</TableCell>
                          <TableCell>4.6</TableCell>
                          <TableCell>18</TableCell>
                          <TableCell>₹14,370</TableCell>
                          <TableCell><Badge className="bg-green-500">Active</Badge></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Meera Sharma</TableCell>
                          <TableCell>Beauty & Spa</TableCell>
                          <TableCell>4.9</TableCell>
                          <TableCell>32</TableCell>
                          <TableCell>₹28,800</TableCell>
                          <TableCell><Badge className="bg-green-500">Active</Badge></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
                
                <TabsContent value="customers">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Total Bookings</TableHead>
                          <TableHead>Total Spent</TableHead>
                          <TableHead>Joined</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Vikram Singh</TableCell>
                          <TableCell>vikram.singh@example.com</TableCell>
                          <TableCell>+91 98765 43210</TableCell>
                          <TableCell>12</TableCell>
                          <TableCell>₹9,580</TableCell>
                          <TableCell>10 May 2023</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Neha Gupta</TableCell>
                          <TableCell>neha.gupta@example.com</TableCell>
                          <TableCell>+91 87654 32109</TableCell>
                          <TableCell>8</TableCell>
                          <TableCell>₹6,240</TableCell>
                          <TableCell>22 Jun 2023</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Anjali Desai</TableCell>
                          <TableCell>anjali.desai@example.com</TableCell>
                          <TableCell>+91 76543 21098</TableCell>
                          <TableCell>5</TableCell>
                          <TableCell>₹4,120</TableCell>
                          <TableCell>15 Jul 2023</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </main>
      </div>
      
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </div>
  );
};

export default Admin;
