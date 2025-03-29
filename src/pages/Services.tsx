
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Search, SlidersHorizontal } from 'lucide-react';

import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { Service, Category } from '@/utils/types';

// Mock data for services
const allServices: Service[] = [
  {
    id: '1',
    name: 'House Cleaning',
    category: 'cleaning',
    description: 'Professional house cleaning services for a spotless home. Our experts will make your house shine.',
    price: 799,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.8,
    providerId: 'p1',
    providerName: 'CleanMasters'
  },
  {
    id: '2',
    name: 'Electrician Services',
    category: 'electrician',
    description: 'Certified electricians for all your electrical needs. We handle installations, repairs, and troubleshooting.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.7,
    providerId: 'p2',
    providerName: 'ElectriPro'
  },
  {
    id: '3',
    name: 'Plumbing Repairs',
    category: 'plumbing',
    description: 'Fast and reliable plumbing services. We fix leaks, clogs, and install new fixtures.',
    price: 649,
    image: 'https://images.unsplash.com/photo-1585704032915-c3400305e979?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.6,
    providerId: 'p3',
    providerName: 'PlumbRight'
  },
  {
    id: '4',
    name: 'Professional Salon',
    category: 'beauty',
    description: 'Get salon-quality hair cuts, styling, and treatments in the comfort of your home.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    rating: 4.9,
    providerId: 'p4',
    providerName: 'GlamHome'
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
    providerName: 'CleanMasters'
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
    providerName: 'ElectriPro'
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
    providerName: 'PlumbRight'
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
    providerName: 'GlamHome'
  }
];

const allCategories: Category[] = [
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
  }
];

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [minRating, setMinRating] = useState(0);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filteredServices, setFilteredServices] = useState<Service[]>(allServices);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    const searchParam = params.get('search');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    
    if (searchParam) {
      setSearchQuery(searchParam);
    }
    
    filterServices(searchParam || searchQuery, categoryParam || selectedCategory, priceRange, minRating);
  }, [location.search]);
  
  const filterServices = (search: string, category: string | null, price: number[], rating: number) => {
    let filtered = [...allServices];
    
    if (search) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(search.toLowerCase()) || 
        service.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    if (category) {
      filtered = filtered.filter(service => service.category.toLowerCase() === category.toLowerCase());
    }
    
    filtered = filtered.filter(service => service.price >= price[0] && service.price <= price[1]);
    
    filtered = filtered.filter(service => service.rating >= rating);
    
    setFilteredServices(filtered);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filterServices(searchQuery, selectedCategory, priceRange, minRating);
  };
  
  const handleCategoryChange = (category: string) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    filterServices(searchQuery, newCategory, priceRange, minRating);
  };
  
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    filterServices(searchQuery, selectedCategory, value, minRating);
  };
  
  const handleRatingChange = (checked: boolean, value: number) => {
    const newRating = checked ? value : 0;
    setMinRating(newRating);
    filterServices(searchQuery, selectedCategory, priceRange, newRating);
  };
  
  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Explore Services</h1>
            
            <form onSubmit={handleSearch} className="flex gap-2 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search for services..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" className="btn-brand">Search</Button>
              <Button 
                type="button" 
                variant="outline" 
                className="flex items-center gap-2 md:hidden"
                onClick={toggleMobileFilter}
              >
                <SlidersHorizontal size={18} /> Filters
              </Button>
            </form>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 lg:w-1/5 hidden md:block">
                <div className="bg-white rounded-lg border p-4">
                  <h2 className="font-semibold text-lg mb-4">Filters</h2>
                  
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Categories</h3>
                    <div className="space-y-2">
                      {allCategories.map((category) => (
                        <div key={category.id} className="flex items-center">
                          <Checkbox 
                            id={`category-${category.id}`} 
                            checked={selectedCategory === category.name.toLowerCase()}
                            onCheckedChange={() => handleCategoryChange(category.name.toLowerCase())}
                          />
                          <Label 
                            htmlFor={`category-${category.id}`}
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
                            id={`rating-${rating}`} 
                            checked={minRating === rating}
                            onCheckedChange={(checked) => handleRatingChange(!!checked, rating)}
                          />
                          <Label 
                            htmlFor={`rating-${rating}`}
                            className="ml-2 cursor-pointer"
                          >
                            {rating}+ Stars
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {isMobileFilterOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden">
                  <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-lg p-4 animate-slide-up">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="font-semibold text-lg">Filters</h2>
                      <Button 
                        variant="ghost" 
                        className="h-8 w-8 p-0"
                        onClick={toggleMobileFilter}
                      >
                        &times;
                      </Button>
                    </div>
                    
                    <div className="max-h-[60vh] overflow-auto">
                      <div className="mb-6">
                        <h3 className="font-medium mb-2">Categories</h3>
                        <div className="space-y-2">
                          {allCategories.map((category) => (
                            <div key={category.id} className="flex items-center">
                              <Checkbox 
                                id={`mobile-category-${category.id}`} 
                                checked={selectedCategory === category.name.toLowerCase()}
                                onCheckedChange={() => handleCategoryChange(category.name.toLowerCase())}
                              />
                              <Label 
                                htmlFor={`mobile-category-${category.id}`}
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
                                id={`mobile-rating-${rating}`} 
                                checked={minRating === rating}
                                onCheckedChange={(checked) => handleRatingChange(!!checked, rating)}
                              />
                              <Label 
                                htmlFor={`mobile-rating-${rating}`}
                                className="ml-2 cursor-pointer"
                              >
                                {rating}+ Stars
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button 
                        className="w-full btn-brand"
                        onClick={toggleMobileFilter}
                      >
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="md:w-3/4 lg:w-4/5">
                {filteredServices.length === 0 ? (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">No services found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters or search query</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredServices.map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                )}
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
