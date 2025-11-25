import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Map } from 'lucide-react';

export default function Epidemiology() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Mapa Epidemiológico</h1>
        <p className="text-slate-500 mt-1">Visualización de datos de salud pública</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5 text-blue-600" />
            Módulo en Desarrollo
          </CardTitle>
          <CardDescription>
            Mapa de calor con incidencia de patologías dentales
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
            <p className="text-slate-600">
              Próximamente: Mapas interactivos con filtros por edad y factores ambientales
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
