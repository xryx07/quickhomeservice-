
import {
  ProcessPaymentRequest,
  PaymentResponse,
  RefundRequest
} from './types';
import { 
  PAYMENT_API_KEY, 
  PAYMENT_ENDPOINTS, 
  USE_PAYMENT_GATEWAY 
} from '../utils/paymentConfig';

const API_BASE_URL = 'https://api.quickhomeservice.com/v1';
const PAYMENT_GATEWAY_URL = 'https://pg.quickhomeservice.com';

/**
 * Payment API - Handles payment processing, refunds, and transactions
 * Supports both direct API implementation and payment gateway integration
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
      
      if (USE_PAYMENT_GATEWAY) {
        // Payment gateway implementation
        const response = await fetch(`${PAYMENT_GATEWAY_URL}${PAYMENT_ENDPOINTS.PROCESS}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${PAYMENT_API_KEY}`,
            'X-User-Token': token || '',
          },
          body: JSON.stringify(data),
        });
        
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Payment gateway processing failed');
        }
        
        return await response.json();
      } else {
        // Direct API implementation (existing code)
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
      }
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
      
      if (USE_PAYMENT_GATEWAY) {
        // Payment gateway implementation
        const response = await fetch(`${PAYMENT_GATEWAY_URL}/payments/${id}`, {
          headers: {
            'Authorization': `Bearer ${PAYMENT_API_KEY}`,
            'X-User-Token': token || '',
          },
        });
        
        if (!response.ok) {
          throw new Error('Payment not found in gateway');
        }
        
        return await response.json();
      } else {
        // Direct API implementation (existing code)
        const response = await fetch(`${API_BASE_URL}/payments/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error('Payment not found');
        }
        
        return await response.json();
      }
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
      
      if (USE_PAYMENT_GATEWAY) {
        // Payment gateway implementation
        const response = await fetch(`${PAYMENT_GATEWAY_URL}${PAYMENT_ENDPOINTS.REFUND}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${PAYMENT_API_KEY}`,
            'X-User-Token': token || '',
          },
          body: JSON.stringify(data),
        });
        
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Refund processing failed in gateway');
        }
        
        return await response.json();
      } else {
        // Direct API implementation (existing code)
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
      }
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
      
      if (USE_PAYMENT_GATEWAY) {
        // Payment gateway implementation
        const response = await fetch(`${PAYMENT_GATEWAY_URL}/methods`, {
          headers: {
            'Authorization': `Bearer ${PAYMENT_API_KEY}`,
            'X-User-Token': token || '',
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch payment methods from gateway');
        }
        
        return await response.json();
      } else {
        // Direct API implementation (existing code)
        const response = await fetch(`${API_BASE_URL}/payments/methods`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch payment methods');
        }
        
        return await response.json();
      }
    } catch (error) {
      console.error('Get payment methods error:', error);
      throw error;
    }
  },

  /**
   * Save a new payment method
   * @param paymentMethodData Card or UPI data
   * @returns Promise with saved payment method data
   */
  savePaymentMethod: async (paymentMethodData: any): Promise<{
    success: boolean;
    paymentMethodId: string;
  }> => {
    try {
      const token = localStorage.getItem('token');
      
      if (USE_PAYMENT_GATEWAY) {
        // Payment gateway implementation
        const response = await fetch(`${PAYMENT_GATEWAY_URL}/methods/save`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${PAYMENT_API_KEY}`,
            'X-User-Token': token || '',
          },
          body: JSON.stringify(paymentMethodData),
        });
        
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to save payment method in gateway');
        }
        
        return await response.json();
      } else {
        // Direct API implementation
        const response = await fetch(`${API_BASE_URL}/payments/methods/save`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(paymentMethodData),
        });
        
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to save payment method');
        }
        
        return await response.json();
      }
    } catch (error) {
      console.error('Save payment method error:', error);
      throw error;
    }
  }
};
