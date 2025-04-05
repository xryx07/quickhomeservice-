
/**
 * Base API client with common functionality
 */

export const API_BASE_URL = 'https://api.quickhomeservice.com/v1';

/**
 * Helper function to build URL with query parameters
 */
export const buildUrl = (endpoint: string, params?: Record<string, any>): string => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  if (!params) {
    return url;
  }
  
  const queryParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });
  
  const queryString = queryParams.toString();
  return queryString ? `${url}?${queryString}` : url;
};

/**
 * Get the authentication token from localStorage
 */
export const getAuthToken = (): string | null => {
  return localStorage.getItem('token');
};

/**
 * Handle API errors consistently
 */
export const handleApiError = (error: any, customMessage?: string): never => {
  const message = customMessage || 'API request failed';
  console.error(`${message}:`, error);
  throw error;
};
