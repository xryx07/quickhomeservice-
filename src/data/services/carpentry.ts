
import { Service } from '@/utils/types';

export const carpentryServices: Service[] = [
  {
    id: '115',
    name: 'Furniture Assembly',
    category: 'carpentry',
    description: 'Professional furniture assembly services. Let our experts handle the complicated assembly instructions.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    providerId: 'p8',
    providerName: 'WoodWorks',
    features: ['All brands', 'Proper tools', 'Quality assurance']
  },
  {
    id: '116',
    name: 'Custom Carpentry',
    category: 'carpentry',
    description: 'Custom carpentry services for unique furniture, shelving, and woodwork projects.',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1577570983510-a0b677e2bd44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.9,
    providerId: 'p8',
    providerName: 'WoodWorks',
    features: ['Custom designs', 'Premium materials', 'Free consultation']
  }
];
