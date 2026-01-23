import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NavigationControls } from "@/components/ui/NavigationControls";
import { GlobalFooter } from "@/components/ui/GlobalFooter";
import { 
  Stethoscope, 
  AlertTriangle, 
  Brain, 
  FileSearch, 
  Pill, 
  Video,
  Activity,
  PawPrint
} from 'lucide-react';

const DoctorPortal = () => {
  const navigate = useNavigate();
  const [encounters, setEncounters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('clinical_encounters')
        .select('*, patients(full_name)')
        .order('encounter_date', { ascending: false })
        .limit(5);
      
      setEncounters(data || []);
      setLoading(false);
    };

    fetchData();
  }, []);

  const getDataSourceColor = (source: string) => {
    return source.includes('hospital') || source.includes('cardio') 
      ? 'bg-red-100 text-red-700 border-red-300' 
      : 'bg-blue-100 text-blue-700 border-blue-300';
  };

  const features = [
    {
      icon: FileSearch,
      title: 'Directorio Europeo de Mascotas',
      description: 'Acceso global a historiales federados por microchip.'
    },
    {
      icon: Pill,
      title: 'Prescripción Veterinaria Segura',
      description: 'Validez legal instantánea en cualquier farmacia veterinaria adherida.'
    },
    {
      icon: Video,
      title: 'Triage Remoto Asistido',
      description: 'Filtra urgencias automáticamente antes de la consulta presencial.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 pt-6">
        <NavigationControls />
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
            <Stethoscope className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Panel de Control Clínico Veterinario Unificado
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Diagnóstico, historial hospitalario y alertas de riesgo en una sola vista.
            Toma decisiones médicas con el contexto completo del paciente animal.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/clinical')}
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto"
          >
            Iniciar Consulta Inteligente
          </Button>
        </div>
      </section>

      {/* Interoperabilidad en Acción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trayectoria de Salud del Paciente</h2>
            <p className="text-lg text-slate-600">Visión 360° integrando datos de especialistas, hospitales veterinarios y laboratorios en tiempo real.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-blue-600" />
                  Historial Clínico Integrado
                </CardTitle>
                <CardDescription>Visualiza el historial completo del paciente</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="text-center py-8 text-slate-500">Cargando encuentros...</div>
                ) : encounters.length === 0 ? (
                  <div className="text-center py-8 text-slate-500">No hay encuentros registrados</div>
                ) : (
                  <div className="space-y-4">
                    {encounters.map((encounter, index) => (
                      <div key={encounter.id} className="relative pl-8 pb-4">
                        {index !== encounters.length - 1 && (
                          <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-slate-200" />
                        )}
                        <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-600" />
                        
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={`${getDataSourceColor(encounter.data_source)} border`}>
                                {encounter.data_source}
                              </Badge>
                              <span className="text-sm text-slate-500">
                                {new Date(encounter.encounter_date).toLocaleDateString('es-ES')}
                              </span>
                            </div>
                            <p className="text-sm font-medium flex items-center gap-2">
                              <PawPrint className="w-4 h-4 text-slate-400" />
                              {encounter.patients?.full_name || 'Desconocido'}
                            </p>
                            {encounter.risk_level && (
                              <div className="flex items-center gap-2 mt-2">
                                <AlertTriangle className="h-4 w-4 text-red-600" />
                                <span className="text-sm text-red-600 font-medium">
                                  Nivel de Riesgo: {encounter.risk_level}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* AI Assistant Demo */}
            <Card className="mt-6 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  Copiloto de Diagnóstico AI Veterinario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-6 border border-purple-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Brain className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">Segunda opinión automática generada.</h4>
                      <p className="text-slate-600 mb-3">
                        <strong className="text-purple-600">Prioridad Alta: Posible displasia detectada</strong>
                      </p>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                        Confianza: 98%
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Grid de Funcionalidades */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Funcionalidades Clave</h2>
            <p className="text-lg text-slate-600">Herramientas profesionales para la práctica veterinaria moderna</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow border-slate-200"
                >
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 mx-auto">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default DoctorPortal;
