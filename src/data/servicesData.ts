
import { Service, Category } from '@/utils/types';

// Mock data for services
export const allServices: Service[] = [
  {
    id: '1',
    name: 'House Cleaning',
    category: 'cleaning',
    description: 'Professional house cleaning services for a spotless home. Our experts will make your house shine.',
    price: 799,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.8,
    providerId: 'p1',
    providerName: 'CleanMasters'
  },
  {
    id: '2',
    name: 'Electrician Services',
    category: 'electrician',
    description: 'Certified electricians for all your electrical needs. We handle installations, repairs, and troubleshooting.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    providerId: 'p2',
    providerName: 'ElectriPro'
  },
  {
    id: '3',
    name: 'Plumbing Repairs',
    category: 'plumbing',
    description: 'Fast and reliable plumbing services. We fix leaks, clogs, and install new fixtures.',
    price: 649,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400305e979?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.6,
    providerId: 'p3',
    providerName: 'PlumbRight'
  },
  {
    id: '4',
    name: 'Professional Salon',
    category: 'beauty',
    description: 'Get salon-quality hair cuts, styling, and treatments in the comfort of your home.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.9,
    providerId: 'p4',
    providerName: 'GlamHome'
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
    providerName: 'CleanMasters'
  },
  {
    id: '6',
    name: 'Wiring Installation',
    category: 'electrician',
    description: 'Complete wiring and installation services for new construction or renovation projects.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1555963966-b7ae5252385a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.8,
    providerId: 'p2',
    providerName: 'ElectriPro'
  },
  {
    id: '7',
    name: 'Pipe Repair',
    category: 'plumbing',
    description: 'Quick and effective pipe repair services to fix leaks and prevent water damage.',
    price: 849,
    image: 'https://images.unsplash.com/photo-1574757987642-5755f0839101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.5,
    providerId: 'p3',
    providerName: 'PlumbRight'
  },
  {
    id: '8',
    name: 'Facial & Spa',
    category: 'beauty',
    description: 'Luxurious facial and spa treatments delivered by certified beauticians at your home.',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.9,
    providerId: 'p4',
    providerName: 'GlamHome'
  }
];

export const allCategories: Category[] = [
  {
    id: 'c1',
    name: 'Cleaning',
    icon: '🧹',
    services: 26
  },
  {
    id: 'c2',
    name: 'Electrician',
    icon: '⚡',
    services: 18
  },
  {
    id: 'c3',
    name: 'Plumbing',
    icon: '🔧',
    services: 15
  },
  {
    id: 'c4',
    name: 'Beauty',
    icon: '💅',
    services: 30
  }
];
