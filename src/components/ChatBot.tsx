
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, Bot } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello, I\'m your professional service assistant. How can I help you today with your home service needs?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

const generateResponse = async (message: string): Promise<string> => {
  // Professional response generator
  
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Generate contextual professional responses based on user input
  if (message.toLowerCase().includes('booking')) {
    return "I'd be happy to assist with your booking. Please provide your booking ID or the specific service you're interested in, and I'll guide you through the process efficiently.";
  } else if (message.toLowerCase().includes('cancel')) {
    return "Regarding cancellations, our policy allows for free cancellations up to 24 hours before the scheduled service. Please provide your booking ID, and I'll process this for you immediately.";
  } else if (message.toLowerCase().includes('price') || message.toLowerCase().includes('cost')) {
    return "Our pricing is transparent and competitive. Each service has a base rate with potential adjustments depending on the scope and complexity. You can find detailed pricing on each service page, or I can provide you with a custom quote if you share more details about your requirements.";
  } else if (message.toLowerCase().includes('provider') || message.toLowerCase().includes('professional')) {
    return "All our service providers undergo rigorous background checks and professional certification verification. They are experienced specialists in their respective fields with high customer satisfaction ratings. Would you like information about a specific provider?";
  } else if (message.toLowerCase().includes('payment')) {
    return "We accept all major credit/debit cards, UPI, and net banking options. Payment is processed securely after the service is completed to your satisfaction. Would you like to know more about our payment process?";
  } else if (message.toLowerCase().includes('refund')) {
    return "Our refund policy ensures your satisfaction. If you're not completely satisfied with the service, we offer a resolution within 48 hours, including partial or full refunds depending on the situation. Would you like me to elaborate on any specific aspect?";
  } else if (message.toLowerCase().includes('thank')) {
    return "You're welcome. It's my pleasure to assist you. If you have any more questions in the future, I'll be here to help. We appreciate your business and look forward to providing excellent service.";
  } else if (message.toLowerCase().includes('availability') || message.toLowerCase().includes('schedule')) {
    return "Our service professionals are available 7 days a week from 8 AM to 8 PM. You can book appointments based on your preferred date and time through our platform. May I help you schedule a service today?";
  } else if (message.toLowerCase().includes('emergency')) {
    return "We understand emergencies require immediate attention. For urgent plumbing, electrical, or other critical issues, we offer priority scheduling with same-day service in most areas. Would you like me to arrange an emergency service?";
  } else if (message.toLowerCase().includes('quality') || message.toLowerCase().includes('guarantee')) {
    return "We stand behind the quality of our work with a 30-day service guarantee. If any issues arise related to the service performed, we'll return to address them at no additional cost. Your satisfaction is our priority.";
  }
  
  // Default professional response
  return "Thank you for your message. I'd be happy to assist you with your home service needs. Could you please provide more specific details about your requirements so I can better address your needs?";
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
              <h3 className="font-medium">Professional Assistant</h3>
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
