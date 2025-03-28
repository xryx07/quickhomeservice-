
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Clock, MapPin, ChevronRight, Calendar, CheckCircle } from 'lucide-react';
import { Service } from '@/utils/types';
import BookingForm from '@/components/booking/BookingForm';

interface ServiceDetailProps {
  service: Service;
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Service Details */}
        <div className="md:col-span-2 space-y-6">
          <div className="relative rounded-lg overflow-hidden h-[300px]">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">{service.name}</h1>
              <div className="flex items-center bg-gray-100 px-3 py-1 rounded">
                <Star size={16} className="text-yellow-500 mr-1" fill="currentColor" />
                <span className="font-medium">{service.rating.toFixed(1)}</span>
              </div>
            </div>
            <p className="text-muted-foreground mt-2">{service.category}</p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="provider">Provider Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
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
            </TabsContent>
            
            <TabsContent value="provider">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-16 w-16 mr-4">
                      <AvatarFallback>{service.providerName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{service.providerName}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star size={14} className="text-yellow-500 mr-1" fill="currentColor" />
                        <span>{service.rating.toFixed(1)} Rating</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">About Provider</h4>
                      <p className="text-sm text-muted-foreground">
                        Professional service provider with extensive experience in providing quality services.
                        Trained and certified in the latest techniques and safety standards.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Services Offered</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{service.category}</Badge>
                        <Badge variant="outline">Deep Cleaning</Badge>
                        <Badge variant="outline">Home Repairs</Badge>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center mt-4"
                      onClick={() => window.location.href = `/provider/${service.providerId}`}
                    >
                      View Full Profile <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Customer Reviews</h3>
                    <div className="flex items-center">
                      <Star size={18} className="text-yellow-500 mr-1" fill="currentColor" />
                      <span className="font-medium">{service.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Mock reviews */}
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarFallback>RS</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">Rahul S.</span>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              size={14}
                              className={`${star <= 5 ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Great service, very prompt and professional. Would definitely recommend!
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">15 days ago</p>
                    </div>
                    
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarFallback>AP</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">Anjali P.</span>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              size={14}
                              className={`${star <= 4 ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Very satisfied with the service. The provider was knowledgeable and completed the job efficiently.
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">1 month ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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

export default ServiceDetail;
