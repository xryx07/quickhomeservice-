
import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import ServiceDetailContainer from '@/components/service-detail/ServiceDetailContainer';
import { useServiceData } from '@/hooks/useServiceData';

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { service, loading } = useServiceData(id);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {loading ? (
          <div className="container mx-auto py-12 px-4 text-center">
            <div className="animate-pulse">
              <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-8 bg-gray-200 rounded mb-2 max-w-md mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded mb-8 max-w-sm mx-auto"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2 space-y-4">
                  <div className="h-40 bg-gray-200 rounded"></div>
                  <div className="h-40 bg-gray-200 rounded"></div>
                </div>
                <div className="h-96 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        ) : service ? (
          <ServiceDetailContainer service={service} />
        ) : (
          <div className="container mx-auto py-12 px-4 text-center">
            <h2 className="text-2xl font-bold">Service not found</h2>
            <p className="mt-2 text-muted-foreground">
              The service you are looking for could not be found.
            </p>
          </div>
        )}
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
