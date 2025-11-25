import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BusinessCaseLayoutProps {
  caseNumber: number;
  title: string;
  subtitle: string;
  keyMetric: {
    label: string;
    value: string;
    trend?: string;
  };
  children: ReactNode;
}

const BusinessCaseLayout = ({ caseNumber, title, subtitle, keyMetric, children }: BusinessCaseLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/business/models" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Volver a Casos de Negocio</span>
          </Link>
          <Badge variant="outline" className="border-primary text-primary">
            Caso #{caseNumber}
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-3 text-foreground">{title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{subtitle}</p>
            
            {/* Key Metric Card */}
            <div className="inline-flex items-center gap-4 bg-primary/10 border border-primary/20 rounded-lg px-6 py-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">{keyMetric.label}</div>
                <div className="text-3xl font-bold text-primary">{keyMetric.value}</div>
              </div>
              {keyMetric.trend && (
                <Badge variant="secondary" className="text-sm">
                  {keyMetric.trend}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {children}
      </div>
    </div>
  );
};

export default BusinessCaseLayout;
