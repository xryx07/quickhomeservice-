
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface FeaturesCardProps {
  features: string[];
  onFeaturesChange?: (features: string[]) => void;
}

export const FeaturesCard = ({ features = [], onFeaturesChange }: FeaturesCardProps) => {
  const [showAddFeature, setShowAddFeature] = useState(false);
  const [newFeature, setNewFeature] = useState('');
  const [serviceFeatures, setServiceFeatures] = useState<string[]>(features);
  const { toast } = useToast();

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      const updatedFeatures = [...serviceFeatures, newFeature.trim()];
      setServiceFeatures(updatedFeatures);
      
      if (onFeaturesChange) {
        onFeaturesChange(updatedFeatures);
      }
      
      toast({
        title: "Feature added",
        description: `"${newFeature}" has been added to service features.`,
      });
      
      setNewFeature('');
      setShowAddFeature(false);
    }
  };

  const handleRemoveFeature = (index: number) => {
    const updatedFeatures = [...serviceFeatures];
    updatedFeatures.splice(index, 1);
    setServiceFeatures(updatedFeatures);
    
    if (onFeaturesChange) {
      onFeaturesChange(updatedFeatures);
    }
    
    toast({
      title: "Feature removed",
      description: "The feature has been removed from your service.",
    });
  };

  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle>Service Features</CardTitle>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0"
          onClick={() => setShowAddFeature(!showAddFeature)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-6">
        {showAddFeature && (
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              placeholder="Add new feature"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            />
            <Button size="sm" onClick={handleAddFeature}>Add</Button>
          </div>
        )}
        <div className="space-y-2">
          {serviceFeatures.length === 0 ? (
            <p className="text-sm text-muted-foreground">No features added yet. Add features to highlight what makes your service special.</p>
          ) : (
            serviceFeatures.map((feature, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                <Badge variant="outline" className="mr-2 capitalize">
                  {feature}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 w-6 p-0" 
                  onClick={() => handleRemoveFeature(index)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturesCard;
