
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Booking, Provider, Transaction } from '@/utils/types';

interface EarningsTabProps {
  provider: Provider;
  transactions: Transaction[];
  bookings: Booking[];
}

export const EarningsTab = ({ provider, transactions, bookings }: EarningsTabProps) => {
  const calculateEarnings = (bookings: Booking[]) => {
    const total = bookings
      .filter(booking => booking.status === 'completed')
      .reduce((sum, booking) => sum + (booking.price - booking.commission), 0);
    
    return total;
  };
  
  const getRecentBookings = (bookings: Booking[], status?: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled') => {
    if (status) {
      return bookings.filter(booking => booking.status === status);
    }
    return bookings;
  };

  return (
    <>
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle>Earnings Overview</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <p className="text-sm text-muted-foreground">Total Earnings</p>
                  <h3 className="text-2xl font-bold">₹{calculateEarnings(bookings)}</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <p className="text-sm text-muted-foreground">Completed Jobs</p>
                  <h3 className="text-2xl font-bold">{getRecentBookings(bookings, 'completed').length}</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                  <h3 className="text-2xl font-bold">{provider.rating}</h3>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <h4 className="font-medium mb-4">Transaction History</h4>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={transaction.type === 'credit' ? 'text-green-600 border-green-600' : 'text-red-600 border-red-600'}>
                        {transaction.type === 'credit' ? 'Credit' : 'Debit'}
                      </Badge>
                    </TableCell>
                    <TableCell className={`text-right ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Bank Account Details</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Account Holder Name</p>
                <p className="font-medium">{provider.verification.bankDetails?.accountHolderName}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Account Number</p>
                <p className="font-medium">XXXX XXXX {provider.verification.bankDetails?.accountNumber.slice(-4)}</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">IFSC Code</p>
              <p className="font-medium">{provider.verification.bankDetails?.ifscCode}</p>
            </div>
            
            <Button variant="outline" className="mt-2">
              Update Bank Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
