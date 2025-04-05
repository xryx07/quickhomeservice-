
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { handleImageError, fallbackImages } from '@/utils/imageUtils';
import { Skeleton } from './skeleton';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackCategory?: keyof typeof fallbackImages;
  fallbackSrc?: string;
  showLoadingState?: boolean;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, alt, fallbackCategory, fallbackSrc, showLoadingState = true, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    
    // Determine fallback source
    const determineFallback = () => {
      if (fallbackSrc) return fallbackSrc;
      if (fallbackCategory && fallbackCategory in fallbackImages) {
        return fallbackImages[fallbackCategory];
      }
      return fallbackImages.default;
    };
    
    return (
      <div className={cn("relative", className)}>
        {isLoading && showLoadingState && (
          <Skeleton className="absolute inset-0 rounded-md" />
        )}
        
        <img
          className={cn("max-w-full h-auto", className)}
          ref={ref}
          src={hasError ? determineFallback() : src}
          alt={alt || "Image"}
          onLoad={() => setIsLoading(false)}
          onError={(e) => {
            setHasError(true);
            setIsLoading(false);
            if (fallbackSrc) {
              e.currentTarget.src = fallbackSrc;
            } else {
              handleImageError(e, fallbackCategory);
            }
          }}
          {...props}
        />
      </div>
    );
  }
);

Image.displayName = "Image";

export { Image };
