import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory } from 'lucide-react';

export default function LabHub() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Hub de Manufactura</h1>
        <p className="text-slate-500 mt-1">Tablero Kanban de órdenes de laboratorio</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Factory className="h-5 w-5 text-blue-600" />
            Módulo en Desarrollo
          </CardTitle>
          <CardDescription>
            Sistema Kanban con Pasaporte Digital del Producto (DPP)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
            <p className="text-slate-600">
              Próximamente: Kanban de producción y visualización de DPP con trazabilidad blockchain
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
