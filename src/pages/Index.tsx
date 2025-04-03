
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PaintBucket, Palette, PaintRoller, Check } from 'lucide-react';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Service, Category } from '@/utils/types';
import { allCategories } from '@/data/services';
import { paintingServices } from '@/data/services/painting';
import ChatBot from '@/components/chatbot';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      
      <main>
        {/* Browse Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Browse Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {allCategories.map((category) => (
                <Link key={category.id} to={`/services?category=${category.name.toLowerCase()}`}>
                  <Card className="h-full transition-all hover:shadow-md hover:-translate-y-1 text-center">
                    <CardContent className="p-6 flex flex-col items-center justify-center">
                      <div className="text-4xl mb-3">{category.icon}</div>
                      <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.services} services</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Painting Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Premium Painting Services</h2>
                <p className="text-muted-foreground max-w-2xl">Transform your space with our professional painting services. We offer top-quality materials and expert craftsmanship.</p>
              </div>
              <Link to="/services?category=painting" className="mt-4 md:mt-0">
                <Button variant="outline" className="border-2 border-black hover:bg-black hover:text-white transition-colors">
                  View All Painting Services
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paintingServices.slice(0, 3).map((service) => (
                <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                    {service.rating >= 4.7 && (
                      <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                        Top Rated
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center mb-1">
                          <Check size={14} className="text-green-600 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">₹{service.price}</p>
                      <Link to={`/services/${service.id}`}>
                        <Button size="sm">Book Now</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Painting Service Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Painting Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  <PaintBucket className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
                <p className="text-muted-foreground">
                  We use only high-quality paints and materials that ensure a long-lasting, beautiful finish for your home.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  <Palette className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Color Consultation</h3>
                <p className="text-muted-foreground">
                  Receive professional color advice from our experienced designers to find the perfect palette for your space.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  <PaintRoller className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Skilled Professionals</h3>
                <p className="text-muted-foreground">
                  Our team of skilled painters delivers exceptional craftsmanship and attention to detail on every project.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-brand-600 mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Search Service</h3>
                <p className="text-muted-foreground">
                  Choose from a wide range of home services and select your preferred provider.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-brand-600 mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Book Online</h3>
                <p className="text-muted-foreground">
                  Schedule an appointment at your convenient time with verified service professionals.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-brand-600 mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Service Done</h3>
                <p className="text-muted-foreground">
                  Sit back and relax as your service is completed with quality and professionalism.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join as Provider CTA */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Become a Service Provider</h2>
              <p className="text-xl mb-8">
                Join our platform, grow your business, and increase your earnings.
              </p>
              <Link to="/become-provider">
                <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-lg px-6 py-2 font-medium">
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
