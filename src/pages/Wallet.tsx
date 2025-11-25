import { useRoleProtection } from '@/hooks/useRoleProtection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EmptyState } from '@/components/EmptyState';
import { Wallet as WalletIcon, Loader2 } from 'lucide-react';

export default function Wallet() {
  const { hasAccess, loading } = useRoleProtection(['patient']);

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
        <h1 className="text-3xl font-bold text-slate-800">Mi Wallet de Salud</h1>
        <p className="text-slate-500 mt-1">Identidad digital y gestión de consentimientos</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <WalletIcon className="h-5 w-5 text-primary" />
            Módulo en Desarrollo
          </CardTitle>
          <CardDescription>
            Vista mobile-first para pacientes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={WalletIcon}
            title="Próximamente: Wallet Digital"
            description="QR de identidad, tratamientos y gestión de accesos con toggles"
          />
        </CardContent>
      </Card>
    </div>
  );
}
