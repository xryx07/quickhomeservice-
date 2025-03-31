
import React, { useState } from 'react';
import { Service } from '@/utils/types';
import { ServiceInfo } from '@/components/service-detail';
import { ServiceDetailTabs } from '@/components/service-detail';
import { BookingForm } from '@/components/booking';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Edit, Trash2, Clock, MapPin, Tool } from 'lucide-react';

interface ServiceDetailContainerProps {
  service: Service;
}

const ServiceDetailContainer: React.FC<ServiceDetailContainerProps> = ({ service }) => {
  // Mock authentication state - in a real app, this would come from your auth context
  const isAdmin = true; // For testing purposes, set to true to see admin controls
  
  const [isActive, setIsActive] = useState(service.isActive !== false);
  const { toast } = useToast();
  
  const handleToggleActive = () => {
    setIsActive(!isActive);
    toast({
      title: !isActive ? "Service activated" : "Service deactivated",
      description: !isActive 
        ? "This service is now visible to customers" 
        : "This service has been hidden from customers",
    });
  };
  
  const handleEditService = () => {
    toast({
      title: "Edit service",
      description: "Redirecting to edit service page",
    });
    // In a real implementation, this would navigate to an edit page
  };
  
  const handleDeleteService = () => {
    toast({
      title: "Delete service",
      description: "Service deletion functionality would be implemented here",
    });
    // In a real implementation, this would show a confirmation dialog
  };
  
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Admin Controls - Only visible to admins */}
      {isAdmin && (
        <div className="mb-6 p-4 border rounded-lg bg-gray-50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-medium">Admin Controls</h3>
              <p className="text-sm text-muted-foreground">Manage this service listing</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="service-active" 
                  checked={isActive} 
                  onCheckedChange={handleToggleActive} 
                />
                <Label htmlFor="service-active">
                  {isActive ? (
                    <Badge className="bg-green-500">Active</Badge>
                  ) : (
                    <Badge variant="outline" className="text-red-500 border-red-500">Inactive</Badge>
                  )}
                </Label>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleEditService}>
                  <Edit className="h-4 w-4 mr-2" /> Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={handleDeleteService}>
                  <Trash2 className="h-4 w-4 mr-2" /> Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Service Details */}
        <div className="md:col-span-2 space-y-6">
          <ServiceInfo service={service} />
          
          {/* Additional service details section */}
          <div className="p-6 border rounded-lg bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Service Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.duration && (
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">{service.duration}</p>
                  </div>
                </div>
              )}
              
              {service.equipmentIncluded !== undefined && (
                <div className="flex items-center">
                  <Tool className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Equipment</p>
                    <p className="text-sm text-muted-foreground">
                      {service.equipmentIncluded ? 'Included' : 'Not included'}
                    </p>
                  </div>
                </div>
              )}
              
              {service.serviceArea && service.serviceArea.length > 0 && (
                <div className="flex items-center col-span-1 sm:col-span-2">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Service Area</p>
                    <p className="text-sm text-muted-foreground">
                      {service.serviceArea.join(', ')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
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
