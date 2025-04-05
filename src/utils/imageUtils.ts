
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

export default {
  fallbackImages,
  handleImageError,
  isValidImageUrl
};
