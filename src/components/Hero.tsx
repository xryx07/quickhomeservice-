
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  return (
    <div className="relative bg-gradient-to-r from-brand-600 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Professional Home Services,<br /> On Demand
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Book trusted professionals for all your household needs
          </p>
          <form onSubmit={handleSearch} className="flex w-full max-w-lg mx-auto mb-10">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search for a service..."
                className="pl-10 h-12 text-black w-full rounded-r-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit" className="h-12 rounded-l-none bg-brand-800 hover:bg-brand-900">
              Search
            </Button>
          </form>
          <div className="flex flex-wrap justify-center gap-3">
            <Button 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/30 text-white"
              onClick={() => navigate('/services?category=cleaning')}
            >
              Home Cleaning
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/30 text-white"
              onClick={() => navigate('/services?category=electrician')}
            >
              Electrician
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/30 text-white"
              onClick={() => navigate('/services?category=plumbing')}
            >
              Plumbing
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/30 text-white"
              onClick={() => navigate('/services?category=beauty')}
            >
              Beauty & Spa
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
