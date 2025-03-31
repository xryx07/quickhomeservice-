
import { Service } from '@/utils/types';

export const applianceServices: Service[] = [
  {
    id: '109',
    name: 'Refrigerator Repair',
    category: 'appliance',
    description: 'Expert refrigerator repair services. Fix cooling issues, ice makers, and other refrigerator problems.',
    price: 799,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    providerId: 'p5',
    providerName: 'AppliancePro',
    features: ['All brands', 'Same-day service', '90-day warranty', 'Genuine parts', 'Troubleshooting included'],
    duration: '60-120 minutes',
    equipmentIncluded: true,
    serviceArea: ['All city areas', 'Suburbs within 30km']
  },
  {
    id: '110',
    name: 'Washing Machine Repair',
    category: 'appliance',
    description: 'Professional washing machine repair services. Fix leaks, spinning issues, and other problems.',
    price: 699,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.6,
    providerId: 'p5',
    providerName: 'AppliancePro',
    features: ['Genuine parts', 'Free diagnosis', 'Preventive maintenance', 'Water inlet fix', 'Motor repair'],
    duration: '60-90 minutes',
    equipmentIncluded: true,
    serviceArea: ['All city areas', 'Suburbs within 25km']
  },
  {
    id: '203',
    name: 'Air Conditioner Service',
    category: 'appliance',
    description: 'Comprehensive AC servicing, repair, and maintenance for optimal cooling performance and energy efficiency.',
    price: 999,
    image: 'https://images.unsplash.com/photo-1581275868311-a923c27eca88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.8,
    providerId: 'p5',
    providerName: 'AppliancePro',
    features: ['Filter cleaning', 'Gas refilling', 'Performance tuning', 'Complete sanitization', 'Noise reduction'],
    duration: '60-90 minutes',
    equipmentIncluded: true,
    serviceArea: ['All city areas', 'Suburbs within 20km']
  },
  {
    id: '204',
    name: 'Microwave Repair',
    category: 'appliance',
    description: 'Expert repair service for all types of microwave ovens, addressing heating issues, timer problems, and more.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1585269794640-7a1db9c0bb31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.5,
    providerId: 'p5',
    providerName: 'AppliancePro',
    features: ['All brands covered', 'Component-level repair', '60-day warranty', 'Door mechanism fix', 'Control panel repair'],
    duration: '45-60 minutes',
    equipmentIncluded: true,
    serviceArea: ['All city areas', 'Suburbs within 15km']
  },
  {
    id: '205',
    name: 'Television Repair',
    category: 'appliance',
    description: 'Professional TV repair service for LED, LCD, OLED, and Smart TVs with expert technicians.',
    price: 799,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.6,
    providerId: 'p5',
    providerName: 'AppliancePro',
    features: ['Display issues', 'Sound problems', 'Smart TV setup', 'Connectivity troubleshooting', 'Remote control repair'],
    duration: '60-90 minutes',
    equipmentIncluded: true,
    serviceArea: ['All city areas', 'Suburbs within 20km']
  }
];
