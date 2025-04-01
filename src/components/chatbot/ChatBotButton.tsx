
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface ChatBotButtonProps {
  onClick: () => void;
}

const ChatBotButton = ({ onClick }: ChatBotButtonProps) => {
  return (
    <Button 
      onClick={onClick} 
      size="icon" 
      className="rounded-full h-14 w-14 bg-brand-600 hover:bg-brand-700 shadow-lg"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default ChatBotButton;
