import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Shield, 
  ArrowLeft,
  Lock,
  CheckCircle2,
  ArrowRight,
  FileText
} from 'lucide-react';

const Sovereignty = () => {
  const navigate = useNavigate();
  const [asset, setAsset] = useState('');
  const [consumer, setConsumer] = useState('');
  const [restriction, setRestriction] = useState('');
  const [showContract, setShowContract] = useState(false);

  const handleGenerateContract = () => {
    if (asset && consumer && restriction) {
      setShowContract(true);
    }
  };

  const contractId = 'urn:uuid:8839f4a2-31b5-4a77-9cf2-b3d8e1c6a890';

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-slate-900 text-white">
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-900/50 mb-6">
            <Shield className="h-10 w-10 text-green-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            Soberanía de Datos (IDS)
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Tus datos nunca viajan sin un contrato firmado criptográficamente
          </p>
          <Badge className="bg-green-600 text-white text-sm px-4 py-2">
            Eclipse Dataspace Components + ODRL
          </Badge>
        </div>
      </section>

      {/* DEMO: El Negociador de Contratos */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Demo Interactiva: El Negociador de Contratos</h2>
            <p className="text-lg text-slate-300">
              Constructor de Políticas ODRL para control granular de acceso
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Paso 1: Selectores */}
              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <FileText className="h-5 w-5 text-green-400" />
                    Paso 1: Definir Política de Acceso
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Configura las condiciones del contrato de datos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-white">Activo a Compartir</Label>
                    <Select value={asset} onValueChange={setAsset}>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                        <SelectValue placeholder="Seleccionar activo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="panoramic">Radiografía Veterinaria</SelectItem>
                        <SelectItem value="cbct">Ecografía Abdominal</SelectItem>
                        <SelectItem value="intraoral">Analíticas Laboratorio</SelectItem>
                        <SelectItem value="history">Historial Clínico</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Consumidor de Datos</Label>
                    <Select value={consumer} onValueChange={setConsumer}>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                        <SelectValue placeholder="Seleccionar consumidor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="university">Centro de Investigación Veterinaria</SelectItem>
                        <SelectItem value="hospital">Hospital Veterinario de Referencia</SelectItem>
                        <SelectItem value="insurance">Aseguradora de Mascotas</SelectItem>
                        <SelectItem value="specialist">Especialista Externo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-white">Restricción de Uso</Label>
                    <Select value={restriction} onValueChange={setRestriction}>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                        <SelectValue placeholder="Seleccionar restricción" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="view_only">Solo Visualización (No Guardar)</SelectItem>
                        <SelectItem value="30days">Acceso Temporal (30 días)</SelectItem>
                        <SelectItem value="academic">Solo Uso Académico</SelectItem>
                        <SelectItem value="anonymized">Solo Datos Anonimizados</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={handleGenerateContract}
                    disabled={!asset || !consumer || !restriction}
                    className="w-full bg-green-600 hover:bg-green-700 mt-4"
                  >
                    Generar Contrato
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Paso 2: Visualización del Contrato */}
              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Lock className="h-5 w-5 text-green-400" />
                    Paso 2: Contrato Digital Generado
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Certificado criptográfico de uso de datos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!showContract ? (
                    <div className="min-h-[400px] flex items-center justify-center">
                      <p className="text-slate-500 text-center">
                        Configura los parámetros y genera el contrato
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-fade-in">
                      <div className="bg-gradient-to-br from-green-900/50 to-slate-950 rounded-lg p-6 border-2 border-green-600">
                        <div className="flex items-center justify-between mb-4">
                          <CheckCircle2 className="h-12 w-12 text-green-400" />
                          <Badge className="bg-green-600 text-white">
                            FIRMADO Y VIGENTE ✓
                          </Badge>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                              Contract ID
                            </p>
                            <p className="text-sm font-mono text-green-400 break-all">
                              {contractId}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                                Asset
                              </p>
                              <p className="text-sm text-white">
                                {asset === 'panoramic' ? 'Radiografía Veterinaria' :
                                 asset === 'cbct' ? 'Ecografía Abdominal' :
                                 asset === 'intraoral' ? 'Analíticas Laboratorio' : 'Historial Clínico'}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                                Consumer
                              </p>
                              <p className="text-sm text-white">
                                {consumer === 'university' ? 'Centro Investigación' :
                                 consumer === 'hospital' ? 'Hospital Veterinario' :
                                 consumer === 'insurance' ? 'Aseguradora Mascotas' : 'Especialista'}
                              </p>
                            </div>
                          </div>

                          <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                              Policy (ODRL)
                            </p>
                            <p className="text-sm font-semibold text-green-400">
                              {restriction === 'view_only' ? 'USE BUT NO_SAVE' :
                               restriction === '30days' ? 'TEMPORAL_30D' :
                               restriction === 'academic' ? 'ACADEMIC_ONLY' : 'ANONYMIZED'}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                              Connector
                            </p>
                            <p className="text-sm text-white">
                              Eclipse Dataspace Connector (EDC)
                            </p>
                          </div>

                          <div className="pt-4 border-t border-slate-700">
                            <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">
                              Digital Signature
                            </p>
                            <div className="bg-slate-950 rounded p-2">
                              <p className="text-xs font-mono text-green-300 break-all">
                                0x7A8F...3B2C (ECDSA-SHA256)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-600 rounded-lg p-4">
                        <p className="text-sm text-blue-300">
                          <strong>🔒 Garantía:</strong> Este contrato es vinculante y se ejecuta 
                          automáticamente. El consumidor no puede acceder a los datos fuera de las 
                          condiciones establecidas.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Diagrama de Flujo */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Flujo de Intercambio Soberano</h2>
            <p className="text-lg text-slate-300">Arquitectura de confianza IDS / Gaia-X</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Card className="bg-blue-900/20 border-blue-600 flex-1">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Clínica Veterinaria (Provider)</h3>
                  <p className="text-sm text-slate-400">Posee los datos</p>
                </CardContent>
              </Card>

              <ArrowRight className="h-8 w-8 text-green-400 hidden md:block" />

              <Card className="bg-green-900/20 border-green-600 flex-1">
                <CardContent className="p-6 text-center">
                  <Lock className="h-12 w-12 text-green-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">EDC Connector</h3>
                  <p className="text-sm text-slate-400">Negocia contrato</p>
                </CardContent>
              </Card>

              <ArrowRight className="h-8 w-8 text-green-400 hidden md:block" />

              <Card className="bg-purple-900/20 border-purple-600 flex-1">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Hospital Vet. (Consumer)</h3>
                  <p className="text-sm text-slate-400">Recibe según contrato</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sovereignty;
