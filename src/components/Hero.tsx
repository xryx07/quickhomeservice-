
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
        <div className="p-8 lg:p-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            तेज़ और किफायती घर की सेवाएं
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Fast & Affordable Home Services
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            भरोसेमंद सर्विस प्रोवाइडर, आपके दरवाज़े पर। पूरे भारत में उपलब्ध।
          </p>

          <form onSubmit={handleSearch} className="flex w-full mb-8">
            <Input
              type="text"
              placeholder="सेवा खोजें... (जैसे प्लंबर, इलेक्ट्रीशियन, AC रिपेयर)"
              className="h-12 w-full rounded-r-none text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="h-12 px-6 rounded-l-none btn-brand">
              <Search className="mr-2" size={18} />
              खोजें
            </Button>
          </form>

          <div className="space-y-3">
            <div className="flex items-center">
              <CheckCircle size={20} className="text-primary mr-2" />
              <span className="text-foreground">⚡ 30 मिनट में रिस्पॉन्स</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={20} className="text-primary mr-2" />
              <span className="text-foreground">✅ वेरिफाइड प्रोफेशनल</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={20} className="text-primary mr-2" />
              <span className="text-foreground">💰 किफायती दाम, कोई छुपी फीस नहीं</span>
            </div>
            <div className="flex items-center">
              <CheckCircle size={20} className="text-primary mr-2" />
              <span className="text-foreground">🏙️ 100+ भारतीय शहरों में सेवा</span>
            </div>
          </div>
        </div>

        <div className="relative h-full min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="घर पर सेवा देता हुआ तकनीशियन"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">मुफ़्त जाँच / Free Diagnostics</h3>
              <p className="text-sm text-muted-foreground">बिना किसी अतिरिक्त शुल्क के समस्या की पहचान। पारदर्शी कीमत।</p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">तेज़ सर्विस / Fast Repair</h3>
              <p className="text-sm text-muted-foreground">अधिकांश रिपेयर उसी दिन पूरी। आपके समय का सम्मान।</p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">संतुष्टि की गारंटी</h3>
              <p className="text-sm text-muted-foreground">हर सेवा पर 100% संतुष्टि की गारंटी। नहीं तो पैसे वापस।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
