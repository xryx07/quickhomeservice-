
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { paymentApi } from '@/api/paymentApi';
import { USE_PAYMENT_GATEWAY } from '@/utils/paymentConfig';
import { Loader2, CreditCard, Check } from 'lucide-react';

interface PaymentProcessorProps {
  bookingId: string;
  amount: number;
  onSuccess?: (paymentId: string) => void;
  onError?: (error: Error) => void;
}

export const PaymentProcessor: React.FC<PaymentProcessorProps> = ({
  bookingId,
  amount,
  onSuccess,
  onError
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      const paymentData = {
        bookingId,
        amount,
        paymentMethod: 'card',
        paymentDetails: {
          // In a real implementation, these would come from form inputs
          cardNumber: '**** **** **** 1234', // Masked for demo
          expiryDate: '12/25',
          cvv: '***' // Masked for demo
        }
      };
      
      const result = await paymentApi.processPayment(paymentData);
      
      setIsCompleted(true);
      toast({
        title: "Payment Successful",
        description: `Payment of ₹${amount} has been processed successfully.`,
      });
      
      if (onSuccess) {
        onSuccess(result.id);
      }
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: error.message || "There was an error processing your payment.",
        variant: "destructive"
      });
      
      if (onError) {
        onError(error);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Complete Payment</CardTitle>
        <CardDescription>
          {USE_PAYMENT_GATEWAY 
            ? "Secure payment processing by our payment gateway" 
            : "Secure payment processing by Quick Home Service"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-md">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Amount</span>
              <span className="font-semibold">₹{amount}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-muted-foreground">Booking ID</span>
              <span className="text-sm">{bookingId}</span>
            </div>
          </div>
          
          {!isCompleted ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="cardNumber" className="text-sm font-medium">Card Number</label>
                <input 
                  type="text" 
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-2 border rounded-md"
                  disabled={isProcessing}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="expiry" className="text-sm font-medium">Expiry Date</label>
                  <input 
                    type="text" 
                    id="expiry"
                    placeholder="MM/YY"
                    className="w-full p-2 border rounded-md"
                    disabled={isProcessing}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cvv" className="text-sm font-medium">CVV</label>
                  <input 
                    type="text" 
                    id="cvv"
                    placeholder="123"
                    className="w-full p-2 border rounded-md"
                    disabled={isProcessing}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-6">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-center">Payment Successful</h3>
              <p className="text-center text-muted-foreground mt-1">Your booking has been confirmed</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        {!isCompleted ? (
          <Button 
            className="w-full" 
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Pay ₹{amount}
              </>
            )}
          </Button>
        ) : (
          <Button 
            className="w-full" 
            variant="outline"
            onClick={() => window.location.href = "/bookings"}
          >
            View Booking
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PaymentProcessor;
