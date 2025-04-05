
import { useEffect, useState } from 'react';
import ServiceCard from '@/components/ServiceCard';
import { useServiceData } from '@/hooks/useServiceData';
import NoServicesMessage from './NoServicesMessage';
import useServiceRefresh from '@/hooks/useServiceRefresh';
import { Service } from '@/utils/types';
import { fallbackImages } from '@/utils/imageUtils';
import { Skeleton } from '@/components/ui/skeleton';
import { Image } from '@/components/ui/image';

interface ServicesListProps {
  category?: string;
  searchQuery?: string;
  priceRange?: [number, number];
}

const ServicesList = ({ category, searchQuery, priceRange }: ServicesListProps) => {
  const { refreshCounter, handleRefresh } = useServiceRefresh();
  const { services, isLoading, error } = useServiceData(refreshCounter);
  const [filteredServices, setFilteredServices] = useState<Service[] | null>(null);
  
  // Filter services based on props
  useEffect(() => {
    if (!services) return;
    
    let result = [...services];
    
    // Filter by category if provided
    if (category && category !== 'All') {
      result = result.filter(service => 
        service.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Filter by search query if provided
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(service => 
        service.name.toLowerCase().includes(query) || 
        service.description.toLowerCase().includes(query)
      );
    }
    
    // Filter by price range if provided
    if (priceRange) {
      const [min, max] = priceRange;
      result = result.filter(service => 
        service.price >= min && service.price <= max
      );
    }
    
    // Make sure all services have valid images
    result = result.map(service => {
      if (!service.image || !service.image.startsWith('http')) {
        // Use category-specific fallback if available
        return {
          ...service,
          image: fallbackImages[service.category as keyof typeof fallbackImages] || fallbackImages.default
        };
      }
      return service;
    });
    
    setFilteredServices(result);
  }, [services, category, searchQuery, priceRange]);
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex justify-between pt-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  if (error || !services) {
    return <NoServicesMessage onRefresh={handleRefresh} isFiltered={false} />;
  }
  
  if (filteredServices && filteredServices.length === 0) {
    return <NoServicesMessage onRefresh={handleRefresh} isFiltered={true} />;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {filteredServices && filteredServices.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;
