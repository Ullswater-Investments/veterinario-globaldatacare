import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Lock, 
  Unlock,
  ArrowLeft,
  Eye,
  Box
} from 'lucide-react';

const PatientPortal = () => {
  const navigate = useNavigate();
  
  const [accesses, setAccesses] = useState([
    { id: 1, name: 'Clínica Dental Norte', active: true },
    { id: 2, name: 'Hospital Central', active: true },
    { id: 3, name: 'Aseguradora SurePay', active: false }
  ]);

  const toggleAccess = (id: number) => {
    setAccesses(prev => 
      prev.map(access => 
        access.id === id ? { ...access, active: !access.active } : access
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Inicio
        </Button>
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <Shield className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
            Tu Pasaporte de Salud Global
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Tus datos son tu activo más valioso. Llévalos contigo, compártelos al instante 
            y evita repetir radiografías innecesarias.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/wallet')}
            className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 h-auto"
          >
            Abrir mi Billetera de Salud
          </Button>
        </div>
      </section>

      {/* Soberanía de Datos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Gestor de Conexiones de Confianza</h2>
            <p className="text-lg text-slate-600">Concede o retira permisos en tiempo real. Tú eres el dueño único de la llave.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-green-600" />
                  Entidades Autorizadas
                </CardTitle>
                <CardDescription>
                  Activa o desactiva el acceso con un solo clic. Los cambios son inmediatos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accesses.map((access) => (
                    <div 
                      key={access.id}
                      className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                        access.active 
                          ? 'bg-green-50 border-green-300' 
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {access.active ? (
                          <Unlock className="h-6 w-6 text-green-600" />
                        ) : (
                          <Lock className="h-6 w-6 text-slate-400" />
                        )}
                        <div>
                          <p className="font-medium text-slate-900">{access.name}</p>
                          <p className="text-sm text-slate-600">
                            {access.active ? 'Acceso permitido' : 'Acceso revocado'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant={access.active ? "default" : "secondary"}
                          className={access.active ? "bg-green-600" : ""}
                        >
                          {access.active ? 'Activo' : 'Inactivo'}
                        </Badge>
                        <Switch
                          checked={access.active}
                          onCheckedChange={() => toggleAccess(access.id)}
                          className="data-[state=checked]:bg-green-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-900">
                    Al desactivar, la entidad pierde acceso instantáneamente. Tu privacidad es innegociable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visualización 3D */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explora tu Salud en 3D</h2>
            <p className="text-lg text-slate-600">Entiende mejor tu diagnóstico y lleva una réplica exacta de tu boca en el bolsillo.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-50 to-white">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-cyan-100 mb-6">
                    <Box className="h-16 w-16 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Tu Boca: Gemelo Digital Interactivo</h3>
                  <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                    Entiende mejor tu diagnóstico y lleva una réplica exacta de tu boca en el bolsillo.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mt-8">
                    <div className="p-4 bg-white rounded-lg border border-cyan-200">
                      <p className="text-3xl font-bold text-cyan-600 mb-2">360°</p>
                      <p className="text-sm text-slate-600">Vista Completa</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-cyan-200">
                      <p className="text-3xl font-bold text-cyan-600 mb-2">HD</p>
                      <p className="text-sm text-slate-600">Alta Resolución</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-cyan-200">
                      <p className="text-3xl font-bold text-cyan-600 mb-2">1-Click</p>
                      <p className="text-sm text-slate-600">Compartir Fácil</p>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="mt-8 bg-cyan-600 hover:bg-cyan-700"
                    onClick={() => navigate('/wallet')}
                  >
                    Ver Mi Escaneo 3D
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientPortal;
