
import { Button } from '@/components/ui/button';
import { Bot, X } from 'lucide-react';

interface ChatBotHeaderProps {
  onClose: () => void;
}

const ChatBotHeader = ({ onClose }: ChatBotHeaderProps) => {
  return (
    <div className="bg-brand-600 text-white p-3 flex flex-row justify-between items-center">
      <div className="flex items-center">
        <Bot className="mr-2 h-5 w-5" />
        <h3 className="font-medium">Professional Assistant</h3>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onClose}
        className="h-8 w-8 text-white hover:bg-brand-700"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ChatBotHeader;
