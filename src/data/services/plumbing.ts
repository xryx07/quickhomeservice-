
import { Service } from '@/utils/types';

export const plumbingServices: Service[] = [
  {
    id: '3',
    name: 'Plumbing Repairs',
    category: 'plumbing',
    description: 'Fast and reliable plumbing services. We fix leaks, clogs, and install new fixtures.',
    price: 649,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400305e979?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.6,
    providerId: 'p3',
    providerName: 'PlumbRight',
    features: ['Emergency services', 'No hidden fees', 'Satisfaction guaranteed']
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
    providerName: 'PlumbRight',
    features: ['Leak detection', 'Pipe replacement', 'Water damage prevention']
  },
  {
    id: '105',
    name: 'Drain Cleaning',
    category: 'plumbing',
    description: 'Professional drain cleaning services to fix clogs and ensure proper drainage in your home.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.8,
    providerId: 'p3',
    providerName: 'PlumbRight',
    features: ['Camera inspection', 'Hydro jetting', 'Preventive maintenance']
  },
  {
    id: '106',
    name: 'Water Heater Installation',
    category: 'plumbing',
    description: 'Expert water heater installation and replacement services. Enjoy reliable hot water in your home.',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1621274147744-cfda5674ba10?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    providerId: 'p3',
    providerName: 'PlumbRight',
    features: ['All brands', 'Energy efficient models', 'Old unit removal']
  }
];
