import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileCheck, 
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  ArrowLeft,
  Shield,
  Zap,
  Stethoscope
} from 'lucide-react';

const InsurancePortal = () => {
  const navigate = useNavigate();
  const [claims, setClaims] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClaims = async () => {
      const { data } = await supabase
        .from('smart_claims')
        .select('*, patients(full_name)')
        .order('created_at', { ascending: false })
        .limit(5);
      
      setClaims(data || []);
      setLoading(false);
    };

    fetchClaims();
  }, []);

  const getStatusColor = (status: string) => {
    if (status === 'approved') return 'bg-green-100 text-green-700 border-green-300';
    if (status === 'pending') return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    if (status === 'rejected') return 'bg-red-100 text-red-700 border-red-300';
    return 'bg-slate-100 text-slate-700 border-slate-300';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-4 text-white hover:bg-slate-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Inicio
        </Button>
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-900/50 mb-6">
            <FileCheck className="h-10 w-10 text-cyan-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Smart Claims Automation Veterinario
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Validación clínica automática mediante Smart Contracts para seguros de mascotas
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/claims')}
            className="bg-cyan-600 hover:bg-cyan-700 text-lg px-8 py-6 h-auto"
          >
            Panel de Fraude
          </Button>
        </div>
      </section>

      {/* Auditoría en Vivo - Split Screen */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Auditoría en Vivo</h2>
            <p className="text-lg text-slate-300">Validación automática mediante Blockchain</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-slate-900 border-slate-700">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Lado Izquierdo - Factura */}
                  <div className="bg-slate-800 rounded-lg p-6 border-2 border-cyan-600">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-cyan-400" />
                      Factura Recibida
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-slate-400">Tratamiento</p>
                        <p className="text-xl font-bold text-white">Castración Canina</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Código</p>
                        <p className="text-lg font-medium text-cyan-400">VET-CST-001</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Importe</p>
                        <p className="text-2xl font-bold text-white">280€</p>
                      </div>
                      <Badge className="bg-yellow-600 text-white">
                        Pendiente de Validación
                      </Badge>
                    </div>
                  </div>

                  {/* Lado Derecho - Evidencia */}
                  <div className="bg-slate-800 rounded-lg p-6 border-2 border-green-600">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-400" />
                      Evidencia Blockchain
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-slate-400">Documentación</p>
                        <p className="text-lg font-medium text-white">✓ Radiografía Abdominal</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Trazabilidad</p>
                        <p className="text-lg font-medium text-white">✓ Log de Autoclave</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Hash Blockchain</p>
                        <p className="text-xs font-mono text-green-400">0xA3F2...8B9C</p>
                      </div>
                      <Badge className="bg-green-600 text-white">
                        Verificado
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Conector Central - Check Verde */}
                <div className="flex justify-center -mt-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-600 to-green-600 flex items-center justify-center animate-pulse">
                      <CheckCircle2 className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full">
                    <Zap className="h-5 w-5" />
                    <span className="font-semibold">Contrato Ejecutado en 0.5s</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prevención de Fraude */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Prevención de Fraude</h2>
            <p className="text-lg text-slate-300">Detección de anomalías mediante IA</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-red-900/20 border-red-600 border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                  Alerta de Fraude Detectada
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Anomalía estadística identificada por el sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 rounded-lg p-6 border border-red-700">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-white mb-2">
                        Clínica Veterinaria Sur - Desviación Detectada
                      </h4>
                      <p className="text-slate-300 mb-4">
                        Presenta una desviación estadística del <strong className="text-red-400">40%</strong> en 
                        cirugías de esterilización comparado con la media del sector
                      </p>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="bg-slate-800 p-3 rounded-lg">
                          <p className="text-sm text-slate-400">Cirugías/Mes</p>
                          <p className="text-2xl font-bold text-red-400">84</p>
                        </div>
                        <div className="bg-slate-800 p-3 rounded-lg">
                          <p className="text-sm text-slate-400">Media Sector</p>
                          <p className="text-2xl font-bold text-white">60</p>
                        </div>
                        <div className="bg-slate-800 p-3 rounded-lg">
                          <p className="text-sm text-slate-400">Desviación</p>
                          <p className="text-2xl font-bold text-red-400">+40%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button 
                    className="flex-1 bg-red-600 hover:bg-red-700"
                    onClick={() => navigate('/claims')}
                  >
                    Iniciar Auditoría Profunda
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-slate-600 text-slate-300 hover:bg-slate-800"
                  >
                    Generar Informe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Claims */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-6">Reclamaciones Recientes</h3>
              <div className="grid gap-4">
                {claims.slice(0, 3).map((claim) => (
                  <Card key={claim.id} className="bg-slate-900 border-slate-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-white">
                            {claim.patients?.full_name || 'Mascota Desconocida'}
                          </p>
                          <p className="text-sm text-slate-400">
                            {claim.treatment_code} - {claim.amount}€
                          </p>
                        </div>
                        <Badge className={getStatusColor(claim.status)}>
                          {claim.status === 'approved' ? 'Aprobado' : 
                           claim.status === 'pending' ? 'Pendiente' : 'Rechazado'}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsurancePortal;
