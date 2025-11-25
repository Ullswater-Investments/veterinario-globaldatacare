import BusinessCaseLayout from '@/components/business/BusinessCaseLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { recruitmentFunnel } from '@/lib/mockData';
import { Users, Filter, CheckCircle2, Smartphone, Shield, TrendingDown } from 'lucide-react';

const ClinicalTrials = () => {
  const successRate = ((recruitmentFunnel[recruitmentFunnel.length - 1].count / recruitmentFunnel[0].count) * 100).toFixed(3);
  const feePerPatient = 1500;

  return (
    <BusinessCaseLayout
      caseNumber={13}
      title="Reclutamiento para Ensayos Clínicos"
      subtitle="El Tinder de los Ensayos - Matching inteligente con consentimiento explícito"
      keyMetric={{
        label: 'Revenue por Cohorte',
        value: `${recruitmentFunnel[recruitmentFunnel.length - 1].value?.toLocaleString()}€`,
        trend: `${recruitmentFunnel[recruitmentFunnel.length - 1].count} pacientes reclutados`
      }}
    >
      <div className="space-y-8">
        {/* Privacy Badge */}
        <div className="fixed top-24 right-6 z-50">
          <Badge className="bg-green-900 text-green-200 border-2 border-green-600 px-4 py-2 shadow-lg">
            <Shield className="h-4 w-4 mr-2" />
            Privacy Preserved: Opt-in & Consent-First
          </Badge>
        </div>

        {/* Recruitment Funnel */}
        <Card className="border-2 border-purple-600 bg-gradient-to-br from-slate-950 to-purple-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <Filter className="h-5 w-5" />
              Embudo de Filtrado Inteligente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recruitmentFunnel.map((stage, index) => {
                const percentage = (stage.count / recruitmentFunnel[0].count) * 100;
                const isLast = index === recruitmentFunnel.length - 1;
                
                return (
                  <div key={index} className="relative">
                    <div className="flex items-center gap-4">
                      <div 
                        className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                          isLast 
                            ? 'bg-green-600 text-white animate-pulse' 
                            : 'bg-purple-900 text-purple-200'
                        }`}
                      >
                        {index + 1}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-purple-100">{stage.stage}</h3>
                          <Badge className={`${
                            isLast ? 'bg-green-900 text-green-200' : 'bg-purple-900 text-purple-200'
                          }`}>
                            {stage.count.toLocaleString()} pacientes
                          </Badge>
                        </div>
                        
                        <div className="relative h-3 bg-slate-900 rounded-full overflow-hidden border border-purple-700">
                          <div 
                            className={`h-full transition-all ${
                              isLast ? 'bg-gradient-to-r from-green-600 to-green-400' : 'bg-gradient-to-r from-purple-600 to-purple-400'
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-slate-400">
                            {percentage.toFixed(2)}% del total
                          </span>
                          {stage.value && (
                            <span className="text-sm font-bold text-green-400">
                              {stage.value.toLocaleString()}€ total
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {index < recruitmentFunnel.length - 1 && (
                      <div className="ml-8 h-8 w-0.5 bg-purple-700 my-2">
                        <TrendingDown className="h-4 w-4 text-purple-500 -ml-1.5 mt-2" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Success Rate */}
            <div className="mt-6 p-6 bg-green-950 border-2 border-green-600 rounded-lg">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-400 mb-2">{successRate}%</div>
                <div className="text-green-200">Tasa de Conversión Final</div>
                <div className="text-sm text-slate-400 mt-2">
                  De 150.000 pacientes iniciales a 50 candidatos perfectos
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Match Card */}
        <Card className="border-2 border-cyan-600 bg-gradient-to-br from-slate-950 to-cyan-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-cyan-400">
              <Users className="h-5 w-5" />
              Candidato Encontrado (Ejemplo)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 border-2 border-cyan-600 rounded-lg bg-slate-900">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Badge variant="outline" className="mb-2 bg-cyan-950 border-cyan-700 text-cyan-300 font-mono">
                    ID Anonimizado: #8821
                  </Badge>
                  <h3 className="text-xl font-semibold text-cyan-100 mb-2">Candidato Perfecto Identificado</h3>
                  <p className="text-sm text-slate-400">
                    Paciente cumple todos los criterios de inclusión
                  </p>
                </div>
                <Badge className="bg-green-900 text-green-200 text-lg px-4 py-2">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  MATCH 100%
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-cyan-200 mb-3">Criterios Cumplidos:</h4>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-slate-300">Mujer, 52 años</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-slate-300">Implante Zirconia (24 meses)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-slate-300">Periimplantitis confirmada</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-slate-300">No fumador</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-slate-300">Acceso a clínica participante</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-cyan-200 mb-3">Datos Clínicos:</h4>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Profundidad sondeo:</span>
                      <span className="text-cyan-300 font-semibold">6mm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Pérdida ósea:</span>
                      <span className="text-cyan-300 font-semibold">35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Sangrado al sondeo:</span>
                      <span className="text-cyan-300 font-semibold">Positivo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Ubicación implante:</span>
                      <span className="text-cyan-300 font-semibold">Molar inferior</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-purple-950 border border-purple-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-purple-200">Fee de reclutamiento exitoso:</div>
                  <div className="text-2xl font-bold text-purple-400">{feePerPatient.toLocaleString()}€</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Notification */}
        <Card className="border-2 border-orange-600 bg-gradient-to-br from-slate-950 to-orange-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-400">
              <Smartphone className="h-5 w-5" />
              Notificación Enviada al Wallet del Paciente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-md mx-auto">
              <div className="bg-slate-900 rounded-lg border-2 border-orange-600 overflow-hidden shadow-2xl">
                {/* Phone Header */}
                <div className="bg-slate-800 p-4 flex items-center justify-between">
                  <div className="text-xs text-slate-400">12:34 PM</div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                    <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                    <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                  </div>
                </div>

                {/* Notification */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-orange-900 rounded-full">
                      <Users className="h-6 w-6 text-orange-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-orange-100 mb-1">OralSpace-X Health</h4>
                      <p className="text-sm text-slate-400">Hace 5 minutos</p>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-orange-100 mb-3">Nueva Oportunidad de Tratamiento</h3>
                    <p className="text-sm text-slate-300 mb-4">
                      Hemos identificado que eres candidato ideal para un ensayo clínico de 
                      tratamiento avanzado de periimplantitis.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-slate-300">Tratamiento completamente gratuito</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-slate-300">Seguimiento especializado incluido</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-slate-300">Compensación por desplazamientos</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Me Interesa - Ver Más Información
                  </Button>
                </div>
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
                <h3 className="font-semibold mb-2 text-purple-400">💰 Success Fee por Paciente</h3>
                <p className="text-sm text-slate-400">
                  1.500€ por cada paciente reclutado exitosamente. Pharma paga solo por pacientes 
                  que completan screening y firman consentimiento informado.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-cyan-400">🎯 Targeting Ultra-Preciso</h3>
                <p className="text-sm text-slate-400">
                  Búsqueda federada en 150k historias clínicas sin exponer datos individuales. 
                  Algoritmo aplica criterios de inclusión/exclusión automáticamente.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-400">⚡ Velocidad vs. Tradicional</h3>
                <p className="text-sm text-slate-400">
                  Reclutamiento tradicional: 18-24 meses. Con OralSpace-X: 2-4 semanas. 
                  Reduce time-to-market de nuevos tratamientos en 80%.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-orange-400">🔒 Consentimiento Ético</h3>
                <p className="text-sm text-slate-400">
                  Paciente recibe notificación en wallet y decide voluntariamente. 
                  Ningún dato se comparte sin opt-in explícito. GDPR-compliant.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </BusinessCaseLayout>
  );
};

export default ClinicalTrials;
