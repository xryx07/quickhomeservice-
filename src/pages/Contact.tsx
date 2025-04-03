import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ChatBot from '@/components/chatbot';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Success message
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible!",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-brand-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg max-w-2xl">
              Have questions or need assistance? Get in touch with our support team and we'll be happy to help.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="text-gray-600">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+91 8770219859</p>
                    <p className="text-sm text-gray-500">Monday to Friday, 9am to 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">support@quickhomeservice.com</p>
                    <p className="text-sm text-gray-500">We'll respond as soon as possible</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Office</h3>
                    <p className="text-gray-600">123 Service Lane, Bangalore</p>
                    <p className="text-sm text-gray-500">Karnataka, India - 560001</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Contact;
