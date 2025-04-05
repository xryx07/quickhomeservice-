
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Check } from 'lucide-react';
import { Service } from '@/utils/types';
import { Badge } from '@/components/ui/badge';
import { Image } from '@/components/ui/image';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { id, name, description, price, image, rating, providerId, providerName, features } = service;
  
  return (
    <Card className="service-card overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          className="w-full h-full"
          fallbackCategory={service.category as keyof typeof import('@/utils/imageUtils').fallbackImages}
          aspectRatio="wide"
        />
        {/* Add a small badge for top rated services */}
        {rating >= 4.7 && (
          <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
            Top Rated
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
            <Star size={14} className="text-yellow-500 mr-1" fill="currentColor" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        {features && features.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-medium mb-2">Features:</h4>
            <div className="flex flex-wrap gap-1.5">
              {features.slice(0, 4).map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Check size={10} className="text-green-500 mr-1 flex-shrink-0" />
                  {feature}
                </Badge>
              ))}
              {features.length > 4 && (
                <Badge variant="outline" className="text-xs bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                  +{features.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        )}
        <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{service.duration || '60-90 min'}</span>
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
