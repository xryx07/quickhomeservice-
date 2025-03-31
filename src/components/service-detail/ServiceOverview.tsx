
import React from 'react';
import { Check } from 'lucide-react';
import { Service } from '@/utils/types';

interface ServiceOverviewProps {
  service: Service;
}

const ServiceOverview: React.FC<ServiceOverviewProps> = ({ service }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-3">Description</h3>
        <p className="text-muted-foreground">{service.description}</p>
      </div>
      
      {service.features && service.features.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-3">What's Included</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Check size={12} className="text-green-600" />
                </div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div>
        <h3 className="text-xl font-semibold mb-3">Terms and Conditions</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          <li>Service cancellations must be made at least 4 hours before the scheduled appointment.</li>
          <li>The final price may vary based on the scope of work required.</li>
          <li>Additional materials or parts will be charged separately if needed.</li>
          <li>Service professionals may reschedule in case of emergencies or unavailability.</li>
          <li>Payment is due upon completion of the service.</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceOverview;
