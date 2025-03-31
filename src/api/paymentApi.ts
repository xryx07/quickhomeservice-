
import {
  ProcessPaymentRequest,
  PaymentResponse,
  RefundRequest
} from './types';

const API_BASE_URL = 'https://api.quickhomeservice.com/v1';

/**
 * Payment API - Handles payment processing, refunds, and transactions
 */
export const paymentApi = {
  /**
   * Process a payment for a booking
   * @param data Payment data
   * @returns Promise with payment result
   */
  processPayment: async (data: ProcessPaymentRequest): Promise<PaymentResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/payments/process`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Payment processing failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Process payment error:', error);
      throw error;
    }
  },

  /**
   * Get payment details by ID
   * @param id Payment ID
   * @returns Promise with payment data
   */
  getPaymentById: async (id: string): Promise<PaymentResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/payments/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Payment not found');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get payment error:', error);
      throw error;
    }
  },

  /**
   * Process a refund
   * @param data Refund data
   * @returns Promise with refund result
   */
  processRefund: async (data: RefundRequest): Promise<{
    success: boolean;
    refundId: string;
    amount: number;
    status: string;
  }> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/payments/refund`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Refund processing failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Process refund error:', error);
      throw error;
    }
  },

  /**
   * Get payment methods for the current user
   * @returns Promise with payment methods
   */
  getPaymentMethods: async (): Promise<{
    cards: Array<{
      id: string;
      last4: string;
      brand: string;
      expMonth: number;
      expYear: number;
      isDefault: boolean;
    }>;
    upiIds: Array<{
      id: string;
      upiId: string;
      isDefault: boolean;
    }>;
  }> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/payments/methods`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch payment methods');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get payment methods error:', error);
      throw error;
    }
  },
};
