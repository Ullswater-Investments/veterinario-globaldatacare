import { useState } from 'react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { teledentistryMetrics } from '@/lib/mockData';
import { Video, TrendingUp, Users, Star } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TeledentistrySaaS = () => {
  const [clinicCount, setClinicCount] = useState([teledentistryMetrics.totalClinics]);
  const pricePerClinic = 99;
  const calculatedMRR = clinicCount[0] * pricePerClinic;

  const mrrHistory = [
    { month: 'Ene', mrr: 15840 },
    { month: 'Feb', mrr: 17325 },
    { month: 'Mar', mrr: 18810 },
    { month: 'Abr', mrr: 19800 },
    { month: 'May', mrr: 21285 },
    { month: 'Jun', mrr: calculatedMRR },
  ];

  return (
    <BusinessCaseLayout
      caseNumber={2}
      title="Teledentistería SaaS"
      subtitle="Plataforma White Label de video-consulta integrada en la web de cada clínica"
      keyMetric={{
        label: 'MRR (Monthly Recurring Revenue)',
        value: `${calculatedMRR.toLocaleString()}€`,
        trend: `${teledentistryMetrics.totalClinics} clínicas activas`
      }}
    >
      <div className="space-y-8">
        {/* Live Active Calls */}
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Sesiones en Vivo
              </CardTitle>
              <Badge variant="secondary" className="animate-pulse">
                {teledentistryMetrics.activeSessionsNow} activas ahora
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {teledentistryMetrics.recentCalls.map((call) => (
                <div key={call.id} className="border rounded-lg p-4 bg-muted/30">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-semibold">{call.clinic}</div>
                      <Badge variant="outline" className="text-xs mt-1">{call.type}</Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{call.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Video className="h-3 w-3" />
                      {call.duration}
                    </span>
                    <Badge variant="outline" className="font-mono text-xs">{call.id}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* MRR Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Evolución MRR
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mrrHistory}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    formatter={(value: number) => [`${value.toLocaleString()}€`, 'MRR']}
                    contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mrr" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* ROI Calculator */}
        <Card className="bg-primary/5 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Calculadora de ROI Interactiva
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-medium">Número de Clínicas:</label>
                <span className="text-3xl font-bold text-primary">{clinicCount[0]}</span>
              </div>
              <Slider 
                value={clinicCount} 
                onValueChange={setClinicCount}
                min={50}
                max={500}
                step={5}
                className="mb-8"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="text-sm text-muted-foreground mb-2">Precio por Clínica</div>
                <div className="text-3xl font-bold text-foreground">{pricePerClinic}€</div>
                <div className="text-xs text-muted-foreground mt-1">por mes</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="text-sm text-muted-foreground mb-2">MRR Proyectado</div>
                <div className="text-3xl font-bold text-primary">{calculatedMRR.toLocaleString()}€</div>
                <div className="text-xs text-muted-foreground mt-1">ingresos mensuales</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border">
                <div className="text-sm text-muted-foreground mb-2">ARR Anual</div>
                <div className="text-3xl font-bold text-green-600">{(calculatedMRR * 12).toLocaleString()}€</div>
                <div className="text-xs text-muted-foreground mt-1">ingresos anuales</div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Churn Rate:</span>
                  <span className="font-semibold ml-2">{teledentistryMetrics.churnRate}%</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Tasa de Retención:</span>
                  <span className="font-semibold ml-2 text-green-600">{(100 - teledentistryMetrics.churnRate).toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Model Explanation */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle>Modelo de Negocio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">💰 Suscripción Mensual</h3>
                <p className="text-sm text-muted-foreground">
                  99€/mes por clínica incluye: video-consulta ilimitada, grabación de sesiones, 
                  integración con agenda, marca personalizada white-label.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🚀 Ventaja Competitiva</h3>
                <p className="text-sm text-muted-foreground">
                  A diferencia de Zoom genérico, integración nativa con historia clínica FHIR, 
                  consentimientos firmados digitalmente, facturación automática.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default TeledentistrySaaS;
