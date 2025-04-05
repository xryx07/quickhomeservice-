
import { FileText } from 'lucide-react';

const TermsPageHeader = () => {
  const fallbackImageUrl = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  return (
    <div className="mb-8 text-center">
      <div className="flex justify-center mb-6">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Legal documents" 
          className="rounded-lg shadow-md w-full max-w-2xl h-48 object-cover"
          onError={(e) => {
            e.currentTarget.src = fallbackImageUrl;
          }}
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-muted-foreground">
        Please read these terms carefully before using our services
      </p>
    </div>
  );
};

export default TermsPageHeader;
