
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Provider } from '@/utils/types';

interface ProfileCardProps {
  provider: Provider;
}

export const ProfileCard = ({ provider }: ProfileCardProps) => {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarFallback className="text-3xl">
              {provider.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold">{provider.name}</h2>
          <p className="text-muted-foreground">{provider.email}</p>
          <p className="text-muted-foreground mb-4">{provider.phone}</p>
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-green-500">Verified Provider</Badge>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 font-medium">{provider.rating}</span>
            </div>
          </div>
          <div className="w-full bg-gray-100 h-1 mb-4">
            <div 
              className="h-full bg-brand-600"
              style={{ width: `${(provider.rating / 5) * 100}%` }}
            ></div>
          </div>
          <div className="text-sm text-muted-foreground">
            {provider.totalJobs} jobs completed
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
