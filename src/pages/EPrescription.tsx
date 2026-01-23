import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function EPrescription() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">e-Receta Veterinaria</h1>
        <p className="text-slate-500 mt-1">Sistema de prescripción electrónica para veterinarios</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="h-5 w-5 text-emerald-600" />
            Módulo en Desarrollo
          </CardTitle>
          <CardDescription>
            Prescripción de medicamentos veterinarios conforme normativa UE
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
            <p className="text-slate-600">
              Próximamente: Búsqueda de medicamentos veterinarios, alertas de interacciones por especie y generación de QR
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
