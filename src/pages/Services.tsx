
import { SlidersHorizontal } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { allServices, allCategories } from '@/data/servicesData';
import { useServiceFiltering } from '@/hooks/useServiceFiltering';
import SearchBar from '@/components/services/SearchBar';
import FilterSidebar from '@/components/services/FilterSidebar';
import MobileFilterDrawer from '@/components/services/MobileFilterDrawer';
import ServicesList from '@/components/services/ServicesList';

const Services = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    priceRange,
    minRating,
    filteredServices,
    isMobileFilterOpen,
    handleSearch,
    handleCategoryChange,
    handlePriceChange,
    handleRatingChange,
    toggleMobileFilter
  } = useServiceFiltering(allServices);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Explore Services</h1>
            
            <SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
              toggleMobileFilter={toggleMobileFilter}
            />
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 lg:w-1/5 hidden md:block">
                <FilterSidebar 
                  categories={allCategories}
                  selectedCategory={selectedCategory}
                  handleCategoryChange={handleCategoryChange}
                  priceRange={priceRange}
                  handlePriceChange={handlePriceChange}
                  minRating={minRating}
                  handleRatingChange={handleRatingChange}
                />
              </div>
              
              <MobileFilterDrawer 
                isOpen={isMobileFilterOpen}
                toggleFilter={toggleMobileFilter}
                categories={allCategories}
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
                priceRange={priceRange}
                handlePriceChange={handlePriceChange}
                minRating={minRating}
                handleRatingChange={handleRatingChange}
              />
              
              <div className="md:w-3/4 lg:w-4/5">
                <ServicesList services={filteredServices} />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <ChatBot />
      
      <Footer />
    </div>
  );
};

export default Services;
