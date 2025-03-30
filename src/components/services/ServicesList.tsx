
import ServiceCard from '@/components/ServiceCard';
import { Service } from '@/utils/types';

interface ServicesListProps {
  services: Service[];
}

const ServicesList = ({ services }: ServicesListProps) => {
  if (services.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No services found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;
