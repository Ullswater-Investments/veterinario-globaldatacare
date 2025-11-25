import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Network, 
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code,
  RefreshCw
} from 'lucide-react';

const Interoperability = () => {
  const navigate = useNavigate();
  const [isConverting, setIsConverting] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const legacyData = `PACIENTE: Juan García
TRATAMIENTO: Endodoncia
DIENTE: 36
FECHA: 2024-01-15
DENTISTA: Dr. Martínez`;

  const fhirOutput = `{
  "resourceType": "Procedure",
  "id": "endo-juan-2024",
  "status": "completed",
  "code": {
    "coding": [{
      "system": "http://cdt.ada.org",
      "code": "D3330",
      "display": "Endodontic therapy, molar"
    }],
    "text": "Endodoncia"
  },
  "subject": {
    "reference": "Patient/juan-garcia",
    "display": "Juan García"
  },
  "performedDateTime": "2024-01-15",
  "performer": [{
    "actor": {
      "reference": "Practitioner/dr-martinez",
      "display": "Dr. Martínez"
    }
  }],
  "bodySite": [{
    "coding": [{
      "system": "http://fdi.org",
      "code": "36",
      "display": "Lower left first molar"
    }]
  }],
  "note": [{
    "text": "Converted from legacy PMS format"
  }]
}`;

  const handleConvert = () => {
    setIsConverting(true);
    setShowOutput(false);
    
    setTimeout(() => {
      setIsConverting(false);
      setShowOutput(true);
    }, 1500);
  };

  const advantages = [
    {
      icon: Code,
      title: 'Semántica SNODENT',
      description: 'Códigos universales que cualquier sistema entiende'
    },
    {
      icon: Network,
      title: 'Conexión Hospitalaria',
      description: 'Interoperabilidad real con sistemas médicos generales'
    },
    {
      icon: CheckCircle2,
      title: 'Validación Automática',
      description: 'Estructura validada contra el estándar FHIR R4'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/tech')}
          className="mb-4 text-white hover:bg-slate-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Arquitectura
        </Button>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-900/50 mb-6">
            <Network className="h-10 w-10 text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            El Motor HL7 FHIR
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Cómo OralSpace-X traduce la odontología al lenguaje universal de la salud
          </p>
          <Badge className="bg-blue-600 text-white text-sm px-4 py-2">
            Estándar HL7 FHIR R4 Certificado
          </Badge>
        </div>
      </section>

      {/* DEMO: El Conversor FHIR */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Demo Interactiva: El Conversor FHIR</h2>
            <p className="text-lg text-slate-300">
              Transforma datos legacy en recursos FHIR estandarizados
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Columna Izquierda - Legacy */}
              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Code className="h-5 w-5 text-red-400" />
                    Formato Legacy (PMS Propietario)
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Datos heterogéneos sin estándar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-950 rounded-lg p-4 border border-red-600">
                    <pre className="text-red-300 text-sm font-mono whitespace-pre-wrap">
                      {legacyData}
                    </pre>
                  </div>
                  <div className="mt-4">
                    <Badge className="bg-red-600 text-white">
                      No Interoperable
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Columna Derecha - FHIR */}
              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Network className="h-5 w-5 text-green-400" />
                    Recurso FHIR R4 (JSON)
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Estándar internacional validado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!showOutput ? (
                    <div className="bg-slate-950 rounded-lg p-4 border border-slate-600 min-h-[400px] flex items-center justify-center">
                      <p className="text-slate-500 text-center">
                        {isConverting ? (
                          <span className="flex items-center gap-2">
                            <RefreshCw className="h-5 w-5 animate-spin" />
                            Transformando datos...
                          </span>
                        ) : (
                          'Haz clic en "Transformar Datos" para ver el resultado'
                        )}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="bg-slate-950 rounded-lg p-4 border border-green-600 max-h-[400px] overflow-y-auto animate-fade-in">
                        <pre className="text-green-300 text-sm font-mono whitespace-pre-wrap">
                          {fhirOutput}
                        </pre>
                      </div>
                      <div className="mt-4">
                        <Badge className="bg-green-600 text-white">
                          ✓ Validado FHIR R4
                        </Badge>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Botón de Conversión */}
            <div className="flex justify-center mt-8">
              <Button 
                size="lg"
                onClick={handleConvert}
                disabled={isConverting}
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto"
              >
                {isConverting ? (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                    Transformando...
                  </>
                ) : (
                  <>
                    Transformar Datos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ventajas del Estándar FHIR</h2>
            <p className="text-lg text-slate-300">Por qué la interoperabilidad es crítica</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card 
                  key={index}
                  className="bg-slate-900 border-slate-700 hover:border-blue-600 transition-colors"
                >
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-900/50 mb-4">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400 text-base">
                      {advantage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interoperability;
