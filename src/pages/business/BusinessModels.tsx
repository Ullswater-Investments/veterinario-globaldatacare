import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Building2, 
  Factory, 
  Database, 
  Shield, 
  Users,
  ArrowLeft,
  Calculator,
  PieChart
} from 'lucide-react';
import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { businessModels, revenueDistribution } from '@/lib/mockData';

const BusinessModels = () => {
  const [clinicCount, setClinicCount] = useState([100]);

  // Calculate scaled revenue based on clinic count
  const baseClinicCount = 100;
  const scaleFactor = clinicCount[0] / baseClinicCount;
  
  const calculateTotalRevenue = () => {
    const total = Object.values(businessModels).flat().reduce((sum, model) => sum + model.revenue, 0);
    return Math.round(total * scaleFactor);
  };

  const verticals = [
    {
      key: 'clinical',
      title: 'B2B Clínico',
      subtitle: 'Eficiencia Operativa',
      icon: Building2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      key: 'industry',
      title: 'Industria',
      subtitle: 'Trazabilidad & Compliance',
      icon: Factory,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      key: 'data',
      title: 'Economía del Dato',
      subtitle: 'Federated Learning',
      icon: Database,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      key: 'insurance',
      title: 'InsurTech',
      subtitle: 'Smart Contracts',
      icon: Shield,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200'
    },
    {
      key: 'patient',
      title: 'Servicios Paciente',
      subtitle: 'B2C / B2B2C',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/consulting/technical-proposal" className="flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Volver a Consultoría</span>
          </Link>
          <Badge variant="outline" className="border-green-600 text-green-600">
            <TrendingUp className="h-3 w-3 mr-1" />
            Live Business Model
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Ecosistema de Valor ORALDATA-X
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            25 Flujos de Ingresos Distribuidos en 5 Verticales de Mercado
          </p>
        </div>

        {/* ROI Calculator */}
        <Card className="mb-12 border-2 border-blue-200 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Calculator className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-2xl">Calculadora de ROI Interactiva</CardTitle>
                <CardDescription>Proyecta ingresos según escala de adopción</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium">Clínicas Conectadas:</label>
                  <span className="text-3xl font-bold text-blue-600">{clinicCount[0]}</span>
                </div>
                <Slider 
                  value={clinicCount} 
                  onValueChange={setClinicCount}
                  min={10}
                  max={1000}
                  step={10}
                  className="mb-8"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <div className="text-sm text-slate-600 mb-2">Ingreso Mensual Estimado</div>
                  <div className="text-4xl font-bold text-blue-600">
                    {(calculateTotalRevenue() / 1000).toFixed(0)}k€
                  </div>
                  <div className="text-xs text-slate-500 mt-2">~{(calculateTotalRevenue() * 12 / 1000000).toFixed(1)}M€ ARR</div>
                </div>

                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                  <div className="text-sm text-slate-600 mb-2">Revenue per Clinic</div>
                  <div className="text-4xl font-bold text-purple-600">
                    {Math.round(calculateTotalRevenue() / clinicCount[0])}€
                  </div>
                  <div className="text-xs text-slate-500 mt-2">por clínica/mes</div>
                </div>

                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                  <div className="text-sm text-slate-600 mb-2">Flujos Activos</div>
                  <div className="text-4xl font-bold text-green-600">25</div>
                  <div className="text-xs text-slate-500 mt-2">modelos de negocio</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue Distribution Chart */}
        <Card className="mb-12 border-slate-200">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-100">
                <PieChart className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <CardTitle className="text-2xl">Distribución de Ingresos</CardTitle>
                <CardDescription>Breakdown por vertical de mercado (Base: 100 clínicas)</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPie>
                  <Pie
                    data={revenueDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name} ${percentage}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {revenueDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `${(value/1000).toFixed(1)}k€/mes`} />
                  <Legend />
                </RechartsPie>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Business Models Matrix */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Matriz de Modelos de Negocio</h2>
            <p className="text-slate-600">Hover sobre cada tarjeta para ver métricas detalladas</p>
          </div>

          {verticals.map((vertical) => {
            const Icon = vertical.icon;
            const models = businessModels[vertical.key as keyof typeof businessModels];
            const verticalTotal = models.reduce((sum, model) => sum + model.revenue, 0);

            return (
              <div key={vertical.key} className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${vertical.bgColor}`}>
                    <Icon className={`h-8 w-8 ${vertical.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">{vertical.title}</h3>
                    <p className="text-slate-600">{vertical.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500">Total Vertical</div>
                    <div className={`text-2xl font-bold ${vertical.color}`}>
                      {Math.round(verticalTotal * scaleFactor / 1000)}k€/mes
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-5 gap-4">
                  {models.map((model) => {
                    const hasDetailPage = model.id >= 1 && model.id <= 10;
                    const cardContent = (
                      <Card 
                        className={`group transition-all hover:shadow-xl hover:-translate-y-2 cursor-pointer border-2 ${vertical.borderColor} ${vertical.bgColor} h-full`}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline">
                              #{model.id}
                            </Badge>
                            {hasDetailPage && (
                              <Badge variant="secondary" className="text-xs">
                                Ver Demo
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-base leading-tight">
                            {model.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className={`text-2xl font-bold ${vertical.color} group-hover:scale-110 transition-transform`}>
                              {Math.round(model.revenue * scaleFactor / 1000)}k€
                            </div>
                            <div className="text-xs text-slate-600 leading-relaxed min-h-[3rem]">
                              {model.description}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                    
                    return hasDetailPage ? (
                      <Link key={model.id} to={`/business/case/${model.id}`}>
                        {cardContent}
                      </Link>
                    ) : (
                      <div key={model.id}>
                        {cardContent}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <Card className="mt-16 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="pt-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Listo para Activar Estos Flujos de Ingresos?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Cada modelo de negocio es activable independientemente. Podemos diseñar un roadmap de monetización adaptado a tu estrategia de mercado.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/consulting/technical-proposal">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Ver Propuesta Técnica Completa
                </button>
              </Link>
              <a href="#contact">
                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                  Agendar Business Review
                </button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusinessModels;