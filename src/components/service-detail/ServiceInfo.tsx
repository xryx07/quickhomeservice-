
import React from 'react';
import { Star } from 'lucide-react';
import { Service } from '@/utils/types';

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
        />
      </div>
      
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{service.name}</h1>
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded">
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
