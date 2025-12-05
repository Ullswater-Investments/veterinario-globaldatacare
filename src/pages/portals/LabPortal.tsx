import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { NavigationControls } from "@/components/ui/NavigationControls";
import { 
  Factory, 
  Package, 
  Thermometer, 
  QrCode,
  Clock,
  CheckCircle2
} from 'lucide-react';

const LabPortal = () => {
  const navigate = useNavigate();
  const [labOrders, setLabOrders] = useState<any[]>([]);
  const [iotDevices, setIotDevices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [ordersRes, devicesRes] = await Promise.all([
        supabase
          .from('lab_orders')
          .select('*, patients(full_name)')
          .order('created_at', { ascending: false }),
        supabase
          .from('iot_devices')
          .select('*')
          .limit(3)
      ]);
      
      setLabOrders(ordersRes.data || []);
      setIotDevices(devicesRes.data || []);
      setLoading(false);
    };

    fetchData();
  }, []);

  const getStatusColumn = (status: string) => {
    if (status === 'received') return 'Pendiente';
    if (status === 'in_progress') return 'En Proceso';
    if (status === 'completed') return 'Enviado';
    return 'Pendiente';
  };

  const getStatusColor = (status: string) => {
    if (status === 'received') return 'bg-slate-100 text-slate-700';
    if (status === 'in_progress') return 'bg-blue-100 text-blue-700';
    if (status === 'completed') return 'bg-green-100 text-green-700';
    return 'bg-slate-100 text-slate-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 pt-6">
        <NavigationControls />
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 mb-6">
            <Factory className="h-10 w-10 text-purple-600" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Centro de Excelencia Certificada
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Transforma el cumplimiento MDR en tu ventaja competitiva. 
            Trazabilidad automática y Pasaportes Digitales en cada envío.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/lab-hub')}
            className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 h-auto"
          >
            Gestionar Producción
          </Button>
        </div>
      </section>

      {/* Producción en Tiempo Real - Mini Kanban */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Flujo de Certificación Digital</h2>
            <p className="text-lg text-slate-600">Cada paso del proceso añade valor y garantías al Pasaporte del Producto (DPP).</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Columna Pendiente */}
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-slate-600" />
                  Pendiente
                </h3>
                <div className="space-y-3">
                  {labOrders
                    .filter(order => order.status === 'received')
                    .map(order => (
                      <Card key={order.id} className="border-slate-200">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <p className="text-sm font-medium">
                              {order.patients?.full_name || 'Paciente Desconocido'}
                            </p>
                            <QrCode className="h-4 w-4 text-purple-600" />
                          </div>
                          <Badge className="bg-purple-100 text-purple-700 border-purple-300 text-xs">
                            Calidad Certificada
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Columna En Proceso */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-blue-600" />
                  En Proceso
                </h3>
                <div className="space-y-3">
                  {labOrders
                    .filter(order => order.status === 'in_progress')
                    .map(order => (
                      <Card key={order.id} className="border-blue-200">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <p className="text-sm font-medium">
                              {order.patients?.full_name || 'Paciente Desconocido'}
                            </p>
                            <QrCode className="h-4 w-4 text-purple-600" />
                          </div>
                          <Badge className="bg-purple-100 text-purple-700 border-purple-300 text-xs">
                            Calidad Certificada
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Columna Enviado */}
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Enviado
                </h3>
                <div className="space-y-3">
                  {labOrders
                    .filter(order => order.status === 'completed')
                    .map(order => (
                      <Card key={order.id} className="border-green-200">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <p className="text-sm font-medium">
                              {order.patients?.full_name || 'Paciente Desconocido'}
                            </p>
                            <QrCode className="h-4 w-4 text-purple-600" />
                          </div>
                          <Badge className="bg-purple-100 text-purple-700 border-purple-300 text-xs">
                            Calidad Certificada
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IoT y Trazabilidad */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Auditoría de Proceso en Tiempo Real</h2>
            <p className="text-lg text-slate-600">Tus máquinas documentan la calidad por ti. Datos inmutables directo al DPP.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="h-6 w-6 text-orange-600" />
                  Validación Automática de Sinterizado
                </CardTitle>
                <CardDescription>Datos escritos automáticamente en el Pasaporte Digital (DPP)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-6 border-2 border-orange-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-6xl font-bold text-orange-600 mb-2">1500°C</div>
                      <p className="text-slate-600 font-medium">Temperatura Actual</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-700 border-green-300 mb-2">
                        En Operación
                      </Badge>
                      <p className="text-sm text-slate-600">
                        Sinterizando Lote <strong className="text-slate-900">#9988</strong>
                      </p>
                      <p className="text-xs text-slate-500 mt-1">Tiempo restante: 45 min</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-slate-900">98.5%</p>
                    <p className="text-sm text-slate-600">Eficiencia</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-slate-900">24/7</p>
                    <p className="text-sm text-slate-600">Disponibilidad</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-slate-900">142</p>
                    <p className="text-sm text-slate-600">Lotes/Mes</p>
                  </div>
                </div>

                <p className="mt-4 text-slate-600">Escribiendo parámetros en Blockchain...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabPortal;
