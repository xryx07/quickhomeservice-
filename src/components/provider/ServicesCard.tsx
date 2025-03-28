
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Provider } from '@/utils/types';

interface ServicesCardProps {
  provider: Provider;
}

export const ServicesCard = ({ provider }: ServicesCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Services</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-2">
          {provider.services.map((service, index) => (
            <Badge key={index} variant="outline" className="mr-2 capitalize">
              {service}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
