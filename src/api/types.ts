
// API Request and Response Types for all API endpoints

// Auth API Types
export interface LoginRequest {
  phone: string;
}

export interface VerifyOtpRequest {
  phone: string;
  otp: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  phone: string;
  role: 'customer' | 'provider';
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: 'customer' | 'provider' | 'admin';
    avatar?: string;
  };
  token: string;
}

// Service API Types
export interface CreateServiceRequest {
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  providerId: string;
  features?: string[];
}

export interface UpdateServiceRequest {
  id: string;
  name?: string;
  category?: string;
  description?: string;
  price?: number;
  image?: string;
  isActive?: boolean;
  features?: string[];
}

export interface ServiceResponse {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  providerId: string;
  providerName: string;
  isActive: boolean;
  features?: string[];
}

export interface ServicesResponse {
  services: ServiceResponse[];
  total: number;
}

// Booking API Types
export interface CreateBookingRequest {
  serviceId: string;
  dateTime: string;
  address: {
    type: 'home' | 'work' | 'other';
    street: string;
    city: string;
    state: string;
    zipCode: string;
    landmark?: string;
  };
  paymentMethod: 'prepaid' | 'onservice';
  note?: string;
}

export interface UpdateBookingStatusRequest {
  bookingId: string;
  status: 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
}

export interface SubmitRatingRequest {
  bookingId: string;
  rating: number;
  feedback?: string;
}

export interface BookingResponse {
  id: string;
  serviceId: string;
  serviceName: string;
  providerId: string;
  providerName: string;
  customerId: string;
  customerName: string;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  dateTime: string;
  address: {
    id: string;
    type: 'home' | 'work' | 'other';
    street: string;
    city: string;
    state: string;
    zipCode: string;
    landmark?: string;
  };
  price: number;
  commission: number;
  rating?: number;
  feedback?: string;
}

export interface BookingsResponse {
  bookings: BookingResponse[];
  total: number;
}

// User API Types
export interface UpdateProfileRequest {
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
}

export interface AddAddressRequest {
  type: 'home' | 'work' | 'other';
  street: string;
  city: string;
  state: string;
  zipCode: string;
  landmark?: string;
}

export interface UpdateAddressRequest {
  id: string;
  type?: 'home' | 'work' | 'other';
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  landmark?: string;
}

export interface ProviderVerificationRequest {
  adhaarNumber: string;
  bankDetails: {
    accountNumber: string;
    ifscCode: string;
    accountHolderName: string;
  };
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'customer' | 'provider' | 'admin';
  avatar?: string;
  addresses?: Array<{
    id: string;
    type: 'home' | 'work' | 'other';
    street: string;
    city: string;
    state: string;
    zipCode: string;
    landmark?: string;
  }>;
}

export interface ProviderResponse extends UserResponse {
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
    transactions: Array<{
      id: string;
      type: 'credit' | 'debit';
      amount: number;
      description: string;
      date: string;
      bookingId?: string;
    }>;
  };
  rating: number;
  totalJobs: number;
}

// Payment API Types
export interface ProcessPaymentRequest {
  bookingId: string;
  amount: number;
  paymentMethod: 'card' | 'upi' | 'cod';
  paymentDetails?: {
    cardNumber?: string;
    expiryDate?: string;
    cvv?: string;
    upiId?: string;
  };
}

export interface PaymentResponse {
  id: string;
  bookingId: string;
  amount: number;
  status: 'success' | 'failed' | 'pending';
  transactionId: string;
  paymentMethod: 'card' | 'upi' | 'cod';
  timestamp: string;
}

export interface RefundRequest {
  bookingId: string;
  amount: number;
  reason: string;
}

// Admin API Types
export interface UpdateCommissionRequest {
  categoryId?: string;
  serviceId?: string;
  commissionPercentage: number;
}

export interface VerifyProviderRequest {
  providerId: string;
  isVerified: boolean;
  rejectionReason?: string;
}

export interface DashboardStatsResponse {
  totalUsers: number;
  totalProviders: number;
  totalServices: number;
  totalBookings: number;
  revenueStats: {
    daily: number;
    weekly: number;
    monthly: number;
    total: number;
  };
  topCategories: Array<{
    id: string;
    name: string;
    bookings: number;
  }>;
  topProviders: Array<{
    id: string;
    name: string;
    bookings: number;
    revenue: number;
  }>;
}
