
import { ServicesResponse, ServiceResponse } from '../types';
import { buildUrl, handleApiError } from '../core/apiClient';

/**
 * Service API - Read operations for services and categories
 */
export const serviceReadApi = {
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
      const url = buildUrl('/services', params);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error, 'Get services error');
    }
  },

  /**
   * Get a single service by ID
   * @param id Service ID
   * @returns Promise with service data
   */
  getServiceById: async (id: string): Promise<ServiceResponse> => {
    try {
      const response = await fetch(buildUrl(`/services/${id}`));
      
      if (!response.ok) {
        throw new Error('Service not found');
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error, 'Get service error');
    }
  },
  
  /**
   * Get all service categories
   * @returns Promise with categories data
   */
  getCategories: async (): Promise<{ categories: Array<{ id: string; name: string; icon: string; services: number }> }> => {
    try {
      const response = await fetch(buildUrl('/categories'));
      
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      
      return await response.json();
    } catch (error) {
      return handleApiError(error, 'Get categories error');
    }
  },
};
