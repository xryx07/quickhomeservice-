
/**
 * A collection of utility functions for handling images
 */

/**
 * Default fallback image URLs by category
 */
export const fallbackImages = {
  service: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  profile: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  document: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  repair: "https://images.unsplash.com/photo-1578652520385-c05f6f3b2c11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  appliance: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  cleaning: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  plumbing: "https://images.unsplash.com/photo-1585704032915-c3400305e979?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  electrician: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  beauty: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "Pest Control": "https://images.unsplash.com/photo-1584179234953-7b549f4b1e33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  carpentry: "https://images.unsplash.com/photo-1586864387789-628af9feed72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "Home Painting": "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  default: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

/**
 * Handles image loading errors by replacing with a fallback
 * 
 * @param event The error event from the image
 * @param category Optional category to use a specific fallback image
 */
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  category?: keyof typeof fallbackImages
) => {
  const element = event.currentTarget;
  element.onerror = null; // Prevents infinite loop if fallback also fails
  element.src = category ? 
    fallbackImages[category] || fallbackImages.default : 
    fallbackImages.default;
};

/**
 * Validates if a URL is a valid image URL
 * 
 * @param url The URL to validate
 * @returns Boolean indicating if the URL is valid
 */
export const isValidImageUrl = (url: string): boolean => {
  if (!url) return false;
  
  // Check if URL has an image extension
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp)$/i;
  if (imageExtensions.test(url)) return true;
  
  // Check if URL is from common image hosts
  const imageHosts = [
    'unsplash.com', 
    'images.unsplash.com',
    'img.com', 
    'imgur.com',
    'picsum.photos',
    'placekitten.com',
    'placeimg.com'
  ];
  
  try {
    const urlObj = new URL(url);
    return imageHosts.some(host => urlObj.hostname.includes(host));
  } catch {
    return false;
  }
};

/**
 * Get appropriate image for a service based on category
 * 
 * @param category The service category
 * @param defaultImage Optional default image URL if provided
 * @returns The most appropriate image URL
 */
export const getServiceImage = (category: string, defaultImage?: string): string => {
  if (defaultImage && isValidImageUrl(defaultImage)) {
    return defaultImage;
  }
  
  // Convert category to standard format to match keys
  const normalizedCategory = category.toLowerCase().trim();
  
  // Try to find exact match
  for (const [key, url] of Object.entries(fallbackImages)) {
    if (key.toLowerCase() === normalizedCategory) {
      return url;
    }
  }
  
  // Try to find partial match
  for (const [key, url] of Object.entries(fallbackImages)) {
    if (normalizedCategory.includes(key.toLowerCase()) || 
        key.toLowerCase().includes(normalizedCategory)) {
      return url;
    }
  }
  
  // Default fallback
  return fallbackImages.service;
};

export default {
  fallbackImages,
  handleImageError,
  isValidImageUrl,
  getServiceImage
};
