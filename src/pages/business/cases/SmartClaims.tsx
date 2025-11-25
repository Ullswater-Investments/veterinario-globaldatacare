import { CheckCircle2, XCircle, Clock, TrendingUp, Shield, Zap } from 'lucide-react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { claimsQueue } from '@/lib/mockData';
import { useState, useEffect } from 'react';

const SmartClaims = () => {
  const [totalFees, setTotalFees] = useState(1534);
  const [processedCount, setProcessedCount] = useState(127);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalFees(prev => prev + (Math.random() * 2));
      setProcessedCount(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BusinessCaseLayout
      caseNumber={16}
      title="Smart Claims Processing"
      subtitle="Procesamiento automatizado de reclamaciones con validación instantánea mediante smart contracts"
      keyMetric={{
        label: "Fees Generados Hoy",
        value: `${totalFees.toFixed(2)}€`,
        trend: `${processedCount} reclamaciones procesadas`
      }}
    >
      <div className="max-w-6xl space-y-8">
        {/* Security Badges */}
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline" className="bg-emerald-950/30 border-emerald-500/30 text-emerald-400 px-4 py-2">
            <Shield className="h-4 w-4 mr-2" />
            PSD2 Compliant
          </Badge>
          <Badge variant="outline" className="bg-blue-950/30 border-blue-500/30 text-blue-400 px-4 py-2">
            Bank-Grade Security
          </Badge>
          <Badge variant="outline" className="bg-purple-950/30 border-purple-500/30 text-purple-400 px-4 py-2">
            PCI-DSS Ready
          </Badge>
        </div>

        {/* Processing Pipeline Visualization */}
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber-400" />
              Tubería de Procesamiento en Tiempo Real
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between gap-4 p-6 bg-slate-950/50 rounded-lg">
              <div className="text-center">
                <div className="text-slate-400 text-sm mb-2">Entrada</div>
                <div className="w-16 h-16 bg-blue-500/20 border-2 border-blue-500 rounded-lg flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-400" />
                </div>
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-pulse"></div>
                </div>
                <div className="relative text-center">
                  <Badge className="bg-purple-600 text-white">Validación Automática</Badge>
                </div>
              </div>

              <div className="text-center">
                <div className="text-slate-400 text-sm mb-2">Salida</div>
                <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-950/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-emerald-400">0.8s</div>
                <div className="text-sm text-slate-400 mt-1">Tiempo Medio</div>
              </div>
              <div className="text-center p-4 bg-slate-950/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-blue-400">97.8%</div>
                <div className="text-sm text-slate-400 mt-1">Auto-Aprobadas</div>
              </div>
              <div className="text-center p-4 bg-slate-950/30 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-purple-400">vs 30 días</div>
                <div className="text-sm text-slate-400 mt-1">Procesamiento Manual</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Processing Log */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-200">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              Log de Procesamiento en Vivo
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">ID</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Tratamiento</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Importe</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Evidencia</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Estado</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Tiempo</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {claimsQueue.map((claim, index) => (
                    <tr key={claim.id} className="hover:bg-slate-50 transition-colors animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <td className="p-4 font-mono text-sm text-slate-600">{claim.id}</td>
                      <td className="p-4 text-sm text-slate-900">{claim.treatment}</td>
                      <td className="p-4 text-sm font-semibold text-slate-900">{claim.amount}€</td>
                      <td className="p-4 text-sm text-slate-600">{claim.evidence}</td>
                      <td className="p-4">
                        {claim.status.includes('Auto-Approved') ? (
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            {claim.status}
                          </Badge>
                        ) : (
                          <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200">
                            <XCircle className="h-3 w-3 mr-1" />
                            {claim.status}
                          </Badge>
                        )}
                      </td>
                      <td className="p-4 font-mono text-sm text-blue-600 font-semibold">{claim.time}</td>
                      <td className="p-4 text-sm font-semibold text-emerald-600">
                        {claim.fee > 0 ? `+${claim.fee.toFixed(2)}€` : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Counter */}
        <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 border-0 text-white">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-emerald-100 text-sm mb-2">Ingresos por Transacción (1€/claim)</div>
                <div className="text-5xl font-bold">{totalFees.toFixed(2)}€</div>
                <div className="text-emerald-200 text-sm mt-2">Proyección mensual: ~45.000€</div>
              </div>
              <div className="text-8xl opacity-20">
                <TrendingUp />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Value Proposition */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Propuesta de Valor</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Para Aseguradoras</h4>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Reducción del 95% en tiempo de procesamiento</li>
                  <li>• Eliminación de errores humanos de transcripción</li>
                  <li>• Auditoría inmutable en blockchain</li>
                  <li>• Detección automática de fraude integrada</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Para Clínicas</h4>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Cobro en menos de 1 segundo vs 30-45 días</li>
                  <li>• Mejora del flujo de caja (cashflow)</li>
                  <li>• Sin papeleo ni gestión administrativa</li>
                  <li>• Confirmación instantánea de cobertura</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default SmartClaims;