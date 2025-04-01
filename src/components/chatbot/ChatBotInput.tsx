
import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

interface ChatBotInputProps {
  onSendMessage: (message: string) => void;
}

const ChatBotInput = ({ onSendMessage }: ChatBotInputProps) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    onSendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <form 
      className="flex w-full gap-2" 
      onSubmit={handleSubmit}
    >
      <Input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow"
      />
      <Button type="submit" className="shrink-0" size="icon">
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ChatBotInput;
