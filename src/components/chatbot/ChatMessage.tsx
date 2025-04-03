
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Message } from './types';
import QuickReplyButtons from './QuickReplyButtons';

interface ChatMessageProps {
  message: Message;
  onQuickReplyClick?: (reply: string) => void;
}

const ChatMessage = ({ message, onQuickReplyClick }: ChatMessageProps) => {
  return (
    <div 
      className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      {message.sender === 'bot' && (
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      )}
      <div className="flex flex-col">
        <div 
          className={`max-w-[80%] rounded-lg px-4 py-2 ${
            message.sender === 'user' 
              ? 'bg-brand-600 text-white' 
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          <p>{message.text}</p>
          <span className="text-xs opacity-70 block mt-1">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        
        {message.sender === 'bot' && message.quickReplies && message.quickReplies.length > 0 && onQuickReplyClick && (
          <QuickReplyButtons 
            quickReplies={message.quickReplies} 
            onQuickReplyClick={onQuickReplyClick}
          />
        )}
      </div>
      {message.sender === 'user' && (
        <Avatar className="h-8 w-8 ml-2">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
