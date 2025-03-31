
/**
 * Payment gateway configuration
 * Contains settings for payment processing
 */

// API key for payment gateway - replace with your actual API key in production
export const PAYMENT_API_KEY = 'pk_test_sample51234567890abcdefghijklmnopqrstuvwxyz';

// Payment gateway endpoints
export const PAYMENT_ENDPOINTS = {
  PROCESS: '/process',
  VERIFY: '/verify',
  REFUND: '/refund',
};

// Payment methods supported by the application
export const PAYMENT_METHODS = {
  CARD: 'card',
  UPI: 'upi',
  WALLET: 'wallet',
  COD: 'cod',
};

// Payment statuses
export const PAYMENT_STATUS = {
  SUCCESS: 'success',
  FAILED: 'failed',
  PENDING: 'pending',
  REFUNDED: 'refunded',
};

// This determines if we use the external payment gateway or our custom solution
export const USE_PAYMENT_GATEWAY = true;
