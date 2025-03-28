
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Provider, Transaction } from '@/utils/types';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { useState } from 'react';

interface WalletCardProps {
  provider: Provider;
  transactions: Transaction[];
}

export const WalletCard = ({ provider, transactions }: WalletCardProps) => {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const { toast } = useToast();
  
  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = parseFloat(withdrawAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to withdraw.",
        variant: "destructive",
      });
      return;
    }
    
    if (amount > provider.wallet.balance) {
      toast({
        title: "Insufficient Balance",
        description: "You don't have sufficient balance to withdraw this amount.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Withdrawal Initiated",
      description: `₹${amount} will be transferred to your bank account within 24-48 hours.`,
    });
    
    setWithdrawAmount('');
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle>Wallet Balance</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Available Balance</p>
            <h3 className="text-3xl font-bold">₹{provider.wallet.balance}</h3>
          </div>
        </div>
        
        <form onSubmit={handleWithdraw}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="withdrawAmount">Withdraw Amount</Label>
              <Input 
                id="withdrawAmount"
                type="number"
                placeholder="Enter amount"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full btn-brand">
              Withdraw to Bank
            </Button>
          </div>
        </form>
        
        <Separator className="my-6" />
        
        <div className="space-y-4">
          <h4 className="font-medium">Recent Transactions</h4>
          {transactions.slice(0, 3).map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`p-2 rounded-full ${transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'} mr-3`}>
                  {transaction.type === 'credit' ? (
                    <ArrowUp className={`h-4 w-4 ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`} />
                  ) : (
                    <ArrowDown className={`h-4 w-4 ${transaction.type === 'debit' ? 'text-red-600' : 'text-green-600'}`} />
                  )}
                </div>
                <div>
                  <p className="font-medium text-sm">{transaction.description}</p>
                  <p className="text-xs text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div className={`font-medium ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
