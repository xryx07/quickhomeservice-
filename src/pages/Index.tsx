
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Star, ArrowRight, ChevronRight } from 'lucide-react';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import { Service, Category } from '@/utils/types';

// Mock data for initial render
const popularServices: Service[] = [
  {
    id: '1',
    name: 'House Cleaning',
    category: 'cleaning',
    description: 'Professional house cleaning services for a spotless home. Our experts will make your house shine.',
    price: 799,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.8,
    providerId: 'p1',
    providerName: 'CleanMasters'
  },
  {
    id: '2',
    name: 'Electrician Services',
    category: 'electrician',
    description: 'Certified electricians for all your electrical needs. We handle installations, repairs, and troubleshooting.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    providerId: 'p2',
    providerName: 'ElectriPro'
  },
  {
    id: '3',
    name: 'Plumbing Repairs',
    category: 'plumbing',
    description: 'Fast and reliable plumbing services. We fix leaks, clogs, and install new fixtures.',
    price: 649,
    image: 'https://images.unsplash.com/photo-1606274470197-5aec27f5e61a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.6,
    providerId: 'p3',
    providerName: 'PlumbRight'
  },
  {
    id: '4',
    name: 'Professional Salon',
    category: 'beauty',
    description: 'Get salon-quality hair cuts, styling, and treatments in the comfort of your home.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.9,
    providerId: 'p4',
    providerName: 'GlamHome'
  }
];

const featuredCategories: Category[] = [
  {
    id: 'c1',
    name: 'Cleaning',
    icon: '🧹',
    services: 26
  },
  {
    id: 'c2',
    name: 'Electrician',
    icon: '⚡',
    services: 18
  },
  {
    id: 'c3',
    name: 'Plumbing',
    icon: '🔧',
    services: 15
  },
  {
    id: 'c4',
    name: 'Beauty & Spa',
    icon: '💅',
    services: 30
  },
  {
    id: 'c5',
    name: 'Appliance Repair',
    icon: '🔌',
    services: 12
  },
  {
    id: 'c6',
    name: 'Home Painting',
    icon: '🎨',
    services: 8
  },
  {
    id: 'c7',
    name: 'Pest Control',
    icon: '🐜',
    services: 6
  },
  {
    id: 'c8',
    name: 'Carpentry',
    icon: '🪚',
    services: 10
  }
];

const Index = () => {
  const [services, setServices] = useState<Service[]>(popularServices);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      
      <main>
        {/* Featured Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
              {featuredCategories.map((category) => (
                <Link key={category.id} to={`/services?category=${category.name.toLowerCase()}`}>
                  <Card className="h-full transition-all hover:shadow-md hover:-translate-y-1">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="text-4xl mb-2">{category.icon}</div>
                      <h3 className="font-medium mb-1">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.services} services</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Popular Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Most Popular Services</h2>
              <Link to="/services" className="text-brand-600 hover:text-brand-700 flex items-center gap-1">
                View All <ChevronRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Book a Service</h3>
                <p className="text-muted-foreground">
                  Choose from a wide range of home services and select your preferred time slot.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Professional Help</h3>
                <p className="text-muted-foreground">
                  Verified and trained professionals will arrive at your doorstep at the scheduled time.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Enjoy & Relax</h3>
                <p className="text-muted-foreground">
                  Sit back and relax as your service is completed with quality and professionalism.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <h2 className="text-3xl font-bold mb-6">Why Choose UrbanPro?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mt-1 bg-brand-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-brand-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold">Verified Professionals</h3>
                        <p className="text-muted-foreground">All service providers undergo thorough verification and training.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 bg-brand-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-brand-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold">Transparent Pricing</h3>
                        <p className="text-muted-foreground">Know exactly what you're paying for with upfront pricing.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 bg-brand-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-brand-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold">100% Quality Guarantee</h3>
                        <p className="text-muted-foreground">Not satisfied? We'll make it right or give your money back.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 bg-brand-100 p-1 rounded-full">
                        <Check className="h-4 w-4 text-brand-600" />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold">Seamless Booking Experience</h3>
                        <p className="text-muted-foreground">Book, reschedule, or cancel services with just a few taps.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link to="/services">
                      <Button className="btn-brand">Explore Services</Button>
                    </Link>
                  </div>
                </div>
                <div className="lg:w-1/2 relative">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                    alt="Professional cleaning service"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-950/60 to-brand-950/20 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <div className="flex justify-center mb-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-5xl font-bold">4.8</div>
                          <div className="flex justify-center mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} size={16} className="text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <div className="mt-2 text-sm">500+ reviews</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">Trusted by 10,000+ customers</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Become a Provider CTA */}
        <section className="py-16 bg-gradient-to-r from-brand-600 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Become a Service Provider</h2>
              <p className="text-xl mb-8">
                Join our platform and grow your business. Reach more customers and increase your earnings.
              </p>
              <Link to="/become-provider">
                <Button variant="outline" className="bg-white text-brand-600 hover:bg-gray-100 border-none">
                  Register as Provider
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
