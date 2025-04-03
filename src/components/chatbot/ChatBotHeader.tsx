
import { X, Bot, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ChatBotHeaderProps {
  onClose: () => void;
  onClearHistory?: () => void;
}

const ChatBotHeader = ({ onClose, onClearHistory }: ChatBotHeaderProps) => {
  return (
    <div className="bg-brand-600 text-white p-3 flex flex-row justify-between items-center rounded-t-lg">
      <div className="flex items-center">
        <Bot className="mr-2 h-5 w-5" />
        <h3 className="font-medium">Professional Assistant</h3>
      </div>
      <div className="flex items-center gap-2">
        {onClearHistory && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={onClearHistory}
                  className="h-8 w-8 text-white hover:bg-brand-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Clear chat history</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="h-8 w-8 text-white hover:bg-brand-700"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatBotHeader;
