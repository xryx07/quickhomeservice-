
import { Button } from '@/components/ui/button';
import FilterSidebar from './FilterSidebar';
import { Category } from '@/utils/types';

interface MobileFilterDrawerProps {
  isOpen: boolean;
  toggleFilter: () => void;
  categories: Category[];
  selectedCategory: string | null;
  handleCategoryChange: (category: string) => void;
  priceRange: number[];
  handlePriceChange: (value: number[]) => void;
  minRating: number;
  handleRatingChange: (checked: boolean, value: number) => void;
}

const MobileFilterDrawer = ({
  isOpen,
  toggleFilter,
  categories,
  selectedCategory,
  handleCategoryChange,
  priceRange,
  handlePriceChange,
  minRating,
  handleRatingChange,
}: MobileFilterDrawerProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-40 md:hidden">
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-lg p-4 animate-slide-up">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Filters</h2>
          <Button 
            variant="ghost" 
            className="h-8 w-8 p-0"
            onClick={toggleFilter}
          >
            &times;
          </Button>
        </div>
        
        <div className="max-h-[60vh] overflow-auto">
          <FilterSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            handlePriceChange={handlePriceChange}
            minRating={minRating}
            handleRatingChange={handleRatingChange}
            isMobile={true}
          />
        </div>
        
        <div className="mt-6">
          <Button 
            className="w-full btn-brand"
            onClick={toggleFilter}
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterDrawer;
