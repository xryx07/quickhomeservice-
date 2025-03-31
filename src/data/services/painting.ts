
import { Service } from '@/utils/types';

export const paintingServices: Service[] = [
  {
    id: '111',
    name: 'Interior Painting',
    category: 'painting',
    description: 'Professional interior painting services. Transform your space with a fresh coat of paint.',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1562848709-86afdce5db6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.8,
    providerId: 'p6',
    providerName: 'ColorMasters',
    features: ['Premium paints', 'Color consultation', 'Furniture protection', 'Crack filling', 'Smooth finish', 'Wall putty included'],
    duration: '2-5 days',
    equipmentIncluded: true,
    serviceArea: ['All city areas', 'Suburbs within 50km']
  },
  {
    id: '112',
    name: 'Exterior Painting',
    category: 'painting',
    description: 'Expert exterior painting services. Protect and beautify your home with quality exterior paint.',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    providerId: 'p6',
    providerName: 'ColorMasters',
    features: ['Weather-resistant paint', 'Surface preparation', '3-year warranty', 'Water sealing', 'Anti-fungal coating', 'UV protection'],
    duration: '3-7 days',
    equipmentIncluded: true,
    serviceArea: ['All city areas', 'Suburbs within 50km']
  },
  {
    id: '206',
    name: 'Decorative Wall Painting',
    category: 'painting',
    description: 'Artistic wall painting services to create unique and personalized home interiors with stunning designs.',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.9,
    providerId: 'p6',
    providerName: 'ColorMasters',
    features: ['Custom designs', 'Texture painting', 'Stencil art', 'Designer consultation', 'Digital mockups', 'Premium materials'],
    duration: '2-4 days',
    equipmentIncluded: true,
    serviceArea: ['All city areas', 'Suburbs within 30km']
  },
  {
    id: '207',
    name: 'Wood Polishing & Varnishing',
    category: 'painting',
    description: 'Professional wood polishing, varnishing, and restoration services for furniture, doors, and wooden surfaces.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1577572356739-c503253fcc98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    providerId: 'p6',
    providerName: 'ColorMasters',
    features: ['Melamine finish', 'French polishing', 'Scratch removal', 'Color matching', 'Protective coatings', 'Old furniture restoration'],
    duration: '1-3 days',
    equipmentIncluded: true,
    serviceArea: ['All city areas', 'Suburbs within 40km']
  }
];
