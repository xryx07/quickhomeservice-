
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Check } from 'lucide-react';
import { Service } from '@/utils/types';
import { Badge } from '@/components/ui/badge';
import { Image } from '@/components/ui/image';
import { getServiceImage } from '@/utils/imageUtils';
import { formatINR } from '@/data/indianLocations';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { id, name, description, price, image, rating, providerName, features, category } = service;
  const { t } = useLanguage();
  const serviceImage = image && image.startsWith('http') ? image : getServiceImage(category);

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 group border-border/50">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={serviceImage}
          alt={name}
          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
          fallbackCategory={category}
          aspectRatio="wide"
          withAspectRatio
        />
        {rating >= 4.7 && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2.5 py-1 rounded-full font-medium">
            ⭐ {t('service.top_rated')}
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm text-foreground text-sm px-3 py-1.5 rounded-lg font-bold">
          {formatINR(price)}
        </div>
      </div>

      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-base font-semibold line-clamp-1">{name}</h3>
          <div className="flex items-center bg-green-50 dark:bg-green-950 px-2 py-0.5 rounded text-xs font-medium text-green-700 dark:text-green-400 flex-shrink-0">
            <Star size={12} className="mr-0.5" fill="currentColor" />
            {rating.toFixed(1)}
          </div>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{description}</p>
      </CardHeader>

      <CardContent className="p-4 pt-0 flex-grow">
        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-[10px] px-1.5 py-0 border-border/50">
                <Check size={8} className="text-green-500 mr-0.5" />
                {feature}
              </Badge>
            ))}
            {features.length > 3 && (
              <Badge variant="outline" className="text-[10px] px-1.5 py-0">+{features.length - 3} {t('service.more')}</Badge>
            )}
          </div>
        )}
        <div className="flex justify-between items-center mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock size={12} /> {service.duration || '60-90 min'}
          </span>
          <span className="truncate max-w-[120px]">{providerName}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 border-t border-border/50 mt-auto">
        <Link to={`/services/${id}`} className="w-full">
          <Button className="w-full btn-brand text-sm h-9">{t('service.book_now')}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
