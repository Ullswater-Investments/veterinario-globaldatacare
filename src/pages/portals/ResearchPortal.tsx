import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Map,
  Brain,
  Shield,
  ArrowLeft,
  Network,
  Database
} from 'lucide-react';

const ResearchPortal = () => {
  const navigate = useNavigate();

  const algorithms = [
    {
      name: 'Algoritmo Detección Periapical',
      description: 'Red neuronal para identificación de lesiones periapicales',
      nodes: 240,
      accuracy: '96.2%'
    },
    {
      name: 'Algoritmo Segmentación de Nervio',
      description: 'Mapeo 3D del canal mandibular para planificación de implantes',
      nodes: 180,
      accuracy: '94.8%'
    },
    {
      name: 'Predictor de Caries',
      description: 'Modelo predictivo de riesgo de caries en población pediátrica',
      nodes: 320,
      accuracy: '91.5%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-4 text-white hover:bg-slate-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Inicio
        </Button>
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-900/50 mb-6">
            <TrendingUp className="h-10 w-10 text-orange-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400">
            Red de Inteligencia Colectiva
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Acelera descubrimientos clínicos accediendo a datos globales 
            sin que la información sensible salga nunca de la clínica.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/research')}
            className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6 h-auto"
          >
            Iniciar Estudio Colaborativo
          </Button>
        </div>
      </section>

      {/* Mapa Epidemiológico */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Monitor de Impacto en Salud Pública</h2>
            <p className="text-lg text-slate-300">Vigilancia epidemiológica en tiempo real respetando la privacidad (K-Anonymity).</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Map className="h-6 w-6 text-orange-400" />
                  Distribución Global de Patologías
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Datos agregados y anonimizados con k-anonymity (k=5)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-800 rounded-lg p-8 border-2 border-slate-700 min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <Map className="h-32 w-32 text-slate-600 mx-auto mb-6" />
                    <p className="text-slate-400 mb-4">Mapa interactivo de distribución de patologías</p>
                    
                    <div className="flex items-center justify-center gap-8 mt-8">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-red-600"></div>
                        <span className="text-sm text-slate-300">Alta incidencia de Caries</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-blue-600"></div>
                        <span className="text-sm text-slate-300">Alta Fluorosis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-green-600"></div>
                        <span className="text-sm text-slate-300">Baja prevalencia</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <Network className="h-6 w-6 text-orange-400 mb-2" />
                    <p className="text-2xl font-bold text-white">240</p>
                    <p className="text-sm text-slate-400">Nodos Federados</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <Database className="h-6 w-6 text-orange-400 mb-2" />
                    <p className="text-2xl font-bold text-white">2.4M</p>
                    <p className="text-sm text-slate-400">Registros Anonimizados</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <Shield className="h-6 w-6 text-orange-400 mb-2" />
                    <p className="text-2xl font-bold text-white">100%</p>
                    <p className="text-sm text-slate-400">GDPR Compliant</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketplace de Algoritmos */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Catálogo de Innovación Abierta</h2>
            <p className="text-lg text-slate-300">Despliega algoritmos de vanguardia en miles de nodos clínicos simultáneamente.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-1 gap-6">
              {algorithms.map((algo, index) => (
                <Card key={index} className="bg-slate-900 border-slate-700 hover:border-orange-600 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-white flex items-center gap-2 mb-2">
                          <Brain className="h-5 w-5 text-orange-400" />
                          {algo.name}
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                          {algo.description}
                        </CardDescription>
                      </div>
                      <Badge className="bg-orange-600 text-white">
                        Precisión: {algo.accuracy}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-400">Entrenando en {algo.nodes} nodos</span>
                          <span className="text-orange-400 font-medium">45% completado</span>
                        </div>
                        <Progress value={45} className="h-2 bg-slate-700" />
                      </div>
                      
                      <div className="flex gap-3">
                        <Button 
                          className="flex-1 bg-orange-600 hover:bg-orange-700"
                          onClick={() => navigate('/research')}
                        >
                          Desplegar en Nodos
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-slate-600 text-slate-300 hover:bg-slate-800"
                        >
                          Ver Detalles
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPortal;
