
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServiceDetailComponent from '@/components/ServiceDetail';
import ChatBot from '@/components/ChatBot';
import { Service } from '@/utils/types';

// Mock data for a single service
const mockService: Service = {
  id: "3",
  name: "Premium House Cleaning",
  category: "Cleaning",
  description: "Our premium house cleaning service includes thorough cleaning of all rooms including kitchen, bathrooms, living areas, and bedrooms. We use eco-friendly cleaning products and professional equipment to ensure your home is spotless and hygienic. Our trained staff pays attention to every detail, from dusting ceiling fans to scrubbing baseboards. Perfect for regular maintenance or deep cleaning before special occasions.",
  price: 799,
  image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  rating: 4.7,
  providerId: "p1",
  providerName: "CleanPro Services"
};

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real application, this would be an API call to fetch the service by ID
    // Simulate an API call with setTimeout
    setTimeout(() => {
      setService(mockService);
      setLoading(false);
    }, 500);
  }, [id]);
  
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
          <ServiceDetailComponent service={service} />
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
