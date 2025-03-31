
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Check } from 'lucide-react';
import { Service } from '@/utils/types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { id, name, description, price, image, rating, providerId, providerName, features } = service;
  
  return (
    <Card className="service-card overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm">
            <Star size={14} className="text-yellow-500 mr-1" fill="currentColor" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{description.length > 100 ? description.substring(0, 100) + '...' : description}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        {features && features.length > 0 && (
          <div className="mb-2">
            <h4 className="text-sm font-medium mb-1">Features:</h4>
            <ul className="text-sm space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check size={12} className="text-green-500 mr-1 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>60-90 min</span>
          </div>
          <Link to={`/provider/${providerId}`} className="hover:underline">
            {providerName}
          </Link>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center border-t mt-auto">
        <div className="font-semibold">₹{price}</div>
        <Link to={`/services/${id}`}>
          <Button className="btn-brand">Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
