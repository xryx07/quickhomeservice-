
import { useState, useEffect } from 'react';
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

export const useServiceData = (serviceId: string | undefined) => {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real application, this would be an API call to fetch the service by ID
    // Simulate an API call with setTimeout
    const timer = setTimeout(() => {
      setService(mockService);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [serviceId]);
  
  return { service, loading };
};
