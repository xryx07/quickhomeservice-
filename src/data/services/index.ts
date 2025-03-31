
import { Service, Category } from '@/utils/types';
import { cleaningServices } from './cleaning';
import { electricianServices } from './electrician';
import { plumbingServices } from './plumbing';
import { beautyServices } from './beauty';
import { applianceServices } from './appliance';
import { paintingServices } from './painting';
import { pestControlServices } from './pestcontrol';
import { carpentryServices } from './carpentry';
import { categories } from './categories';

// Combine all services into one array
export const allServices: Service[] = [
  ...cleaningServices,
  ...electricianServices,
  ...plumbingServices,
  ...beautyServices,
  ...applianceServices,
  ...paintingServices,
  ...pestControlServices,
  ...carpentryServices
];

// Export categories
export const allCategories: Category[] = categories;
