import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Network, Brain, Lock, TrendingUp } from 'lucide-react';

const FederatedPage = () => {
  const navigate = useNavigate();
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(45);

  const startTraining = () => {
    setIsTraining(true);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  };

  const clinics = [
    { id: 1, name: 'Clínica Norte', x: '20%', y: '30%', patients: 450 },
    { id: 2, name: 'Hospital Central', x: '70%', y: '20%', patients: 1200 },
    { id: 3, name: 'Clínica Sur', x: '50%', y: '70%', patients: 380 },
    { id: 4, name: 'Dental Care', x: '80%', y: '60%', patients: 520 },
    { id: 5, name: 'Clínica Oeste', x: '15%', y: '65%', patients: 290 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-slate-900 text-white">
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-900/50 mb-6">
            <Brain className="h-10 w-10 text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Aprendizaje Federado
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Entrenamiento de algoritmos de IA distribuidos. El dato nunca sale de la clínica
          </p>
          <Badge className="bg-purple-600 text-white text-sm px-4 py-2">
            Privacy-Preserving Machine Learning
          </Badge>
        </div>
      </section>

      {/* Network Map */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Red de Aprendizaje Federado</h2>
            <p className="text-lg text-slate-300">
              Visualización de la red distribuida de entrenamiento
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-slate-900 border-slate-700 mb-8">
              <CardContent className="p-8">
                {/* Network Visualization */}
                <div className="relative h-[400px] bg-slate-950 rounded-lg mb-6">
                  {/* Central Brain */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
                      <Brain className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-center text-sm mt-2 text-white font-semibold">
                      Modelo Global
                    </p>
                  </div>

                  {/* Clinic Nodes */}
                  {clinics.map((clinic) => (
                    <div
                      key={clinic.id}
                      className="absolute"
                      style={{ left: clinic.x, top: clinic.y, transform: 'translate(-50%, -50%)' }}
                    >
                      {/* Connection Line */}
                      <svg className="absolute inset-0 w-screen h-screen pointer-events-none" style={{ left: '50%', top: '50%' }}>
                        <line
                          x1="0"
                          y1="0"
                          x2={`calc(50vw - ${clinic.x})`}
                          y2={`calc(50vh - ${clinic.y})`}
                          stroke="rgb(168, 85, 247)"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          className="animate-pulse"
                        />
                      </svg>

                      <div className="relative z-20">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg">
                          <Network className="h-8 w-8 text-white" />
                        </div>
                        <div className="mt-2 bg-slate-900 rounded px-2 py-1 text-xs whitespace-nowrap">
                          <p className="font-semibold">{clinic.name}</p>
                          <p className="text-slate-400">{clinic.patients} pacientes</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Label */}
                  <div className="absolute bottom-4 left-4 bg-blue-900/50 rounded-lg px-4 py-2 border border-blue-600">
                    <p className="text-sm text-blue-300">
                      <Lock className="inline h-4 w-4 mr-2" />
                      Solo Pesos Estadísticos (No Imágenes)
                    </p>
                  </div>
                </div>

                {/* Control Panel */}
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="bg-slate-950 border-purple-600">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-white">{progress}%</p>
                        <p className="text-sm text-slate-400">Progreso</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-950 border-green-600">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-white">94.5%</p>
                        <p className="text-sm text-slate-400">Precisión</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-950 border-blue-600">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-white">0</p>
                        <p className="text-sm text-slate-400">Imágenes Expuestas</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Entrenando Ronda {Math.floor(progress)}/100</span>
                      <span className="text-slate-400">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-3" />
                  </div>

                  <Button 
                    onClick={startTraining}
                    disabled={isTraining}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    size="lg"
                  >
                    {isTraining ? 'Entrenando...' : 'Iniciar Entrenamiento Federado'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Marketplace de Algoritmos */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Marketplace de Algoritmos</h3>
              
              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">Detección Periapical</CardTitle>
                      <CardDescription>
                        Identificación automática de lesiones periapicales en radiografías
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-600">Activo</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-sm text-slate-400">240 nodos participantes</p>
                      <p className="text-sm text-slate-400">Precisión: 96.2%</p>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      Desplegar en Nodos
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">Segmentación Nervio Dentario</CardTitle>
                      <CardDescription>
                        Trazado automático del nervio alveolar inferior en CBCT
                      </CardDescription>
                    </div>
                    <Badge className="bg-yellow-600">En Desarrollo</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-sm text-slate-400">180 nodos participantes</p>
                      <p className="text-sm text-slate-400">Precisión: 89.7%</p>
                    </div>
                    <Button variant="outline">
                      Ver Detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Ventajas del Aprendizaje Federado</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Privacidad Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Los datos nunca salen del nodo local. Solo se comparten parámetros del modelo
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Datos Heterogéneos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Aprende de múltiples fuentes y equipos diferentes sin necesidad de centralización
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Cumplimiento GDPR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Diseño que garantiza el cumplimiento de normativas de protección de datos
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

export default FederatedPage;
