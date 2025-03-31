export type UserRole = 'customer' | 'provider' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar?: string;
}

export interface Provider extends User {
  services: string[];
  verification: {
    isVerified: boolean;
    adhaarNumber?: string;
    bankDetails?: {
      accountNumber: string;
      ifscCode: string;
      accountHolderName: string;
    };
  };
  wallet: {
    balance: number;
    transactions: Transaction[];
  };
  rating: number;
  totalJobs: number;
  specializations?: string[];
  experienceYears?: number;
}

export interface Customer extends User {
  addresses: Address[];
  bookings: Booking[];
}

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  providerId: string;
  providerName: string;
  isActive?: boolean;
  features?: string[];
  duration?: string;
  equipmentIncluded?: boolean;
  serviceArea?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  services: number;
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  providerId: string;
  providerName: string;
  customerId: string;
  customerName: string;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  dateTime: string;
  address: Address;
  price: number;
  commission: number;
  rating?: number;
  feedback?: string;
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  street: string;
  city: string;
  state: string;
  zipCode: string;
  landmark?: string;
}

export interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
  bookingId?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

// Payment related types
export type PaymentMethod = 'card' | 'upi' | 'cod';

export interface PaymentDetails {
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  upiId?: string;
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  status: 'success' | 'failed' | 'pending';
  transactionId: string;
  paymentMethod: PaymentMethod;
  timestamp: string;
}
