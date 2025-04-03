
import { useState, useEffect } from 'react';
import { allServices } from '@/data/services';
import { Service } from '@/utils/types';

export const useServiceData = (refreshCounter = 0) => {
  const [services, setServices] = useState<Service[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Add a small delay to simulate network request
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Use allServices instead of getAllServices
        const data = allServices;
        
        if (!data || data.length === 0) {
          throw new Error('No services available');
        }
        
        setServices(data);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch services'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, [refreshCounter]);

  return { services, isLoading, error };
};

export default useServiceData;
