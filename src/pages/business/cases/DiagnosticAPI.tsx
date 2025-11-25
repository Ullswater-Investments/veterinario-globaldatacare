import { useState, useEffect } from 'react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { apiUsageLog } from '@/lib/mockData';
import { Code, Activity, TrendingUp, Image } from 'lucide-react';

const DiagnosticAPI = () => {
  const [revenue, setRevenue] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<typeof apiUsageLog>([]);
  const totalRevenue = apiUsageLog.reduce((sum, log) => sum + log.cost, 0);

  useEffect(() => {
    // Simulate log streaming
    let index = 0;
    const timer = setInterval(() => {
      if (index < apiUsageLog.length) {
        setVisibleLogs(prev => [...prev, apiUsageLog[index]]);
        setRevenue(prev => prev + apiUsageLog[index].cost);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 800);

    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: number) => {
    return status === 200 ? 'text-green-600' : 'text-red-600';
  };

  return (
    <BusinessCaseLayout
      caseNumber={4}
      title="API Diagnóstico IA"
      subtitle="Pay-per-call: 0.50€ por análisis radiográfico con algoritmos federados"
      keyMetric={{
        label: 'Revenue Real-Time',
        value: `${revenue.toFixed(2)}€`,
        trend: `${visibleLogs.length} llamadas procesadas`
      }}
    >
      <div className="space-y-8">
        {/* API Console */}
        <Card className="border-2 border-primary/20 bg-slate-950">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-green-400">
                <Code className="h-5 w-5" />
                API Gateway - Log en Tiempo Real
              </CardTitle>
              <Badge variant="secondary" className="bg-green-900 text-green-200">
                <Activity className="h-3 w-3 mr-1 animate-pulse" />
                LIVE
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm h-96 overflow-y-auto">
              {visibleLogs.length === 0 && (
                <div className="text-slate-500 animate-pulse">Waiting for API calls...</div>
              )}
              {visibleLogs.map((log, index) => (
                <div key={index} className="mb-2 hover:bg-slate-800 p-2 rounded transition-colors">
                  <span className="text-slate-500">[{log.timestamp}]</span>{' '}
                  <span className={getStatusColor(log.status)}>HTTP {log.status}</span>{' '}
                  <span className="text-blue-400">{log.endpoint}</span>{' '}
                  <span className="text-yellow-400">{log.latency}</span>{' '}
                  <span className="text-green-400">+{log.cost}€</span>
                </div>
              ))}
            </div>

            {/* Revenue Ticker */}
            <div className="mt-4 p-4 bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-700 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span className="text-green-200 font-semibold">Monetización Acumulada:</span>
                </div>
                <div className="text-3xl font-bold text-green-400 font-mono">
                  {revenue.toFixed(2)}€
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Gallery */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Image className="h-5 w-5 text-primary" />
              Galería de Análisis (Ejemplos)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Detección de Caries', confidence: '94.2%', findings: 3 },
                { title: 'Análisis Periodontal', confidence: '87.5%', findings: 2 },
                { title: 'Evaluación Ortodoncia', confidence: '91.8%', findings: 5 }
              ].map((sample, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-12 h-12 border-2 border-red-500 animate-pulse" />
                      <div className="absolute bottom-8 right-6 w-16 h-16 border-2 border-yellow-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute top-1/2 left-1/2 w-8 h-8 border-2 border-green-500 animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                    <span className="text-slate-600 font-mono text-sm">X-Ray Preview</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{sample.title}</div>
                    <div className="flex items-center justify-between text-sm">
                      <Badge variant="outline" className="text-xs">
                        {sample.findings} hallazgos
                      </Badge>
                      <span className="text-green-600 font-semibold">{sample.confidence}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* API Statistics */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold mb-2 text-foreground">{apiUsageLog.length}</div>
              <div className="text-sm text-muted-foreground">Total Calls</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold mb-2 text-green-600">
                {(apiUsageLog.reduce((sum, log) => sum + parseInt(log.latency), 0) / apiUsageLog.length).toFixed(0)}ms
              </div>
              <div className="text-sm text-muted-foreground">Avg Latency</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold mb-2 text-primary">{totalRevenue.toFixed(2)}€</div>
              <div className="text-sm text-muted-foreground">Total Revenue</div>
            </CardContent>
          </Card>
          <Card className="bg-primary/5">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold mb-2 text-primary">50k</div>
              <div className="text-sm text-muted-foreground">Proyección/Mes</div>
            </CardContent>
          </Card>
        </div>

        {/* Business Model Explanation */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle>Modelo de Negocio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">💰 Pay-per-API-Call</h3>
                <p className="text-sm text-muted-foreground">
                  Tarifa por uso: 0.50€ por radiografía analizada. Sin compromisos de volumen. 
                  Escalado automático según demanda.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🧠 Ventaja del Modelo Federado</h3>
                <p className="text-sm text-muted-foreground">
                  Algoritmo entrenado con datos de múltiples clínicas sin compartir imágenes originales. 
                  Mayor precisión que modelos aislados, sin violar privacidad.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default DiagnosticAPI;
