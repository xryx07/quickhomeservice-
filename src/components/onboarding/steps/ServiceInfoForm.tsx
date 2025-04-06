
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
}

interface ServiceInfoFormProps {
  formData: {
    serviceCategories: string[];
    serviceDescription: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleCategoryToggle: (category: string) => void;
  categories: ServiceCategory[];
}

const ServiceInfoForm = ({ 
  formData, 
  onInputChange, 
  handleCategoryToggle,
  categories 
}: ServiceInfoFormProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <Label>Select Service Categories *</Label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`border rounded-md p-3 cursor-pointer ${
                formData.serviceCategories.includes(category.id) 
                  ? 'border-brand-600 dark:border-brand-400 bg-brand-50 dark:bg-brand-900/20' 
                  : 'hover:border-gray-400 dark:hover:border-gray-500'
              }`}
              onClick={() => handleCategoryToggle(category.id)}
            >
              <div className="flex items-center">
                <div className="mr-2 text-xl">{category.icon}</div>
                <div>{category.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="serviceDescription">Service Description *</Label>
        <Textarea 
          id="serviceDescription" 
          name="serviceDescription" 
          placeholder="Describe the services you provide, your experience, and your expertise..." 
          rows={5}
          value={formData.serviceDescription}
          onChange={onInputChange}
          required
        />
      </div>
    </div>
  );
};

export default ServiceInfoForm;
