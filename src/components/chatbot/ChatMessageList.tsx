
import { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatTypingIndicator from './ChatTypingIndicator';
import { Message } from './types';

interface ChatMessageListProps {
  messages: Message[];
  isTyping: boolean;
  onQuickReplyClick: (reply: string) => void;
}

const ChatMessageList = ({ messages, isTyping, onQuickReplyClick }: ChatMessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="h-80 overflow-y-auto p-4">
      {messages.map((message) => (
        <ChatMessage 
          key={message.id} 
          message={message} 
          onQuickReplyClick={onQuickReplyClick}
        />
      ))}
      {isTyping && <ChatTypingIndicator />}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessageList;
