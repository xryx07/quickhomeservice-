
import { CheckSquare } from 'lucide-react';
import { Service } from '@/utils/types';

interface ServiceOverviewProps {
  service: Service;
}

const ServiceOverview = ({ service }: ServiceOverviewProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">About This Service</h3>
      <p className="text-gray-700 mb-6">{service.description}</p>
      
      {service.features && service.features.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-medium mb-3">Service Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckSquare className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div>
        <h4 className="text-lg font-medium mb-3">Service Details</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium text-sm text-gray-500 mb-1">Duration</h5>
            <p>60-90 minutes</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium text-sm text-gray-500 mb-1">Availability</h5>
            <p>Mon-Sun, 8 AM - 8 PM</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium text-sm text-gray-500 mb-1">Cancellation</h5>
            <p>Free cancellation up to 2 hours before the service</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium text-sm text-gray-500 mb-1">Warranty</h5>
            <p>7-day service warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;
