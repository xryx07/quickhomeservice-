
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, CheckCircle } from 'lucide-react';
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
    <div className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Text content */}
        <div className="p-8 lg:p-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Fast and affordable repair services
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Reliable in-home repair of all your systems and products. We arrive at your location promptly.
          </p>
          
          <form onSubmit={handleSearch} className="flex w-full mb-8">
            <Input
              type="text"
              placeholder="Search for services..."
              className="h-12 text-black w-full rounded-r-none text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="h-12 px-6 rounded-l-none bg-blue-600 hover:bg-blue-700 text-white">
              <Search className="mr-2" size={18} />
              Search
            </Button>
          </form>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle size={20} className="text-blue-600 mr-2" />
              <span className="text-gray-700">Swift responses</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={20} className="text-blue-600 mr-2" />
              <span className="text-gray-700">Quality service</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={20} className="text-blue-600 mr-2" />
              <span className="text-gray-700">Affordable rates, no hidden fees</span>
            </div>
          </div>
        </div>
        
        {/* Right Column: Image */}
        <div className="relative h-full min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1578652520385-c05f6f3b2c11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Technician repairing computer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Service highlights section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Free diagnostics</h3>
              <p className="text-sm text-gray-600">We identify the issue with your device at no extra cost to ensure transparent pricing.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Fast repair</h3>
              <p className="text-sm text-gray-600">Most repairs are completed within the same day to minimize disruption to your daily life.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Satisfaction guaranteed</h3>
              <p className="text-sm text-gray-600">We stand behind our work and ensure your complete satisfaction with every service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
