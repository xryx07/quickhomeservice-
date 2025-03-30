
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Service } from '@/utils/types';

export const useServiceFiltering = (allServices: Service[]) => {
  const location = useLocation();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [minRating, setMinRating] = useState(0);
  const [filteredServices, setFilteredServices] = useState<Service[]>(allServices);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
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

  return {
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
  };
};
