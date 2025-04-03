
import { useEffect, useState } from 'react';
import ServiceCard from '@/components/ServiceCard';
import { useServiceData } from '@/hooks/useServiceData';
import NoServicesMessage from './NoServicesMessage';
import useServiceRefresh from '@/hooks/useServiceRefresh';

interface ServicesListProps {
  category?: string;
  searchQuery?: string;
  priceRange?: [number, number];
}

const ServicesList = ({ category, searchQuery, priceRange }: ServicesListProps) => {
  const { refreshCounter, handleRefresh } = useServiceRefresh();
  const { services, isLoading, error } = useServiceData(refreshCounter);
  const [filteredServices, setFilteredServices] = useState(services);
  
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
        service.title.toLowerCase().includes(query) || 
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
    
    setFilteredServices(result);
  }, [services, category, searchQuery, priceRange]);
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-lg h-72"></div>
        ))}
      </div>
    );
  }
  
  if (error || !services) {
    return <NoServicesMessage onRefresh={handleRefresh} isFiltered={false} />;
  }
  
  if (filteredServices.length === 0) {
    return <NoServicesMessage onRefresh={handleRefresh} isFiltered={true} />;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {filteredServices.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;
