
import React from 'react';
import { Star } from 'lucide-react';
import { Service } from '@/utils/types';
import { Skeleton } from '@/components/ui/skeleton';

interface ServiceInfoProps {
  service: Service;
}

const ServiceInfo: React.FC<ServiceInfoProps> = ({ service }) => {
  return (
    <div>
      <div className="relative rounded-lg overflow-hidden h-[300px]">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
          }}
        />
      </div>
      
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{service.name}</h1>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">
            <Star size={16} className="text-yellow-500 mr-1" fill="currentColor" />
            <span className="font-medium">{service.rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-muted-foreground mt-2">{service.category}</p>
      </div>
    </div>
  );
};

export default ServiceInfo;
