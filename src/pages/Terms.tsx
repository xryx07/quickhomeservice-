
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  CustomerTerms,
  ProviderTerms,
  AdditionalLegalInfo,
  TermsPageHeader,
  TermsFooter
} from '@/components/terms';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <TermsPageHeader />
            
            <Tabs defaultValue="customers" className="mb-10">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="customers">For Customers</TabsTrigger>
                <TabsTrigger value="providers">For Service Providers</TabsTrigger>
              </TabsList>
              
              <TabsContent value="customers" className="mt-6">
                <CustomerTerms />
              </TabsContent>
              
              <TabsContent value="providers" className="mt-6">
                <ProviderTerms />
              </TabsContent>
            </Tabs>
            
            <AdditionalLegalInfo />
            
            <TermsFooter />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
