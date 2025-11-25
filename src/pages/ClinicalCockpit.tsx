import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

export default function ClinicalCockpit() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Cockpit Clínico</h1>
        <p className="text-slate-500 mt-1">Buscador federado de datos de pacientes</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-blue-600" />
            Módulo en Desarrollo
          </CardTitle>
          <CardDescription>
            Este módulo contendrá el buscador federado con timeline unificado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
            <p className="text-slate-600">
              Próximamente: Timeline de eventos clínicos, semáforo de consentimiento y alertas de riesgo
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
