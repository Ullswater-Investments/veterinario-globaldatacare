import { useState } from 'react';
import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { epidemicMapData } from '@/lib/mockData';
import { Map, AlertTriangle, TrendingUp, TrendingDown, Shield, Bell } from 'lucide-react';

const EpidemicSurveillance = () => {
  const [emergencyMode, setEmergencyMode] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'High':
        return 'bg-red-500';
      case 'Medium':
        return 'bg-orange-500';
      case 'Low':
        return 'bg-green-500';
      default:
        return 'bg-slate-500';
    }
  };

  const getTrendIcon = (trend: string) => {
    const isPositive = trend.startsWith('+');
    return isPositive ? <TrendingUp className="h-4 w-4 text-red-500" /> : <TrendingDown className="h-4 w-4 text-green-500" />;
  };

  // Simulated Spain map regions
  const mapRegions = [
    { name: 'Galicia', x: '10%', y: '20%', data: epidemicMapData[4] },
    { name: 'Cataluña', x: '75%', y: '25%', data: epidemicMapData[1] },
    { name: 'Madrid', x: '45%', y: '45%', data: epidemicMapData[2] },
    { name: 'Valencia', x: '65%', y: '55%', data: epidemicMapData[3] },
    { name: 'Andalucía', x: '40%', y: '75%', data: epidemicMapData[0] },
  ];

  return (
    <BusinessCaseLayout
      caseNumber={15}
      title="Vigilancia Epidemiológica"
      subtitle="Centro de Control de Salud Pública - Monitorización en tiempo real de patologías"
      keyMetric={{
        label: 'Contrato Gubernamental',
        value: '150.000€',
        trend: 'Anual renovable'
      }}
    >
      <div className="space-y-8">
        {/* Privacy Badge */}
        <div className="fixed top-24 right-6 z-50">
          <Badge className="bg-green-900 text-green-200 border-2 border-green-600 px-4 py-2 shadow-lg">
            <Shield className="h-4 w-4 mr-2" />
            Privacy Preserved: Aggregated Regional Data
          </Badge>
        </div>

        {/* Emergency Mode Alert */}
        {emergencyMode && (
          <Card className="border-4 border-red-600 bg-gradient-to-r from-red-950 to-orange-950 animate-pulse">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Bell className="h-12 w-12 text-red-400 animate-pulse" />
                  <div>
                    <h3 className="text-2xl font-bold text-red-200">MODO EMERGENCIA ACTIVADO</h3>
                    <p className="text-red-300">Todas las clínicas notificadas • Protocolos especiales activados</p>
                  </div>
                </div>
                <Button 
                  variant="destructive" 
                  size="lg"
                  onClick={() => setEmergencyMode(false)}
                >
                  Desactivar Alerta
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Interactive Map */}
        <Card className={`border-2 ${emergencyMode ? 'border-red-600 bg-gradient-to-br from-slate-950 to-red-950' : 'border-cyan-600 bg-gradient-to-br from-slate-950 to-cyan-950'}`}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-cyan-400">
                <Map className="h-5 w-5" />
                Mapa Nacional de Vigilancia
              </CardTitle>
              {!emergencyMode && (
                <Button 
                  variant="destructive"
                  onClick={() => setEmergencyMode(true)}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Declarar Alerta Sanitaria
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative h-[600px] bg-slate-900 rounded-lg border-2 border-cyan-700 p-8 overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Simplified Spain outline */}
                  <path 
                    d="M 20 30 Q 30 20 50 25 T 80 30 L 85 45 Q 90 60 85 70 L 75 85 Q 60 90 40 85 L 25 80 Q 15 70 15 55 Z"
                    fill="currentColor"
                    className="text-cyan-900"
                  />
                </svg>
              </div>

              {/* Regional Markers */}
              <div className="relative h-full">
                {mapRegions.map((region, index) => (
                  <div
                    key={index}
                    className="absolute group cursor-pointer"
                    style={{ top: region.y, left: region.x }}
                  >
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-full ${getLevelColor(region.data.level)} opacity-30 animate-ping`} />
                      <div className={`absolute top-0 left-0 w-16 h-16 rounded-full ${getLevelColor(region.data.level)} flex items-center justify-center font-bold text-white border-4 border-white`}>
                        {region.name.substring(0, 2)}
                      </div>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute hidden group-hover:block top-20 left-1/2 -translate-x-1/2 w-64 p-4 bg-slate-800 border-2 border-cyan-600 rounded-lg shadow-2xl z-10">
                      <h4 className="font-bold text-cyan-100 mb-2">{region.data.region}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Condición:</span>
                          <span className="text-cyan-300 font-semibold">{region.data.condition}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Nivel:</span>
                          <Badge className={`${
                            region.data.level === 'High' ? 'bg-red-900 text-red-200' :
                            region.data.level === 'Medium' ? 'bg-orange-900 text-orange-200' :
                            'bg-green-900 text-green-200'
                          }`}>
                            {region.data.level}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Tendencia:</span>
                          <span className={`font-semibold flex items-center gap-1 ${
                            region.data.trend.startsWith('+') ? 'text-red-400' : 'text-green-400'
                          }`}>
                            {getTrendIcon(region.data.trend)}
                            {region.data.trend}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-slate-800 border-2 border-cyan-700 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-100 mb-3 text-sm">Niveles de Incidencia</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full bg-red-500" />
                    <span className="text-slate-300">Alto (&gt;15% población)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full bg-orange-500" />
                    <span className="text-slate-300">Medio (5-15%)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full bg-green-500" />
                    <span className="text-slate-300">Bajo (&lt;5%)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Trends Table */}
        <Card className="border-2 border-purple-600 bg-gradient-to-br from-slate-950 to-purple-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <TrendingUp className="h-5 w-5" />
              Tendencias en Tiempo Real
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {epidemicMapData.map((data, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 border-2 border-purple-700 rounded-lg bg-slate-900 hover:bg-slate-800 transition-all"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-4 h-4 rounded-full ${getLevelColor(data.level)}`} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-purple-100 mb-1">{data.region}</h4>
                      <p className="text-sm text-slate-400">{data.condition}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <Badge className={`${
                      data.level === 'High' ? 'bg-red-900 text-red-200' :
                      data.level === 'Medium' ? 'bg-orange-900 text-orange-200' :
                      'bg-green-900 text-green-200'
                    }`}>
                      {data.level} Risk
                    </Badge>
                    <div className={`flex items-center gap-1 font-bold text-lg ${
                      data.trend.startsWith('+') ? 'text-red-400' : 'text-green-400'
                    }`}>
                      {getTrendIcon(data.trend)}
                      {data.trend}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-red-950 border border-red-800 rounded-lg">
                <div className="text-3xl font-bold text-red-400">
                  {epidemicMapData.filter(d => d.level === 'High').length}
                </div>
                <div className="text-sm text-slate-400">Alertas Altas</div>
              </div>
              <div className="text-center p-4 bg-orange-950 border border-orange-800 rounded-lg">
                <div className="text-3xl font-bold text-orange-400">
                  {epidemicMapData.filter(d => d.level === 'Medium').length}
                </div>
                <div className="text-sm text-slate-400">Alertas Medias</div>
              </div>
              <div className="text-center p-4 bg-green-950 border border-green-800 rounded-lg">
                <div className="text-3xl font-bold text-green-400">
                  {epidemicMapData.filter(d => d.level === 'Low').length}
                </div>
                <div className="text-sm text-slate-400">Regiones Seguras</div>
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
                <h3 className="font-semibold mb-2 text-cyan-400">💰 Contrato Gubernamental</h3>
                <p className="text-sm text-slate-400">
                  150k€ anuales por región autonómica. Sistema completo: dashboard de monitorización, 
                  alertas automáticas, reportes trimestrales.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-purple-400">🏥 Valor para Salud Pública</h3>
                <p className="text-sm text-slate-400">
                  Detección temprana de brotes. Ejemplo: pico de bruxismo en Madrid (+12%) 
                  correlacionado con estrés laboral post-pandemia permite intervención preventiva.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-orange-400">📊 Escalabilidad Nacional</h3>
                <p className="text-sm text-slate-400">
                  17 Comunidades Autónomas × 150k€ = 2.55M€ ARR potencial solo en España. 
                  Replicable en Portugal, Italia, Francia con el mismo stack.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-400">🛡️ Privacidad por Diseño</h3>
                <p className="text-sm text-slate-400">
                  Datos agregados por región (mínimo 10k pacientes). Imposible identificar individuos. 
                  Cumple GDPR Art.89 (procesamiento con fines de salud pública).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default EpidemicSurveillance;
