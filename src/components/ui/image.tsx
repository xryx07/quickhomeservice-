
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { handleImageError, fallbackImages } from '@/utils/imageUtils';
import { Skeleton } from './skeleton';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackCategory?: keyof typeof fallbackImages;
  fallbackSrc?: string;
  showLoadingState?: boolean;
  aspectRatio?: "square" | "video" | "wide" | number;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, alt, fallbackCategory, fallbackSrc, showLoadingState = true, aspectRatio, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    
    // Determine aspect ratio class
    const getAspectRatioClass = () => {
      if (!aspectRatio) return "";
      if (typeof aspectRatio === "number") return `aspect-[${aspectRatio}]`;
      
      switch (aspectRatio) {
        case "square": return "aspect-square";
        case "video": return "aspect-video";
        case "wide": return "aspect-[16/9]";
        default: return "";
      }
    };
    
    // Determine fallback source
    const determineFallback = () => {
      if (fallbackSrc) return fallbackSrc;
      if (fallbackCategory && fallbackCategory in fallbackImages) {
        return fallbackImages[fallbackCategory];
      }
      return fallbackImages.default;
    };
    
    return (
      <div className={cn("relative overflow-hidden", getAspectRatioClass(), className)}>
        {isLoading && showLoadingState && (
          <Skeleton className="absolute inset-0 rounded-md" />
        )}
        
        <img
          className={cn("max-w-full h-auto object-cover", hasError ? "opacity-100" : "opacity-0", !isLoading && "opacity-100", "transition-opacity duration-300")}
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
