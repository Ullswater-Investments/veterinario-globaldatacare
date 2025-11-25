import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

export default function Claims() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Gestión de Smart Claims</h1>
        <p className="text-slate-500 mt-1">Sistema de reclamaciones automatizado</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-blue-600" />
            Módulo en Desarrollo
          </CardTitle>
          <CardDescription>
            Detección de fraude y validación cruzada
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
            <p className="text-slate-600">
              Próximamente: Lista de claims, detección de anomalías y smart contracts
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
