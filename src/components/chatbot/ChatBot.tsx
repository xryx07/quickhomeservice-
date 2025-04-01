
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import ChatBotButton from './ChatBotButton';
import ChatBotHeader from './ChatBotHeader';
import ChatMessageList from './ChatMessageList';
import ChatBotInput from './ChatBotInput';
import { Message } from './types';
import { generateResponse } from '@/utils/chatResponseGenerator';

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello, I\'m your professional service assistant. How can I help you today with your home service needs?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (newMessageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessageText,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    // Get AI response
    const response = await generateResponse(newMessageText);
    
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <Card className="w-80 md:w-96 shadow-lg">
          <CardHeader className="p-0">
            <ChatBotHeader onClose={toggleChat} />
          </CardHeader>
          <CardContent className="p-0">
            <ChatMessageList 
              messages={messages} 
              isTyping={isTyping} 
            />
          </CardContent>
          <CardFooter className="p-3 border-t">
            <ChatBotInput onSendMessage={handleSendMessage} />
          </CardFooter>
        </Card>
      ) : (
        <ChatBotButton onClick={toggleChat} />
      )}
    </div>
  );
};

export default ChatBot;
