import { useState, useEffect } from 'react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { adCampaigns } from '@/lib/mockData';
import { MonitorPlay, TrendingUp, MousePointer, Eye, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ContextualAdvertising = () => {
  const [cpmPrice, setCpmPrice] = useState(50);
  const [bidding, setBidding] = useState(false);

  const totalImpressions = adCampaigns.reduce((sum, c) => sum + c.impressions, 0);
  const totalClicks = adCampaigns.reduce((sum, c) => sum + c.clicks, 0);
  const totalSpend = adCampaigns.reduce((sum, c) => sum + c.spend, 0);
  const avgCTR = ((totalClicks / totalImpressions) * 100).toFixed(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setBidding(true);
      setCpmPrice(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newPrice = prev + change;
        return Math.max(45, Math.min(60, newPrice));
      });
      setTimeout(() => setBidding(false), 500);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const chartData = adCampaigns.map(c => ({
    name: c.campaign.split(' ').slice(0, 2).join(' '),
    Impresiones: c.impressions,
    Clics: c.clicks * 20, // Scaled for visibility
  }));

  return (
    <BusinessCaseLayout
      caseNumber={10}
      title="Publicidad Contextual Dental"
      subtitle="Google Ads para Odontología - Bidding en tiempo real en dashboards clínicos"
      keyMetric={{
        label: 'Revenue Este Mes',
        value: `${totalSpend.toLocaleString()}€`,
        trend: `${totalImpressions.toLocaleString()} impresiones`
      }}
    >
      <div className="space-y-8">
        {/* Ad Preview */}
        <Card className="border-2 border-blue-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MonitorPlay className="h-5 w-5 text-blue-600" />
              Preview de Anuncio Contextual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-900 rounded-lg p-8">
              <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
                {/* Simulated Dashboard Header */}
                <div className="bg-primary p-4 text-primary-foreground">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">OralSpace-X Clinical Dashboard</div>
                    <div className="text-sm opacity-80">Dr. María García</div>
                  </div>
                </div>

                {/* Ad Banner */}
                <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">Patrocinado</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">🦷 Nuevo Zirconia X Premium</h3>
                      <p className="text-blue-100 mb-4">
                        Resistencia superior. Estética perfecta. Ahora con 20% descuento.
                      </p>
                      <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                        Ver Oferta →
                      </button>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                      <div className="aspect-video bg-white/20 rounded flex items-center justify-center text-6xl">
                        🦷
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content Below */}
                <div className="p-6 bg-slate-50 dark:bg-slate-900">
                  <div className="text-sm text-muted-foreground">
                    Dashboard content continues below...
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Metrics Panel */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Panel de Métricas de Campaña
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                  />
                  <Legend />
                  <Bar dataKey="Impresiones" fill="hsl(var(--primary))" />
                  <Bar dataKey="Clics" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Campaign Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <Eye className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold">{totalImpressions.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Impresiones</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <MousePointer className="h-6 w-6 mx-auto mb-2 text-green-600" />
                <div className="text-2xl font-bold">{totalClicks}</div>
                <div className="text-sm text-muted-foreground">Clics</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
                <TrendingUp className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                <div className="text-2xl font-bold">{avgCTR}%</div>
                <div className="text-sm text-muted-foreground">CTR Promedio</div>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                <DollarSign className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                <div className="text-2xl font-bold">{totalSpend.toLocaleString()}€</div>
                <div className="text-sm text-muted-foreground">Inversión Total</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-Time Bidding Simulator */}
        <Card className="border-2 border-orange-600 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
              <DollarSign className="h-5 w-5" />
              Subasta en Tiempo Real (RTB)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center p-8 bg-white dark:bg-slate-900 rounded-lg border-4 border-orange-600">
                <div className="text-sm text-muted-foreground mb-2">Precio CPM Actual</div>
                <div className={`text-6xl font-bold mb-4 transition-all ${bidding ? 'scale-110 text-orange-600' : 'text-foreground'}`}>
                  {cpmPrice}€
                </div>
                <div className="text-sm text-muted-foreground">Coste por Mil Impresiones</div>
                {bidding && (
                  <Badge className="mt-4 bg-orange-600 text-white animate-pulse">
                    Bid Actualizado
                  </Badge>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-sm text-muted-foreground mb-2">Mínimo</div>
                  <div className="text-2xl font-bold text-green-600">45€</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-sm text-muted-foreground mb-2">Promedio</div>
                  <div className="text-2xl font-bold text-blue-600">50€</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-sm text-muted-foreground mb-2">Máximo</div>
                  <div className="text-2xl font-bold text-red-600">60€</div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <h4 className="font-semibold mb-3">Factores de Precio:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hora del día (11:00 AM):</span>
                    <span className="font-semibold text-orange-600">+5€ (hora pico)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Especialidad (Implantología):</span>
                    <span className="font-semibold text-blue-600">+3€ (alto valor)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Competencia actual:</span>
                    <span className="font-semibold text-purple-600">4 anunciantes activos</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Model */}
        <Card className="bg-slate-100 dark:bg-slate-900 border-2">
          <CardHeader>
            <CardTitle>Modelo de Negocio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">💰 CPM (Coste por Mil)</h3>
                <p className="text-sm text-muted-foreground">
                  OralSpace-X cobra 50€ por cada 1.000 impresiones mostradas en dashboards clínicos. 
                  Anunciantes pagan solo por visibilidad real.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🎯 Segmentación Precisa</h3>
                <p className="text-sm text-muted-foreground">
                  Anuncios contextuales según especialidad, perfil de clínica, hora del día. 
                  CTR 3x superior vs. publicidad genérica.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📊 Mercado Disponible</h3>
                <p className="text-sm text-muted-foreground">
                  5.000 dentistas activos × 200 sesiones/mes × 10 impresiones = 10M impresiones/mes 
                  = 500k€ potencial mensual.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🤝 Win-Win-Win</h3>
                <p className="text-sm text-muted-foreground">
                  Fabricantes llegan a decisores, dentistas ven ofertas relevantes, 
                  OralSpace-X monetiza tráfico sin vender datos personales.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default ContextualAdvertising;
