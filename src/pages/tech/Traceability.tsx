import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Link as LinkIcon, 
  ArrowLeft,
  Search,
  CheckCircle2,
  Factory,
  Truck,
  Building,
  Copy
} from 'lucide-react';
import { toast } from 'sonner';

const Traceability = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('LOT-9988-X');
  const [showTimeline, setShowTimeline] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setShowTimeline(false);
    
    setTimeout(() => {
      setIsSearching(false);
      setShowTimeline(true);
    }, 1500);
  };

  const copyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
    toast.success('Hash copiado al portapapeles');
  };

  const timelineSteps = [
    {
      icon: Factory,
      title: 'Fabricación Microchip',
      location: 'Fábrica - Heidelberg, Alemania',
      date: '10 Oct 2024, 14:30',
      hash: '0x8a7f4b3c2d1e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0',
      details: 'ISO 11784/11785 • Frecuencia: 134.2 kHz • Lote: MC9988',
      color: 'text-purple-400',
      borderColor: 'border-purple-600',
      bgColor: 'bg-purple-900/20'
    },
    {
      icon: Truck,
      title: 'Recibido en Clínica',
      location: 'Distribución - Madrid, España',
      date: '12 Oct 2024, 09:15',
      hash: '0x9b2c8e7a4f3d1c0b9a8e7f6d5c4b3a2e1d0c9b8a7f6e5d4c3b2',
      details: 'Temperatura transporte: 18°C • Lote: MCISO-993821',
      color: 'text-blue-400',
      borderColor: 'border-blue-600',
      bgColor: 'bg-blue-900/20'
    },
    {
      icon: Building,
      title: 'Implantado en Paciente',
      location: 'Clínica Veterinaria Norte - Madrid',
      date: new Date().toLocaleString('es-ES', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      hash: '0x1c4f7a2b5e8d3c6a9f0b4e7d1c5a8b2e6f9a3d7c0e4b8a1d5f',
      details: 'Veterinario: Dra. García • Paciente: Max • Especie: Canino',
      color: 'text-green-400',
      borderColor: 'border-green-600',
      bgColor: 'bg-green-900/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-900 to-slate-900 text-white">
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-900/50 mb-6">
            <LinkIcon className="h-10 w-10 text-orange-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
            Trazabilidad Inmutable
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Verificación criptográfica de vacunas, microchips y medicamentos desde la fábrica hasta la mascota
          </p>
          <Badge className="bg-orange-600 text-white text-sm px-4 py-2">
            Blockchain + Digital Product Passport (DPP)
          </Badge>
        </div>
      </section>

      {/* DEMO: Rastreador de Implante */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Demo Interactiva: Rastreador de Producto Veterinario</h2>
            <p className="text-lg text-slate-300">
              Verifica la autenticidad y trazabilidad de vacunas, microchips y medicamentos
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Campo de Búsqueda */}
            <Card className="bg-slate-900 border-slate-700 mb-8">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Ingresar UDI o Número de Lote"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      className="bg-slate-800 border-slate-600 text-white text-lg h-14"
                    />
                  </div>
                  <Button 
                    onClick={handleSearch}
                    disabled={isSearching || !searchValue}
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 px-8"
                  >
                    {isSearching ? (
                      'Verificando...'
                    ) : (
                      <>
                        <Search className="mr-2 h-5 w-5" />
                        Verificar en Ledger
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Ejemplo: LOT-9988-X, UDI-0123456789012345
                </p>
              </CardContent>
            </Card>

            {/* Timeline Vertical */}
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
                            Paso {index + 1}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="bg-slate-950 rounded-lg p-4">
                            <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">
                              Transaction Hash
                            </p>
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-sm font-mono text-green-400 break-all">
                                {step.hash}
                              </p>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyHash(step.hash)}
                                className="flex-shrink-0"
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="bg-slate-800 rounded-lg p-3">
                            <p className="text-sm text-slate-300">
                              {step.details}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}

                {/* Validación Final */}
                <Card className="bg-gradient-to-br from-green-900/50 to-slate-950 border-4 border-green-600">
                  <CardContent className="p-8 text-center">
                    <CheckCircle2 className="h-24 w-24 text-green-400 mx-auto mb-4 animate-scale-in" />
                    <h3 className="text-3xl font-bold text-white mb-2">
                      MATERIAL AUTÉNTICO VERIFICADO
                    </h3>
                    <p className="text-lg text-green-300 mb-4">
                      Cadena de custodia completa y verificada en blockchain
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <p className="text-2xl font-bold text-white">3</p>
                        <p className="text-sm text-slate-400">Verificaciones</p>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <p className="text-2xl font-bold text-white">100%</p>
                        <p className="text-sm text-slate-400">Integridad</p>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4">
                        <p className="text-2xl font-bold text-white">0</p>
                        <p className="text-sm text-slate-400">Alteraciones</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {!showTimeline && !isSearching && (
              <div className="text-center py-12">
                <LinkIcon className="h-16 w-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400">
                  Introduce un código UDI o número de lote para verificar la trazabilidad
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  Datos Sintéticos de Ejemplo
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Códigos UDI y números de lote disponibles para pruebas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-sm text-slate-400 mb-2">Microchip ISO</p>
                    <p className="text-lg font-mono text-white">LOT-9988-X</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-sm text-slate-400 mb-2">Vacuna Antirrábica</p>
                    <p className="text-lg font-mono text-white">VAC-RAB-2024-001</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-sm text-slate-400 mb-2">Antiparasitario</p>
                    <p className="text-lg font-mono text-white">LOT-7745-AP</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-sm text-slate-400 mb-2">Vacuna Triple Felina</p>
                    <p className="text-lg font-mono text-white">VAC-FEL-2024-003</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Traceability;
