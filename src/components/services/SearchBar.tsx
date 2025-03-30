
import { Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  toggleMobileFilter: () => void;
}

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch, toggleMobileFilter }: SearchBarProps) => {
  return (
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
  );
};

export default SearchBar;
