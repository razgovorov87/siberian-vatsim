import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { i } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Layout } from '@/components/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

return (
  <> <Layout>
  <div className="flex min-h-screen items-center justify-center bg-muted">
    <div className="text-center px-4 sm:px-0">
      <Card className="mb-8 max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">404 - Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="border-red-600 bg-red-50 mb-6">
            <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
            <AlertTitle className="text-red-600">
              The page you are looking for does not exist
            </AlertTitle>
          </Alert>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Button
              size="lg"
              variant="hero"
              className="w-full sm:w-auto group"
            >
              Go Home
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
  </Layout>
  </>
);
};

export default NotFound;