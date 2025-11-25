import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Shield, CheckCircle, QrCode, User } from 'lucide-react';
import { toast } from 'sonner';

const IdentityPage = () => {
  const navigate = useNavigate();
  const [drAccess, setDrAccess] = useState(true);
  const [researchAccess, setResearchAccess] = useState(true);
  const [marketingAccess, setMarketingAccess] = useState(false);
  const [showProof, setShowProof] = useState(false);

  const generateProof = () => {
    setShowProof(true);
    toast.success('Prueba de acceso generada');
    setTimeout(() => setShowProof(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-slate-900 text-white">
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-900/50 mb-6">
            <Shield className="h-10 w-10 text-green-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            Identidad Soberana (SSI)
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            El paciente es el único dueño de sus datos mediante DIDs y Credenciales Verificables
          </p>
          <Badge className="bg-green-600 text-white text-sm px-4 py-2">
            W3C DID + Verifiable Credentials
          </Badge>
        </div>
      </section>

      {/* Wallet Simulator */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Wallet Digital del Paciente</h2>
            <p className="text-lg text-slate-300">
              Control total sobre quién accede a tus datos de salud
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {/* Phone Frame */}
            <div className="bg-slate-900 rounded-[3rem] p-4 border-8 border-slate-700 shadow-2xl">
              <div className="bg-slate-800 rounded-[2rem] p-6 space-y-6">
                
                {/* Header */}
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Ana Patient Wallet</h3>
                  <div className="bg-white p-4 rounded-lg inline-block">
                    <QrCode className="h-24 w-24 text-slate-900" />
                  </div>
                  <p className="text-xs text-slate-400">did:web:oralspace-x.eu:patients:ana</p>
                </div>

                {/* Credenciales */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-300">Mis Credenciales</h4>
                  
                  <Card className="bg-slate-950 border-green-600">
                    <CardContent className="p-4 flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">Identidad Gubernamental</p>
                        <p className="text-xs text-slate-400">Verificada ✓</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-950 border-blue-600">
                    <CardContent className="p-4 flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">Seguro Dental Sanitas</p>
                        <p className="text-xs text-slate-400">Activo ✓</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Gestor de Accesos */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-300">Gestión de Accesos</h4>
                  
                  <Card className="bg-slate-950 border-slate-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-white">Dr. Dent</p>
                          <p className="text-xs text-slate-400">Acceso clínico</p>
                        </div>
                        <Switch 
                          checked={drAccess}
                          onCheckedChange={setDrAccess}
                          className="data-[state=checked]:bg-green-600"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-950 border-slate-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-white">Investigación (Anónimo)</p>
                          <p className="text-xs text-slate-400">Datos agregados</p>
                        </div>
                        <Switch 
                          checked={researchAccess}
                          onCheckedChange={setResearchAccess}
                          className="data-[state=checked]:bg-blue-600"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-950 border-slate-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-white">Marketing</p>
                          <p className="text-xs text-slate-400">Comunicaciones</p>
                        </div>
                        <Switch 
                          checked={marketingAccess}
                          onCheckedChange={setMarketingAccess}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Action Button */}
                <Button 
                  onClick={generateProof}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Generar Prueba de Acceso
                </Button>

                {/* Proof Display */}
                {showProof && (
                  <Card className="bg-green-900/20 border-green-600 animate-fade-in">
                    <CardContent className="p-4">
                      <p className="text-xs text-slate-400 mb-2">Prueba Criptográfica (ZKP)</p>
                      <p className="text-xs font-mono text-green-400 break-all">
                        0x7a8f3b2c1d9e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a
                      </p>
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
            <h2 className="text-3xl font-bold text-center mb-12">Soberanía de Datos en la Práctica</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Login Biométrico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Acceso sin contraseñas mediante credenciales verificables y autenticación biométrica
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Revocación Instantánea</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Cancela permisos de acceso en un clic. Los cambios se aplican inmediatamente
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Portabilidad Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Tu historial te acompaña. Comparte datos con cualquier profesional autorizado
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

export default IdentityPage;
