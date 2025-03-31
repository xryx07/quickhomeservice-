
import { Service } from '@/utils/types';

export const electricianServices: Service[] = [
  {
    id: '2',
    name: 'Electrician Services',
    category: 'electrician',
    description: 'Certified electricians for all your electrical needs. We handle installations, repairs, and troubleshooting.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    providerId: 'p2',
    providerName: 'ElectriPro',
    features: ['24/7 emergency service', 'Licensed professionals', 'Warranty on work']
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
    providerName: 'ElectriPro',
    features: ['Code compliance', 'Safety inspection', 'Free consultation']
  },
  {
    id: '103',
    name: 'Circuit Breaker Repair',
    category: 'electrician',
    description: 'Expert circuit breaker repair and replacement services. Ensure your electrical system is safe and functional.',
    price: 699,
    image: 'https://images.unsplash.com/photo-1630401945898-2adb2fc83f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.9,
    providerId: 'p2',
    providerName: 'ElectriPro',
    features: ['Same-day service', 'Safety testing', 'Parts included']
  },
  {
    id: '104',
    name: 'Ceiling Fan Installation',
    category: 'electrician',
    description: 'Professional ceiling fan installation service. Keep your home cool and energy-efficient.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1555371363-27a37f8e8c46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    providerId: 'p2',
    providerName: 'ElectriPro',
    features: ['All brands supported', 'Remote control setup', 'Wiring inspection']
  }
];
