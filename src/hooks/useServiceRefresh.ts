
import { useState, useCallback } from 'react';
import { toast } from '@/hooks/use-toast';

export const useServiceRefresh = () => {
  const [refreshCounter, setRefreshCounter] = useState(0);
  
  const handleRefresh = useCallback(() => {
    // Increment the counter to trigger data refetch
    setRefreshCounter(prev => prev + 1);
    
    // Show loading toast
    toast({
      title: "Refreshing services",
      description: "Please wait while we fetch the latest services.",
    });
  }, []);
  
  return {
    refreshCounter,
    handleRefresh
  };
};

export default useServiceRefresh;
