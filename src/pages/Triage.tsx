import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function Triage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Teleconsulta Veterinaria</h1>
        <p className="text-slate-500 mt-1">Sistema de triaje y consulta remota para mascotas</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-emerald-600" />
            Módulo en Desarrollo
          </CardTitle>
          <CardDescription>
            Inbox de solicitudes con clasificación por urgencia y especie
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
            <p className="text-slate-600">
              Próximamente: Lista de solicitudes, nivel de urgencia por especie y chat veterinario simulado
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
