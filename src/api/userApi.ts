
import {
  UpdateProfileRequest,
  AddAddressRequest,
  UpdateAddressRequest,
  ProviderVerificationRequest,
  UserResponse,
  ProviderResponse
} from './types';

const API_BASE_URL = 'https://api.quickhomeservice.com/v1';

/**
 * User API - Handles user profile management, addresses, and provider verification
 */
export const userApi = {
  /**
   * Get current user profile
   * @returns Promise with user data
   */
  getProfile: async (): Promise<UserResponse | ProviderResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/users/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get profile error:', error);
      throw error;
    }
  },

  /**
   * Update user profile
   * @param data Updated profile data
   * @returns Promise with updated user data
   */
  updateProfile: async (data: UpdateProfileRequest): Promise<UserResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/users/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update profile');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  },

  /**
   * Upload profile avatar
   * @param file Image file
   * @returns Promise with avatar URL
   */
  uploadAvatar: async (file: File): Promise<{ avatarUrl: string }> => {
    try {
      const token = localStorage.getItem('token');
      
      const formData = new FormData();
      formData.append('avatar', file);
      
      const response = await fetch(`${API_BASE_URL}/users/avatar`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to upload avatar');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Upload avatar error:', error);
      throw error;
    }
  },

  /**
   * Add a new address (for customers)
   * @param data Address data
   * @returns Promise with updated user including addresses
   */
  addAddress: async (data: AddAddressRequest): Promise<UserResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/users/addresses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to add address');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Add address error:', error);
      throw error;
    }
  },

  /**
   * Update an existing address
   * @param data Updated address data
   * @returns Promise with updated user including addresses
   */
  updateAddress: async (data: UpdateAddressRequest): Promise<UserResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/users/addresses/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update address');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Update address error:', error);
      throw error;
    }
  },

  /**
   * Delete an address
   * @param id Address ID
   * @returns Promise with delete status
   */
  deleteAddress: async (id: string): Promise<{ success: boolean }> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/users/addresses/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      return { success: response.ok };
    } catch (error) {
      console.error('Delete address error:', error);
      throw error;
    }
  },

  /**
   * Submit provider verification details
   * @param data Verification data
   * @returns Promise with updated provider profile
   */
  submitProviderVerification: async (data: ProviderVerificationRequest): Promise<ProviderResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/providers/verification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to submit verification');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Submit verification error:', error);
      throw error;
    }
  },

  /**
   * Get provider wallet transactions
   * @returns Promise with wallet data
   */
  getWalletTransactions: async (): Promise<{ 
    balance: number; 
    transactions: Array<{
      id: string;
      type: 'credit' | 'debit';
      amount: number;
      description: string;
      date: string;
      bookingId?: string;
    }>;
  }> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/providers/wallet`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch wallet data');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get wallet error:', error);
      throw error;
    }
  },
};
