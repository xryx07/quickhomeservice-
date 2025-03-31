
import { Service } from '@/utils/types';

export const cleaningServices: Service[] = [
  {
    id: '1',
    name: 'House Cleaning',
    category: 'cleaning',
    description: 'Professional house cleaning services for a spotless home. Our experts will make your house shine.',
    price: 799,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.8,
    providerId: 'p1',
    providerName: 'CleanMasters',
    features: ['Deep cleaning', 'Eco-friendly products', 'Same day service']
  },
  {
    id: '5',
    name: 'Deep Cleaning',
    category: 'cleaning',
    description: 'Thorough cleaning service that reaches the deepest corners and sanitizes your entire home.',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    providerId: 'p1',
    providerName: 'CleanMasters',
    features: ['Disinfection', 'Hard water stain removal', 'Cabinet cleaning']
  },
  {
    id: '101',
    name: 'Office Cleaning',
    category: 'cleaning',
    description: 'Professional cleaning services for offices and commercial spaces. Keep your workplace clean and hygienic.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.6,
    providerId: 'p1',
    providerName: 'CleanMasters',
    features: ['After-hours service', 'Customized scheduling', 'Floor polishing']
  },
  {
    id: '102',
    name: 'Carpet Cleaning',
    category: 'cleaning',
    description: 'Professional carpet cleaning to remove stains, dirt, and allergens. Revitalize your carpets.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1558317378-78fc7c5b62c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.5,
    providerId: 'p1',
    providerName: 'CleanMasters',
    features: ['Steam cleaning', 'Stain removal', 'Odor elimination']
  }
];
