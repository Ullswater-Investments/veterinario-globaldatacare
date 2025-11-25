import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { rweComparison } from '@/lib/mockData';
import { BarChart3, TrendingDown, AlertTriangle, Shield, FileText } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const RealWorldEvidence = () => {
  const chartData = rweComparison.map(item => ({
    name: item.material.split(' ')[1],
    'Tasa de Éxito': item.survivalRate,
    'Complicaciones': item.complications,
  }));

  // Simulated tooth diagram positions
  const toothPositions = [
    { id: 16, top: '20%', left: '15%', risk: 'low' },
    { id: 17, top: '20%', left: '25%', risk: 'medium' },
    { id: 18, top: '20%', left: '35%', risk: 'high' },
    { id: 26, top: '20%', left: '65%', risk: 'low' },
    { id: 27, top: '20%', left: '75%', risk: 'medium' },
    { id: 28, top: '20%', left: '85%', risk: 'high' },
    { id: 36, top: '70%', left: '15%', risk: 'high' },
    { id: 37, top: '70%', left: '25%', risk: 'high' },
    { id: 38, top: '70%', left: '35%', risk: 'medium' },
    { id: 46, top: '70%', left: '65%', risk: 'high' },
    { id: 47, top: '70%', left: '75%', risk: 'high' },
    { id: 48, top: '70%', left: '85%', risk: 'medium' },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high':
        return 'bg-red-500 animate-pulse';
      case 'medium':
        return 'bg-orange-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-slate-500';
    }
  };

  return (
    <BusinessCaseLayout
      caseNumber={14}
      title="Informes RWE (Real World Evidence)"
      subtitle="Bloomberg para Odontología - Inteligencia competitiva basada en datos reales"
      keyMetric={{
        label: 'Suscripción Trimestral',
        value: '15.000€',
        trend: 'Acceso completo a todos los informes'
      }}
    >
      <div className="space-y-8">
        {/* Privacy Badge */}
        <div className="fixed top-24 right-6 z-50">
          <Badge className="bg-green-900 text-green-200 border-2 border-green-600 px-4 py-2 shadow-lg">
            <Shield className="h-4 w-4 mr-2" />
            Privacy Preserved: Aggregated Data Only
          </Badge>
        </div>

        {/* Competitive Comparison Chart */}
        <Card className="border-2 border-blue-600 bg-gradient-to-br from-slate-950 to-blue-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-400">
              <BarChart3 className="h-5 w-5" />
              Análisis Comparativo: Tasas de Éxito por Fabricante
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ background: '#0f172a', border: '1px solid #475569' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend />
                  <Bar dataKey="Tasa de Éxito" fill="#22c55e" />
                  <Bar dataKey="Complicaciones" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Detailed Comparison Table */}
            <div className="mt-6 space-y-3">
              {rweComparison.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 border-2 border-slate-700 rounded-lg bg-slate-900 hover:bg-slate-800 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-100 mb-2">{item.material}</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-slate-400">Tasa de Supervivencia (5 años):</span>
                          <span className={`ml-2 font-bold ${
                            item.survivalRate > 95 ? 'text-green-400' :
                            item.survivalRate > 90 ? 'text-yellow-400' :
                            'text-red-400'
                          }`}>
                            {item.survivalRate}%
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400">Tasa de Complicaciones:</span>
                          <span className={`ml-2 font-bold ${
                            item.complications < 3 ? 'text-green-400' :
                            item.complications < 6 ? 'text-yellow-400' :
                            'text-red-400'
                          }`}>
                            {item.complications}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge className={`text-lg px-4 py-2 ${
                      item.survivalRate > 95 ? 'bg-green-900 text-green-200' :
                      item.survivalRate > 90 ? 'bg-yellow-900 text-yellow-200' :
                      'bg-red-900 text-red-200'
                    }`}>
                      {item.survivalRate > 95 ? 'Premium' :
                       item.survivalRate > 90 ? 'Standard' :
                       'Budget'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Failure Heatmap (Odontogram) */}
        <Card className="border-2 border-red-600 bg-gradient-to-br from-slate-950 to-red-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-400">
              <AlertTriangle className="h-5 w-5" />
              Mapa de Calor de Fallos (Odontograma)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-96 bg-slate-900 rounded-lg border-2 border-red-700 p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-red-200 mb-2">
                  Distribución de Fallos de Implantes
                </h3>
                <p className="text-sm text-slate-400">
                  Basado en análisis de 50.000 implantes • Últimos 5 años
                </p>
              </div>

              {/* Tooth positions */}
              <div className="relative h-64">
                {toothPositions.map((tooth) => (
                  <div
                    key={tooth.id}
                    className="absolute group cursor-pointer"
                    style={{ top: tooth.top, left: tooth.left }}
                  >
                    <div className={`w-8 h-8 rounded ${getRiskColor(tooth.risk)} transition-all`} />
                    
                    {/* Tooltip */}
                    <div className="absolute hidden group-hover:block bottom-10 left-1/2 -translate-x-1/2 w-48 p-3 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-10">
                      <div className="text-sm">
                        <div className="font-semibold text-white mb-1">Diente #{tooth.id}</div>
                        <div className="text-slate-300">
                          Riesgo de fallo: <span className={`font-bold ${
                            tooth.risk === 'high' ? 'text-red-400' :
                            tooth.risk === 'medium' ? 'text-orange-400' :
                            'text-green-400'
                          }`}>
                            {tooth.risk === 'high' ? 'Alto (12%)' :
                             tooth.risk === 'medium' ? 'Medio (6%)' :
                             'Bajo (2%)'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Maxilla/Mandible separator */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-700" />
              </div>

              {/* Legend */}
              <div className="mt-8 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-green-500" />
                  <span className="text-sm text-slate-300">Bajo Riesgo (&lt;3%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-orange-500" />
                  <span className="text-sm text-slate-300">Medio Riesgo (3-8%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-red-500" />
                  <span className="text-sm text-slate-300">Alto Riesgo (&gt;8%)</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-950 border border-red-800 rounded-lg">
                <div className="text-sm text-red-200">
                  <TrendingDown className="h-4 w-4 inline mr-2" />
                  Zona crítica: Molares inferiores posteriores (37, 47) concentran 45% de los fallos
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Subscription */}
        <Card className="border-2 border-purple-600 bg-gradient-to-br from-slate-950 to-purple-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <FileText className="h-5 w-5" />
              Acceso al Informe Trimestral
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-100">¿Qué incluye la suscripción?</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-900 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Análisis comparativo de 20+ fabricantes principales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-900 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Datos agregados de 500k+ implantes colocados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-900 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Tendencias de mercado y preferencias clínicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-900 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Benchmarking por región geográfica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-900 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span>Alertas tempranas de problemas emergentes</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center">
                <div className="p-8 bg-slate-900 border-2 border-purple-600 rounded-lg text-center">
                  <div className="text-sm text-slate-400 mb-2">Suscripción Trimestral</div>
                  <div className="text-5xl font-bold text-purple-400 mb-4">15.000€</div>
                  <div className="text-sm text-slate-400 mb-6">+ IVA • Renovación automática</div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-6">
                    Suscribirse Ahora
                  </Button>
                  <div className="text-xs text-slate-500 mt-4">
                    Garantía de devolución 30 días
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Model */}
        <Card className="bg-slate-900 border-2 border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-200">Modelo de Negocio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-blue-400">💰 Suscripción B2B</h3>
                <p className="text-sm text-slate-400">
                  15k€ por suscripción trimestral. Target: fabricantes (vigilancia competitiva), 
                  distribuidores (selección portfolio), clínicas grandes (decisiones compra).
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-purple-400">📊 Valor Único</h3>
                <p className="text-sm text-slate-400">
                  Datos RWE imposibles de obtener de otra forma. Registros aislados en clínicas, 
                  OralSpace-X agrega federadamente sin comprometer privacidad.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-400">🎯 Caso de Uso Real</h3>
                <p className="text-sm text-slate-400">
                  Fabricante detectó fallo sistemático en lote específico 8 meses antes que 
                  competidor. Retirada proactiva evitó demandas de €15M.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-orange-400">📈 Escalabilidad</h3>
                <p className="text-sm text-slate-400">
                  Proyección: 20 suscriptores (mix fabricantes/distribuidores) = 300k€/trimestre 
                  = 1.2M€ ARR. Margen 90% (coste marginal bajo).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default RealWorldEvidence;
