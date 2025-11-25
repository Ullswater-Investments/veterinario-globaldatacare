import { CreditCard, TrendingUp, CheckCircle2, Loader2, DollarSign, Shield } from 'lucide-react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { creditProposals } from '@/lib/mockData';
import { useState } from 'react';

const BNPLFinancing = () => {
  const [treatmentAmount] = useState(3500);
  const [months, setMonths] = useState(12);
  const [analyzing, setAnalyzing] = useState(false);
  const [approved, setApproved] = useState(false);

  const monthlyPayment = (treatmentAmount / months).toFixed(2);
  const commission = (treatmentAmount * 0.02).toFixed(2);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setApproved(true);
    }, 2000);
  };

  return (
    <BusinessCaseLayout
      caseNumber={18}
      title="Financiación BNPL (Buy Now, Pay Later)"
      subtitle="Checkout financiero integrado con scoring instantáneo basado en historial clínico"
      keyMetric={{
        label: "Conversión de Tratamientos",
        value: "+45%",
        trend: "Comisión media: 2% sobre financiado"
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

        {/* Interactive Financing Simulator */}
        <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-6 w-6" />
              Simulador de Financiación - Checkout Integrado
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Treatment Amount */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <div className="text-blue-100 text-sm">Tratamiento</div>
                  <div className="text-4xl font-bold">Invisalign Full</div>
                </div>
                <div className="text-right">
                  <div className="text-blue-100 text-sm">Importe Total</div>
                  <div className="text-4xl font-bold">{treatmentAmount}€</div>
                </div>
              </div>
            </div>

            {/* Installment Selector */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <label className="text-sm text-blue-100 block mb-4">
                Número de Cuotas: <span className="text-2xl font-bold text-white ml-2">{months} meses</span>
              </label>
              <Slider
                value={[months]}
                onValueChange={(value) => setMonths(value[0])}
                min={3}
                max={24}
                step={3}
                className="mb-4"
              />
              <div className="flex justify-between text-xs text-blue-200">
                <span>3 meses</span>
                <span>12 meses</span>
                <span>24 meses</span>
              </div>
            </div>

            {/* Payment Preview */}
            <div className="bg-emerald-600 rounded-lg p-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-emerald-100 text-sm">Cuota Mensual</div>
                  <div className="text-4xl font-bold">{monthlyPayment}€</div>
                  <div className="text-emerald-200 text-sm mt-1">
                    {months === 3 && '0% TAE'}
                    {months === 6 && '0% TAE'}
                    {months === 12 && '0% TAE'}
                    {months > 12 && '2% TAE'}
                  </div>
                </div>
                <CheckCircle2 className="h-12 w-12 text-white opacity-50" />
              </div>
            </div>

            {/* Credit Analysis */}
            {!analyzing && !approved && (
              <Button
                size="lg"
                className="w-full bg-white text-blue-700 hover:bg-blue-50 font-semibold"
                onClick={handleAnalyze}
              >
                Analizar Solvencia Instantánea
              </Button>
            )}

            {analyzing && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="flex items-center justify-center gap-4">
                  <Loader2 className="h-8 w-8 animate-spin" />
                  <div>
                    <div className="font-semibold text-lg">Analizando historial clínico...</div>
                    <div className="text-blue-200 text-sm mt-1">
                      Verificando pagos previos, adherencia al tratamiento, y scoring crediticio
                    </div>
                  </div>
                </div>
              </div>
            )}

            {approved && (
              <div className="bg-emerald-500 rounded-lg p-8 border-2 border-emerald-300 animate-scale-in">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <CheckCircle2 className="h-16 w-16 text-white" />
                  <div>
                    <div className="text-3xl font-bold">APROBADO</div>
                    <div className="text-emerald-100">Risk Score: A+ (Bajo Riesgo)</div>
                  </div>
                </div>
                <div className="bg-white/20 rounded p-4 text-sm">
                  <div className="flex justify-between mb-2">
                    <span>Historial de Pagos:</span>
                    <span className="font-semibold">✓ Perfecto (12/12)</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Adherencia Tratamiento:</span>
                    <span className="font-semibold">✓ Alta (94%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Scoring Bancario:</span>
                    <span className="font-semibold">✓ No Requerido</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Business Metrics */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-emerald-200 bg-emerald-50">
            <CardContent className="p-6">
              <DollarSign className="h-8 w-8 text-emerald-600 mb-3" />
              <div className="text-3xl font-bold text-emerald-900 mb-1">+{commission}€</div>
              <div className="text-emerald-700 text-sm">Comisión de Originación (2%)</div>
              <div className="text-emerald-600 text-xs mt-2">Por este tratamiento financiado</div>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 text-blue-600 mb-3" />
              <div className="text-3xl font-bold text-blue-900 mb-1">45%</div>
              <div className="text-blue-700 text-sm">Aumento en Conversión</div>
              <div className="text-blue-600 text-xs mt-2">Clientes que aceptan tratamientos caros</div>
            </CardContent>
          </Card>
        </div>

        {/* Credit Proposals Table */}
        <Card className="bg-white border-slate-200">
          <CardHeader className="border-b border-slate-200">
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              Propuestas de Crédito Recientes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Paciente</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Tratamiento</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Importe</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Risk</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Oferta</th>
                    <th className="text-left p-4 text-sm font-semibold text-slate-700">Comisión</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {creditProposals.map((proposal) => (
                    <tr key={proposal.patient} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 text-sm font-medium text-slate-900">{proposal.patient}</td>
                      <td className="p-4 text-sm text-slate-600">{proposal.treatment}</td>
                      <td className="p-4 text-sm font-semibold text-slate-900">{proposal.amount}€</td>
                      <td className="p-4">
                        <Badge
                          variant="outline"
                          className={
                            proposal.risk.includes('Low')
                              ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
                              : 'bg-amber-100 text-amber-700 border-amber-200'
                          }
                        >
                          {proposal.risk}
                        </Badge>
                      </td>
                      <td className="p-4 text-sm text-slate-700 font-medium">{proposal.offer}</td>
                      <td className="p-4 text-sm font-semibold text-emerald-600">
                        +{proposal.commission.toFixed(2)}€
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Value Proposition */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Ventaja Diferencial</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <div className="font-semibold text-blue-800">
                    Scoring Sin Datos Bancarios
                  </div>
                  <div className="text-sm text-blue-700">
                    Usamos el historial clínico (pagos previos, adherencia) en lugar de solo FICO/Equifax
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <div className="font-semibold text-blue-800">
                    Aprobación en Menos de 2 Segundos
                  </div>
                  <div className="text-sm text-blue-700">
                    El paciente recibe respuesta inmediata en la propia clínica
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div>
                  <div className="font-semibold text-blue-800">
                    Proyección: 12M€ ARR con 500 Clínicas Activas
                  </div>
                  <div className="text-sm text-blue-700">
                    Ticket medio: 4.500€ | Conversión: 35% | Comisión: 2%
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

export default BNPLFinancing;