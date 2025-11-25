import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package } from 'lucide-react';

export default function Inventory() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Inventario IoT</h1>
        <p className="text-slate-500 mt-1">Monitoreo de dispositivos y stock en tiempo real</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-blue-600" />
            Módulo en Desarrollo
          </CardTitle>
          <CardDescription>
            Grid de tarjetas vivas para stock y maquinaria
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
            <p className="text-slate-600">
              Próximamente: Tarjetas de stock con alertas automáticas y monitores de autoclaves
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
