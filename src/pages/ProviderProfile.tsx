import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Provider, Booking, Transaction } from '@/utils/types';
import { 
  ProfileCard, 
  WalletCard, 
  ServicesCard, 
  BookingsTab, 
  EarningsTab, 
  SettingsTab 
} from '@/components/provider';

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
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left column - Profile Card & Stats */}
              <div className="md:w-1/3">
                <ProfileCard provider={provider} />
                <WalletCard provider={provider} transactions={transactions} />
                <ServicesCard provider={provider} />
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
                    <BookingsTab bookings={bookings} />
                  </TabsContent>
                  
                  <TabsContent value="earnings">
                    <EarningsTab 
                      provider={provider} 
                      transactions={transactions} 
                      bookings={bookings} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="settings">
                    <SettingsTab 
                      initialName={provider.name} 
                      initialEmail={provider.email} 
                      initialPhone={provider.phone} 
                    />
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
