
import {
  CreateBookingRequest,
  UpdateBookingStatusRequest,
  SubmitRatingRequest,
  BookingResponse,
  BookingsResponse
} from './types';

const API_BASE_URL = 'https://api.quickhomeservice.com/v1';

/**
 * Booking API - Handles booking creation, management, and status updates
 */
export const bookingApi = {
  /**
   * Create a new booking
   * @param data Booking data
   * @returns Promise with created booking
   */
  createBooking: async (data: CreateBookingRequest): Promise<BookingResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create booking');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Create booking error:', error);
      throw error;
    }
  },

  /**
   * Get bookings for the current user (customer or provider)
   * @param params Optional filter parameters
   * @returns Promise with bookings data
   */
  getBookings: async (params?: {
    status?: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
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
      
      const response = await fetch(`${API_BASE_URL}/bookings?${queryParams.toString()}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get bookings error:', error);
      throw error;
    }
  },

  /**
   * Get a single booking by ID
   * @param id Booking ID
   * @returns Promise with booking data
   */
  getBookingById: async (id: string): Promise<BookingResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Booking not found');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get booking error:', error);
      throw error;
    }
  },

  /**
   * Update booking status (for providers)
   * @param data Status update data
   * @returns Promise with updated booking
   */
  updateBookingStatus: async (data: UpdateBookingStatusRequest): Promise<BookingResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/bookings/${data.bookingId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status: data.status }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update booking status');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Update booking status error:', error);
      throw error;
    }
  },

  /**
   * Cancel a booking (for customers)
   * @param id Booking ID
   * @returns Promise with updated booking
   */
  cancelBooking: async (id: string): Promise<BookingResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/bookings/${id}/cancel`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to cancel booking');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Cancel booking error:', error);
      throw error;
    }
  },

  /**
   * Submit rating and feedback for a completed booking
   * @param data Rating data
   * @returns Promise with updated booking
   */
  submitRating: async (data: SubmitRatingRequest): Promise<BookingResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/bookings/${data.bookingId}/rating`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          rating: data.rating,
          feedback: data.feedback,
        }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to submit rating');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Submit rating error:', error);
      throw error;
    }
  },
};
