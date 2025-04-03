
import { useState, useEffect } from 'react';
import { getAllServices } from '@/data/services';
import { ServiceItem } from '@/utils/types';

export const useServiceData = (refreshCounter = 0) => {
  const [services, setServices] = useState<ServiceItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Add a small delay to simulate network request
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const data = await getAllServices();
        
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
