import { useRole } from '@/contexts/RoleContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Factory, FlaskConical, CreditCard, Wallet } from 'lucide-react';

const roleGreetings = {
  doctor: {
    title: '¡Bienvenido, Doctor!',
    description: 'Accede a tu cockpit clínico y herramientas de diagnóstico',
    icon: Stethoscope,
  },
  lab_tech: {
    title: '¡Bienvenido al Laboratorio!',
    description: 'Gestiona órdenes de manufactura e inventario IoT',
    icon: Factory,
  },
  researcher: {
    title: '¡Bienvenido, Investigador!',
    description: 'Explora datasets federados y análisis epidemiológicos',
    icon: FlaskConical,
  },
  insurance_admin: {
    title: '¡Bienvenido, Administrador!',
    description: 'Gestiona reclamaciones y detección de fraude',
    icon: CreditCard,
  },
  patient: {
    title: '¡Bienvenido!',
    description: 'Gestiona tu identidad digital y consentimientos',
    icon: Wallet,
  },
  auditor: {
    title: 'Panel de Auditoría',
    description: 'Vista completa del ecosistema con datos sintéticos',
    icon: Stethoscope,
  },
};

export default function Dashboard() {
  const { currentRole } = useRole();

  const greeting = currentRole ? roleGreetings[currentRole] : null;
  const Icon = greeting?.icon;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 mt-1">OralSpace-X - Plataforma de Salud Digital Dental</p>
      </div>

      {greeting && Icon && (
        <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Icon className="h-6 w-6 text-white" />
              </div>
              {greeting.title}
            </CardTitle>
            <CardDescription className="text-base">
              {greeting.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Usa la barra lateral para navegar entre las diferentes secciones de la plataforma.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Interoperabilidad FHIR</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Datos clínicos unificados de múltiples fuentes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Identidad Descentralizada</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Wallets con control total del paciente (DID)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Pasaporte Digital (DPP)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Trazabilidad blockchain para productos dentales
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Federated Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Investigación distribuida sin comprometer privacidad
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Smart Contracts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Automatización de pagos y detección de fraude
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">IoT Integrado</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Monitoreo en tiempo real de equipos y stock
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
