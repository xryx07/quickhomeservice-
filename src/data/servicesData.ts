
import { Service, Category } from '@/utils/types';

// Mock data for services
export const allServices: Service[] = [
  // Cleaning Services
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
  },
  
  // Electrician Services
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
  },
  
  // Plumbing Services
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
  },
  
  // Beauty Services
  {
    id: '4',
    name: 'Professional Salon',
    category: 'beauty',
    description: 'Get salon-quality hair cuts, styling, and treatments in the comfort of your home.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.9,
    providerId: 'p4',
    providerName: 'GlamHome',
    features: ['Premium products', 'Skilled stylists', 'Customized services']
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
    providerName: 'GlamHome',
    features: ['Organic products', 'Anti-aging treatments', 'Deep cleansing']
  },
  {
    id: '107',
    name: 'Manicure & Pedicure',
    category: 'beauty',
    description: 'Professional nail care services at your doorstep. Enjoy beautiful nails without leaving home.',
    price: 699,
    image: 'https://images.unsplash.com/photo-1610992738985-c89d08250548?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.8,
    providerId: 'p4',
    providerName: 'GlamHome',
    features: ['Gel options', 'Nail art', 'Long-lasting finish']
  },
  {
    id: '108',
    name: 'Bridal Makeup',
    category: 'beauty',
    description: 'Special bridal makeup services for your big day. Look your best with our expert makeup artists.',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1594532922151-5f28d24b2a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.9,
    providerId: 'p4',
    providerName: 'GlamHome',
    features: ['Trial session', 'Premium brands', 'Hair styling included']
  },
  
  // Appliance Repair
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
    features: ['All brands', 'Same-day service', '90-day warranty']
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
    features: ['Genuine parts', 'Free diagnosis', 'Preventive maintenance']
  },
  
  // Home Painting
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
    features: ['Premium paints', 'Color consultation', 'Furniture protection']
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
    features: ['Weather-resistant paint', 'Surface preparation', '3-year warranty']
  },
  
  // Pest Control
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
    features: ['Child-safe solutions', 'Preventive treatment', 'Scheduled maintenance']
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
    features: ['Inspection report', 'Chemical barriers', 'Long-term protection']
  },
  
  // Carpentry
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
  },
  {
    id: 'c5',
    name: 'Appliance Repair',
    icon: '🔌',
    services: 12
  },
  {
    id: 'c6',
    name: 'Home Painting',
    icon: '🎨',
    services: 8
  },
  {
    id: 'c7',
    name: 'Pest Control',
    icon: '🐜',
    services: 6
  },
  {
    id: 'c8',
    name: 'Carpentry',
    icon: '🪚',
    services: 10
  }
];

