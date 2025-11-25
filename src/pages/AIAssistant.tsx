import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot } from 'lucide-react';

export default function AIAssistant() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Asistente Diagnóstico AI</h1>
        <p className="text-slate-500 mt-1">Análisis de imágenes dentales con IA</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-blue-600" />
            Módulo en Desarrollo
          </CardTitle>
          <CardDescription>
            Sistema de análisis de imágenes con diagnóstico asistido
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-50 rounded-lg p-8 text-center border-2 border-dashed border-slate-300">
            <p className="text-slate-600">
              Próximamente: Drag & drop de imágenes, detección de caries y validación local
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
