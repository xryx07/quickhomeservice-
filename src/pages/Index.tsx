
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Service, Category } from '@/utils/types';
import { allCategories } from '@/data/services';

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
