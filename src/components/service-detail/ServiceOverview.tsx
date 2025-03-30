
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Service } from '@/utils/types';

interface ServiceOverviewProps {
  service: Service;
}

const ServiceOverview: React.FC<ServiceOverviewProps> = ({ service }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Service Description</h3>
        <p className="text-muted-foreground">{service.description}</p>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <Clock size={18} className="text-muted-foreground mr-2" />
            <span className="text-sm">60-90 min</span>
          </div>
          <div className="flex items-center">
            <MapPin size={18} className="text-muted-foreground mr-2" />
            <span className="text-sm">At your location</span>
          </div>
          <div className="flex items-center">
            <Calendar size={18} className="text-muted-foreground mr-2" />
            <span className="text-sm">Booking available</span>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">What's Included</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5" />
              <span>Professional service by experienced provider</span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5" />
              <span>Quality tools and equipment</span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5" />
              <span>30-day service guarantee</span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5" />
              <span>Secure payment through our platform</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceOverview;
