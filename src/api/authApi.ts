
import { LoginRequest, VerifyOtpRequest, RegisterRequest, AuthResponse } from './types';

const API_BASE_URL = 'https://api.quickhomeservice.com/v1';

/**
 * Authentication API - Handles user authentication, registration, and account management
 */
export const authApi = {
  /**
   * Send OTP to user's phone for login
   * @param data Login request with phone number
   * @returns Promise with status of OTP sent
   */
  login: async (data: LoginRequest): Promise<{ success: boolean; message: string }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      return await response.json();
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Failed to send OTP. Please try again.');
    }
  },

  /**
   * Verify OTP and authenticate user
   * @param data Verification data with phone and OTP
   * @returns Promise with authenticated user data and token
   */
  verifyOtp: async (data: VerifyOtpRequest): Promise<AuthResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Invalid OTP');
      }
      
      return await response.json();
    } catch (error) {
      console.error('OTP verification error:', error);
      throw error;
    }
  },

  /**
   * Register a new user
   * @param data Registration data
   * @returns Promise with registration status
   */
  register: async (data: RegisterRequest): Promise<{ success: boolean; message: string }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      return await response.json();
    } catch (error) {
      console.error('Registration error:', error);
      throw new Error('Failed to register. Please try again.');
    }
  },

  /**
   * Logout the current user
   * @returns Promise with logout status
   */
  logout: async (): Promise<{ success: boolean }> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
      
      return { success: response.ok };
    } catch (error) {
      console.error('Logout error:', error);
      // Still clear local storage even if API call fails
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return { success: false };
    }
  },

  /**
   * Check if the current token is valid
   * @returns Promise with current user data if token is valid
   */
  checkAuth: async (): Promise<AuthResponse | null> => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) return null;
      
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Invalid token');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Auth check error:', error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return null;
    }
  },
};
