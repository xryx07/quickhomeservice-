
import {
  UpdateCommissionRequest,
  VerifyProviderRequest,
  DashboardStatsResponse,
  BookingsResponse
} from './types';

const API_BASE_URL = 'https://api.quickhomeservice.com/v1';

/**
 * Admin API - Handles admin-specific operations like analytics, verification, and platform management
 */
export const adminApi = {
  /**
   * Get admin dashboard statistics
   * @returns Promise with dashboard stats
   */
  getDashboardStats: async (): Promise<DashboardStatsResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/admin/dashboard`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard stats');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get dashboard stats error:', error);
      throw error;
    }
  },

  /**
   * Get all bookings for admin
   * @param params Optional filter parameters
   * @returns Promise with bookings data
   */
  getAllBookings: async (params?: {
    status?: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
    fromDate?: string;
    toDate?: string;
    providerId?: string;
    customerId?: string;
    page?: number;
    limit?: number;
  }): Promise<BookingsResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const queryParams = new URLSearchParams();
      
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined) {
            queryParams.append(key, value.toString());
          }
        });
      }
      
      const response = await fetch(`${API_BASE_URL}/admin/bookings?${queryParams.toString()}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get all bookings error:', error);
      throw error;
    }
  },

  /**
   * Get all users for admin
   * @param params Optional filter parameters
   * @returns Promise with users data
   */
  getAllUsers: async (params?: {
    role?: 'customer' | 'provider' | 'admin';
    search?: string;
    isVerified?: boolean;
    page?: number;
    limit?: number;
  }): Promise<{
    users: Array<{
      id: string;
      name: string;
      email: string;
      phone: string;
      role: 'customer' | 'provider' | 'admin';
      createdAt: string;
      isVerified?: boolean;
    }>;
    total: number;
  }> => {
    try {
      const token = localStorage.getItem('token');
      
      const queryParams = new URLSearchParams();
      
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined) {
            queryParams.append(key, value.toString());
          }
        });
      }
      
      const response = await fetch(`${API_BASE_URL}/admin/users?${queryParams.toString()}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get all users error:', error);
      throw error;
    }
  },

  /**
   * Update commission settings
   * @param data Commission data
   * @returns Promise with update status
   */
  updateCommission: async (data: UpdateCommissionRequest): Promise<{ success: boolean }> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/admin/commission`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      
      return { success: response.ok };
    } catch (error) {
      console.error('Update commission error:', error);
      throw error;
    }
  },

  /**
   * Verify or reject a provider
   * @param data Verification data
   * @returns Promise with update status
   */
  verifyProvider: async (data: VerifyProviderRequest): Promise<{ success: boolean }> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/admin/providers/${data.providerId}/verify`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          isVerified: data.isVerified,
          rejectionReason: data.rejectionReason,
        }),
      });
      
      return { success: response.ok };
    } catch (error) {
      console.error('Verify provider error:', error);
      throw error;
    }
  },

  /**
   * Get revenue analytics
   * @param params Date range parameters
   * @returns Promise with revenue data
   */
  getRevenueAnalytics: async (params: {
    period: 'daily' | 'weekly' | 'monthly' | 'yearly';
    fromDate: string;
    toDate: string;
  }): Promise<{
    data: Array<{
      date: string;
      bookings: number;
      revenue: number;
      commission: number;
    }>;
    summary: {
      totalBookings: number;
      totalRevenue: number;
      totalCommission: number;
    };
  }> => {
    try {
      const token = localStorage.getItem('token');
      
      const queryParams = new URLSearchParams({
        period: params.period,
        fromDate: params.fromDate,
        toDate: params.toDate,
      });
      
      const response = await fetch(`${API_BASE_URL}/admin/analytics/revenue?${queryParams.toString()}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch revenue analytics');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get revenue analytics error:', error);
      throw error;
    }
  },
};
