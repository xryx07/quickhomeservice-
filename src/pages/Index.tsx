import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { allCategories } from '@/data/services';
import ChatBot from '@/components/chatbot';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUpRight, ShieldCheck, Clock3, Wallet, Languages } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <Hero />

      <main>
        {/* Catalogue — editorial grid with hairline borders */}
        <section className="py-24 lg:py-32 border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-5">
                <p className="eyebrow mb-6">{t('cat.eyebrow')}</p>
                <h2 className="display-lg">
                  {t('cat.title.a')}
                  <span className="display-italic text-primary">{t('cat.title.b')}</span>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 flex items-end">
                <p className="text-lg text-muted-foreground leading-relaxed">{t('cat.lede')}</p>
              </div>
            </div>

            {/* Category list — magazine table style */}
            <div className="border-t border-border">
              {allCategories.map((category, idx) => (
                <Link
                  key={category.id}
                  to={`/services?category=${category.name.toLowerCase()}`}
                  className="group grid grid-cols-12 items-center py-6 lg:py-8 border-b border-border hover:bg-secondary/30 transition-colors px-2 lg:px-4 -mx-2 lg:-mx-4"
                >
                  <span className="col-span-1 font-display text-sm text-muted-foreground tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="col-span-2 lg:col-span-1 text-3xl">{category.icon}</span>
                  <span className="col-span-6 lg:col-span-7 font-display text-2xl md:text-3xl font-medium group-hover:text-primary transition-colors">
                    {category.name}
                  </span>
                  <span className="col-span-2 text-sm text-muted-foreground tabular-nums">
                    {category.services} {t('cat.count')}
                  </span>
                  <span className="col-span-1 flex justify-end">
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-45"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* The Method — three numbered columns */}
        <section className="py-24 lg:py-32 bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <p className="eyebrow mb-6">{t('how.eyebrow')}</p>
              <h2 className="display-lg max-w-2xl mx-auto">{t('how.title')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              <Step n="01" title={t('how.s1.t')} desc={t('how.s1.d')} />
              <Step n="02" title={t('how.s2.t')} desc={t('how.s2.d')} />
              <Step n="03" title={t('how.s3.t')} desc={t('how.s3.d')} />
            </div>
          </div>
        </section>

        {/* What sets us apart */}
        <section className="py-24 lg:py-32 border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-6">
                <p className="eyebrow mb-6">{t('why.eyebrow')}</p>
                <h2 className="display-lg">
                  {t('why.title.a')}
                  <span className="display-italic text-primary">{t('why.title.b')}</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              <Feature icon={<Wallet size={22} />} title={t('why.f1.t')} desc={t('why.f1.d')} />
              <Feature icon={<Clock3 size={22} />} title={t('why.f2.t')} desc={t('why.f2.d')} />
              <Feature icon={<ShieldCheck size={22} />} title={t('why.f3.t')} desc={t('why.f3.d')} />
              <Feature icon={<Languages size={22} />} title={t('why.f4.t')} desc={t('why.f4.d')} />
            </div>
          </div>
        </section>

        {/* Provider CTA — inverted */}
        <section className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <p className="eyebrow mb-6 text-background/60">{t('cta.eyebrow')}</p>
                <h2 className="display-lg text-background">
                  {t('cta.title.a')}
                  <span className="display-italic text-primary">{t('cta.title.b')}</span>
                </h2>
                <p className="mt-6 text-lg text-background/70 max-w-xl leading-relaxed">{t('cta.lede')}</p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link to="/become-provider">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground h-14 px-8 text-base"
                  >
                    {t('cta.btn')}
                    <ArrowUpRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* Decorative oversized typographic flourish */}
          <div className="absolute -right-10 -bottom-10 font-display italic text-[20rem] leading-none text-background/[0.03] pointer-events-none select-none hidden lg:block">
            &
          </div>
        </section>
      </main>

      <ChatBot />
      <Footer />
    </div>
  );
};

const Step = ({ n, title, desc }: { n: string; title: string; desc: string }) => (
  <div>
    <div className="marker-num mb-6">{n}</div>
    <h3 className="font-display text-2xl font-medium mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

const Feature = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="bg-background p-8 lg:p-12 hover:bg-secondary/30 transition-colors group">
    <div className="text-primary mb-6 transition-transform group-hover:-translate-y-1">{icon}</div>
    <h3 className="font-display text-2xl font-medium mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

export default Index;
