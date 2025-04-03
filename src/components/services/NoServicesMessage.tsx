
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface NoServicesMessageProps {
  onRefresh: () => void;
  isFiltered: boolean;
}

const NoServicesMessage = ({ onRefresh, isFiltered }: NoServicesMessageProps) => {
  // Show toast notification when no services are found
  useEffect(() => {
    toast({
      title: "No services found",
      description: isFiltered 
        ? "Try adjusting your filters or search query" 
        : "There was an issue loading services. Please try again.",
      variant: "destructive",
    });
  }, [isFiltered]);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <h3 className="text-xl font-semibold mb-2">No services found</h3>
      
      {isFiltered ? (
        <p className="text-muted-foreground mb-6">
          Try adjusting your filters or search query
        </p>
      ) : (
        <p className="text-muted-foreground mb-6">
          We couldn't load the service data. This might be a temporary issue.
        </p>
      )}
      
      <Button 
        onClick={onRefresh} 
        variant="outline"
        className="flex items-center gap-2"
      >
        <RefreshCw className="h-4 w-4" />
        Refresh
      </Button>
    </div>
  );
};

export default NoServicesMessage;
