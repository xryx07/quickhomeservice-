
import {
  CreateServiceRequest,
  UpdateServiceRequest,
  ServiceResponse,
  ServicesResponse
} from './types';

const API_BASE_URL = 'https://api.quickhomeservice.com/v1';

/**
 * Service API - Handles service listings, categories, and related operations
 */
export const serviceApi = {
  /**
   * Get all services with optional filtering
   * @param params Optional filter parameters
   * @returns Promise with services data
   */
  getServices: async (params?: {
    category?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    rating?: number;
    page?: number;
    limit?: number;
  }): Promise<ServicesResponse> => {
    try {
      const queryParams = new URLSearchParams();
      
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined) {
            queryParams.append(key, value.toString());
          }
        });
      }
      
      const response = await fetch(`${API_BASE_URL}/services?${queryParams.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get services error:', error);
      throw error;
    }
  },

  /**
   * Get a single service by ID
   * @param id Service ID
   * @returns Promise with service data
   */
  getServiceById: async (id: string): Promise<ServiceResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/services/${id}`);
      
      if (!response.ok) {
        throw new Error('Service not found');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get service error:', error);
      throw error;
    }
  },

  /**
   * Create a new service
   * @param data Service data
   * @returns Promise with created service
   */
  createService: async (data: CreateServiceRequest): Promise<ServiceResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/services`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create service');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Create service error:', error);
      throw error;
    }
  },

  /**
   * Update an existing service
   * @param data Updated service data
   * @returns Promise with updated service
   */
  updateService: async (data: UpdateServiceRequest): Promise<ServiceResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/services/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update service');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Update service error:', error);
      throw error;
    }
  },

  /**
   * Delete a service
   * @param id Service ID
   * @returns Promise with delete status
   */
  deleteService: async (id: string): Promise<{ success: boolean }> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/services/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      return { success: response.ok };
    } catch (error) {
      console.error('Delete service error:', error);
      throw error;
    }
  },

  /**
   * Toggle service active status
   * @param id Service ID
   * @param isActive New active status
   * @returns Promise with updated service
   */
  toggleServiceStatus: async (id: string, isActive: boolean): Promise<ServiceResponse> => {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch(`${API_BASE_URL}/services/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ isActive }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update service status');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Toggle service status error:', error);
      throw error;
    }
  },

  /**
   * Get all service categories
   * @returns Promise with categories data
   */
  getCategories: async (): Promise<{ categories: Array<{ id: string; name: string; icon: string; services: number }> }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get categories error:', error);
      throw error;
    }
  },
};
