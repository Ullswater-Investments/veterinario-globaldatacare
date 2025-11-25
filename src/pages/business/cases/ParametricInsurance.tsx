import { Activity, TrendingDown, Shield, Smartphone, Zap, DollarSign } from 'lucide-react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { parametricPolicies } from '@/lib/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ParametricInsurance = () => {
  const brushingData = [
    { day: 'L', score: 88 },
    { day: 'M', score: 92 },
    { day: 'X', score: 95 },
    { day: 'J', score: 90 },
    { day: 'V', score: 94 },
    { day: 'S', score: 87 },
    { day: 'D', score: 93 },
  ];

  return (
    <BusinessCaseLayout
      caseNumber={19}
      title="Seguros Paramétricos IoT"
      subtitle="Prima dinámica ajustada automáticamente según comportamiento de salud oral verificado por IoT"
      keyMetric={{
        label: "Ahorro Medio del Asegurado",
        value: "12%",
        trend: "Reducción de siniestralidad: 28%"
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

        {/* IoT Connection Simulation */}
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-6 w-6 animate-pulse" />
              Conexión IoT en Tiempo Real - Oral-B Genius X
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between gap-8">
              <div className="flex-1">
                <div className="text-sm text-blue-100 mb-2">Calidad de Cepillado (últimos 7 días)</div>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={brushingData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff33" />
                      <XAxis dataKey="day" stroke="#fff" />
                      <YAxis domain={[0, 100]} stroke="#fff" />
                      <Tooltip
                        contentStyle={{ background: '#1e293b', border: 'none', borderRadius: '8px' }}
                      />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#10b981"
                        strokeWidth={3}
                        dot={{ fill: '#10b981', r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-emerald-400 flex items-center justify-center mb-4">
                  <div>
                    <div className="text-5xl font-bold">94</div>
                    <div className="text-sm text-blue-100">Score</div>
                  </div>
                </div>
                <Badge className="bg-emerald-500 text-white text-sm px-4 py-1">
                  Excelente
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">2min 15s</div>
                <div className="text-sm text-blue-200">Duración Media</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">14/14</div>
                <div className="text-sm text-blue-200">Cepillados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-blue-200">Cobertura</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dynamic Premium Calculator */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-200 bg-emerald-50">
            <CardTitle className="flex items-center gap-2 text-emerald-900">
              <TrendingDown className="h-5 w-5 text-emerald-600" />
              Calculadora de Prima Dinámica
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex items-center justify-between gap-8 mb-6">
              <div className="flex-1">
                <div className="text-sm text-slate-600 mb-2">Prima Base (Sin IoT)</div>
                <div className="text-4xl font-bold text-slate-900">35.00€</div>
                <div className="text-sm text-slate-500 mt-1">/mes</div>
              </div>
              <div className="text-4xl text-slate-300">→</div>
              <div className="flex-1 bg-emerald-50 p-6 rounded-lg border-2 border-emerald-300">
                <div className="text-sm text-emerald-700 mb-2">Prima Ajustada (IoT Score: 94)</div>
                <div className="text-4xl font-bold text-emerald-600">25.00€</div>
                <div className="text-sm text-emerald-500 mt-1">/mes</div>
                <Badge className="bg-emerald-600 text-white mt-3">-15% Descuento Aplicado</Badge>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <Zap className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <div className="font-semibold text-blue-900 mb-2">Smart Contract Trigger Logic:</div>
                  <code className="text-sm bg-slate-900 text-emerald-400 px-4 py-2 rounded block font-mono">
                    IF (BrushScore &gt; 90) THEN Premium = Premium * 0.85
                  </code>
                </div>
              </div>
              <div className="text-sm text-blue-700">
                El ajuste de prima se ejecuta automáticamente cada mes sin intervención humana.
                El contrato inteligente valida los datos del dispositivo IoT y recalcula el precio.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Policies Table */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-200">
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Pólizas Paramétricas Activas
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Póliza ID</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Usuario</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Score</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Prima Mensual</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Descuento</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Trigger Rule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {parametricPolicies.map((policy) => {
                    const hasDiscount = policy.brushingScore >= 85;
                    return (
                      <tr key={policy.policyId} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-mono text-sm text-slate-600">{policy.policyId}</td>
                        <td className="p-4 text-sm font-medium text-slate-900">{policy.user}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className="text-2xl font-bold text-slate-900">{policy.brushingScore}</div>
                            {hasDiscount && <Activity className="h-5 w-5 text-emerald-500" />}
                          </div>
                        </td>
                        <td className="p-4 text-sm font-semibold text-slate-900">
                          {policy.monthlyPremium.toFixed(2)}€
                        </td>
                        <td className="p-4">
                          <Badge
                            variant="outline"
                            className={
                              hasDiscount
                                ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                                : policy.discountApplied.includes('+')
                                ? 'bg-red-100 text-red-700 border-red-200'
                                : 'bg-slate-100 text-slate-700 border-slate-200'
                            }
                          >
                            {policy.discountApplied}
                          </Badge>
                        </td>
                        <td className="p-4 text-xs font-mono text-slate-600">{policy.trigger}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Business Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-6">
              <TrendingDown className="h-8 w-8 text-emerald-600 mb-3" />
              <div className="text-3xl font-bold text-emerald-900 mb-1">-28%</div>
              <div className="text-emerald-700 text-sm">Reducción Siniestralidad</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <div className="text-3xl font-bold text-blue-900 mb-1">4.200</div>
              <div className="text-blue-700 text-sm">Pólizas Activas</div>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <DollarSign className="h-8 w-8 text-purple-600 mb-3" />
              <div className="text-3xl font-bold text-purple-900 mb-1">126k€</div>
              <div className="text-purple-700 text-sm">ARR (Primas Mensuales)</div>
            </CardContent>
          </Card>
        </div>

        {/* Value Proposition */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Innovación Disruptiva</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <div className="font-semibold text-blue-800">
                    "Usage-Based Insurance" para Odontología
                  </div>
                  <div className="text-sm text-blue-700">
                    Similar a los seguros de coche con telemática, pero aplicado a salud oral
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <div className="font-semibold text-blue-800">
                    Win-Win: Menos Primas + Menos Siniestros
                  </div>
                  <div className="text-sm text-blue-700">
                    El paciente paga menos porque previene problemas antes de que ocurran
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <div className="font-semibold text-blue-800">
                    Alianza Estratégica con Oral-B, Philips Sonicare
                  </div>
                  <div className="text-sm text-blue-700">
                    Los fabricantes de cepillos conectados subsidian parte de la prima a cambio de datos
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

export default ParametricInsurance;