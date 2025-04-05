
import { CreateServiceRequest, UpdateServiceRequest, ServiceResponse } from '../types';
import { API_BASE_URL, getAuthToken, handleApiError } from '../core/apiClient';

/**
 * Service API - Write operations for services
 */
export const serviceWriteApi = {
  /**
   * Create a new service
   * @param data Service data
   * @returns Promise with created service
   */
  createService: async (data: CreateServiceRequest): Promise<ServiceResponse> => {
    try {
      const token = getAuthToken();
      
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
      return handleApiError(error, 'Create service error');
    }
  },

  /**
   * Update an existing service
   * @param data Updated service data
   * @returns Promise with updated service
   */
  updateService: async (data: UpdateServiceRequest): Promise<ServiceResponse> => {
    try {
      const token = getAuthToken();
      
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
      return handleApiError(error, 'Update service error');
    }
  },

  /**
   * Delete a service
   * @param id Service ID
   * @returns Promise with delete status
   */
  deleteService: async (id: string): Promise<{ success: boolean }> => {
    try {
      const token = getAuthToken();
      
      const response = await fetch(`${API_BASE_URL}/services/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      return { success: response.ok };
    } catch (error) {
      return handleApiError(error, 'Delete service error');
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
      const token = getAuthToken();
      
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
      return handleApiError(error, 'Toggle service status error');
    }
  },
};
