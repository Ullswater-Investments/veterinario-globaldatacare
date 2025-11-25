import { useRoleProtection } from '@/hooks/useRoleProtection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EmptyState } from '@/components/EmptyState';
import { CreditCard, Loader2 } from 'lucide-react';

export default function Claims() {
  const { hasAccess, loading } = useRoleProtection(['insurance_admin']);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!hasAccess) return null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Gestión de Smart Claims</h1>
        <p className="text-slate-500 mt-1">Sistema de reclamaciones automatizado</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Módulo en Desarrollo
          </CardTitle>
          <CardDescription>
            Detección de fraude y validación cruzada
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={CreditCard}
            title="Próximamente: Gestión de Claims"
            description="Detección de anomalías, smart contracts y validación automática"
          />
        </CardContent>
      </Card>
    </div>
  );
}
