
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Gift, AlertTriangle, BarChart3, MapPin, Shield, Users, Building2, Calendar } from 'lucide-react';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { allCategories } from '@/data/services';
import { allServices } from '@/data/services';
import ChatBot from '@/components/chatbot';
import { useLanguage } from '@/contexts/LanguageContext';
import ServiceCard from '@/components/ServiceCard';

const categoryImages: Record<string, string> = {
  'Cleaning': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=300&q=80',
  'Electrician': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=300&q=80',
  'Plumbing': 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=300&q=80',
  'Beauty': 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=300&q=80',
  'Appliance Repair': 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=300&q=80',
  'Home Painting': 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=300&q=80',
  'Pest Control': 'https://images.unsplash.com/photo-1632935190508-2aadfcfa514c?auto=format&fit=crop&w=300&q=80',
  'Carpentry': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=300&q=80',
};

const categoryTranslations: Record<string, string> = {
  'Cleaning': 'cat.cleaning',
  'Electrician': 'cat.electrician',
  'Plumbing': 'cat.plumbing',
  'Beauty': 'cat.beauty',
  'Appliance Repair': 'cat.appliance',
  'Home Painting': 'cat.painting',
  'Pest Control': 'cat.pest',
  'Carpentry': 'cat.carpentry',
};

const Index = () => {
  const { t } = useLanguage();
  const popularServices = allServices.filter(s => s.rating >= 4.5).slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />

      <main>
        {/* Categories - UC Grid Style */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{t('section.browse_categories')}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {allCategories.map((category) => (
                <Link key={category.id} to={`/services?category=${category.name.toLowerCase()}`}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 h-full">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={categoryImages[category.name] || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=300&q=80'}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 text-background">
                        <p className="font-semibold text-sm">{t(categoryTranslations[category.name] as any) || category.name}</p>
                        <p className="text-xs text-background/70">{category.services} services</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-10 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: Users, num: '2,50,000+', label: t('stats.customers') },
                { icon: Shield, num: '15,000+', label: t('stats.providers') },
                { icon: Building2, num: '100+', label: t('stats.cities') },
                { icon: Calendar, num: '10,00,000+', label: t('stats.bookings') },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <stat.icon size={28} className="text-primary mb-2" />
                  <p className="text-2xl md:text-3xl font-bold">{stat.num}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Most Booked Services */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">{t('section.popular_services')}</h2>
              <Link to="/services">
                <Button variant="ghost" className="text-sm">
                  {t('section.view_all')} <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {popularServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-14 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">{t('section.how_it_works')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { step: '01', title: t('how.step1_title'), desc: t('how.step1_desc'), icon: '🔍' },
                { step: '02', title: t('how.step2_title'), desc: t('how.step2_desc'), icon: '📅' },
                { step: '03', title: t('how.step3_title'), desc: t('how.step3_desc'), icon: '✅' },
              ].map((item, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm text-2xl">
                    {item.icon}
                  </div>
                  <p className="text-xs text-muted-foreground font-mono mb-1">STEP {item.step}</p>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-8 -right-4 w-8">
                      <ArrowRight size={20} className="text-muted-foreground/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 🔥 Unique Features - Different from Urban Company */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {t('section.why_us')}
              </h2>
              <p className="text-muted-foreground text-sm">Features you won't find anywhere else</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: t('unique.loyalty_title'), desc: t('unique.loyalty_desc'), icon: Gift, color: 'bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400' },
                { title: t('unique.emergency_title'), desc: t('unique.emergency_desc'), icon: AlertTriangle, color: 'bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400' },
                { title: t('unique.compare_title'), desc: t('unique.compare_desc'), icon: BarChart3, color: 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400' },
                { title: t('unique.tracking_title'), desc: t('unique.tracking_desc'), icon: MapPin, color: 'bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400' },
                { title: t('unique.guarantee_title'), desc: t('unique.guarantee_desc'), icon: Shield, color: 'bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400' },
              ].map((feature, i) => (
                <Card key={i} className="border-border/50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                      <feature.icon size={22} />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join as Provider CTA */}
        <section className="py-16 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-background/50 mb-3">PARTNER WITH US</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('section.join_provider')}</h2>
              <p className="text-lg text-background/70 mb-8">{t('section.join_provider_desc')}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/become-provider">
                  <Button variant="outline" size="lg" className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-foreground font-medium px-8">
                    {t('common.register_now')} <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
