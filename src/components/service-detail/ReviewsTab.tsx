
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Service } from '@/utils/types';

interface ReviewsTabProps {
  service: Service;
}

const ReviewsTab: React.FC<ReviewsTabProps> = ({ service }) => {
  return (
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
  );
};

export default ReviewsTab;
