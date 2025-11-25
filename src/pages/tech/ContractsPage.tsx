import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, FileText, CheckCircle2, Clock, Euro } from 'lucide-react';
import { toast } from 'sonner';

const ContractsPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [processing, setProcessing] = useState(false);

  const executeContract = () => {
    setProcessing(true);
    setTimeout(() => {
      setStep(1);
      setProcessing(false);
    }, 500);
    setTimeout(() => setStep(2), 1000);
    setTimeout(() => setStep(3), 1500);
    setTimeout(() => {
      setStep(4);
      toast.success('Pago ejecutado automáticamente');
    }, 2400);
  };

  const validationSteps = [
    {
      title: '¿Código Tratamiento válido?',
      check: 'Endodoncia D3330',
      icon: FileText,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-600'
    },
    {
      title: '¿Existe Radiografía Post-op?',
      check: 'DICOM encontrado en Nodo Clínico',
      icon: FileText,
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20',
      borderColor: 'border-purple-600'
    },
    {
      title: '¿Póliza Activa?',
      check: 'Cobertura 80%',
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-900/20',
      borderColor: 'border-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 to-slate-900 text-white">
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-900/50 mb-6">
            <FileText className="h-10 w-10 text-cyan-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Smart Contracts & Automatización
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Ejecución automática de pagos de seguros basada en evidencia clínica irrefutable
          </p>
          <Badge className="bg-cyan-600 text-white text-sm px-4 py-2">
            Ethereum Smart Contracts + IPFS Evidence
          </Badge>
        </div>
      </section>

      {/* Claim Validator */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Validador de Reclamaciones</h2>
            <p className="text-lg text-slate-300">
              Verificación automática y pago instantáneo basado en smart contracts
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Claim Header */}
            <Card className="bg-slate-900 border-slate-700 mb-8">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-2xl">Reclamación #CLM-2024-889</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Dr. Dent → Seguro Sanitas Dental
                    </CardDescription>
                  </div>
                  <Badge className="bg-yellow-600 text-white">
                    Procesando
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Paciente</p>
                    <p className="text-white font-semibold">Ana García</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Tratamiento</p>
                    <p className="text-white font-semibold">Endodoncia Molar</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Fecha</p>
                    <p className="text-white font-semibold">{new Date().toLocaleDateString('es-ES')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Monto</p>
                    <p className="text-white font-semibold">450.00 EUR</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Validation Steps */}
            <div className="space-y-4 mb-8">
              {validationSteps.map((validation, index) => {
                const Icon = validation.icon;
                const isActive = step > index;
                
                return (
                  <Card 
                    key={index}
                    className={`transition-all duration-300 ${
                      isActive 
                        ? `bg-slate-900 border-2 ${validation.borderColor} ${validation.bgColor}` 
                        : 'bg-slate-900 border-slate-700'
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full ${
                            isActive ? validation.bgColor : 'bg-slate-800'
                          } flex items-center justify-center border-2 ${
                            isActive ? validation.borderColor : 'border-slate-700'
                          }`}>
                            {isActive ? (
                              <CheckCircle2 className={`h-6 w-6 ${validation.color}`} />
                            ) : (
                              <Icon className="h-6 w-6 text-slate-500" />
                            )}
                          </div>
                          <div>
                            <p className="text-white font-semibold">{validation.title}</p>
                            {isActive && (
                              <p className={`text-sm ${validation.color} animate-fade-in`}>
                                ✓ {validation.check}
                              </p>
                            )}
                          </div>
                        </div>
                        {isActive && (
                          <Badge className={`${validation.bgColor} ${validation.color}`}>
                            Verificado
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Action Button */}
            {step === 0 && (
              <Button 
                onClick={executeContract}
                disabled={processing}
                size="lg"
                className="w-full bg-cyan-600 hover:bg-cyan-700"
              >
                {processing ? 'Validando...' : 'Ejecutar Smart Contract'}
              </Button>
            )}

            {/* Result */}
            {step === 4 && (
              <Card className="bg-gradient-to-br from-green-900/50 to-slate-950 border-4 border-green-600 animate-fade-in">
                <CardContent className="p-8 text-center">
                  <CheckCircle2 className="h-24 w-24 text-green-400 mx-auto mb-4 animate-scale-in" />
                  <h3 className="text-3xl font-bold text-white mb-2">
                    PAGO APROBADO AUTOMÁTICAMENTE
                  </h3>
                  <p className="text-lg text-green-300 mb-6">
                    Smart contract ejecutado exitosamente
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <Card className="bg-slate-950 border-green-600">
                      <CardContent className="p-4 text-center">
                        <Euro className="h-8 w-8 text-green-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-white">450.00 EUR</p>
                        <p className="text-sm text-slate-400">Transferido a Dr. Dent</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-slate-950 border-green-600">
                      <CardContent className="p-4 text-center">
                        <Clock className="h-8 w-8 text-green-400 mx-auto mb-2" />
                        <p className="text-2xl font-bold text-white">2.4s</p>
                        <p className="text-sm text-slate-400">Tiempo de Ejecución</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-6 bg-slate-950 rounded-lg p-4">
                    <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">
                      Transaction Hash
                    </p>
                    <p className="text-xs font-mono text-green-400 break-all">
                      0xa1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Ventajas de la Automatización</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Pago Instantáneo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Reducción del tiempo de pago de 30-45 días a menos de 3 segundos
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Detección de Fraude</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Validación automática de evidencia clínica contra patrones de fraude conocidos
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Reducción de Costes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Eliminación de procesos administrativos manuales y revisiones humanas innecesarias
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

export default ContractsPage;
