
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Provider } from '@/utils/types';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import FeaturesCard from './FeaturesCard';

interface ServicesCardProps {
  provider: Provider;
}

export const ServicesCard = ({ provider }: ServicesCardProps) => {
  const [showAddService, setShowAddService] = useState(false);
  const [newService, setNewService] = useState('');
  const { toast } = useToast();

  const handleAddService = () => {
    if (newService.trim()) {
      toast({
        title: "Service added",
        description: `${newService} has been added to your services.`,
      });
      setNewService('');
      setShowAddService(false);
    }
  };

  // Mock features for demonstration
  const serviceFeatures = ['Fast service', 'Quality guaranteed', 'Premium materials'];

  const handleFeaturesChange = (features: string[]) => {
    console.log('Updated features:', features);
    // In a real app, you would update the provider's services with these features
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <CardTitle>Services</CardTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0"
            onClick={() => setShowAddService(!showAddService)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="p-6">
          {showAddService && (
            <div className="mb-4 flex gap-2">
              <input
                type="text"
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                placeholder="Add new service"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
              />
              <Button size="sm" onClick={handleAddService}>Add</Button>
            </div>
          )}
          <div className="space-y-2">
            {provider.services.map((service, index) => (
              <Badge key={index} variant="outline" className="mr-2 capitalize">
                {service}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <FeaturesCard 
        features={serviceFeatures} 
        onFeaturesChange={handleFeaturesChange} 
      />
    </div>
  );
};

export default ServicesCard;
