import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, FileText, Activity } from 'lucide-react';

const FhirPage = () => {
  const navigate = useNavigate();
  const [showFhir, setShowFhir] = useState(false);

  const fhirBundle = {
    resourceType: "Bundle",
    entry: [
      {
        resource: {
          resourceType: "Condition",
          code: {
            coding: [{ system: "SNOMED-VET", code: "860574003", display: "Dermatitis Atópica Canina" }]
          }
        }
      },
      {
        resource: {
          resourceType: "Flag",
          status: "active",
          code: { text: "Riesgo Alérgico Severo" }
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-slate-900 text-white">
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-900/50 mb-6">
            <Activity className="h-10 w-10 text-emerald-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
            Interoperabilidad Semántica (HL7 FHIR)
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Unificación automática de datos dispersos (Hospital Veterinario + Clínica) en un solo lenguaje estándar
          </p>
          <Badge className="bg-emerald-600 text-white text-sm px-4 py-2">
            HL7 FHIR R4 + SNOMED-VET Ontology
          </Badge>
        </div>
      </section>

      {/* FHIR Inspector Demo */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">El Traductor Universal en Acción</h2>
            <p className="text-lg text-slate-300">
              Observa cómo datos heterogéneos se transforman en recursos FHIR interoperables
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Fuentes Dispersas */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center mb-4">Fuentes Dispersas</h3>
                
                <Card className="bg-orange-900/20 border-orange-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <FileText className="h-5 w-5 text-orange-400" />
                      Hospital de Referencia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-300">
                      PDF Cardiología: "Soplo Cardíaco Grado III"
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                      Formato: Texto plano no estructurado
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-emerald-900/20 border-emerald-600">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <FileText className="h-5 w-5 text-emerald-400" />
                      Clínica Veterinaria
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-300">
                      Software VetPMS: "Dermatitis G2"
                    </p>
                    <p className="text-xs text-slate-400 mt-2">
                      Formato: Código propietario
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Normalización */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-6">
                    <p className="text-white font-semibold mb-2">Normalización Semántica</p>
                    <ArrowRight className="h-8 w-8 text-white mx-auto animate-pulse" />
                  </div>
                  <Button 
                    onClick={() => setShowFhir(!showFhir)}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    {showFhir ? 'Ocultar' : 'Transformar a FHIR'}
                  </Button>
                </div>
              </div>

              {/* Resultado FHIR */}
              <div>
                <h3 className="text-xl font-semibold text-center mb-4">Bundle FHIR R4</h3>
                {!showFhir ? (
                  <Card className="bg-slate-900 border-slate-700 h-[400px] flex items-center justify-center">
                    <p className="text-slate-500">
                      Haz clic en "Transformar" para ver el resultado
                    </p>
                  </Card>
                ) : (
                  <Card className="bg-slate-950 border-green-600 animate-fade-in">
                    <CardContent className="p-4">
                      <pre className="text-xs text-green-400 overflow-auto max-h-[400px] font-mono">
                        {JSON.stringify(fhirBundle, null, 2)}
                      </pre>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Ventajas de la Interoperabilidad FHIR</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Semántica SNOMED-VET</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Códigos estandarizados para procedimientos veterinarios reconocidos internacionalmente
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Conexión One Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Integración directa con hospitales de referencia y centros de zoonosis
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Validación Automática</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Verificación de integridad y completitud de datos según estándares FHIR
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

export default FhirPage;
