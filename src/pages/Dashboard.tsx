import { useRole } from '@/contexts/RoleContext';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Stethoscope, Factory, FlaskConical, CreditCard, Wallet, Activity, Shield, Package, Brain, FileText, Wifi, Beaker } from 'lucide-react';

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
        <Link to="/tech/fhir" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-blue-400 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Activity className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Interoperabilidad FHIR</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Datos clínicos unificados de múltiples fuentes
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/tech/identity" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-green-400 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-base">Identidad Descentralizada</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Wallets con control total del paciente (DID)
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/tech/dpp" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-amber-400 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Package className="h-5 w-5 text-amber-600" />
                </div>
                <CardTitle className="text-base">Pasaporte Digital (DPP)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Trazabilidad blockchain para productos dentales
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/tech/federated" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-purple-400 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Brain className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-base">Federated Learning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Investigación distribuida sin comprometer privacidad
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/tech/contracts" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-cyan-400 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <FileText className="h-5 w-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Smart Contracts</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Automatización de pagos y detección de fraude
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/tech/iot" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-teal-400 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <Wifi className="h-5 w-5 text-teal-600" />
                </div>
                <CardTitle className="text-base">IoT Integrado</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Monitoreo en tiempo real de equipos y stock
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/tech/labs" className="block transition-transform hover:scale-105">
          <Card className="h-full hover:border-purple-400 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Beaker className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-base">OralSpace-X Labs (Beta)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                Casos de uso experimentales del futuro de la plataforma
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Consulting CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl p-8 text-white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-3">¿Listo para implementar OralSpace-X en su red?</h2>
          <p className="text-slate-300 mb-6">
            Explore nuestra propuesta técnica completa con arquitectura, metodología de entrega y modelos de colaboración.
          </p>
          <Link to="/consulting/technical-proposal">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              <FileText className="h-5 w-5 mr-2" />
              Ver Technical Whitepaper
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
