
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
    <div className="relative bg-black text-white">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-75" 
        />
      </div>
      <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Find the Perfect Service Provider
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            Connect with verified professionals for all your service needs
          </p>
          <form onSubmit={handleSearch} className="flex w-full max-w-2xl mx-auto mb-10">
            <Input
              type="text"
              placeholder="Search for services..."
              className="h-14 text-black w-full rounded-r-none text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="h-14 px-8 rounded-l-none bg-black text-white border border-white hover:bg-white hover:text-black font-semibold text-lg">
              Search
            </Button>
          </form>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-medium px-6 py-2 text-lg"
              onClick={() => navigate('/services?category=cleaning')}
            >
              Browse Services
            </Button>
            <Button 
              variant="outline" 
              className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white font-medium px-6 py-2 text-lg"
              onClick={() => navigate('/become-provider')}
            >
              Become a Provider
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
