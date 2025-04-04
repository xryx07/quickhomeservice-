
import { FileText } from 'lucide-react';

const TermsFooter = () => {
  return (
    <div className="text-center">
      <p className="text-muted-foreground mb-4">
        If you have any questions about these Terms, please contact us.
      </p>
      <FileText className="h-8 w-8 text-blue-600 mx-auto" />
    </div>
  );
};

export default TermsFooter;
