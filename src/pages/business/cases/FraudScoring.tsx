import { AlertTriangle, Shield, Activity, TrendingUp, Lock } from 'lucide-react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { fraudAlerts } from '@/lib/mockData';
import { useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const FraudScoring = () => {
  const [blocked, setBlocked] = useState(false);

  const radarData = [
    { subject: 'Frecuencia', A: 85, fullMark: 100 },
    { subject: 'Coste Medio', A: 92, fullMark: 100 },
    { subject: 'Duplicidades', A: 78, fullMark: 100 },
    { subject: 'Horarios', A: 65, fullMark: 100 },
    { subject: 'Desviación Regional', A: 95, fullMark: 100 },
  ];

  return (
    <BusinessCaseLayout
      caseNumber={17}
      title="Scoring Antifraude"
      subtitle="Sistema algorítmico de detección de fraude en tiempo real mediante análisis de patrones"
      keyMetric={{
        label: "Fraude Detectado Este Mes",
        value: "4.8%",
        trend: "Ahorro estimado: 127.500€"
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

        {/* Radar Risk Analysis */}
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Activity className="h-5 w-5 text-red-400" />
              Radar de Análisis de Riesgo - Clínica Dental Este
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#475569" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#cbd5e1' }} />
                  <Radar
                    name="Risk Score"
                    dataKey="A"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 grid grid-cols-5 gap-4">
              {radarData.map((item) => (
                <div key={item.subject} className="text-center p-3 bg-slate-950/50 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-red-400">{item.A}</div>
                  <div className="text-xs text-slate-400 mt-1">{item.subject}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fraud Alerts List */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-200 bg-red-50">
            <CardTitle className="flex items-center gap-2 text-red-900">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Lista de Alertas - Centro de Control Antifraude
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-200">
              {fraudAlerts.map((alert, index) => {
                const isHighRisk = alert.riskScore >= 80;
                return (
                  <div
                    key={index}
                    className={`p-6 hover:bg-slate-50 transition-all ${
                      isHighRisk ? 'bg-red-50 animate-pulse' : ''
                    }`}
                    style={{ animationDuration: '3s' }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-slate-900 text-lg">{alert.clinic}</h4>
                          <Badge
                            variant={isHighRisk ? 'destructive' : 'secondary'}
                            className={
                              isHighRisk
                                ? 'bg-red-600 text-white'
                                : 'bg-emerald-100 text-emerald-700'
                            }
                          >
                            {alert.flag}
                          </Badge>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">{alert.details}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-slate-500">
                            Risk Score: <span className={`font-bold ${isHighRisk ? 'text-red-600' : 'text-emerald-600'}`}>
                              {alert.riskScore}/100
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="text-right">
                          <div className={`text-3xl font-bold ${isHighRisk ? 'text-red-600' : 'text-emerald-600'}`}>
                            {alert.riskScore}
                          </div>
                          <div className="text-xs text-slate-500">Risk Level</div>
                        </div>
                        {isHighRisk && (
                          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
                            <AlertTriangle className="h-8 w-8 text-red-600" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Action Panel */}
        <Card className="border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50">
          <CardContent className="p-8">
            <div className="flex items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-amber-900 mb-2">
                  Acción Preventiva Recomendada
                </h3>
                <p className="text-amber-700 mb-4">
                  Se han detectado 2 clínicas con patrones de alto riesgo. Se recomienda suspender
                  pagos automáticos y activar revisión manual.
                </p>
                <div className="flex items-center gap-4">
                  <Button
                    size="lg"
                    className={`${
                      blocked
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-amber-600 hover:bg-amber-700'
                    } text-white`}
                    onClick={() => setBlocked(!blocked)}
                  >
                    <Lock className="h-5 w-5 mr-2" />
                    {blocked ? 'Pagos Bloqueados' : 'Bloquear Pagos Preventivamente'}
                  </Button>
                  {blocked && (
                    <div className="text-sm">
                      <div className="text-emerald-700 font-semibold">
                        ✓ Ahorro estimado: 4.500€
                      </div>
                      <div className="text-slate-600">2 transacciones detenidas</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-8xl opacity-20 text-amber-600">
                <Shield />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-900 border-slate-700 text-white">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 text-emerald-400 mb-3" />
              <div className="text-3xl font-bold mb-1">127.500€</div>
              <div className="text-slate-400 text-sm">Fraude Evitado Este Mes</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-700 text-white">
            <CardContent className="p-6">
              <Activity className="h-8 w-8 text-blue-400 mb-3" />
              <div className="text-3xl font-bold mb-1">98.7%</div>
              <div className="text-slate-400 text-sm">Precisión del Modelo</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900 border-slate-700 text-white">
            <CardContent className="p-6">
              <AlertTriangle className="h-8 w-8 text-red-400 mb-3" />
              <div className="text-3xl font-bold mb-1">4.8%</div>
              <div className="text-slate-400 text-sm">Tasa de Fraude Detectado</div>
            </CardContent>
          </Card>
        </div>

        {/* Value Proposition */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Modelo de Monetización</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <div className="font-semibold text-blue-800">
                    Fee por Transacción Analizada: 0.50€
                  </div>
                  <div className="text-sm text-blue-700">
                    Cada reclamación procesada pasa por el motor de scoring
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <div className="font-semibold text-blue-800">
                    Bonus por Fraude Detectado: 5% del importe evitado
                  </div>
                  <div className="text-sm text-blue-700">
                    Incentivo alineado con el ahorro real de la aseguradora
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <div className="font-semibold text-blue-800">
                    Proyección Anual: 180.000€ (100k transacciones/mes)
                  </div>
                  <div className="text-sm text-blue-700">
                    Basado en volumen medio de aseguradoras tier-2
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default FraudScoring;