
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Category } from '@/utils/types';

interface FilterSidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  handleCategoryChange: (category: string) => void;
  priceRange: number[];
  handlePriceChange: (value: number[]) => void;
  minRating: number;
  handleRatingChange: (checked: boolean, value: number) => void;
  isMobile?: boolean;
}

const FilterSidebar = ({
  categories,
  selectedCategory,
  handleCategoryChange,
  priceRange,
  handlePriceChange,
  minRating,
  handleRatingChange,
  isMobile = false,
}: FilterSidebarProps) => {
  const idPrefix = isMobile ? 'mobile-' : '';

  return (
    <div className="bg-white rounded-lg border p-4">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>
      
      <div className="mb-6">
        <h3 className="font-medium mb-2">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <Checkbox 
                id={`${idPrefix}category-${category.id}`} 
                checked={selectedCategory === category.name.toLowerCase()}
                onCheckedChange={() => handleCategoryChange(category.name.toLowerCase())}
              />
              <Label 
                htmlFor={`${idPrefix}category-${category.id}`}
                className="ml-2 flex items-center cursor-pointer"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="mb-6">
        <h3 className="font-medium mb-4">Price Range</h3>
        <Slider 
          defaultValue={[0, 2000]} 
          max={2000} 
          step={100}
          value={priceRange}
          onValueChange={handlePriceChange}
        />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div>
        <h3 className="font-medium mb-2">Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2].map((rating) => (
            <div key={rating} className="flex items-center">
              <Checkbox 
                id={`${idPrefix}rating-${rating}`} 
                checked={minRating === rating}
                onCheckedChange={(checked) => handleRatingChange(!!checked, rating)}
              />
              <Label 
                htmlFor={`${idPrefix}rating-${rating}`}
                className="ml-2 cursor-pointer"
              >
                {rating}+ Stars
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
