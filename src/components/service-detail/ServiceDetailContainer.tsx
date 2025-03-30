
import React from 'react';
import { Service } from '@/utils/types';
import { ServiceInfo } from '@/components/service-detail';
import { ServiceDetailTabs } from '@/components/service-detail';
import { BookingForm } from '@/components/booking';

interface ServiceDetailContainerProps {
  service: Service;
}

const ServiceDetailContainer: React.FC<ServiceDetailContainerProps> = ({ service }) => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Service Details */}
        <div className="md:col-span-2 space-y-6">
          <ServiceInfo service={service} />
          <ServiceDetailTabs service={service} />
        </div>
        
        {/* Right Column - Booking Form */}
        <div>
          <div className="sticky top-6">
            <BookingForm service={service} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailContainer;
