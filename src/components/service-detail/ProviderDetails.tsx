
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ChevronRight } from 'lucide-react';
import { Service } from '@/utils/types';

interface ProviderDetailsProps {
  service: Service;
}

const ProviderDetails: React.FC<ProviderDetailsProps> = ({ service }) => {
  return (
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
  );
};

export default ProviderDetails;
