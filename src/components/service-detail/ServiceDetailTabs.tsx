
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Service } from '@/utils/types';
import ServiceOverview from './ServiceOverview';
import ProviderDetails from './ProviderDetails';
import ReviewsTab from './ReviewsTab';
import { useToast } from '@/hooks/use-toast';

interface ServiceDetailTabsProps {
  service: Service;
}

const ServiceDetailTabs: React.FC<ServiceDetailTabsProps> = ({ service }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();
  
  // Add a handler for the book now button
  const handleBookNow = () => {
    toast({
      title: "Booking initiated",
      description: "You're being redirected to the booking form",
    });
    // In a real implementation, this might navigate to a booking page or open a modal
  };
  
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="mb-6">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="provider">Provider Details</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="space-y-4">
        <ServiceOverview service={service} onBookNow={handleBookNow} />
      </TabsContent>
      
      <TabsContent value="provider">
        <ProviderDetails service={service} />
      </TabsContent>
      
      <TabsContent value="reviews">
        <ReviewsTab service={service} />
      </TabsContent>
    </Tabs>
  );
};

export default ServiceDetailTabs;
