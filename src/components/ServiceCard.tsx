import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock, Check, ArrowUpRight } from 'lucide-react';
import { Service } from '@/utils/types';
import { Badge } from '@/components/ui/badge';
import { Image } from '@/components/ui/image';
import { getServiceImage } from '@/utils/imageUtils';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { id, name, description, price, image, rating, providerId, providerName, features, category } = service;

  const serviceImage = image && image.startsWith('http') ? image : getServiceImage(category);

  return (
    <Card className="service-card overflow-hidden h-full flex flex-col bg-card border-border/60 rounded-lg group">
      <div className="relative h-52 overflow-hidden bg-secondary">
        <Image
          src={serviceImage}
          alt={name}
          className="w-full h-full transition-transform duration-700 group-hover:scale-105"
          fallbackCategory={category}
          aspectRatio="wide"
          withAspectRatio
        />
        {rating >= 4.7 && (
          <div className="absolute top-3 left-3 bg-background/95 backdrop-blur text-foreground text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-medium">
            Editor's pick
          </div>
        )}
        <div className="absolute top-3 right-3 bg-background/95 backdrop-blur px-2.5 py-1 rounded-full flex items-center gap-1">
          <Star size={11} className="text-primary" fill="currentColor" />
          <span className="text-xs font-medium tabular-nums">{rating.toFixed(1)}</span>
        </div>
      </div>

      <CardHeader className="p-5 pb-3">
        <h3 className="font-display text-xl font-medium leading-tight mb-1.5 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>
      </CardHeader>

      <CardContent className="px-5 pt-0 pb-3 flex-grow">
        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {features.slice(0, 3).map((feature, i) => (
              <Badge key={i} variant="outline" className="text-[11px] font-normal bg-secondary/50 border-border/60">
                <Check size={9} className="text-primary mr-1" />
                {feature}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> {service.duration || '60–90 min'}
          </span>
          <Link to={`/provider/${providerId}`} className="link-reveal hover:text-foreground">
            {providerName}
          </Link>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-3 flex justify-between items-center border-t border-border/60">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">From</p>
          <p className="font-display text-2xl font-medium tabular-nums">₹{price}</p>
        </div>
        <Link to={`/services/${id}`}>
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 group/btn">
            Book
            <ArrowUpRight size={14} className="ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
