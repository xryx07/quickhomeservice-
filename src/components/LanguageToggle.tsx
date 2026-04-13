
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 text-sm font-medium"
      title={language === 'en' ? 'हिंदी में बदलें' : 'Switch to English'}
    >
      <Languages size={16} />
      {language === 'en' ? 'हिंदी' : 'EN'}
    </Button>
  );
};
