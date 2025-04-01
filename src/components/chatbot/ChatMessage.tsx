
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Message } from '../chatbot/types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
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
