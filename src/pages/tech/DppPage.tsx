import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Package, Factory, Flame, Activity, CheckCircle2 } from 'lucide-react';

const DppPage = () => {
  const navigate = useNavigate();
  const [showTimeline, setShowTimeline] = useState(false);

  const timelineSteps = [
    {
      icon: Package,
      title: 'Origen: Polvo de Zirconia',
      location: 'Doceram GmbH, Alemania',
      date: '05 Oct 2024, 08:00',
      details: 'Lote: ZrO2-A2-9988 | Pureza: 99.8% | Certificado ISO 13485',
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20',
      borderColor: 'border-purple-600'
    },
    {
      icon: Flame,
      title: 'Sinterización',
      location: 'Lab Tech Manufacturing Hub',
      date: '08 Oct 2024, 14:30',
      details: 'Temperatura: 1530°C | Duración: 8h | Presión: 150 MPa',
      color: 'text-orange-400',
      bgColor: 'bg-orange-900/20',
      borderColor: 'border-orange-600'
    },
    {
      icon: Activity,
      title: 'Control de Calidad',
      location: 'Lab Tech QA',
      date: '09 Oct 2024, 10:15',
      details: 'Densidad: 6.05 g/cm³ | Resistencia: 1200 MPa | Aprobado ✓',
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
      borderColor: 'border-blue-600'
    },
    {
      icon: Factory,
      title: 'Implantación en Paciente',
      location: 'Clínica Dental Norte',
      date: new Date().toLocaleString('es-ES', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      details: 'Dr. Dent | Paciente: Ana García | Diente: 36 (Molar inferior)',
      color: 'text-green-400',
      bgColor: 'bg-green-900/20',
      borderColor: 'border-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-slate-900 text-white">
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-900/50 mb-6">
            <Package className="h-10 w-10 text-amber-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
            Pasaporte Digital de Producto (DPP)
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Cumplimiento normativo MDR y trazabilidad blockchain desde la materia prima hasta la boca
          </p>
          <Badge className="bg-amber-600 text-white text-sm px-4 py-2">
            EU MDR 2017/745 + Blockchain Verification
          </Badge>
        </div>
      </section>

      {/* Timeline Explorer */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Rastreador de Implante</h2>
            <p className="text-lg text-slate-300">
              Seguimiento completo del ciclo de vida del producto
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-900 border-slate-700 mb-8">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white">Corona Zirconia A2</h3>
                  <p className="text-lg text-slate-400">Lote: #9988</p>
                  <Button 
                    onClick={() => setShowTimeline(!showTimeline)}
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    {showTimeline ? 'Ocultar Timeline' : 'Ver Trazabilidad Completa'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {showTimeline && (
              <div className="space-y-6 animate-fade-in">
                {timelineSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <Card 
                      key={index}
                      className={`bg-slate-900 border-2 ${step.borderColor} ${step.bgColor}`}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center border-2 ${step.borderColor}`}>
                              <Icon className={`h-6 w-6 ${step.color}`} />
                            </div>
                            <div>
                              <CardTitle className="text-white text-xl mb-1">
                                {step.title}
                              </CardTitle>
                              <CardDescription className="text-slate-300">
                                {step.location}
                              </CardDescription>
                              <p className="text-sm text-slate-400 mt-1">
                                {step.date}
                              </p>
                            </div>
                          </div>
                          <Badge className={`${step.bgColor} ${step.color} border ${step.borderColor}`}>
                            Hito {index + 1}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-slate-950 rounded-lg p-4">
                          <p className="text-sm text-slate-300 mb-3">
                            {step.details}
                          </p>
                          {index === 1 && (
                            <div className="mt-4 p-3 bg-slate-900 rounded">
                              <p className="text-xs text-slate-400 mb-2">Curva de Temperatura IoT</p>
                              <div className="flex items-end gap-1 h-16">
                                {[20, 35, 50, 75, 90, 100, 100, 100, 95, 80, 60, 40].map((height, i) => (
                                  <div 
                                    key={i}
                                    className="flex-1 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t"
                                    style={{ height: `${height}%` }}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}

                {/* Blockchain Verification */}
                <Card className="bg-gradient-to-br from-green-900/50 to-slate-950 border-4 border-green-600">
                  <CardContent className="p-8 text-center">
                    <CheckCircle2 className="h-24 w-24 text-green-400 mx-auto mb-4 animate-scale-in" />
                    <h3 className="text-3xl font-bold text-white mb-2">
                      BLOCKCHAIN VERIFIED
                    </h3>
                    <p className="text-lg text-green-300 mb-6">
                      Cadena de custodia verificada e inmutable
                    </p>
                    <div className="bg-slate-950 rounded-lg p-4">
                      <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">
                        Transaction Hash
                      </p>
                      <p className="text-sm font-mono text-green-400 break-all">
                        0x7f83b5a2c1d9e4f6a8b7c5d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Cumplimiento y Seguridad MDR</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Trazabilidad Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Registro inmutable de cada paso desde materia prima hasta implantación
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Datos IoT Automáticos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Hornos y autoclaves registran datos directamente en el pasaporte digital
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Auditoría Instantánea</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Cumplimiento MDR verificable en segundos para inspecciones regulatorias
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

export default DppPage;
