
import { Service } from '@/utils/types';

export const pestControlServices: Service[] = [
  {
    id: '113',
    name: 'General Pest Control',
    category: 'pestcontrol',
    description: 'Comprehensive pest control services to eliminate common household pests like cockroaches, ants, and spiders.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1594761051656-111174a540db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.6,
    providerId: 'p7',
    providerName: 'PestGuard',
    features: ['Child-safe solutions', 'Preventive treatment', 'Scheduled maintenance', 'Odorless chemicals', 'Kitchen-safe formulas', 'Multiple follow-ups'],
    duration: '60-90 minutes',
    equipmentIncluded: true,
    serviceArea: ['All city areas', 'Suburbs within 35km']
  },
  {
    id: '114',
    name: 'Termite Control',
    category: 'pestcontrol',
    description: 'Specialized termite control services to protect your home from damaging termites.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1621930722276-7be03d02ecf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.8,
    providerId: 'p7',
    providerName: 'PestGuard',
    features: ['Inspection report', 'Chemical barriers', 'Long-term protection', 'Wood treatment', 'Soil treatment', '5-year warranty'],
    duration: '120-180 minutes',
    equipmentIncluded: true,
    serviceArea: ['All city areas', 'Suburbs within 30km']
  },
  {
    id: '208',
    name: 'Bed Bug Treatment',
    category: 'pestcontrol',
    description: 'Specialized bed bug elimination service using advanced techniques and professional-grade products.',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1584018961857-9a607d617f38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    providerId: 'p7',
    providerName: 'PestGuard',
    features: ['Heat treatment', 'Mattress treatment', 'Furniture inspection', '30-day guarantee', 'Preventive consultation', 'Follow-up visit'],
    duration: '120-150 minutes',
    equipmentIncluded: true,
    serviceArea: ['All city areas', 'Suburbs within 25km']
  },
  {
    id: '209',
    name: 'Rodent Control',
    category: 'pestcontrol',
    description: 'Effective rat and mice control services to eliminate rodents and prevent re-infestation.',
    price: 999,
    image: 'https://images.unsplash.com/photo-1571615340310-92599bfd6738?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.6,
    providerId: 'p7',
    providerName: 'PestGuard',
    features: ['Humane trapping', 'Entry point sealing', 'Preventive measures', 'Bait stations', 'Property inspection', 'Bimonthly follow-ups'],
    duration: '90-120 minutes',
    equipmentIncluded: true,
    serviceArea: ['All city areas', 'Suburbs within 35km']
  }
];
