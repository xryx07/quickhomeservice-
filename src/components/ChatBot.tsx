
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, Bot } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! I\'m your service assistant. How can I help you today?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

const generateResponse = async (message: string): Promise<string> => {
  // This is a simple mock response generator
  // In a real application, you would connect to an AI API here
  
  const responses = [
    "I understand your concern. Could you provide more details so I can assist you better?",
    "Thank you for reaching out. Our team typically resolves this issue by scheduling a follow-up service. Would you like me to arrange that for you?",
    "I'm looking into this issue. Have you tried the basic troubleshooting steps in our FAQ section?",
    "I'd be happy to help with your service request. Could you confirm your booking ID or the service you're inquiring about?",
    "This seems like a common issue with an easy fix. Let me guide you through the steps to resolve it.",
  ];
  
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Generate a contextual response based on user input
  if (message.toLowerCase().includes('booking')) {
    return "I can help you with your booking. Please share your booking ID, or tell me what service you'd like to book.";
  } else if (message.toLowerCase().includes('cancel')) {
    return "If you need to cancel a service, please provide your booking ID and reason. We can process cancellations 24 hours before the scheduled time.";
  } else if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
    return "Our service pricing depends on the specific service, location, and scope of work. You can find detailed pricing on each service page or I can help provide an estimate.";
  } else if (message.toLowerCase().includes('provider') || message.toLowerCase().includes('professional')) {
    return "All our service providers are verified professionals with training and experience. Would you like to know more about a specific provider?";
  }
  
  // Default to random response
  return responses[Math.floor(Math.random() * responses.length)];
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    
    // Get AI response
    const response = await generateResponse(newMessage);
    
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <Card className="w-80 md:w-96 shadow-lg">
          <CardHeader className="bg-brand-600 text-white p-3 flex flex-row justify-between items-center">
            <div className="flex items-center">
              <Bot className="mr-2 h-5 w-5" />
              <h3 className="font-medium">Service Assistant</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChat}
              className="h-8 w-8 text-white hover:bg-brand-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-80 overflow-y-auto p-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
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
              ))}
              {isTyping && (
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
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="p-3 border-t">
            <form 
              className="flex w-full gap-2" 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
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
          </CardFooter>
        </Card>
      ) : (
        <Button 
          onClick={toggleChat} 
          size="icon" 
          className="rounded-full h-14 w-14 bg-brand-600 hover:bg-brand-700 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;
