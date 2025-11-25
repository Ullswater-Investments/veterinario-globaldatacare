import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Wifi, Activity, Package, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const IotPage = () => {
  const navigate = useNavigate();
  const [temp, setTemp] = useState(134);
  const [pressure, setPressure] = useState(2.1);
  const [timeLeft, setTimeLeft] = useState(12);
  const [stockLevel, setStockLevel] = useState(1);

  useEffect(() => {
    const tempInterval = setInterval(() => {
      setTemp(prev => Math.min(prev + Math.random() * 2 - 1, 136));
    }, 2000);

    const timeInterval = setInterval(() => {
      setTimeLeft(prev => Math.max(prev - 1, 0));
    }, 60000);

    return () => {
      clearInterval(tempInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const autoOrder = () => {
    toast.success('Pedido automático enviado al proveedor');
    setStockLevel(10);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 pt-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/dashboard')}
          className="mb-4 text-white hover:bg-slate-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Dashboard
        </Button>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-900/50 mb-6">
            <Wifi className="h-10 w-10 text-teal-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
            IoT & Inventario Conectado
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Hardware dental integrado en el espacio de datos para automatizar stock y mantenimiento
          </p>
          <Badge className="bg-teal-600 text-white text-sm px-4 py-2">
            MQTT + Real-time Monitoring
          </Badge>
        </div>
      </section>

      {/* Device Grid */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Dashboard de Dispositivos</h2>
            <p className="text-lg text-slate-300">
              Monitoreo en tiempo real de equipamiento clínico
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Autoclave Card */}
            <Card className="bg-slate-900 border-orange-600 border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-2xl flex items-center gap-2">
                      <Activity className="h-6 w-6 text-orange-400" />
                      Autoclave Sala 1
                    </CardTitle>
                    <CardDescription className="text-lg mt-1">
                      Esterilización activa
                    </CardDescription>
                  </div>
                  <Badge className="bg-orange-600 text-white animate-pulse">
                    En Ciclo
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Gauge Visual */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Temperature Gauge */}
                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto">
                      <svg className="transform -rotate-90 w-32 h-32">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-slate-700"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={`${(temp / 140) * 351.86} 351.86`}
                          className="text-orange-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-white">{temp.toFixed(0)}</p>
                          <p className="text-xs text-slate-400">°C</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">Temperatura</p>
                  </div>

                  {/* Pressure Gauge */}
                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto">
                      <svg className="transform -rotate-90 w-32 h-32">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-slate-700"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={`${(pressure / 3) * 351.86} 351.86`}
                          className="text-blue-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-white">{pressure.toFixed(1)}</p>
                          <p className="text-xs text-slate-400">Bar</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">Presión</p>
                  </div>
                </div>

                {/* Status Info */}
                <div className="bg-slate-950 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Estado:</span>
                    <span className="text-orange-400 font-semibold">Ciclo de Esterilización</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tiempo Restante:</span>
                    <span className="text-white font-semibold">{timeLeft} min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Lote Actual:</span>
                    <span className="text-white font-semibold">#STR-2024-156</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Progreso del Ciclo</span>
                    <span className="text-slate-400">{Math.floor((30 - timeLeft) / 30 * 100)}%</span>
                  </div>
                  <Progress value={(30 - timeLeft) / 30 * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Smart Stock Card */}
            <Card className="bg-slate-900 border-red-600 border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-2xl flex items-center gap-2">
                      <Package className="h-6 w-6 text-red-400" />
                      Gabinete de Implantes
                    </CardTitle>
                    <CardDescription className="text-lg mt-1">
                      Control de stock inteligente
                    </CardDescription>
                  </div>
                  {stockLevel <= 2 && (
                    <Badge className="bg-red-600 text-white">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      Stock Bajo
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Stock Items */}
                <div className="space-y-4">
                  <Card className={`${stockLevel <= 2 ? 'bg-red-900/20 border-red-600' : 'bg-slate-950 border-green-600'} border-2`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-white font-semibold">Straumann BLX 4.1mm</p>
                          <p className="text-sm text-slate-400">Código: STR-BLX-41</p>
                        </div>
                        {stockLevel > 2 ? (
                          <CheckCircle2 className="h-6 w-6 text-green-400" />
                        ) : (
                          <AlertTriangle className="h-6 w-6 text-red-400" />
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Stock Actual</span>
                          <span className={`font-semibold ${stockLevel <= 2 ? 'text-red-400' : 'text-green-400'}`}>
                            {stockLevel} unidad{stockLevel !== 1 ? 'es' : ''}
                          </span>
                        </div>
                        <Progress 
                          value={(stockLevel / 10) * 100} 
                          className="h-2"
                        />
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Nivel Mínimo</span>
                          <span className="text-slate-400">3 unidades</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-950 border-green-600 border-2">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-white font-semibold">Nobel Active 3.5mm</p>
                          <p className="text-sm text-slate-400">Código: NBL-ACT-35</p>
                        </div>
                        <CheckCircle2 className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Stock Actual</span>
                          <span className="text-green-400 font-semibold">8 unidades</span>
                        </div>
                        <Progress value={80} className="h-2" />
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Nivel Mínimo</span>
                          <span className="text-slate-400">3 unidades</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Action */}
                {stockLevel <= 2 && (
                  <div className="bg-red-900/20 border border-red-600 rounded-lg p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-semibold mb-1">Alerta de Stock Bajo</p>
                        <p className="text-sm text-slate-300">
                          El stock de Straumann BLX está por debajo del nivel mínimo
                        </p>
                      </div>
                    </div>
                    <Button 
                      onClick={autoOrder}
                      className="w-full bg-red-600 hover:bg-red-700"
                    >
                      Ejecutar Pedido Automático
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Ventajas del IoT Integrado</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Automatización Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Los dispositivos registran datos automáticamente sin intervención manual
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Prevención Proactiva</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Alertas tempranas de mantenimiento y reposición de stock antes de problemas
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Trazabilidad MDR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Registro automático en pasaportes digitales para cumplimiento regulatorio
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IotPage;
