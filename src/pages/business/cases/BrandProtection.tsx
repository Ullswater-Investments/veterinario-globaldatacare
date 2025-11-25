import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { securityAlerts } from '@/lib/mockData';
import { Shield, AlertTriangle, MapPin, Clock, FileText } from 'lucide-react';

const BrandProtection = () => {
  const criticalAlerts = securityAlerts.filter(a => a.risk === 'Critical').length;
  const authenticScans = securityAlerts.filter(a => a.status === 'Authentic').length;

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Critical':
        return 'bg-red-100 text-red-800 border-red-300 dark:bg-red-950 dark:text-red-300 dark:border-red-800';
      case 'Medium':
        return 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800';
      case 'Safe':
        return 'bg-green-100 text-green-800 border-green-300 dark:bg-green-950 dark:text-green-300 dark:border-green-800';
      default:
        return '';
    }
  };

  const getStatusIcon = (risk: string) => {
    if (risk === 'Critical') return <AlertTriangle className="h-4 w-4 animate-pulse" />;
    if (risk === 'Safe') return <Shield className="h-4 w-4" />;
    return <AlertTriangle className="h-4 w-4" />;
  };

  return (
    <BusinessCaseLayout
      caseNumber={7}
      title="Protección de Marca Anti-Falsificación"
      subtitle="War Room de Seguridad - Detección global de productos falsificados en tiempo real"
      keyMetric={{
        label: 'Valor de Mercado Protegido',
        value: '5.2M€',
        trend: 'Este mes'
      }}
    >
      <div className="space-y-8">
        {/* Threat Map */}
        <Card className="border-2 border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-slate-200">
                <MapPin className="h-5 w-5 text-red-400" />
                Mapa Global de Amenazas
              </CardTitle>
              <div className="flex gap-3">
                <Badge className="bg-green-900 text-green-200 border-green-700">
                  {authenticScans} Auténticos
                </Badge>
                <Badge className="bg-red-900 text-red-200 border-red-700 animate-pulse">
                  {criticalAlerts} Falsificaciones
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative h-96 bg-slate-950 rounded-lg border-2 border-slate-700 overflow-hidden">
              {/* Simulated World Map Background */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                  <path d="M 100 250 Q 250 200 400 250 T 700 250 Q 850 200 900 250" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1" 
                        className="text-slate-600"
                  />
                  <circle cx="300" cy="220" r="80" fill="currentColor" className="text-slate-700" opacity="0.3" />
                  <circle cx="650" cy="180" r="100" fill="currentColor" className="text-slate-700" opacity="0.3" />
                  <circle cx="200" cy="320" r="60" fill="currentColor" className="text-slate-700" opacity="0.3" />
                </svg>
              </div>

              {/* Alert Markers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-4xl">
                  {securityAlerts.map((alert, index) => {
                    const positions = [
                      { top: '30%', left: '20%' },
                      { top: '40%', left: '45%' },
                      { top: '55%', left: '70%' },
                      { top: '35%', left: '85%' },
                      { top: '60%', left: '35%' },
                    ];
                    const pos = positions[index] || { top: '50%', left: '50%' };
                    
                    return (
                      <div
                        key={alert.id}
                        className="absolute group cursor-pointer"
                        style={pos}
                      >
                        <div className={`w-4 h-4 rounded-full ${
                          alert.risk === 'Critical' ? 'bg-red-500 animate-ping' :
                          alert.risk === 'Safe' ? 'bg-green-500' :
                          'bg-orange-500'
                        }`} />
                        <div className={`w-4 h-4 rounded-full absolute top-0 left-0 ${
                          alert.risk === 'Critical' ? 'bg-red-500' :
                          alert.risk === 'Safe' ? 'bg-green-500' :
                          'bg-orange-500'
                        }`} />
                        
                        {/* Tooltip */}
                        <div className="absolute hidden group-hover:block bottom-6 left-1/2 -translate-x-1/2 w-48 p-3 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-10">
                          <div className="text-xs text-slate-300 mb-1">{alert.location}</div>
                          <div className="text-sm font-semibold text-white mb-1">{alert.product}</div>
                          <Badge className={`text-xs ${getRiskColor(alert.risk)}`}>
                            {alert.status}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-800 border border-slate-700 rounded-lg">
                <div className="text-sm text-slate-400 mb-1">Escaneos Totales</div>
                <div className="text-3xl font-bold text-slate-200">{securityAlerts.length}</div>
              </div>
              <div className="p-4 bg-red-950 border border-red-800 rounded-lg">
                <div className="text-sm text-red-300 mb-1">Falsificaciones Detectadas</div>
                <div className="text-3xl font-bold text-red-400">{criticalAlerts}</div>
              </div>
              <div className="p-4 bg-green-950 border border-green-800 rounded-lg">
                <div className="text-sm text-green-300 mb-1">Productos Auténticos</div>
                <div className="text-3xl font-bold text-green-400">{authenticScans}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Alerts Feed */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Feed de Alertas de Seguridad
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {securityAlerts.map((alert) => (
                <div 
                  key={alert.id}
                  className="flex items-center justify-between p-4 border-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`p-2 rounded-lg ${
                      alert.risk === 'Critical' ? 'bg-red-100 dark:bg-red-950' :
                      alert.risk === 'Safe' ? 'bg-green-100 dark:bg-green-950' :
                      'bg-orange-100 dark:bg-orange-950'
                    }`}>
                      {getStatusIcon(alert.risk)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="font-mono">{alert.id}</Badge>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {alert.location}
                        </span>
                      </div>
                      <div className="font-semibold">{alert.product}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Badge className={getRiskColor(alert.risk)}>
                      {alert.status}
                    </Badge>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {alert.timestamp}
                    </div>
                    {alert.risk === 'Critical' && (
                      <Button 
                        variant="destructive" 
                        size="sm"
                        className="ml-2"
                      >
                        <FileText className="h-4 w-4 mr-1" />
                        Emitir C&D
                      </Button>
                    )}
                  </div>
                </div>
              ))}
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
                <h3 className="font-semibold mb-2">💰 Licencia Corporativa</h3>
                <p className="text-sm text-muted-foreground">
                  Contrato anual con grandes fabricantes (Straumann, Nobel Biocare, Dentsply). 
                  Fee fijo de 50.000€/año por marca protegida + alertas ilimitadas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🛡️ Protección de Reputación</h3>
                <p className="text-sm text-muted-foreground">
                  Un solo caso de implante falsificado puede generar demandas millonarias. 
                  OralSpace-X actúa como "seguro de marca" con detección preventiva.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📊 ROI Demostrable</h3>
                <p className="text-sm text-muted-foreground">
                  Cliente típico evita pérdidas de 500k€ al año por mercado gris y falsificaciones. 
                  Licencia de 50k€ ofrece ROI de 10x.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">⚖️ Acción Legal Automatizada</h3>
                <p className="text-sm text-muted-foreground">
                  Sistema genera automáticamente Cease & Desist con evidencia blockchain 
                  admisible en corte. Reduce costes legales en 70%.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default BrandProtection;
