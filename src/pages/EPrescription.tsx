import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function EPrescription() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">e-Receta UE</h1>
        <p className="text-slate-500 mt-1">Sistema de prescripción electrónica</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="h-5 w-5 text-blue-600" />
            Módulo en Desarrollo
          </CardTitle>
          <CardDescription>
            Prescripción de medicamentos conforme ISO IDMP
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
            <p className="text-slate-600">
              Próximamente: Búsqueda de medicamentos, alertas de interacciones y generación de QR
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
