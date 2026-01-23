import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavigationControls } from '@/components/ui/NavigationControls';
import { GlobalFooter } from '@/components/ui/GlobalFooter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Package,
  Network,
  Factory,
  Users,
  Database,
  Stethoscope,
} from 'lucide-react';

const ProcurementPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Navigation Controls */}
      <div className="container mx-auto px-4 pt-6">
        <NavigationControls />
      </div>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 mb-6">
              <Package className="h-10 w-10 text-emerald-600" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-500">
              Central de Compras VetSpace-X
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Planificación y seguimiento de compras de material veterinario
              conectado al espacio de datos VetSpace-X y a los sistemas de
              cada clínica.
            </p>
            <p className="text-slate-600 mb-8">
              Agregamos el consumo real de las clínicas veterinarias, coordinamos pedidos
              con proveedores homologados y garantizamos trazabilidad y ahorro
              a nivel de grupo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/portal/supply')}
                className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6 h-auto"
              >
                Ver Central Predictiva
              </Button>
            </div>
          </div>
        </section>

        {/* Flujo de Compras: De la consulta al proveedor */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                De la consulta al proveedor
              </h2>
              <p className="text-lg text-slate-600">
                Conectamos la actividad clínica veterinaria, los sistemas de planificación
                y la central de compras en un único flujo coordinado.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
              <Card className="bg-white border-emerald-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                    <Stethoscope className="h-5 w-5 text-emerald-600" />
                    Consumo Clínico
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Tratamientos y protocolos consumen material en tiempo real
                    desde el cockpit clínico veterinario.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white border-emerald-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                    <Network className="h-5 w-5 text-emerald-600" />
                    Datos Federados
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    VetSpace-X agrega sólo los datos necesarios (consumo,
                    stock mínimo, caducidades) sin sacar la historia clínica.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white border-emerald-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                    <Database className="h-5 w-5 text-emerald-600" />
                    Plan de Compras
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    La central calcula necesidades por clínica, agrupa pedidos
                    y aplica reglas de stock y presupuesto.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white border-emerald-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-slate-900">
                    <Factory className="h-5 w-5 text-emerald-600" />
                    Proveedores Homologados
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Los pedidos se distribuyen entre proveedores homologados
                    con condiciones negociadas y trazabilidad de entrega.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Vistas por actor */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Una vista para cada actor
              </h2>
              <p className="text-lg text-slate-600">
                Clínicas veterinarias, central de compras y proveedores comparten un mismo
                lenguaje de datos, manteniendo la soberanía en cada nodo.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              <Card className="bg-white border-emerald-100">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">
                    Clínica Veterinaria
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Panel sencillo con stock actual, alertas de rotura,
                    pedidos pendientes y estado de entrega.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Alertas de stock por consulta / especie</li>
                    <li>• Seguimiento de pedidos y backorders</li>
                    <li>• Históricos de consumo por tratamiento</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">
                    Central de Compras
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Vista consolidada por grupo, clínica y proveedor con
                    previsiones de demanda.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Consumo agregado por familia de producto</li>
                    <li>• Planes de compra trimestrales</li>
                    <li>• Comparativa entre proveedores homologados</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-900">
                    Proveedor Homologado
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    Acceso a previsiones y pedidos firmes respetando la
                    confidencialidad clínica.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li>• Previsiones por categoría y territorio</li>
                    <li>• SLAs de entrega y niveles de servicio</li>
                    <li>• Integración con su propio ERP / logística</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
};

export default ProcurementPortal;
