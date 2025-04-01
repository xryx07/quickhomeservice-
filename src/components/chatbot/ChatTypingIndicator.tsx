
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ChatTypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <Avatar className="h-8 w-8 mr-2">
        <AvatarImage src="/placeholder.svg" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
        </div>
      </div>
    </div>
  );
};

export default ChatTypingIndicator;
