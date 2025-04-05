
import { serviceReadApi } from './services/serviceReadApi';
import { serviceWriteApi } from './services/serviceWriteApi';

/**
 * Combined Service API with all functionality
 */
export const serviceApi = {
  ...serviceReadApi,
  ...serviceWriteApi,
};
