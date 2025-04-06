import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { handleImageError, fallbackImages, isValidImageUrl, getServiceImage } from '@/utils/imageUtils';
import { Skeleton } from './skeleton';
import { AspectRatio } from './aspect-ratio';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackCategory?: keyof typeof fallbackImages | string;
  fallbackSrc?: string;
  showLoadingState?: boolean;
  aspectRatio?: "square" | "video" | "wide" | number;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  withAspectRatio?: boolean;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ 
    className, 
    src, 
    alt, 
    fallbackCategory, 
    fallbackSrc, 
    showLoadingState = true, 
    aspectRatio, 
    objectFit = "cover", 
    withAspectRatio = false,
    ...props 
  }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    
    // Determine aspect ratio class or value
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
    
    // Get correct aspect ratio value for component
    const getAspectRatioValue = () => {
      if (typeof aspectRatio === "number") return aspectRatio;
      
      switch (aspectRatio) {
        case "square": return 1;
        case "video": return 16/9;
        case "wide": return 16/9;
        default: return undefined;
      }
    };
    
    // Determine fallback source
    const determineFallback = () => {
      if (fallbackSrc && isValidImageUrl(fallbackSrc)) return fallbackSrc;
      if (fallbackCategory) {
        if (typeof fallbackCategory === 'string' && !(fallbackCategory in fallbackImages)) {
          // Try to find a matching category
          return getServiceImage(fallbackCategory);
        }
        return fallbackImages[fallbackCategory as keyof typeof fallbackImages] || fallbackImages.default;
      }
      return fallbackImages.default;
    };

    const imageContent = (
      <>
        {isLoading && showLoadingState && (
          <Skeleton className="absolute inset-0 rounded-md z-0" />
        )}
        
        <img
          className={cn(
            "max-w-full h-auto object-cover",
            objectFit && `object-${objectFit}`,
            isLoading ? "opacity-0" : "opacity-100",
            "transition-opacity duration-300 z-10 relative",
            className
          )}
          ref={ref}
          src={hasError ? determineFallback() : src}
          alt={alt || "Image"}
          onLoad={() => setIsLoading(false)}
          onError={(e) => {
            setHasError(true);
            setIsLoading(false);
            e.currentTarget.src = determineFallback();
          }}
          {...props}
        />
      </>
    );
    
    // If we want to enforce an aspect ratio, wrap in AspectRatio component
    if (withAspectRatio && aspectRatio) {
      return (
        <div className={cn("relative overflow-hidden", className)}>
          <AspectRatio ratio={getAspectRatioValue()}>
            {imageContent}
          </AspectRatio>
        </div>
      );
    }
    
    // Otherwise return the basic container with aspect ratio class
    return (
      <div className={cn(
        "relative overflow-hidden",
        getAspectRatioClass()
      )}>
        {imageContent}
      </div>
    );
  }
);

Image.displayName = "Image";

export { Image };
