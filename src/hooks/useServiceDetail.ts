
import { useState, useEffect } from 'react';
import { allServices } from '@/data/services';
import { Service } from '@/utils/types';

export const useServiceDetail = (id: string) => {
  const [service, setService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Add a small delay to simulate network request
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Find the service with the matching ID
        const foundService = allServices.find(s => s.id === id);
        
        if (!foundService) {
          throw new Error(`Service with ID ${id} not found`);
        }
        
        setService(foundService);
      } catch (err) {
        console.error('Error fetching service details:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch service details'));
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchService();
    }
  }, [id]);

  return { service, isLoading, error };
};

export default useServiceDetail;
