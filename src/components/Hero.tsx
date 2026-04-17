import { lazy, Suspense, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroScene = lazy(() => import('./three/HeroScene'));

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Left — editorial headline */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-8">{t('hero.eyebrow')}</p>

            <h1 className="display-xl mb-8">
              {t('hero.title.a')}
              <br />
              <span className="display-italic text-primary">{t('hero.title.b')}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
              {t('hero.lede')}
            </p>

            <form onSubmit={handleSearch} className="flex max-w-xl border-b-2 border-foreground pb-1 group focus-within:border-primary transition-colors">
              <Input
                type="text"
                placeholder={t('hero.search')}
                className="flex-1 h-12 border-0 bg-transparent text-base px-0 focus-visible:ring-0 placeholder:text-muted-foreground/70"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="ghost" className="h-12 px-3 hover:bg-transparent text-foreground group-focus-within:text-primary">
                <span className="mr-2 text-sm uppercase tracking-widest">{t('hero.cta')}</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          {/* Right — 3D scene with stats overlay */}
          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-border relative">
            <div className="relative h-[420px] lg:h-[520px] -mx-6 lg:mx-0">
              <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent" />}>
                <HeroScene />
              </Suspense>
              <div className="absolute bottom-0 left-6 lg:left-0 right-6 lg:right-0 flex flex-wrap gap-3 lg:gap-4 z-10">
                <MiniStat number="12.4k" label={t('hero.stat1.k')} />
                <MiniStat number="142" label={t('hero.stat2.k')} />
                <MiniStat number="4.91" label={t('hero.stat3.k')} suffix="/5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee strip — subtle ticker */}
      <div className="border-t border-border bg-secondary/40 py-3 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap overflow-x-auto scrollbar-hide">
          <span>★ Trusted in 142 cities</span>
          <span className="text-border">/</span>
          <span>QuickGuard insured</span>
          <span className="text-border">/</span>
          <span>Fixed-price quotes</span>
          <span className="text-border">/</span>
          <span>60-min emergency dispatch</span>
          <span className="text-border">/</span>
          <span>Bilingual support · EN / हिंदी</span>
        </div>
      </div>
    </section>
  );
};

const MiniStat = ({ number, label, suffix }: { number: string; label: string; suffix?: string }) => (
  <div className="bg-background/70 backdrop-blur-md border border-border/60 rounded-lg px-4 py-3 shadow-[var(--shadow-editorial)]">
    <div className="flex items-baseline gap-0.5">
      <span className="font-display text-2xl md:text-3xl font-medium tabular-nums leading-none">{number}</span>
      {suffix && <span className="text-muted-foreground text-sm">{suffix}</span>}
    </div>
    <p className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
  </div>
);

export default Hero;
