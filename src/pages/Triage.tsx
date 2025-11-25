import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function Triage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Teledentistry Triage</h1>
        <p className="text-slate-500 mt-1">Sistema de triaje y consulta remota</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-blue-600" />
            Módulo en Desarrollo
          </CardTitle>
          <CardDescription>
            Inbox de solicitudes con clasificación por urgencia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
            <p className="text-slate-600">
              Próximamente: Lista de solicitudes, nivel de dolor y chat simulado
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
