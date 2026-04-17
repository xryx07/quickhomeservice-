import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
      className="h-9 px-3 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-secondary"
      aria-label="Toggle language"
    >
      <span className={language === 'en' ? 'text-foreground' : 'text-muted-foreground'}>EN</span>
      <span className="mx-1.5 text-muted-foreground/50">/</span>
      <span className={language === 'hi' ? 'text-foreground font-display' : 'text-muted-foreground font-display'}>हि</span>
    </Button>
  );
};

export default LanguageToggle;
