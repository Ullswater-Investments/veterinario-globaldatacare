import { useRoleProtection } from '@/hooks/useRoleProtection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EmptyState } from '@/components/EmptyState';
import { Factory, Loader2 } from 'lucide-react';

export default function LabHub() {
  const { hasAccess, loading } = useRoleProtection(['lab_tech']);

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
        <h1 className="text-3xl font-bold text-slate-800">Hub de Manufactura</h1>
        <p className="text-slate-500 mt-1">Tablero Kanban de órdenes de laboratorio</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Factory className="h-5 w-5 text-primary" />
            Módulo en Desarrollo
          </CardTitle>
          <CardDescription>
            Sistema Kanban con Pasaporte Digital del Producto (DPP)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={Factory}
            title="Próximamente: Kanban de Producción"
            description="Visualización de DPP con trazabilidad blockchain y estados de manufactura"
          />
        </CardContent>
      </Card>
    </div>
  );
}
