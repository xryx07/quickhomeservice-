
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Service } from '@/utils/types';
import ServiceOverview from './ServiceOverview';
import ProviderDetails from './ProviderDetails';
import ReviewsTab from './ReviewsTab';

interface ServiceDetailTabsProps {
  service: Service;
}

const ServiceDetailTabs: React.FC<ServiceDetailTabsProps> = ({ service }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="mb-6">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="provider">Provider Details</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="space-y-4">
        <ServiceOverview service={service} />
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
