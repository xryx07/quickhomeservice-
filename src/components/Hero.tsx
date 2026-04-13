
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Shield, Zap, Briefcase, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();
  const { t } = useLanguage();
  const popularCities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative">
      {/* Hero Section - UC Style dark hero with city selector */}
      <div className="relative bg-foreground text-background min-h-[520px]">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80"
          alt="Home Service Professional"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-20 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-background/60 mb-4 font-medium">QUICKHOMESERVICE</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-background/70 mb-8">
              {t('hero.subtitle')}
            </p>

            {/* City + Search - UC style */}
            <div className="bg-background/10 backdrop-blur-md rounded-xl p-5 border border-background/20">
              <p className="text-sm text-background/70 mb-3">{t('hero.select_city')}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {popularCities.map(city => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedCity === city
                        ? 'bg-background text-foreground'
                        : 'bg-background/10 text-background/80 hover:bg-background/20'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    type="text"
                    placeholder={t('hero.search_placeholder')}
                    className="h-12 pl-10 bg-background text-foreground rounded-lg border-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" className="h-12 px-6 btn-brand rounded-lg">
                  {t('hero.search')} <ChevronRight size={16} className="ml-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Why QuickHomeService - UC Style */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">{t('section.why_us')}</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('hero.trust_1')}</h3>
                    <p className="text-sm text-muted-foreground">{t('hero.trust_1_desc')}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('hero.trust_2')}</h3>
                    <p className="text-sm text-muted-foreground">{t('hero.trust_2_desc')}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('hero.trust_3')}</h3>
                    <p className="text-sm text-muted-foreground">{t('hero.trust_3_desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('hero.quality_assured')}</h3>
              <p className="text-muted-foreground">{t('hero.quality_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
